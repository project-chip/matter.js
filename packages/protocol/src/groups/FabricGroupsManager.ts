/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { Fabric } from "#fabric/Fabric.js";
import { BasicMap, Bytes, Crypto, ImplementationError, InternalError, MatterFlowError, StorageContext } from "#general";
import { GroupKeySet, KeySets, OperationalKeySet } from "#groups/KeySets.js";
import { PersistedMessageCounter } from "#protocol/MessageCounter.js";
import { MessageReceptionStateEncryptedWithRollover } from "#protocol/MessageReceptionState.js";
import { GroupId, NodeId } from "#types";
import { Groups } from "./Groups.js";

export const GROUP_SECURITY_INFO = Bytes.fromString("GroupKey v1.0");

/**
 * Class that contains an operational view on the Group Keys for a fabric
 */
export class FabricGroupsManager {
    #storage?: StorageContext;
    #fabric: Fabric;
    #groups: Groups;

    /** Operationally enhanced variants of the group key sets based on their ID. */
    #keySets = new KeySets();

    /**
     * Message counter for sending data messages to a group per Operational key. No need to scope to a source node
     * because we are the sending node
     * TODO: For management: Make sure to start rotating the key early enough that a former counter-value is not used
     *  again for the same key.
     */
    readonly #groupDataCounters = new Map<string, PersistedMessageCounter>();

    /** Message reception state for data messages per Operational key and source node. */
    readonly #messageDataReceptionState = new Map<string, Map<NodeId, MessageReceptionStateEncryptedWithRollover>>();

    constructor(fabric: Fabric, storage?: StorageContext) {
        this.#fabric = fabric;
        this.#groups = new Groups(fabric, this.#keySets);

        // KeySet with ID 0 is always the Fabric IPK, so we initialize from there because this is not stored
        // in Key Management Cluster
        this.#keySets.add({
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

    /** Operative lookup of the group key sets by their id. */
    get keySets(): KeySets<OperationalKeySet> {
        return this.#keySets;
    }

    /** Operative lookup of the group key set id and the key by a group session Id. */
    get sessions() {
        return this.#keySets.sessions;
    }

    get groupKeyIdMap(): BasicMap<GroupId, number> {
        return this.#groups.idMap;
    }

    set groupKeyIdMap(map: Map<GroupId, number>) {
        this.#groups.idMap = map;
    }

    get endpoints() {
        return this.#groups.endpointMap;
    }

    currentKeyForGroup(groupId: GroupId) {
        return this.#groups.currentKeyForId(groupId);
    }

    subjectForGroup(id: GroupId, keySetId: number) {
        return this.#groups.subjectForGroup(id, keySetId);
    }

    multicastAddressFor(groupId: GroupId): string {
        return this.#groups.multicastAddress(groupId);
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
     * Sets new group key set data and pre-calculates all operative data like session ids and operational keys.
     * Overwriting the existing one if it exists.
     */
    async setFromGroupKeySet(groupKeySet: GroupKeySet) {
        const { groupKeySetId, epochKey0, epochKey1, epochKey2 } = groupKeySet;

        if (epochKey0 === null) {
            throw new MatterFlowError("EpochKey0 must be set"); // checked before, but to make typing happy
        }

        // Clean up the counters and data from old keys, will be initialized again on next use
        await this.#cleanUpCounters(groupKeySetId);

        // Lets pre-calculate the operational keys
        const operationalId = this.#fabric.operationalId;
        const operationalEpochKey0 = await Crypto.hkdf(epochKey0, operationalId, GROUP_SECURITY_INFO);
        const operationalEpochKey1 =
            epochKey1 !== null ? await Crypto.hkdf(epochKey1, operationalId, GROUP_SECURITY_INFO) : null;
        const operationalEpochKey2 =
            epochKey2 !== null ? await Crypto.hkdf(epochKey2, operationalId, GROUP_SECURITY_INFO) : null;
        this.#keySets.add({
            ...groupKeySet,
            operationalEpochKey0,
            groupSessionId0: await this.#keySets.sessionIdFromKey(operationalEpochKey0),
            operationalEpochKey1,
            groupSessionId1:
                operationalEpochKey1 !== null ? await this.#keySets.sessionIdFromKey(operationalEpochKey1) : null,
            operationalEpochKey2,
            groupSessionId2:
                operationalEpochKey2 !== null ? await this.#keySets.sessionIdFromKey(operationalEpochKey2) : null,
        });
    }

    /** Removes a group key set by its id and cleans up the counters and data. */
    async removeGroupKeySet(groupKeySetId: number) {
        if (groupKeySetId === 0) {
            throw new InternalError("Cannot remove the group key set 0.");
        }
        await this.#cleanUpCounters(groupKeySetId, true);
        return this.#keySets.delete("groupKeySetId", groupKeySetId);
    }

    /** Cleans up the counters and data for a group key set by its id. */
    async #cleanUpCounters(groupKeySetId: number, forDelete = false) {
        if (this.#keySets.forId(groupKeySetId) !== undefined) {
            return;
        }

        // Clean up counters for the group key set
        const operationalKeys = this.#keySets.allKeysForId(groupKeySetId);
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
