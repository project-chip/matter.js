/**
 * @license
 * Copyright 2022 The node-matter Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { CertificateManager, jsToMatterDate, TlvOperationalCertificate, TlvRootCertificate } from "./CertificateManager.js";
import { Crypto, KeyPair } from "../crypto/Crypto.js";
import { ByteArray } from "../util/ByteArray.js";
import { NodeId } from "../datatype/NodeId.js";
import { Time } from "../time/Time.js";
import { StorageManager } from "../storage/StorageManager.js";

export class RootCertificateManager {
    private rootCertId = BigInt(0);
    private rootKeyPair = Crypto.createKeyPair();
    private rootKeyIdentifier = Crypto.hash(this.rootKeyPair.publicKey).slice(0, 20);
    private rootCertBytes = this.generateRootCert();
    private nextCertificateId = 1;

    constructor(storageManager: StorageManager) {
        const storage = storageManager.createContext("RootCertificateManager");

        // Read from storage if we have them stored, else store the just generated data
        if (storage.has("rootCertId")) {
            try {
                // Read and set the values from storage,
                // if one fail we use the pre-generated values, else we overwrite them
                const rootCertId = storage.get<bigint>("rootCertId");
                const rootKeyPair = storage.get<KeyPair>("rootKeyPair");
                const rootKeyIdentifier = storage.get<Buffer>("rootKeyIdentifier");
                const rootCertBytes = storage.get<ByteArray>("rootCertBytes");
                const nextCertificateId = storage.get<number>("nextCertificateId");
                this.rootCertId = rootCertId;
                this.rootKeyPair = rootKeyPair;
                this.rootKeyIdentifier = rootKeyIdentifier;
                this.rootCertBytes = rootCertBytes;
                this.nextCertificateId = nextCertificateId;
                return;
            } catch (error) {
                console.error("Failed to load root certificate from storage, generating new one", error);
            }
        }
        storage.set("rootCertId", this.rootCertId);
        storage.set("rootKeyPair", this.rootKeyPair);
        storage.set("rootKeyIdentifier", this.rootKeyIdentifier);
        storage.set("rootCertBytes", this.rootCertBytes);
        storage.set("nextCertificateId", this.nextCertificateId);
    }

    getRootCert() {
        return this.rootCertBytes;
    }

    private generateRootCert() {
        const now = Time.get().now();
        const unsignedCertificate = {
            serialNumber: ByteArray.of(Number(this.rootCertId)),
            signatureAlgorithm: 1 /* EcdsaWithSHA256 */,
            publicKeyAlgorithm: 1 /* EC */,
            ellipticCurveIdentifier: 1 /* P256v1 */,
            issuer: { issuerRcacId: this.rootCertId },
            notBefore: jsToMatterDate(now, -1),
            notAfter: jsToMatterDate(now, 10),
            subject: { rcacId: this.rootCertId },
            ellipticCurvePublicKey: this.rootKeyPair.publicKey,
            extensions: {
                basicConstraints: { isCa: true },
                keyUsage: 96,
                subjectKeyIdentifier: this.rootKeyIdentifier,
                authorityKeyIdentifier: this.rootKeyIdentifier,
            },
        };
        const signature = Crypto.signPkcs8(this.rootKeyPair.privateKey, CertificateManager.rootCertToAsn1(unsignedCertificate));
        return TlvRootCertificate.encode({ ...unsignedCertificate, signature });
    }

    generateNoc(publicKey: ByteArray, fabricId: bigint, nodeId: NodeId) {
        const now = Time.get().now();
        const certId = this.nextCertificateId++;
        const unsignedCertificate = {
            serialNumber: ByteArray.of(certId), // TODO: figure out what should happen if certId > 255
            signatureAlgorithm: 1 /* EcdsaWithSHA256 */,
            publicKeyAlgorithm: 1 /* EC */,
            ellipticCurveIdentifier: 1 /* P256v1 */,
            issuer: { issuerRcacId: this.rootCertId },
            notBefore: jsToMatterDate(now, -1),
            notAfter: jsToMatterDate(now, 10),
            subject: { fabricId, nodeId },
            ellipticCurvePublicKey: publicKey,
            extensions: {
                basicConstraints: { isCa: false },
                keyUsage: 1,
                extendedKeyUsage: [2, 1],
                subjectKeyIdentifier: Crypto.hash(publicKey).slice(0, 20),
                authorityKeyIdentifier: this.rootKeyIdentifier,
            },
        };
        const signature = Crypto.signPkcs8(this.rootKeyPair.privateKey, CertificateManager.nocCertToAsn1(unsignedCertificate));
        return TlvOperationalCertificate.encode({ ...unsignedCertificate, signature });
    }
}
