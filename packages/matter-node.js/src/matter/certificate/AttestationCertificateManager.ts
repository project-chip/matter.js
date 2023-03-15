/**
 * @license
 * Copyright 2022 The node-matter Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import {
    sTestCert_PAA_NoVID_Cert,
    sTestCert_PAA_NoVID_PrivateKey,
    sTestCert_PAA_NoVID_PublicKey,
    sTestCert_PAA_NoVID_SKID
} from "./ChipPAAuthorities";
import { Crypto } from "../../crypto/Crypto";
import { VendorId } from "../common/VendorId";
import { Time } from "../../time/Time";
import { ByteArray } from "@project-chip/matter.js";
import { CertificateManager, jsToMatterDate } from "./CertificateManager";

// DAC for Vendor ID 0xFFF1 and Product ID 0x8000 from Chip project
// There are included here for reference and are no longer used in the code

// From Chip-Test-DAC-FFF1-8000-0007-Key.der
const DevicePrivateKey = ByteArray.fromHex("727F1005CBA47ED7822A9D930943621617CFD3B79D9AF528B801ECF9F1992204");

// From Chip-Test-DAC-FFF1-8000-0007-Cert.der
const DeviceCertificate = ByteArray.fromHex("308201e83082018fa0030201020208143c9d1689f498f0300a06082a8648ce3d04030230463118301606035504030c0f4d617474657220546573742050414931143012060a2b0601040182a27c02010c044646463131143012060a2b0601040182a27c02020c04383030303020170d3231303632383134323334335a180f39393939313233313233353935395a304b311d301b06035504030c144d6174746572205465737420444143203030303731143012060a2b0601040182a27c02010c044646463131143012060a2b0601040182a27c02020c04383030303059301306072a8648ce3d020106082a8648ce3d0301070342000462e2b6e1baff8d74a6fd8216c4cb67a3363a31e691492792e61aee610261481396725ef95e142686ba98f339b0ff65bc338bec7b9e8be0bdf3b2774982476220a360305e300c0603551d130101ff04023000300e0603551d0f0101ff040403020780301d0603551d0e04160414ee95ad96983a9ea95bcd2b00dc5e671727690383301f0603551d23041830168014af42b7094debd515ec6ecf33b81115225f325288300a06082a8648ce3d040302034700304402202f51cf53bf7777df7318094b9db595eebf2fa881c8c572847b1e689ece654264022029782708ee6b32c7f08ff63dbe618e9a580bb14c183bc288777adf9e2dcff5e6");

// From Chip-Test-PAI-FFF1-8000-Cert.der
const ProductIntermediateCertificate = ByteArray.fromHex("308201d43082017aa00302010202083e6ce6509ad840cd300a06082a8648ce3d04030230303118301606035504030c0f4d617474657220546573742050414131143012060a2b0601040182a27c02010c04464646313020170d3231303632383134323334335a180f39393939313233313233353935395a30463118301606035504030c0f4d617474657220546573742050414931143012060a2b0601040182a27c02010c044646463131143012060a2b0601040182a27c02020c04383030303059301306072a8648ce3d020106082a8648ce3d0301070342000480ddf11b228f3e31f63bcf5798da14623aebbde82ef378eeadbfb18fe1abce31d08ed4b20604b6ccc6d9b5fab64e7de10cb74be017c9ec1516056d70f2cd0b22a366306430120603551d130101ff040830060101ff020100300e0603551d0f0101ff040403020106301d0603551d0e04160414af42b7094debd515ec6ecf33b81115225f325288301f0603551d230418301680146afd22771f511fecbf1641976710dcdc31a1717e300a06082a8648ce3d040302034800304502210096c9c8cf2e01886005d8f5bc72c07b75fd9a57695ac4911131138bea033ce50302202554943be57d53d6c475f7d23ebfcfc2036cd29ba6393ec7efad8714ab718219");

function getPaiCommonName(vendorId: VendorId, productId?: number) {
    return `node-matter Dev PAI 0x${vendorId.id.toString(16).toUpperCase()} ${productId === undefined ? 'no PID' : `0x${productId.toString(16).toUpperCase()}`}`;
}

function getDacCommonName(vendorId: VendorId, productId: number) {
    return `node-matter Dev DAC 0x${vendorId.id.toString(16).toUpperCase()}/0x${productId.toString(16).toUpperCase()}`;
}

function getPaaCommonName() {
    // Do not change this because we use the official Matter Test PAA and the certificate uses this name!
    return "Matter Test PAA";
}

export class AttestationCertificateManager {
    private paaCertId = BigInt(0);

    // We use the official PAA cert for now because else pairing with Chip tool do not work because
    // only this one is the Certificate store
    private readonly paaKeyPair = {
        privateKey: sTestCert_PAA_NoVID_PrivateKey,
        publicKey: sTestCert_PAA_NoVID_PublicKey
    };
    private readonly paaKeyIdentifier = sTestCert_PAA_NoVID_SKID
    private readonly paaCertBytes = sTestCert_PAA_NoVID_Cert
    private readonly paiCertId = BigInt(1);
    private readonly paiKeyPair = Crypto.createKeyPair();
    private readonly paiKeyIdentifier = Crypto.hash(this.paiKeyPair.publicKey).slice(0, 20);
    private readonly paiCertBytes;
    private nextCertificateId = 2;

    constructor(
        private readonly vendorId: VendorId,
    ) {
        this.paiCertBytes = this.generatePAICert(vendorId);
    }

    getPAICert() {
        return this.paiCertBytes;
    }

    getDACert(productId: number) {
        const dacKeyPair = Crypto.createKeyPair();
        return {
            keyPair: dacKeyPair,
            dac: this.generateDaCert(dacKeyPair.publicKey, this.vendorId, productId)
        };
    }

    // Method unused for now because we use the official Matter Test PAA, but is functional
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
                    pathLen: 1
                },
                keyUsage: 96,
                subjectKeyIdentifier: this.paaKeyIdentifier,
                authorityKeyIdentifier: this.paaKeyIdentifier,
            }
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
                    pathLen: 0
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
                    isCa: false
                },
                keyUsage: 1,
                subjectKeyIdentifier: Crypto.hash(publicKey).slice(0, 20),
                authorityKeyIdentifier: this.paiKeyIdentifier,
            },
        };
        return CertificateManager.daCertToAsn1(unsignedCertificate, this.paiKeyPair);
    }
}
