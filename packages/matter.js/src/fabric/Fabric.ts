/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import {
    CertificateManager,
    TlvOperationalCertificate,
    TlvRootCertificate,
} from "../certificate/CertificateManager.js";
import { Cluster } from "../cluster/Cluster.js";
import { InternalError } from "../common/MatterError.js";
import { Crypto } from "../crypto/Crypto.js";
import { BinaryKeyPair, Key, PrivateKey } from "../crypto/Key.js";
import { FabricId } from "../datatype/FabricId.js";
import { FabricIndex } from "../datatype/FabricIndex.js";
import { NodeId } from "../datatype/NodeId.js";
import { VendorId } from "../datatype/VendorId.js";
import { SecureSession } from "../session/SecureSession.js";
import { SupportedStorageTypes } from "../storage/StringifyTools.js";
import { ByteArray, Endian } from "../util/ByteArray.js";
import { DataWriter } from "../util/DataWriter.js";

const COMPRESSED_FABRIC_ID_INFO = ByteArray.fromString("CompressedFabric");
const GROUP_SECURITY_INFO = ByteArray.fromString("GroupKey v1.0");

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
    scopedClusterData: Map<number, Map<string, SupportedStorageTypes>>;
};

export class Fabric {
    private readonly sessions = new Array<SecureSession<any>>();

    private readonly scopedClusterData: Map<number, any>;

    private removeCallback: (() => void) | undefined;
    private persistCallback: (() => void) | undefined;

    constructor(
        readonly fabricIndex: FabricIndex,
        readonly fabricId: FabricId,
        readonly nodeId: NodeId,
        readonly rootNodeId: NodeId,
        readonly operationalId: ByteArray,
        readonly rootPublicKey: ByteArray,
        private readonly keyPair: Key,
        readonly rootVendorId: VendorId,
        readonly rootCert: ByteArray,
        readonly identityProtectionKey: ByteArray,
        readonly operationalIdentityProtectionKey: ByteArray,
        readonly intermediateCACert: ByteArray | undefined,
        readonly operationalCert: ByteArray,
        public label: string,
        scopedClusterData?: Map<number, Map<string, SupportedStorageTypes>>,
    ) {
        this.scopedClusterData = scopedClusterData ?? new Map<number, Map<string, SupportedStorageTypes>>();
    }

    toStorageObject(): FabricJsonObject {
        return {
            fabricIndex: this.fabricIndex,
            fabricId: this.fabricId,
            nodeId: this.nodeId,
            rootNodeId: this.rootNodeId,
            operationalId: this.operationalId,
            rootPublicKey: this.rootPublicKey,
            keyPair: this.keyPair.keyPair,
            rootVendorId: this.rootVendorId,
            rootCert: this.rootCert,
            identityProtectionKey: this.identityProtectionKey,
            operationalIdentityProtectionKey: this.operationalIdentityProtectionKey,
            intermediateCACert: this.intermediateCACert,
            operationalCert: this.operationalCert,
            label: this.label,
            scopedClusterData: this.scopedClusterData,
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
        );
    }

    setLabel(label: string) {
        this.label = label;
        this.persist();
    }

    getPublicKey() {
        return this.keyPair.publicKey;
    }

    sign(data: ByteArray) {
        return Crypto.sign(this.keyPair, data);
    }

    verifyCredentials(_operationalCert: ByteArray, _intermediateCACert: ByteArray | undefined) {
        // TODO: implement verification
        return;
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
        this.sessions.push(session);
    }

    removeSession(session: SecureSession<any>) {
        const index = this.sessions.indexOf(session);
        if (index >= 0) {
            this.sessions.splice(index, 1);
        }
    }

    setRemoveCallback(callback: () => void) {
        this.removeCallback = callback;
    }

    setPersistCallback(callback: () => void) {
        this.persistCallback = callback;
    }

    async remove() {
        for (const session of this.sessions) {
            await session.end();
        }
        this.removeCallback?.();
    }

    persist() {
        this.persistCallback?.();
    }

    getScopedClusterDataValue<T>(cluster: Cluster<any, any, any, any, any>, clusterDataKey: string): T | undefined {
        const dataMap = this.scopedClusterData.get(cluster.id);
        if (dataMap === undefined) {
            return undefined;
        }
        return dataMap.get(clusterDataKey);
    }

    setScopedClusterDataValue<T>(cluster: Cluster<any, any, any, any, any>, clusterDataKey: string, value: T) {
        if (!this.scopedClusterData.has(cluster.id)) {
            this.scopedClusterData.set(cluster.id, new Map<string, SupportedStorageTypes>());
        }
        this.scopedClusterData.get(cluster.id).set(clusterDataKey, value);
        this.persist();
    }

    deleteScopedClusterDataValue(cluster: Cluster<any, any, any, any, any>, clusterDataKey: string) {
        if (!this.scopedClusterData.has(cluster.id)) {
            return;
        }
        this.scopedClusterData.get(cluster.id).delete(clusterDataKey);
        this.persist();
    }

    hasScopedClusterDataValue(cluster: Cluster<any, any, any, any, any>, clusterDataKey: string) {
        return this.scopedClusterData.has(cluster.id) && this.scopedClusterData.get(cluster.id).has(clusterDataKey);
    }

    deleteScopedClusterData(cluster: Cluster<any, any, any, any, any>) {
        this.scopedClusterData.delete(cluster.id);
        this.persist();
    }

    getScopedClusterDataKeys(cluster: Cluster<any, any, any, any, any>): string[] {
        if (!this.scopedClusterData.has(cluster.id)) {
            return [];
        }
        return Array.from(this.scopedClusterData.get(cluster.id).keys());
    }

    getExternalInformation() {
        return {
            fabricId: this.fabricId,
            nodeId: this.nodeId,
            rootNodeId: this.rootNodeId,
            rootVendorId: this.rootVendorId,
            label: this.label,
        };
    }
}

export class FabricBuilder {
    private keyPair = Crypto.createKeyPair();
    private rootVendorId?: VendorId;
    private rootCert?: ByteArray;
    private intermediateCACert?: ByteArray;
    private operationalCert?: ByteArray;
    private fabricId?: FabricId;
    private nodeId?: NodeId;
    private rootNodeId?: NodeId;
    private rootPublicKey?: ByteArray;
    private identityProtectionKey?: ByteArray;

    constructor(private readonly fabricIndex: FabricIndex) {}

    getPublicKey() {
        return this.keyPair.publicKey;
    }

    createCertificateSigningRequest() {
        return CertificateManager.createCertificateSigningRequest(this.keyPair);
    }

    setRootCert(rootCert: ByteArray) {
        this.rootCert = rootCert;
        this.rootPublicKey = TlvRootCertificate.decode(rootCert).ellipticCurvePublicKey;
        return this;
    }

    setOperationalCert(operationalCert: ByteArray) {
        this.operationalCert = operationalCert;
        const {
            subject: { nodeId, fabricId },
        } = TlvOperationalCertificate.decode(operationalCert);
        this.fabricId = FabricId(fabricId);
        this.nodeId = nodeId;
        return this;
    }

    setIntermediateCACert(certificate: ByteArray) {
        this.intermediateCACert = certificate;
        return this;
    }

    setRootVendorId(rootVendorId: VendorId) {
        this.rootVendorId = rootVendorId;
        return this;
    }

    setRootNodeId(rootNodeId: NodeId) {
        this.rootNodeId = rootNodeId;
        return this;
    }

    setIdentityProtectionKey(key: ByteArray) {
        this.identityProtectionKey = key;
        return this;
    }

    async build() {
        if (this.rootNodeId === undefined) throw new InternalError("rootNodeId needs to be set");
        if (this.rootVendorId === undefined) throw new InternalError("vendorId needs to be set");
        if (this.rootCert === undefined || this.rootPublicKey === undefined)
            throw new InternalError("rootCert needs to be set");
        if (this.identityProtectionKey === undefined) throw new InternalError("identityProtectionKey needs to be set");
        if (this.operationalCert === undefined || this.fabricId === undefined || this.nodeId === undefined)
            throw new InternalError("operationalCert needs to be set");

        const saltWriter = new DataWriter(Endian.Big);
        saltWriter.writeUInt64(this.fabricId);
        const operationalId = await Crypto.hkdf(
            this.rootPublicKey.slice(1),
            saltWriter.toByteArray(),
            COMPRESSED_FABRIC_ID_INFO,
            8,
        );

        return new Fabric(
            this.fabricIndex,
            this.fabricId,
            this.nodeId,
            this.rootNodeId,
            operationalId,
            this.rootPublicKey,
            this.keyPair,
            this.rootVendorId,
            this.rootCert,
            this.identityProtectionKey,
            await Crypto.hkdf(this.identityProtectionKey, operationalId, GROUP_SECURITY_INFO, 16),
            this.intermediateCACert,
            this.operationalCert,
            "",
        );
    }
}
