/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Crypto } from "../crypto/Crypto.js";
import { PrivateKey } from "../crypto/Key.js";
import { VendorId } from "../datatype/VendorId.js";
import { Time } from "../time/Time.js";
import { ByteArray } from "../util/ByteArray.js";
import { CertificateManager, jsToMatterDate } from "./CertificateManager.js";
import {
    TestCert_PAA_NoVID_PrivateKey,
    TestCert_PAA_NoVID_PublicKey,
    TestCert_PAA_NoVID_SKID,
} from "./ChipPAAuthorities.js";

function getPaiCommonName(vendorId: VendorId, productId?: number) {
    return `node-matter Dev PAI 0x${vendorId.toString(16).toUpperCase()} ${
        productId === undefined ? "no PID" : `0x${productId.toString(16).toUpperCase()}`
    }`;
}

function getDacCommonName(vendorId: VendorId, productId: number) {
    return `node-matter Dev DAC 0x${vendorId.toString(16).toUpperCase()}/0x${productId.toString(16).toUpperCase()}`;
}

function getPaaCommonName() {
    // Do not change this because we use the official Matter Test PAA and the certificate uses this name!
    return "Matter Test PAA";
}

export class AttestationCertificateManager {
    private paaCertId = BigInt(0);

    // We use the official PAA cert for now because else pairing with Chip tool do not work because
    // only this one is the Certificate store
    private readonly paaKeyPair = PrivateKey(TestCert_PAA_NoVID_PrivateKey, {
        publicKey: TestCert_PAA_NoVID_PublicKey,
    });
    private readonly paaKeyIdentifier = TestCert_PAA_NoVID_SKID;
    private readonly paiCertId = BigInt(1);
    private readonly paiKeyPair = Crypto.createKeyPair();
    private readonly paiKeyIdentifier = Crypto.hash(this.paiKeyPair.publicKey).slice(0, 20);
    private readonly paiCertBytes;
    private nextCertificateId = 2;

    constructor(private readonly vendorId: VendorId) {
        this.paiCertBytes = this.generatePAICert(vendorId);
    }

    getPAICert() {
        return this.paiCertBytes;
    }

    getDACert(productId: number) {
        const dacKeyPair = Crypto.createKeyPair();
        return {
            keyPair: dacKeyPair,
            dac: this.generateDaCert(dacKeyPair.publicKey, this.vendorId, productId),
        };
    }

    // Method unused for now because we use the official Matter Test PAA, but is functional
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    private generatePAACert(vendorId?: VendorId) {
        const now = Time.get().now();
        const unsignedCertificate = {
            serialNumber: ByteArray.of(Number(this.paaCertId)),
            signatureAlgorithm: 1 /* EcdsaWithSHA256 */,
            publicKeyAlgorithm: 1 /* EC */,
            ellipticCurveIdentifier: 1 /* P256v1 */,
            issuer: {
                commonName: getPaaCommonName(),
                vendorId: vendorId,
            },
            notBefore: jsToMatterDate(now, -1),
            notAfter: jsToMatterDate(now, 10),
            subject: {
                commonName: getPaaCommonName(),
                vendorId: vendorId,
            },
            ellipticCurvePublicKey: this.paaKeyPair.publicKey,
            extensions: {
                basicConstraints: {
                    isCa: true,
                    pathLen: 1,
                },
                keyUsage: 96,
                subjectKeyIdentifier: this.paaKeyIdentifier,
                authorityKeyIdentifier: this.paaKeyIdentifier,
            },
        };
        return CertificateManager.paaCertToAsn1(unsignedCertificate, this.paaKeyPair);
    }

    private generatePAICert(vendorId: VendorId, productId?: number) {
        const now = Time.get().now();
        const unsignedCertificate = {
            serialNumber: ByteArray.of(Number(this.paiCertId)),
            signatureAlgorithm: 1 /* EcdsaWithSHA256 */,
            publicKeyAlgorithm: 1 /* EC */,
            ellipticCurveIdentifier: 1 /* P256v1 */,
            issuer: {
                commonName: getPaaCommonName(),
            },
            notBefore: jsToMatterDate(now, -1),
            notAfter: jsToMatterDate(now, 10),
            subject: {
                commonName: getPaiCommonName(vendorId, productId),
                vendorId: vendorId,
                productId: productId,
            },
            ellipticCurvePublicKey: this.paiKeyPair.publicKey,
            extensions: {
                basicConstraints: {
                    isCa: true,
                    pathLen: 0,
                },
                keyUsage: 96,
                subjectKeyIdentifier: this.paiKeyIdentifier,
                authorityKeyIdentifier: this.paaKeyIdentifier,
            },
        };
        return CertificateManager.paiCertToAsn1(unsignedCertificate, this.paaKeyPair);
    }

    generateDaCert(publicKey: ByteArray, vendorId: VendorId, productId: number) {
        const now = Time.get().now();
        const certId = this.nextCertificateId++;
        const unsignedCertificate = {
            serialNumber: ByteArray.of(certId), // TODO: figure out what should happen if certId > 255
            signatureAlgorithm: 1 /* EcdsaWithSHA256 */,
            publicKeyAlgorithm: 1 /* EC */,
            ellipticCurveIdentifier: 1 /* P256v1 */,
            notBefore: jsToMatterDate(now, -1),
            notAfter: jsToMatterDate(now, 10),
            issuer: {
                commonName: getPaiCommonName(vendorId),
                vendorId: vendorId,
            },
            subject: {
                commonName: getDacCommonName(vendorId, productId),
                vendorId: vendorId,
                productId: productId,
            },
            ellipticCurvePublicKey: publicKey,
            extensions: {
                basicConstraints: {
                    isCa: false,
                },
                keyUsage: 1,
                subjectKeyIdentifier: Crypto.hash(publicKey).slice(0, 20),
                authorityKeyIdentifier: this.paiKeyIdentifier,
            },
        };
        return CertificateManager.daCertToAsn1(unsignedCertificate, this.paiKeyPair);
    }
}
