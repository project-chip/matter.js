/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { Fabric } from "#fabric/Fabric.js";
import {
    BasicMap,
    Bytes,
    Crypto,
    DataReader,
    DataWriter,
    ImplementationError,
    InternalError,
    ipv6BytesToString,
    MatterFlowError,
    StorageContext,
    Time,
} from "#general";
import { GroupKeySet, OperationalGroupKeySet } from "#groups/OperationalGroupKeySet.js";
import { PersistedMessageCounter } from "#protocol/MessageCounter.js";
import { MessageReceptionStateEncryptedWithRollover } from "#protocol/MessageReceptionState.js";
import { EndpointNumber, GroupId, NodeId } from "#types";

export const GROUP_SECURITY_INFO = Bytes.fromString("GroupKey v1.0");
export const GROUP_KEY_INFO = Bytes.fromString("GroupKeyHash");

/**
 * Class that contains an operational view on the Group Keys for a fabric
 */
export class FabricGroupsManager {
    #storage?: StorageContext;
    #fabric: Fabric;

    /**
     * Message counter for sending data messages to a group per Operational key. No need to scope to a source node
     * because we are the sending node
     */
    readonly #groupDataCounters = new Map<string, PersistedMessageCounter>();

    /** Message reception state for data messages per Operational key and source node. */
    readonly #messageDataReceptionState = new Map<string, Map<NodeId, MessageReceptionStateEncryptedWithRollover>>();

    /** Operationally enhanced variant of the group key sets based on their ID. */
    readonly #groupKeySets = new Map<number, OperationalGroupKeySet>();

    /** Operational enhanced structure for fast access based on the group session id. */
    readonly #keySessionIds = new Map<number, { keySetId: number; key: Uint8Array }[]>();

    /** Operational variant of the group key map attribute from Group Key Management cluster, maps group Ids to key sets. */
    readonly #groupKeyIdMap = new BasicMap<GroupId, number>();

    /** Operational variant of the group table, maps group Ids to a list of enabled endpoints. */
    readonly groupEndpoints = new Map<GroupId, EndpointNumber[]>();

    constructor(fabric: Fabric, storage?: StorageContext) {
        this.#fabric = fabric;

        // KeySet with ID 0 is always the Fabric IPK, so we initialize from there because this is not stored
        // in Key Management Cluster
        this.#groupKeySets.set(0, {
            groupKeySetId: 0,
            epochKey0: fabric.identityProtectionKey,
            operationalEpochKey0: fabric.operationalIdentityProtectionKey,
            epochStartTime0: 0, // 0 is always ok, but only for the IPK key
            groupSessionId0: null,
            epochKey1: null,
            operationalEpochKey1: null,
            epochStartTime1: null,
            groupSessionId1: null,
            epochKey2: null,
            operationalEpochKey2: null,
            epochStartTime2: null,
            groupSessionId2: null,
            groupKeySecurityPolicy: 0, // GroupKeyManagement.GroupKeySecurityPolicy.TrustFirst, the other option is provisional
            groupKeyMulticastPolicy: 0, // GroupKeyManagement.GroupKeyMulticastPolicy.PerGroupId, provisional!
        });
        if (storage !== undefined) {
            this.storage = storage;
        }
    }

    set storage(storage: StorageContext) {
        if (this.#storage !== undefined) {
            throw new InternalError("Storage context can only be set once.");
        }
        this.#storage = storage;
    }

    /** Operative lookup of the group key set id and the key by a group session Id. */
    get groupKeyBySessionId() {
        return this.#keySessionIds;
    }

    /** Operative lookup of the group key sets by a group id and to react on added removed groups. */
    get groupKeyIdMap(): BasicMap<GroupId, number> {
        return this.#groupKeyIdMap;
    }

    /** Updates the group key id map when changed in Group Key Management Cluster. Only changes are taken over. */
    set groupKeyIdMap(map: Map<GroupId, number>) {
        for (const [groupId, keySetId] of map.entries()) {
            this.#groupKeyIdMap.set(groupId, keySetId);
        }
        for (const groupId of this.#groupKeyIdMap.keys()) {
            if (!map.has(groupId)) {
                // If the groupId is not in the new map, we remove it from the groupKeyIdMap
                this.#groupKeyIdMap.delete(groupId);
            }
        }
    }

    /** Returns the multicast address for a given group id for this fabric. */
    multicastAddressFor(groupId: GroupId) {
        GroupId.assertGroupId(groupId);

        // If GroupKeyMulticastPolicy ever becomes non-provisional then we need to adjust logic here, but so far we
        // just use the default which is PerGroupId, which means we use the GroupId to create the multicast address.

        const writer = new DataWriter();
        writer.writeUInt16(0xff35);
        writer.writeUInt16(0x0040);
        writer.writeUInt8(0xfd);
        writer.writeUInt64(this.#fabric.fabricId);
        writer.writeUInt8(0x00);
        writer.writeUInt16(GroupId(groupId));
        return ipv6BytesToString(writer.toByteArray());
    }

    /*
    TODO for Controller to generate new epochs
    addGroupEpoch(groupKeySetId: number, startTimeMs = Time.nowMs()) {
        // TODO for Controller to generate new epochs
        const epochKey = Crypto.getRandomData(CRYPTO_SYMMETRIC_KEY_LENGTH);
        const operationalEpochKey = Crypto.hkdf(epochKey, this.#fabric.operationalId, GROUP_SECURITY_INFO);
        const epochStartTime = startTimeMs * 1000;
        logger.debug(`addGroupEpoch: epochStartTime=${epochStartTime}`, operationalEpochKey);
        // TODO extend in structure and such
    }
    */

    /**
     * Return an operative list of operational keys, start time and their session IDs for a specified
     * group key set id. This is mainly used for receiving messages.
     */
    allKeysForKeySet(keySetId: number) {
        const groupKeySet = this.#groupKeySets.get(keySetId);
        if (groupKeySet === undefined) {
            throw new MatterFlowError(`GroupKeySet for groupKeySet ${keySetId} not found.`);
        }
        const operationalKeys = Array<{ key: Uint8Array; sessionId?: number; startTime: number | bigint }>();
        const {
            operationalEpochKey0,
            groupSessionId0,
            epochStartTime0,
            operationalEpochKey1,
            groupSessionId1,
            epochStartTime1,
            operationalEpochKey2,
            groupSessionId2,
            epochStartTime2,
        } = groupKeySet;
        if (operationalEpochKey0 === null || epochStartTime0 === null || (keySetId !== 0 && groupSessionId0 === null)) {
            // should never happen, but just in case
            throw new MatterFlowError(`EpochKey0 for groupKeySet ${keySetId} not found.`);
        }
        operationalKeys.push({
            key: operationalEpochKey0,
            sessionId: groupSessionId0 !== null ? groupSessionId0 : undefined,
            startTime: epochStartTime0,
        });
        if (operationalEpochKey1 !== null && groupSessionId1 !== null && epochStartTime1 !== null) {
            operationalKeys.push({ key: operationalEpochKey1, sessionId: groupSessionId1, startTime: epochStartTime1 });
        }
        if (operationalEpochKey2 !== null && groupSessionId2 !== null && epochStartTime2 !== null) {
            operationalKeys.push({ key: operationalEpochKey2, sessionId: groupSessionId2, startTime: epochStartTime2 });
        }
        return operationalKeys;
    }

    /**
     * Returns the current operational group key for a given group KeySet Id and returns the keys, start time and
     * their session IDs. This is mainly used for sending messages.
     */
    currentKeyForKeySet(keySetId: number) {
        const operationalKeys = this.allKeysForKeySet(keySetId);
        if (operationalKeys.length === 0) {
            throw new MatterFlowError(`No operational keys found for groupKeySet ${keySetId}.`);
        }
        if (keySetId === 0) {
            // Groups: For the generation of the Destination Identifier, the originator SHALL use the operational group key with
            // the second newest EpochStartTime, if one exists, otherwise it SHALL use the single operational group key available.
            // @see {@link MatterSpecification.v14.Core} § 4.14.2.6.
            if (operationalKeys.length > 2) {
                return operationalKeys[1];
            }
            return operationalKeys[0];
        } else {
            // Nodes sending group messages SHALL use operational group keys that are derived from the current
            // epoch key (specifically, the epoch key with the latest start time that is not in the future).
            // TODO Nodes that cannot reliably keep track of time calculate the current epoch key as described in
            //  Section 4.17.3.4, “Epoch Key Rotation without Time Synchronization”.
            const now = Time.nowUs();
            const relevantKeys = operationalKeys.filter(({ startTime }) => startTime <= now);
            if (relevantKeys.length === 0) {
                throw new ImplementationError(
                    `No operational keys found for groupKeySet ${keySetId} that are not in the future.`,
                );
            }
            return relevantKeys[operationalKeys.length - 1];
        }
    }

    /**
     * Returns the current operational group key for a given group id and returns the keys, start time and
     * their session IDs.
     */
    currentKeyForGroup(groupId: GroupId) {
        const keySetId = this.#groupKeyIdMap.get(groupId);
        if (keySetId === undefined) {
            throw new ImplementationError(`No group key set found for groupId ${groupId}.`);
        }
        return { ...this.currentKeyForKeySet(keySetId), keySetId };
    }

    /**
     * Return the message counter for sending messages to a group with the given operational key.
     */
    messageCounterFor(operationalKey: Uint8Array) {
        if (!this.#storage) {
            throw new ImplementationError("Group session cannot be created without storage context.");
        }
        const operationalKeyHex = Bytes.toHex(operationalKey);
        let counter = this.#groupDataCounters.get(operationalKeyHex);
        if (counter === undefined) {
            counter = new PersistedMessageCounter(this.#storage, `${operationalKeyHex}-data`);
            this.#groupDataCounters.set(operationalKeyHex, counter);
        }
        return counter;
    }

    /**
     * Returns the message reception state for a given source node id and operational key.
     */
    receptionStateFor(sourceNodeId: NodeId, operationalKey: Uint8Array) {
        const operationalKeyHex = Bytes.toHex(operationalKey);
        let receptionState = this.#messageDataReceptionState.get(operationalKeyHex)?.get(sourceNodeId);
        if (receptionState === undefined) {
            receptionState = new MessageReceptionStateEncryptedWithRollover();
            const keyMap = this.#messageDataReceptionState.get(operationalKeyHex) ?? new Map();
            keyMap.set(sourceNodeId, receptionState);
            this.#messageDataReceptionState.set(operationalKeyHex, keyMap);
        }
        return receptionState;
    }

    /**
     * Returns the group key set for a given group key set id in the official data format from the Group key Management
     * cluster.
     */
    groupKeySet(groupKeySetId: number) {
        const groupSet = this.#groupKeySets.get(groupKeySetId);
        if (groupSet === undefined) {
            return undefined;
        }
        return OperationalGroupKeySet.asGroupSet(groupSet);
    }

    /** Calculates a group session id based on the operational group key. */
    async #calculateGroupSessionId(operationalGroupKey: Uint8Array) {
        // GroupKeyHash is an array of 2 bytes (16 bits) per Crypto_KDF
        const groupKeyHash = await Crypto.hkdf(operationalGroupKey, new Uint8Array(), GROUP_KEY_INFO, 2);

        // GroupSessionId is computed by considering the GroupKeyHash as a Big-Endian value. GroupSessionId is a scalar.
        // Its use in fields within messages may cause a re-serialization into a different byte order than the one used
        // for initial generation.
        return new DataReader(groupKeyHash).readUInt16();
    }

    /**
     * Sets new group key set data and pre-calculates all operative data like session ids and operational keys.
     * Overwriting the existing one if it exists.
     */
    async setGroupKeySet(groupKeySet: GroupKeySet) {
        const { groupKeySetId, epochKey0, epochKey1, epochKey2 } = groupKeySet;

        // Clean up the counters and data from old keys, will be initialized again on next use
        await this.#cleanUpCounters(groupKeySetId);

        if (epochKey0 === null) {
            throw new MatterFlowError("EpochKey0 must be set"); // checked before, but to make typing happy
        }

        // Lets pre-calculate the operational keys
        const operationalEpochKey0 = await Crypto.hkdf(epochKey0, this.#fabric.operationalId, GROUP_SECURITY_INFO);
        const operationalEpochKey1 =
            epochKey1 !== null ? await Crypto.hkdf(epochKey1, this.#fabric.operationalId, GROUP_SECURITY_INFO) : null;
        const operationalEpochKey2 =
            epochKey2 !== null ? await Crypto.hkdf(epochKey2, this.#fabric.operationalId, GROUP_SECURITY_INFO) : null;
        this.#groupKeySets.set(groupKeySetId, {
            ...groupKeySet,
            operationalEpochKey0,
            groupSessionId0: await this.#calculateGroupSessionId(operationalEpochKey0),
            operationalEpochKey1,
            groupSessionId1:
                operationalEpochKey1 !== null ? await this.#calculateGroupSessionId(operationalEpochKey1) : null,
            operationalEpochKey2,
            groupSessionId2:
                operationalEpochKey2 !== null ? await this.#calculateGroupSessionId(operationalEpochKey2) : null,
        });
        this.#updateGroupSessionMap();
    }

    /**
     * Updates the group session map based on the current group key sets.
     * This is used to quickly find the operational keys by their group session id.
     */
    #updateGroupSessionMap() {
        this.#keySessionIds.clear();
        for (const [id, keySet] of this.#groupKeySets.entries()) {
            if (id === 0) {
                // Skip the default group key set (0), as it is not used for operational keys
                continue;
            }
            if (keySet.groupSessionId0 !== null) {
                const list = this.#keySessionIds.get(keySet.groupSessionId0) ?? [];
                list.push({ key: keySet.operationalEpochKey0, keySetId: id });
                this.#keySessionIds.set(keySet.groupSessionId0, list);
            }
            if (keySet.groupSessionId1 !== null && keySet.operationalEpochKey1 !== null) {
                const list = this.#keySessionIds.get(keySet.groupSessionId1) ?? [];
                list.push({ key: keySet.operationalEpochKey1, keySetId: id });
                this.#keySessionIds.set(keySet.groupSessionId1, list);
            }
            if (keySet.groupSessionId2 !== null && keySet.operationalEpochKey2 !== null) {
                const list = this.#keySessionIds.get(keySet.groupSessionId2) ?? [];
                list.push({ key: keySet.operationalEpochKey2, keySetId: id });
                this.#keySessionIds.set(keySet.groupSessionId2, list);
            }
        }
    }

    /** Removes a group key set by its id and cleans up the counters and data. */
    async removeGroupKeySet(groupKeySetId: number) {
        if (groupKeySetId === 0) {
            throw new InternalError("Cannot remove the group key set 0.");
        }
        await this.#cleanUpCounters(groupKeySetId, true);
        const removed = this.#groupKeySets.delete(groupKeySetId);
        if (removed) {
            this.#updateGroupSessionMap();
        }
        return removed;
    }

    /** Cleans up the counters and data for a group key set by its id. */
    async #cleanUpCounters(groupKeySetId: number, forDelete = false) {
        if (!this.#groupKeySets.has(groupKeySetId)) {
            return;
        }

        // Clean up counters for the group key set
        const operationalKeys = this.allKeysForKeySet(groupKeySetId);
        for (const { key } of operationalKeys) {
            const operationalKeyHex = Bytes.toHex(key);
            this.#groupDataCounters.delete(operationalKeyHex);
            if (forDelete) {
                // If we are deleting the group key set, also delete the persisted counter values
                await this.#storage?.delete(`${operationalKeyHex}-data`);
            }
        }
    }
}
