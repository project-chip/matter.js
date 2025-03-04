/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import {
    CertificateManager,
    TlvIntermediateCertificate,
    TlvOperationalCertificate,
    TlvRootCertificate,
} from "#certificate/CertificateManager.js";
import { GroupKeyManagement } from "#clusters/group-key-management";
import {
    BinaryKeyPair,
    Bytes,
    Crypto,
    DataWriter,
    Endian,
    ImplementationError,
    InternalError,
    Key,
    Logger,
    MatterError,
    MatterFlowError,
    MaybePromise,
    PrivateKey,
    SupportedStorageTypes,
} from "#general";
import { PeerAddress } from "#peer/PeerAddress.js";
import { CaseAuthenticatedTag, Cluster, FabricId, FabricIndex, NodeId, TypeFromSchema, VendorId } from "#types";
import { SecureSession } from "../session/SecureSession.js";

const logger = Logger.get("Fabric");

const COMPRESSED_FABRIC_ID_INFO = Bytes.fromString("CompressedFabric");
const GROUP_SECURITY_INFO = Bytes.fromString("GroupKey v1.0");

export class PublicKeyError extends MatterError {}

type OperationalGroupKeySet = TypeFromSchema<typeof GroupKeyManagement.TlvGroupKeySet> & {
    operationalEpochKey0: Uint8Array;
    groupSessionId0: number | null;
    operationalEpochKey1: Uint8Array | null;
    groupSessionId1: number | null;
    operationalEpochKey2: Uint8Array | null;
    groupSessionId2: number | null;
};

namespace OperationalGroupKeySet {
    export const asTlvGroupSet = (
        operationalGroupSet: OperationalGroupKeySet,
    ): TypeFromSchema<typeof GroupKeyManagement.TlvGroupKeySet> => {
        const {
            groupKeySetId,
            epochKey0,
            epochStartTime0,
            epochKey1,
            epochStartTime1,
            epochKey2,
            epochStartTime2,
            groupKeySecurityPolicy,
            groupKeyMulticastPolicy,
        } = operationalGroupSet;
        return {
            groupKeySetId,
            epochKey0,
            epochStartTime0,
            epochKey1,
            epochStartTime1,
            epochKey2,
            epochStartTime2,
            groupKeySecurityPolicy,
            groupKeyMulticastPolicy,
        };
    };
}

export type ExposedFabricInformation = {
    fabricIndex: FabricIndex;
    fabricId: FabricId;
    nodeId: NodeId;
    rootNodeId: NodeId;
    rootVendorId: VendorId;
    label: string;
};

export class Fabric {
    readonly fabricIndex: FabricIndex;
    readonly fabricId: FabricId;
    readonly nodeId: NodeId;
    readonly rootNodeId: NodeId;
    readonly operationalId: Uint8Array;
    readonly rootPublicKey: Uint8Array;
    readonly rootVendorId: VendorId;
    readonly rootCert: Uint8Array;
    readonly identityProtectionKey: Uint8Array;
    readonly operationalIdentityProtectionKey: Uint8Array;
    readonly intermediateCACert: Uint8Array | undefined;
    readonly operationalCert: Uint8Array;

    readonly #scopedClusterData: Fabric.ScopedClusterData;
    readonly #keyPair: Key;

    readonly #sessions = new Set<SecureSession>();

    #label: string;
    #removeCallbacks = new Array<() => MaybePromise<void>>();
    #persistCallback: ((isUpdate?: boolean) => MaybePromise<void>) | undefined;

    constructor(config: Fabric.Config) {
        this.fabricIndex = config.fabricIndex;
        this.fabricId = config.fabricId;
        this.nodeId = config.nodeId;
        this.rootNodeId = config.rootNodeId;
        this.operationalId = config.operationalId;
        this.rootPublicKey = config.rootPublicKey;
        this.rootVendorId = config.rootVendorId;
        this.rootCert = config.rootCert;
        this.identityProtectionKey = config.identityProtectionKey;
        this.operationalIdentityProtectionKey = config.operationalIdentityProtectionKey;
        this.intermediateCACert = config.intermediateCACert;
        this.operationalCert = config.operationalCert;
        this.#label = config.label;

        this.#keyPair = PrivateKey(config.keyPair);

        this.#scopedClusterData = config.scopedClusterData ?? new Map();
    }

    get config(): Fabric.Config {
        return {
            fabricIndex: this.fabricIndex,
            fabricId: this.fabricId,
            nodeId: this.nodeId,
            rootNodeId: this.rootNodeId,
            operationalId: this.operationalId,
            rootPublicKey: this.rootPublicKey,
            keyPair: this.#keyPair.keyPair,
            rootVendorId: this.rootVendorId,
            rootCert: this.rootCert,
            identityProtectionKey: this.identityProtectionKey,
            operationalIdentityProtectionKey: this.operationalIdentityProtectionKey,
            intermediateCACert: this.intermediateCACert,
            operationalCert: this.operationalCert,
            label: this.#label,
            scopedClusterData: this.#scopedClusterData,
        };
    }

    get label() {
        return this.#label;
    }

    async setLabel(label: string) {
        if (label.length === 0 || label.length > 32) {
            throw new ImplementationError("Fabric label must be between 1 and 32 characters long.");
        }
        if (this.#label === label) {
            return;
        }
        this.#label = label;
        await this.persist();
    }

    get publicKey() {
        return this.#keyPair.publicKey;
    }

    sign(data: Uint8Array) {
        return Crypto.sign(this.#keyPair, data);
    }

    verifyCredentials(operationalCert: Uint8Array, intermediateCACert?: Uint8Array) {
        const rootCert = TlvRootCertificate.decode(this.rootCert);
        const nocCert = TlvOperationalCertificate.decode(operationalCert);
        const icaCert =
            intermediateCACert !== undefined ? TlvIntermediateCertificate.decode(intermediateCACert) : undefined;
        if (icaCert !== undefined) {
            // Validate ICACertificate against Root Certificate
            CertificateManager.verifyIntermediateCaCertificate(rootCert, icaCert);
        }
        // Validate NOC Certificate against ICA Certificate
        CertificateManager.verifyNodeOperationalCertificate(nocCert, rootCert, icaCert);
    }

    matchesFabricIdAndRootPublicKey(fabricId: FabricId, rootPublicKey: Uint8Array) {
        return this.fabricId === fabricId && Bytes.areEqual(this.rootPublicKey, rootPublicKey);
    }

    matchesKeyPair(keyPair: Key) {
        return (
            Bytes.areEqual(this.#keyPair.publicKey, keyPair.publicKey) &&
            Bytes.areEqual(this.#keyPair.privateKey, keyPair.privateKey)
        );
    }

    getDestinationId(nodeId: NodeId, random: Uint8Array) {
        const writer = new DataWriter(Endian.Little);
        writer.writeByteArray(random);
        writer.writeByteArray(this.rootPublicKey);
        writer.writeUInt64(this.fabricId);
        writer.writeUInt64(nodeId);
        return Crypto.hmac(this.operationalIdentityProtectionKey, writer.toByteArray());
    }

    addSession(session: SecureSession) {
        this.#sessions.add(session);
    }

    removeSession(session: SecureSession) {
        this.#sessions.delete(session);
    }

    addRemoveCallback(callback: () => MaybePromise<void>) {
        this.#removeCallbacks.push(callback);
    }

    deleteRemoveCallback(callback: () => MaybePromise<void>) {
        const index = this.#removeCallbacks.indexOf(callback);
        if (index >= 0) {
            this.#removeCallbacks.splice(index, 1);
        }
    }

    set persistCallback(callback: (isUpdate?: boolean) => MaybePromise<void>) {
        // TODO Remove "isUpdate" parameter as soon as the fabric scoped data are removed from here/legacy API gets removed
        this.#persistCallback = callback;
    }

    async remove(currentSessionId?: number) {
        for (const callback of this.#removeCallbacks) {
            await callback();
        }
        for (const session of [...this.#sessions]) {
            await session.destroy(false, session.id === currentSessionId); // Delay Close for current session only
        }
    }

    persist(isUpdate = true) {
        return this.#persistCallback?.(isUpdate);
    }

    getScopedClusterDataValue<T>(cluster: Cluster<any, any, any, any, any>, clusterDataKey: string): T | undefined {
        const dataMap = this.#scopedClusterData.get(cluster.id);
        if (dataMap === undefined) {
            return undefined;
        }
        return dataMap.get(clusterDataKey) as T;
    }

    setScopedClusterDataValue<T>(cluster: Cluster<any, any, any, any, any>, clusterDataKey: string, value: T) {
        if (!this.#scopedClusterData.has(cluster.id)) {
            this.#scopedClusterData.set(cluster.id, new Map<string, SupportedStorageTypes>());
        }
        this.#scopedClusterData.get(cluster.id)!.set(clusterDataKey, value as SupportedStorageTypes);
        return this.persist(false);
    }

    deleteScopedClusterDataValue(cluster: Cluster<any, any, any, any, any>, clusterDataKey: string) {
        if (!this.#scopedClusterData.has(cluster.id)) {
            return;
        }
        this.#scopedClusterData.get(cluster.id)!.delete(clusterDataKey);
        return this.persist(false);
    }

    hasScopedClusterDataValue(cluster: Cluster<any, any, any, any, any>, clusterDataKey: string) {
        return this.#scopedClusterData.has(cluster.id) && this.#scopedClusterData.get(cluster.id)!.has(clusterDataKey);
    }

    deleteScopedClusterData(cluster: Cluster<any, any, any, any, any>) {
        this.#scopedClusterData.delete(cluster.id);
        return this.persist(false);
    }

    getScopedClusterDataKeys(cluster: Cluster<any, any, any, any, any>): string[] {
        if (!this.#scopedClusterData.has(cluster.id)) {
            return [];
        }
        return Array.from(this.#scopedClusterData.get(cluster.id)!.keys());
    }

    getGroupKeySet(groupKeySetId: number) {
        if (groupKeySetId === 0) {
            return OperationalGroupKeySet.asTlvGroupSet(this.getGroupSetForIpk());
        }
        // TODO add correct group handling later, right now only IPK exists
        return undefined;
    }

    private getGroupSetForIpk(): OperationalGroupKeySet {
        return {
            groupKeySetId: 0,
            epochKey0: this.identityProtectionKey,
            operationalEpochKey0: this.operationalIdentityProtectionKey,
            epochStartTime0: 0, // or do we need to track Fabric creation date?
            groupSessionId0: null,
            epochKey1: null,
            operationalEpochKey1: null,
            epochStartTime1: null,
            groupSessionId1: null,
            epochKey2: null,
            operationalEpochKey2: null,
            epochStartTime2: null,
            groupSessionId2: null,
            groupKeySecurityPolicy: GroupKeyManagement.GroupKeySecurityPolicy.TrustFirst,
            groupKeyMulticastPolicy: GroupKeyManagement.GroupKeyMulticastPolicy.PerGroupId,
        };
    }

    getAllGroupKeySets() {
        // TODO add correct group handling later, right now only IPK exists
        return [OperationalGroupKeySet.asTlvGroupSet(this.getGroupSetForIpk())];
    }

    get externalInformation(): ExposedFabricInformation {
        return {
            fabricIndex: this.fabricIndex,
            fabricId: this.fabricId,
            nodeId: this.nodeId,
            rootNodeId: this.rootNodeId,
            rootVendorId: this.rootVendorId,
            label: this.#label,
        };
    }

    addressOf(nodeId: NodeId) {
        return PeerAddress({ fabricIndex: this.fabricIndex, nodeId });
    }
}

export class FabricBuilder {
    #keyPair = Crypto.createKeyPair();
    #rootVendorId?: VendorId;
    #rootCert?: Uint8Array;
    #intermediateCACert?: Uint8Array;
    #operationalCert?: Uint8Array;
    #fabricId?: FabricId;
    #nodeId?: NodeId;
    #rootNodeId?: NodeId;
    #rootPublicKey?: Uint8Array;
    #identityProtectionKey?: Uint8Array;
    #fabricIndex?: FabricIndex;
    #label = "";

    get publicKey() {
        return this.#keyPair.publicKey;
    }

    get fabricIndex() {
        return this.#fabricIndex;
    }

    createCertificateSigningRequest() {
        return CertificateManager.createCertificateSigningRequest(this.#keyPair);
    }

    setRootCert(rootCert: Uint8Array) {
        const decodedRootCertificate = TlvRootCertificate.decode(rootCert);
        CertificateManager.verifyRootCertificate(decodedRootCertificate);
        this.#rootCert = rootCert;
        this.#rootPublicKey = decodedRootCertificate.ellipticCurvePublicKey;
        return this;
    }

    get rootCert() {
        return this.#rootCert;
    }

    setOperationalCert(operationalCert: Uint8Array, intermediateCACert?: Uint8Array) {
        if (intermediateCACert !== undefined && intermediateCACert.length === 0) {
            intermediateCACert = undefined;
        }
        const {
            subject: { nodeId, fabricId, caseAuthenticatedTags },
            ellipticCurvePublicKey,
        } = TlvOperationalCertificate.decode(operationalCert);
        logger.debug(
            `FabricBuilder setOperationalCert: nodeId=${nodeId}, fabricId=${fabricId}, caseAuthenticatedTags=${caseAuthenticatedTags}`,
        );
        if (caseAuthenticatedTags !== undefined) {
            CaseAuthenticatedTag.validateNocTagList(caseAuthenticatedTags);
        }

        if (!Bytes.areEqual(ellipticCurvePublicKey, this.#keyPair.publicKey)) {
            throw new PublicKeyError("Operational Certificate does not match public key.");
        }

        if (this.#rootCert === undefined) {
            throw new MatterFlowError("Root Certificate needs to be set first.");
        }

        const rootCert = TlvRootCertificate.decode(this.#rootCert);
        const nocCert = TlvOperationalCertificate.decode(operationalCert);
        const icaCert =
            intermediateCACert !== undefined ? TlvIntermediateCertificate.decode(intermediateCACert) : undefined;
        if (icaCert !== undefined) {
            CertificateManager.verifyIntermediateCaCertificate(rootCert, icaCert);
        }
        CertificateManager.verifyNodeOperationalCertificate(nocCert, rootCert, icaCert);

        this.#operationalCert = operationalCert;
        this.#intermediateCACert = intermediateCACert;
        this.#fabricId = FabricId(fabricId);
        this.#nodeId = nodeId;

        return this;
    }

    setRootVendorId(rootVendorId: VendorId) {
        this.#rootVendorId = rootVendorId;
        return this;
    }

    setRootNodeId(rootNodeId: NodeId) {
        this.#rootNodeId = rootNodeId;
        return this;
    }

    setIdentityProtectionKey(key: Uint8Array) {
        this.#identityProtectionKey = key;
        return this;
    }

    setLabel(label: string) {
        if (label.length === 0 || label.length > 32) {
            throw new ImplementationError("Fabric label must be between 1 and 32 characters long.");
        }
        this.#label = label;
        return this;
    }

    initializeFromFabricForUpdate(fabric: Fabric) {
        this.#rootVendorId = fabric.rootVendorId;
        this.#rootNodeId = fabric.rootNodeId;
        this.#identityProtectionKey = fabric.identityProtectionKey;
        this.#rootCert = fabric.rootCert;
        this.#rootPublicKey = fabric.rootPublicKey;
        this.#label = fabric.label;
    }

    matchesToFabric(fabric: Fabric) {
        if (this.#fabricId === undefined || this.#rootPublicKey === undefined) {
            throw new MatterFlowError("Node Operational Data needs to be set first.");
        }
        return fabric.matchesFabricIdAndRootPublicKey(this.#fabricId, this.#rootPublicKey);
    }

    get nodeId() {
        return this.#nodeId;
    }

    get fabricId() {
        return this.#fabricId;
    }

    get keyPair() {
        return this.#keyPair;
    }

    async build(fabricIndex: FabricIndex) {
        if (this.#fabricIndex !== undefined) throw new InternalError("FabricBuilder can only be built once");
        if (this.#rootNodeId === undefined) throw new InternalError("rootNodeId needs to be set");
        if (this.#rootVendorId === undefined) throw new InternalError("vendorId needs to be set");
        if (this.#rootCert === undefined || this.#rootPublicKey === undefined)
            throw new InternalError("rootCert needs to be set");
        if (this.#identityProtectionKey === undefined) throw new InternalError("identityProtectionKey needs to be set");
        if (this.#operationalCert === undefined || this.#fabricId === undefined || this.#nodeId === undefined)
            throw new InternalError("operationalCert needs to be set");

        this.#fabricIndex = fabricIndex;
        const saltWriter = new DataWriter(Endian.Big);
        saltWriter.writeUInt64(this.#fabricId);
        const operationalId = await Crypto.hkdf(
            this.#rootPublicKey.slice(1),
            saltWriter.toByteArray(),
            COMPRESSED_FABRIC_ID_INFO,
            8,
        );

        return new Fabric({
            fabricIndex: this.#fabricIndex,
            fabricId: this.#fabricId,
            nodeId: this.#nodeId,
            rootNodeId: this.#rootNodeId,
            operationalId: operationalId,
            rootPublicKey: this.#rootPublicKey,
            keyPair: this.#keyPair,
            rootVendorId: this.#rootVendorId,
            rootCert: this.#rootCert,
            identityProtectionKey: this.#identityProtectionKey, // Epoch Key
            operationalIdentityProtectionKey: await Crypto.hkdf(
                this.#identityProtectionKey,
                operationalId,
                GROUP_SECURITY_INFO,
            ),
            intermediateCACert: this.#intermediateCACert,
            operationalCert: this.#operationalCert,
            label: this.#label,
        });
    }
}

export namespace Fabric {
    export interface ScopedClusterData extends Map<number, Map<string, SupportedStorageTypes>> {}

    export type Config = {
        fabricIndex: FabricIndex;
        fabricId: FabricId;
        nodeId: NodeId;
        rootNodeId: NodeId;
        operationalId: Uint8Array;
        rootPublicKey: Uint8Array;
        keyPair: BinaryKeyPair;
        rootVendorId: VendorId;
        rootCert: Uint8Array;
        identityProtectionKey: Uint8Array;
        operationalIdentityProtectionKey: Uint8Array;
        intermediateCACert: Uint8Array | undefined;
        operationalCert: Uint8Array;
        label: string;
        scopedClusterData?: ScopedClusterData;
    };
}
