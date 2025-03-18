/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import {
    BinaryKeyPair,
    Bytes,
    Construction,
    Crypto,
    Environment,
    Environmental,
    Logger,
    PrivateKey,
    StorageContext,
    StorageManager,
    Time,
    asyncNew,
    toHex,
} from "#general";
import { CaseAuthenticatedTag, FabricId, NodeId } from "#types";
import {
    CertificateManager,
    OperationalCertificate,
    RootCertificate,
    TlvOperationalCertificate,
    TlvRootCertificate,
    Unsigned,
    jsToMatterDate,
} from "./CertificateManager.js";

const logger = Logger.get("CertificateAuthority");

/**
 * Manages the root key pair for a fabric owned by a local node.
 * TODO: Add support for (optional) ICACs
 */
export class CertificateAuthority {
    private rootCertId = BigInt(0);
    private rootKeyPair = Crypto.createKeyPair();
    private rootKeyIdentifier: Uint8Array<ArrayBufferLike> = Crypto.hash(this.rootKeyPair.publicKey).slice(0, 20);
    private rootCertBytes: Uint8Array<ArrayBufferLike> = this.#generateRootCert();
    private nextCertificateId = BigInt(1);
    #construction: Construction<CertificateAuthority>;

    get construction() {
        return this.#construction;
    }

    static async create(options: StorageContext | CertificateAuthority.Configuration) {
        return asyncNew(CertificateAuthority, options);
    }

    constructor(options: StorageContext | CertificateAuthority.Configuration) {
        this.#construction = Construction(this, async () => {
            // Use provided CA config or read from storage, otherwise initialize and store
            const certValues = options instanceof StorageContext ? await options.values() : options;

            if (
                (typeof certValues.rootCertId === "number" || typeof certValues.rootCertId === "bigint") &&
                (ArrayBuffer.isView(certValues.rootKeyPair) || typeof certValues.rootKeyPair === "object") &&
                ArrayBuffer.isView(certValues.rootKeyIdentifier) &&
                ArrayBuffer.isView(certValues.rootCertBytes) &&
                (typeof certValues.nextCertificateId === "number" || typeof certValues.nextCertificateId === "bigint")
            ) {
                this.rootCertId = BigInt(certValues.rootCertId);
                this.rootKeyPair = PrivateKey(certValues.rootKeyPair as BinaryKeyPair);
                this.rootKeyIdentifier = certValues.rootKeyIdentifier;
                this.rootCertBytes = certValues.rootCertBytes;
                this.nextCertificateId = BigInt(certValues.nextCertificateId);
                logger.info(`Loaded stored credentials with ID ${this.rootCertId}`);
                return;
            }

            logger.info(`Created new credentials with ID ${this.rootCertId}`);

            if (options instanceof StorageContext) {
                await options.set({
                    rootCertId: this.rootCertId,
                    rootKeyPair: this.rootKeyPair.keyPair,
                    rootKeyIdentifier: this.rootKeyIdentifier,
                    rootCertBytes: this.rootCertBytes,
                    nextCertificateId: this.nextCertificateId,
                });
            }
        });
    }

    static [Environmental.create](env: Environment) {
        const storage = env.get(StorageManager).createContext("certificates");
        const instance = new CertificateAuthority(storage);
        env.set(CertificateAuthority, instance);
        return instance;
    }

    get rootCert() {
        return this.rootCertBytes;
    }

    get config(): CertificateAuthority.Configuration {
        return {
            rootCertId: this.rootCertId,
            rootKeyPair: this.rootKeyPair.keyPair,
            rootKeyIdentifier: this.rootKeyIdentifier,
            rootCertBytes: this.rootCertBytes,
            nextCertificateId: this.nextCertificateId,
        };
    }

    #generateRootCert() {
        const now = Time.get().now();
        const unsignedCertificate: Unsigned<RootCertificate> = {
            serialNumber: Bytes.fromHex(toHex(this.rootCertId)),
            signatureAlgorithm: 1 /* EcdsaWithSHA256 */,
            publicKeyAlgorithm: 1 /* EC */,
            ellipticCurveIdentifier: 1 /* P256v1 */,
            issuer: { rcacId: this.rootCertId },
            notBefore: jsToMatterDate(now, -1),
            notAfter: jsToMatterDate(now, 10),
            subject: { rcacId: this.rootCertId },
            ellipticCurvePublicKey: this.rootKeyPair.publicKey,
            extensions: {
                basicConstraints: { isCa: true },
                keyUsage: {
                    keyCertSign: true,
                    cRLSign: true,
                },
                subjectKeyIdentifier: this.rootKeyIdentifier,
                authorityKeyIdentifier: this.rootKeyIdentifier,
            },
        };
        const signature = Crypto.sign(this.rootKeyPair, CertificateManager.rootCertToAsn1(unsignedCertificate));
        return TlvRootCertificate.encode({ ...unsignedCertificate, signature });
    }

    generateNoc(
        publicKey: Uint8Array,
        fabricId: FabricId,
        nodeId: NodeId,
        caseAuthenticatedTags?: CaseAuthenticatedTag[],
    ) {
        const now = Time.get().now();
        const certId = this.nextCertificateId++;
        const unsignedCertificate: Unsigned<OperationalCertificate> = {
            serialNumber: Bytes.fromHex(toHex(certId)),
            signatureAlgorithm: 1 /* EcdsaWithSHA256 */,
            publicKeyAlgorithm: 1 /* EC */,
            ellipticCurveIdentifier: 1 /* P256v1 */,
            issuer: { rcacId: this.rootCertId },
            notBefore: jsToMatterDate(now, -1),
            notAfter: jsToMatterDate(now, 10),
            subject: { fabricId, nodeId, caseAuthenticatedTags },
            ellipticCurvePublicKey: publicKey,
            extensions: {
                basicConstraints: { isCa: false },
                keyUsage: {
                    digitalSignature: true,
                },
                extendedKeyUsage: [2, 1],
                subjectKeyIdentifier: Crypto.hash(publicKey).slice(0, 20),
                authorityKeyIdentifier: this.rootKeyIdentifier,
            },
        };

        const signature = Crypto.sign(
            this.rootKeyPair,
            CertificateManager.nodeOperationalCertToAsn1(unsignedCertificate),
        );

        return TlvOperationalCertificate.encode({ ...unsignedCertificate, signature });
    }
}

export namespace CertificateAuthority {
    export type Configuration = {
        rootCertId: bigint;
        rootKeyPair: BinaryKeyPair;
        rootKeyIdentifier: Uint8Array;
        rootCertBytes: Uint8Array;
        nextCertificateId: bigint;
    };
}
