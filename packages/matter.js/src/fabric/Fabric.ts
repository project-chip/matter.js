/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import {
    CertificateManager,
    TlvIntermediateCertificate,
    TlvOperationalCertificate,
    TlvRootCertificate,
} from "../certificate/CertificateManager.js";
import { Cluster } from "../cluster/Cluster.js";
import { InternalError, MatterError, MatterFlowError } from "../common/MatterError.js";
import { Crypto } from "../crypto/Crypto.js";
import { BinaryKeyPair, Key, PrivateKey } from "../crypto/Key.js";
import { CaseAuthenticatedTag } from "../datatype/CaseAuthenticatedTag.js";
import { FabricId } from "../datatype/FabricId.js";
import { FabricIndex } from "../datatype/FabricIndex.js";
import { NodeId } from "../datatype/NodeId.js";
import { VendorId } from "../datatype/VendorId.js";
import { Logger } from "../log/Logger.js";
import { SecureSession } from "../session/SecureSession.js";
import { SupportedStorageTypes } from "../storage/StringifyTools.js";
import { ByteArray, Endian } from "../util/ByteArray.js";
import { DataWriter } from "../util/DataWriter.js";
import { MaybePromise } from "../util/Promises.js";

const logger = Logger.get("Fabric");

const COMPRESSED_FABRIC_ID_INFO = ByteArray.fromString("CompressedFabric");
const GROUP_SECURITY_INFO = ByteArray.fromString("GroupKey v1.0");

export class PublicKeyError extends MatterError {}

export type FabricJsonObject = {
    fabricIndex: FabricIndex;
    fabricId: FabricId;
    nodeId: NodeId;
    rootNodeId: NodeId;
    operationalId: ByteArray;
    rootPublicKey: ByteArray;
    keyPair: BinaryKeyPair;
    rootVendorId: VendorId;
    rootCert: ByteArray;
    identityProtectionKey: ByteArray;
    operationalIdentityProtectionKey: ByteArray;
    intermediateCACert: ByteArray | undefined;
    operationalCert: ByteArray;
    label: string;
    caseAuthenticatedTags?: CaseAuthenticatedTag[];
    scopedClusterData: Map<number, Map<string, SupportedStorageTypes>>;
};

export type ExposedFabricInformation = {
    fabricIndex: FabricIndex;
    fabricId: FabricId;
    nodeId: NodeId;
    rootNodeId: NodeId;
    rootVendorId: VendorId;
    label: string;
};

export class Fabric {
    readonly #sessions = new Array<SecureSession<any>>();
    readonly #scopedClusterData: Map<number, any>;

    readonly #keyPair: Key;

    #removeCallbacks = new Array<() => MaybePromise<void>>();
    #persistCallback: ((isUpdate?: boolean) => MaybePromise<void>) | undefined;

    constructor(
        readonly fabricIndex: FabricIndex,
        readonly fabricId: FabricId,
        readonly nodeId: NodeId,
        readonly rootNodeId: NodeId,
        readonly operationalId: ByteArray,
        readonly rootPublicKey: ByteArray,
        keyPair: Key,
        readonly rootVendorId: VendorId,
        readonly rootCert: ByteArray,
        readonly identityProtectionKey: ByteArray,
        readonly operationalIdentityProtectionKey: ByteArray,
        readonly intermediateCACert: ByteArray | undefined,
        readonly operationalCert: ByteArray,
        public label: string,
        readonly caseAuthenticatedTags = new Array<CaseAuthenticatedTag>(),
        scopedClusterData?: Map<number, Map<string, SupportedStorageTypes>>,
    ) {
        this.#keyPair = keyPair;
        this.#scopedClusterData = scopedClusterData ?? new Map<number, Map<string, SupportedStorageTypes>>();
    }

    toStorageObject(): FabricJsonObject {
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
            label: this.label,
            caseAuthenticatedTags: this.caseAuthenticatedTags,
            scopedClusterData: this.#scopedClusterData,
        };
    }

    static createFromStorageObject(fabricObject: FabricJsonObject): Fabric {
        return new Fabric(
            fabricObject.fabricIndex,
            fabricObject.fabricId,
            fabricObject.nodeId,
            fabricObject.rootNodeId,
            fabricObject.operationalId,
            fabricObject.rootPublicKey,
            PrivateKey(fabricObject.keyPair),
            fabricObject.rootVendorId,
            fabricObject.rootCert,
            fabricObject.identityProtectionKey,
            fabricObject.operationalIdentityProtectionKey,
            fabricObject.intermediateCACert,
            fabricObject.operationalCert,
            fabricObject.label,
            fabricObject.caseAuthenticatedTags,
            fabricObject.scopedClusterData,
        );
    }

    async setLabel(label: string) {
        this.label = label;
        await this.persist();
    }

    get publicKey() {
        return this.#keyPair.publicKey;
    }

    sign(data: ByteArray) {
        return Crypto.sign(this.#keyPair, data);
    }

    verifyCredentials(operationalCert: ByteArray, intermediateCACert?: ByteArray) {
        if (intermediateCACert === undefined) {
            // Validate NOC Certificate against Root Certificate
            CertificateManager.verifyNodeOperationalCertificate(
                TlvRootCertificate.decode(this.rootCert),
                TlvOperationalCertificate.decode(operationalCert),
            );
        } else {
            const decodedIcaCert = TlvIntermediateCertificate.decode(intermediateCACert);
            // Validate NOC Certificate against ICA Certificate
            CertificateManager.verifyNodeOperationalCertificate(
                decodedIcaCert,
                TlvOperationalCertificate.decode(operationalCert),
            );

            // Validate ICACertificate against Root Certificate
            CertificateManager.verifyIntermediateCaCertificate(
                TlvRootCertificate.decode(this.rootCert),
                decodedIcaCert,
            );
        }
    }

    matchesFabricIdAndRootPublicKey(fabricId: FabricId, rootPublicKey: ByteArray) {
        return this.fabricId === fabricId && this.rootPublicKey?.equals(rootPublicKey);
    }

    matchesKeyPair(keyPair: Key) {
        return this.#keyPair.publicKey.equals(keyPair.publicKey) && this.#keyPair.privateKey.equals(keyPair.privateKey);
    }

    getDestinationId(nodeId: NodeId, random: ByteArray) {
        const writer = new DataWriter(Endian.Little);
        writer.writeByteArray(random);
        writer.writeByteArray(this.rootPublicKey);
        writer.writeUInt64(this.fabricId);
        writer.writeUInt64(nodeId);
        return Crypto.hmac(this.operationalIdentityProtectionKey, writer.toByteArray());
    }

    addSession(session: SecureSession<any>) {
        this.#sessions.push(session);
    }

    removeSession(session: SecureSession<any>) {
        const index = this.#sessions.indexOf(session);
        if (index >= 0) {
            this.#sessions.splice(index, 1);
        }
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
        return dataMap.get(clusterDataKey);
    }

    setScopedClusterDataValue<T>(cluster: Cluster<any, any, any, any, any>, clusterDataKey: string, value: T) {
        if (!this.#scopedClusterData.has(cluster.id)) {
            this.#scopedClusterData.set(cluster.id, new Map<string, SupportedStorageTypes>());
        }
        this.#scopedClusterData.get(cluster.id).set(clusterDataKey, value);
        return this.persist(false);
    }

    deleteScopedClusterDataValue(cluster: Cluster<any, any, any, any, any>, clusterDataKey: string) {
        if (!this.#scopedClusterData.has(cluster.id)) {
            return;
        }
        this.#scopedClusterData.get(cluster.id).delete(clusterDataKey);
        return this.persist(false);
    }

    hasScopedClusterDataValue(cluster: Cluster<any, any, any, any, any>, clusterDataKey: string) {
        return this.#scopedClusterData.has(cluster.id) && this.#scopedClusterData.get(cluster.id).has(clusterDataKey);
    }

    deleteScopedClusterData(cluster: Cluster<any, any, any, any, any>) {
        this.#scopedClusterData.delete(cluster.id);
        return this.persist(false);
    }

    getScopedClusterDataKeys(cluster: Cluster<any, any, any, any, any>): string[] {
        if (!this.#scopedClusterData.has(cluster.id)) {
            return [];
        }
        return Array.from(this.#scopedClusterData.get(cluster.id).keys());
    }

    get externalInformation(): ExposedFabricInformation {
        return {
            fabricIndex: this.fabricIndex,
            fabricId: this.fabricId,
            nodeId: this.nodeId,
            rootNodeId: this.rootNodeId,
            rootVendorId: this.rootVendorId,
            label: this.label,
        };
    }
}

export class FabricBuilder {
    #keyPair = Crypto.createKeyPair();
    #rootVendorId?: VendorId;
    #rootCert?: ByteArray;
    #intermediateCACert?: ByteArray;
    #operationalCert?: ByteArray;
    #fabricId?: FabricId;
    #nodeId?: NodeId;
    #rootNodeId?: NodeId;
    #rootPublicKey?: ByteArray;
    #identityProtectionKey?: ByteArray;
    #fabricIndex?: FabricIndex;
    #label = "";
    #caseAuthenticatedTags = new Array<CaseAuthenticatedTag>();

    get publicKey() {
        return this.#keyPair.publicKey;
    }

    get fabricIndex() {
        return this.#fabricIndex;
    }

    createCertificateSigningRequest() {
        return CertificateManager.createCertificateSigningRequest(this.#keyPair);
    }

    setRootCert(rootCert: ByteArray) {
        const decodedRootCertificate = TlvRootCertificate.decode(rootCert);
        this.#rootCert = rootCert;
        this.#rootPublicKey = decodedRootCertificate.ellipticCurvePublicKey;
        return this;
    }

    hasRootCert() {
        return this.#rootCert !== undefined;
    }

    setOperationalCert(operationalCert: ByteArray, intermediateCACert?: ByteArray) {
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

        if (!ellipticCurvePublicKey.equals(this.#keyPair.publicKey)) {
            throw new PublicKeyError("Operational Certificate does not match public key.");
        }

        if (this.#rootCert === undefined) {
            throw new MatterFlowError("Root Certificate needs to be set first.");
        }

        if (intermediateCACert !== undefined) {
            const decodedIntermediateCACert = TlvIntermediateCertificate.decode(intermediateCACert);
            CertificateManager.verifyIntermediateCaCertificate(
                TlvRootCertificate.decode(this.#rootCert),
                decodedIntermediateCACert,
            );
            CertificateManager.verifyNodeOperationalCertificate(
                decodedIntermediateCACert,
                TlvOperationalCertificate.decode(operationalCert),
            );
        } else {
            CertificateManager.verifyNodeOperationalCertificate(
                TlvRootCertificate.decode(this.#rootCert),
                TlvOperationalCertificate.decode(operationalCert),
            );
        }

        this.#operationalCert = operationalCert;
        this.#intermediateCACert = intermediateCACert;
        this.#fabricId = FabricId(fabricId);
        this.#nodeId = nodeId;
        if (caseAuthenticatedTags !== undefined) {
            CaseAuthenticatedTag.validateNocTagList(caseAuthenticatedTags);
            this.#caseAuthenticatedTags = caseAuthenticatedTags;
        }
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

    setIdentityProtectionKey(key: ByteArray) {
        this.#identityProtectionKey = key;
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

        return new Fabric(
            this.#fabricIndex,
            this.#fabricId,
            this.#nodeId,
            this.#rootNodeId,
            operationalId,
            this.#rootPublicKey,
            this.#keyPair,
            this.#rootVendorId,
            this.#rootCert,
            this.#identityProtectionKey,
            await Crypto.hkdf(this.#identityProtectionKey, operationalId, GROUP_SECURITY_INFO, 16),
            this.#intermediateCACert,
            this.#operationalCert,
            this.#label,
            this.#caseAuthenticatedTags,
        );
    }
}
