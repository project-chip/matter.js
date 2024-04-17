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
    X962,
} from "@project-chip/matter.js/certificate";
import { BYTES_KEY, DerCodec, DerNode, ELEMENTS_KEY } from "@project-chip/matter.js/codec";
import { ValidationError } from "@project-chip/matter.js/common";
import { Crypto, PrivateKey, PublicKey } from "@project-chip/matter.js/crypto";
import { CaseAuthenticatedTag, FabricId, NodeId } from "@project-chip/matter.js/datatype";
import { ByteArray } from "@project-chip/matter.js/util";
import * as assert from "assert";
import {
    CERTIFICATE_SETS,
    TEST_CSR_REQUEST_ASN1,
    TEST_NOC_CERT_CAT_ASN1,
    TEST_PRIVATE_KEY,
    TEST_PUBLIC_KEY,
} from "./TestCertificates.js";

describe("CertificateManager", () => {
    before(() => {
        MockTime.reset(767158951000);
    });

    /**
     * These tests make sure that the TLV can be recoded to the same bytes. This mainly verifies that the order
     * of Lists are correctly preserved.
     */
    describe("Recode Tlv", () => {
        Object.entries(CERTIFICATE_SETS).forEach(([key, certs]) => {
            describe(`recodes Tlv for ${key}`, () => {
                it("recode root certificate", () => {
                    const rootTlv = TlvRootCertificate.decode(certs.ROOT.TLV);
                    expect(TlvRootCertificate.encode(rootTlv).toHex()).equal(certs.ROOT.TLV.toHex());
                });

                if ("ICAC" in certs) {
                    it("recode intermediate certificate", () => {
                        const icacTlv = TlvIntermediateCertificate.decode(certs.ICAC.TLV);
                        expect(TlvIntermediateCertificate.encode(icacTlv).toHex()).equal(certs.ICAC.TLV.toHex());
                    });
                }

                it("recode operational certificate", () => {
                    const nocTlv = TlvOperationalCertificate.decode(certs.NOC.TLV);
                    expect(TlvOperationalCertificate.encode(nocTlv).toHex()).equal(certs.NOC.TLV.toHex());
                });
            });
        });
    });

    /**
     * For all Root certs and some ICAC/NOC we verified ASN1 encoding. This test verifies that the encoding manually,
     * so we can also verify that. For the others the certificate validation below serves the same purpose.
     */
    describe("generates the correct ASN1 bytes", () => {
        Object.entries(CERTIFICATE_SETS).forEach(([key, certs]) => {
            describe(`generates the correct ASN1 bytes for ${key}`, () => {
                it("encode root certificate", () => {
                    const rootTlv = TlvRootCertificate.decode(certs.ROOT.TLV);
                    assert.equal(CertificateManager.rootCertToAsn1(rootTlv).toHex(), certs.ROOT.ASN1.toHex());
                });

                if ("ICAC" in certs && "ASN1" in certs.ICAC) {
                    it("encode intermediate certificate", () => {
                        const icacTlv = TlvIntermediateCertificate.decode(certs.ICAC.TLV);
                        assert.equal(
                            CertificateManager.intermediateCaCertToAsn1(icacTlv).toHex(),
                            // @ts-expect-error ASN1 might not be in TlvIntermediateCertificate
                            certs.ICAC.ASN1.toHex(),
                        );
                    });
                }

                if ("ASN1" in certs.NOC) {
                    it("encode operational certificate", () => {
                        const nocTlv = TlvOperationalCertificate.decode(certs.NOC.TLV);
                        assert.equal(
                            CertificateManager.nodeOperationalCertToAsn1(nocTlv).toHex(),
                            // @ts-expect-error ASN1 might not be in TlvOperationalCertificate
                            certs.NOC.ASN1.toHex(),
                        );
                    });
                }
            });
        });
    });

    /**
     * We verify all certificates which also verifies them cryptographically.
     */
    describe("verifies certificates", () => {
        Object.entries(CERTIFICATE_SETS).forEach(([key, certs]) => {
            describe(`verify certificates for ${key}`, () => {
                it("verify root certificate", () => {
                    const rootTlv = TlvRootCertificate.decode(certs.ROOT.TLV);
                    CertificateManager.verifyRootCertificate(rootTlv);
                });

                if ("ICAC" in certs) {
                    it("verify intermediate certificate via ROOT", () => {
                        const rootTlv = TlvRootCertificate.decode(certs.ROOT.TLV);
                        const icacTlv = TlvIntermediateCertificate.decode(certs.ICAC.TLV);
                        CertificateManager.verifyIntermediateCaCertificate(rootTlv, icacTlv);
                    });

                    it("verify operational certificate via ICAC", () => {
                        const icacTlv = TlvIntermediateCertificate.decode(certs.ICAC.TLV);
                        const nocTlv = TlvOperationalCertificate.decode(certs.NOC.TLV);
                        CertificateManager.verifyNodeOperationalCertificate(icacTlv, nocTlv);
                    });
                } else {
                    it("verify operational certificate via ROOT", () => {
                        const rootTlv = TlvRootCertificate.decode(certs.ROOT.TLV);
                        const nocTlv = TlvOperationalCertificate.decode(certs.NOC.TLV);
                        CertificateManager.verifyNodeOperationalCertificate(rootTlv, nocTlv);
                    });
                }
            });
        });
    });

    describe("special Noc encoding cases", () => {
        it("validates TLV order preserve", () => {
            const NOC_JSON = {
                serialNumber: ByteArray.fromHex("01"),
                signatureAlgorithm: 1,
                issuer: { rcacId: 0 },
                notBefore: 734738627,
                notAfter: 1081634627,
                subject: {
                    caseAuthenticatedTags: [CaseAuthenticatedTag(305419896), CaseAuthenticatedTag(1450709556)],
                    fabricId: FabricId(1),
                    nodeId: NodeId(BigInt("9544138254462263483")),
                },
                publicKeyAlgorithm: 1,
                ellipticCurveIdentifier: 1,
                ellipticCurvePublicKey: ByteArray.fromHex(
                    "047a13da11a960c91abdbe002c6f969f03b88f7f5c58f36f6755c6dce7e1ddd460ab4b2df33f8ed1da1ff5ebf21c3a293c3251241c445b208a22bea0abec369740",
                ),
                extensions: {
                    basicConstraints: { isCa: false },
                    keyUsage: {
                        digitalSignature: true,
                        nonRepudiation: false,
                        keyEncipherment: false,
                        dataEncipherment: false,
                        keyAgreement: false,
                        keyCertSign: false,
                        cRLSign: false,
                        encipherOnly: false,
                        decipherOnly: false,
                    },
                    extendedKeyUsage: [2, 1],
                    subjectKeyIdentifier: ByteArray.fromHex("50a7b210085872f47492e9442ccb2bfec82097da"),
                    authorityKeyIdentifier: ByteArray.fromHex("9f833bc968b9c7ce347b1d10f046ebda0aeb0b3e"),
                },
                signature: ByteArray.fromHex(
                    "3fcd56cf81d769100934b32f6a8b07afddfbf6c32f01e97385f251b8c71bc631a876c56fac76dd3c81449b71a0a450d28d9eaf314ccd3a166b61cddd965829f1",
                ),
            };
            const NOC_ASN1 = CertificateManager.nodeOperationalCertToAsn1(NOC_JSON);
            const NOC_TLV = TlvOperationalCertificate.encode(NOC_JSON);

            const unTlv = TlvOperationalCertificate.decode(NOC_TLV);
            const unAsn1 = CertificateManager.nodeOperationalCertToAsn1(unTlv);

            expect(unTlv).to.deep.equal(NOC_JSON);
            expect(Object.keys(unTlv.subject)).to.deep.equal(Object.keys(NOC_JSON.subject));
            expect(unAsn1.toHex()).to.deep.equal(NOC_ASN1.toHex());
        });

        it("generates the correct ASN1 bytes with three different CASE Authenticated Tags", () => {
            const TEST_NOC_CERT_TLV = TlvOperationalCertificate.decode(
                CERTIFICATE_SETS["General Test Certificates"].NOC.TLV,
            );
            const nocWithCat = {
                ...TEST_NOC_CERT_TLV,
                subject: {
                    ...TEST_NOC_CERT_TLV.subject,
                    caseAuthenticatedTags: [
                        CaseAuthenticatedTag(0x12345678),
                        CaseAuthenticatedTag(0x56789012),
                        CaseAuthenticatedTag(0x90123456),
                    ],
                },
            };
            const result = CertificateManager.nodeOperationalCertToAsn1(nocWithCat);

            assert.equal(result.toHex(), TEST_NOC_CERT_CAT_ASN1.toHex());
        });

        it("throws error if more then 3 tags are provided", () => {
            const TEST_NOC_CERT_TLV = TlvOperationalCertificate.decode(
                CERTIFICATE_SETS["General Test Certificates"].NOC.TLV,
            );
            const nocWithCat = {
                ...TEST_NOC_CERT_TLV,
                subject: {
                    ...TEST_NOC_CERT_TLV.subject,
                    caseAuthenticatedTags: [
                        CaseAuthenticatedTag(0x12345678),
                        CaseAuthenticatedTag(0x56789012),
                        CaseAuthenticatedTag(0x90123456),
                        CaseAuthenticatedTag(0x12345678),
                    ],
                },
            };
            assert.throws(
                () => CertificateManager.nodeOperationalCertToAsn1(nocWithCat),
                new ValidationError("Too many CaseAuthenticatedTags (4)."),
            );
        });

        it("throws error if tags contain duplicate identifier values", () => {
            const TEST_NOC_CERT_TLV = TlvOperationalCertificate.decode(
                CERTIFICATE_SETS["General Test Certificates"].NOC.TLV,
            );
            const nocWithCat = {
                ...TEST_NOC_CERT_TLV,
                subject: {
                    ...TEST_NOC_CERT_TLV.subject,
                    caseAuthenticatedTags: [
                        CaseAuthenticatedTag(0x12345678),
                        CaseAuthenticatedTag(0x56789012),
                        CaseAuthenticatedTag(0x12341234),
                    ],
                },
            };
            assert.throws(
                () => CertificateManager.nodeOperationalCertToAsn1(nocWithCat),
                new ValidationError("CASE Authenticated Tags field contains duplicate identifier values."),
            );
        });
    });

    describe("decodeIcacCertificate", () => {
        it("decodes a correct ICAC cert", () => {
            const SPECS_ICAC_CERT_TLV = TlvIntermediateCertificate.decode(
                CERTIFICATE_SETS["Matter 1.2 Specification Certificates"].ICAC.TLV,
            );
            assert.deepEqual(SPECS_ICAC_CERT_TLV, {
                serialNumber: new ByteArray([45, 180, 68, 133, 86, 65, 174, 223]),
                signatureAlgorithm: 1,
                issuer: { rcacId: BigInt("14612714909889200129") },
                notBefore: 656087023,
                notAfter: 1287239022,
                subject: { icacId: BigInt("14612714909889200131") },
                publicKeyAlgorithm: 1,
                ellipticCurveIdentifier: 1,
                ellipticCurvePublicKey: new ByteArray([
                    4, 197, 208, 134, 27, 184, 249, 12, 64, 92, 18, 49, 78, 76, 94, 190, 234, 147, 159, 114, 119, 75,
                    204, 51, 35, 158, 47, 89, 246, 244, 106, 248, 220, 125, 70, 130, 160, 227, 204, 198, 70, 230, 223,
                    41, 234, 134, 191, 86, 42, 231, 32, 168, 152, 51, 125, 56, 63, 50, 192, 160, 158, 65, 96, 25, 234,
                ]),
                extensions: {
                    basicConstraints: { isCa: true },
                    keyUsage: {
                        cRLSign: true,
                        dataEncipherment: false,
                        decipherOnly: false,
                        digitalSignature: false,
                        encipherOnly: false,
                        keyAgreement: false,
                        keyCertSign: true,
                        keyEncipherment: false,
                        nonRepudiation: false,
                    },
                    subjectKeyIdentifier: new ByteArray([
                        83, 82, 215, 5, 158, 156, 21, 165, 8, 144, 104, 98, 134, 72, 1, 162, 159, 31, 65, 211,
                    ]),
                    authorityKeyIdentifier: new ByteArray([
                        19, 175, 129, 171, 55, 55, 75, 46, 210, 169, 100, 155, 18, 183, 163, 164, 40, 126, 21, 29,
                    ]),
                },
                signature: new ByteArray([
                    132, 26, 6, 212, 59, 94, 159, 236, 210, 78, 135, 177, 36, 78, 181, 28, 106, 44, 242, 13, 155, 94,
                    107, 160, 127, 17, 230, 0, 47, 126, 12, 163, 78, 50, 166, 2, 195, 96, 157, 0, 146, 211, 72, 189,
                    189, 25, 138, 17, 70, 70, 189, 65, 207, 16, 55, 131, 100, 26, 226, 94, 63, 35, 253, 38,
                ]),
            });
        });
    });

    describe("createCertificateSigningRequest", () => {
        it("generates a valid CSR", () => {
            const result = CertificateManager.createCertificateSigningRequest(
                PrivateKey(TEST_PRIVATE_KEY, { publicKey: TEST_PUBLIC_KEY }),
            );

            const derNode = DerCodec.decode(result);
            assert.equal(derNode[ELEMENTS_KEY]?.length, 3);
            const [requestNode, signatureAlgorithmNode, signatureNode] = derNode[ELEMENTS_KEY] as DerNode[];
            assert.deepEqual(DerCodec.encode(signatureAlgorithmNode), DerCodec.encode(X962.EcdsaWithSHA256));
            const requestBytes = DerCodec.encode(requestNode);
            assert.deepEqual(requestBytes, TEST_CSR_REQUEST_ASN1);
            Crypto.verify(PublicKey(TEST_PUBLIC_KEY), DerCodec.encode(requestNode), signatureNode[BYTES_KEY], "der");
        });
    });

    describe("getPublicKeyFromCsr", () => {
        it("get the public key from the CSR", () => {
            const csr = CertificateManager.createCertificateSigningRequest(
                PrivateKey(TEST_PRIVATE_KEY, { publicKey: TEST_PUBLIC_KEY }),
            );

            const result = CertificateManager.getPublicKeyFromCsr(csr);

            assert.deepEqual(result, TEST_PUBLIC_KEY);
        });
    });
});
