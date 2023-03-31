/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Crypto, KeyPair } from "../../crypto/Crypto";
import { CertificateManager, TlvOperationalCertificate, TlvRootCertificate } from "../certificate/CertificateManager";
import { NodeId } from "../common/NodeId";
import { ByteArray, DataWriter, Endian, toBigInt, VendorId, FabricId, FabricIndex } from "@project-chip/matter.js";
import { SecureSession } from "../session/SecureSession";

const COMPRESSED_FABRIC_ID_INFO = ByteArray.fromString("CompressedFabric");
const GROUP_SECURITY_INFO = ByteArray.fromString("GroupKey v1.0");

export interface FabricJsonObject {
    fabricIndex: number;
    fabricId: string;
    nodeId: string;
    rootNodeId: string;
    operationalId: string;
    rootPublicKey: string;
    keyPair: {
        publicKey: string,
        privateKey: string,
    };
    rootVendorId: number;
    rootCert: string;
    identityProtectionKey: string;
    operationalIdentityProtectionKey: string;
    intermediateCACert: string | undefined;
    operationalCert: string;
    label: string;
}

export class Fabric {

    private readonly sessions = new Array<SecureSession<any>>();

    private removeCallback: (() => void) | undefined;
    private persistCallback: (() => void) | undefined;

    constructor(
        readonly fabricIndex: FabricIndex,
        readonly fabricId: FabricId,
        readonly nodeId: NodeId,
        readonly rootNodeId: NodeId,
        readonly operationalId: ByteArray,
        readonly rootPublicKey: ByteArray,
        private readonly keyPair: KeyPair,
        readonly rootVendorId: VendorId,
        private readonly rootCert: ByteArray,
        readonly identityProtectionKey: ByteArray,
        readonly operationalIdentityProtectionKey: ByteArray,
        readonly intermediateCACert: ByteArray | undefined,
        readonly operationalCert: ByteArray,
        public label: string,
    ) { }

    toStorageJson() {
        return JSON.stringify({
            fabricIndex: this.fabricIndex.index,
            fabricId: this.fabricId.id.toString(),
            nodeId: this.nodeId.id.toString(),
            rootNodeId: this.rootNodeId.id.toString(),
            operationalId: this.operationalId.toHex(),
            rootPublicKey: this.rootPublicKey.toHex(),
            keyPair: {
                publicKey: this.keyPair.publicKey.toHex(),
                privateKey: this.keyPair.privateKey.toHex(),
            },
            rootVendorId: this.rootVendorId.id,
            rootCert: this.rootCert.toHex(),
            identityProtectionKey: this.identityProtectionKey.toHex(),
            operationalIdentityProtectionKey: this.operationalIdentityProtectionKey.toHex(),
            intermediateCACert: this.intermediateCACert ? this.intermediateCACert.toHex() : undefined,
            operationalCert: this.operationalCert.toHex(),
            label: this.label,
        });
    }

    static createFromStorageJson(json: string): Fabric {
        const fabricObject: FabricJsonObject = JSON.parse(json);
        return new Fabric(
            new FabricIndex(fabricObject.fabricIndex),
            new FabricId(BigInt(fabricObject.fabricId)),
            new NodeId(BigInt(fabricObject.nodeId)),
            new NodeId(BigInt(fabricObject.rootNodeId)),
            ByteArray.fromHex(fabricObject.operationalId),
            ByteArray.fromHex(fabricObject.rootPublicKey),
            {
                publicKey: ByteArray.fromHex(fabricObject.keyPair.publicKey),
                privateKey: ByteArray.fromHex(fabricObject.keyPair.privateKey),
            },
            new VendorId(fabricObject.rootVendorId),
            ByteArray.fromHex(fabricObject.rootCert),
            ByteArray.fromHex(fabricObject.identityProtectionKey),
            ByteArray.fromHex(fabricObject.operationalIdentityProtectionKey),
            fabricObject.intermediateCACert ? ByteArray.fromHex(fabricObject.intermediateCACert) : undefined,
            ByteArray.fromHex(fabricObject.operationalCert),
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
        return Crypto.signPkcs8(this.keyPair.privateKey, data);
    }

    verifyCredentials(_operationalCert: ByteArray, _intermediateCACert: ByteArray | undefined) {
        // TODO: implement verification
        return;
    }

    getDestinationId(nodeId: NodeId, random: ByteArray) {
        const writer = new DataWriter(Endian.Little);
        writer.writeByteArray(random);
        writer.writeByteArray(this.rootPublicKey);
        writer.writeUInt64(this.fabricId.id);
        writer.writeUInt64(nodeId.id);
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

    remove() {
        this.sessions.forEach(session => session.destroy());
        this.removeCallback?.();
    }

    persist() {
        this.persistCallback?.();
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

    constructor(
        private readonly fabricIndex: FabricIndex,
    ) { }

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
        const { subject: { nodeId, fabricId } } = TlvOperationalCertificate.decode(operationalCert);
        this.fabricId = new FabricId(toBigInt(fabricId));
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
        if (this.rootNodeId === undefined) throw new Error("rootNodeId needs to be set");
        if (this.rootVendorId === undefined) throw new Error("vendorId needs to be set");
        if (this.rootCert === undefined || this.rootPublicKey === undefined) throw new Error("rootCert needs to be set");
        if (this.identityProtectionKey === undefined) throw new Error("identityProtectionKey needs to be set");
        if (this.operationalCert === undefined || this.fabricId === undefined || this.nodeId === undefined) throw new Error("operationalCert needs to be set");

        const saltWriter = new DataWriter(Endian.Big);
        saltWriter.writeUInt64(this.fabricId.id);
        const operationalId = await Crypto.hkdf(this.rootPublicKey.slice(1), saltWriter.toByteArray(), COMPRESSED_FABRIC_ID_INFO, 8);

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
