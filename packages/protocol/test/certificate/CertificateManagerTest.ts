/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import {
    CertificateError,
    CertificateManager,
    TlvIntermediateCertificate,
    TlvOperationalCertificate,
    TlvRootCertificate,
} from "#certificate/CertificateManager.js";
import { Bytes, DerCodec, DerKey, DerNode, PrivateKey, PublicKey, StandardCrypto, X962 } from "#general";
import { CaseAuthenticatedTag, FabricId, NodeId, ValidationOutOfBoundsError } from "#types";
import {
    CERTIFICATE_SETS,
    TEST_CSR_REQUEST_ASN1,
    TEST_NOC_CERT_CAT_ASN1,
    TEST_PRIVATE_KEY,
    TEST_PUBLIC_KEY,
} from "./TestCertificates.js";

describe("CertificateManager", () => {
    const cm = new CertificateManager(new StandardCrypto());

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
                    expect(Bytes.toHex(TlvRootCertificate.encode(rootTlv))).equal(Bytes.toHex(certs.ROOT.TLV));
                });

                if ("ICAC" in certs) {
                    it("recode intermediate certificate", () => {
                        const icacTlv = TlvIntermediateCertificate.decode(certs.ICAC.TLV);
                        expect(Bytes.toHex(TlvIntermediateCertificate.encode(icacTlv))).equal(
                            Bytes.toHex(certs.ICAC.TLV),
                        );
                    });
                }

                it("recode operational certificate", () => {
                    const nocTlv = TlvOperationalCertificate.decode(certs.NOC.TLV);
                    expect(Bytes.toHex(TlvOperationalCertificate.encode(nocTlv))).equal(Bytes.toHex(certs.NOC.TLV));
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
                if ("ASN1" in certs.ROOT) {
                    it("encode root certificate", () => {
                        const rootTlv = TlvRootCertificate.decode(certs.ROOT.TLV);
                        expect(Bytes.toHex(cm.rootCertToAsn1(rootTlv))).equal(
                            // @ts-expect-error ASN1 might be absent, but checked above
                            Bytes.toHex(certs.ROOT.ASN1),
                        );
                    });
                }

                if ("ICAC" in certs && "ASN1" in certs.ICAC) {
                    it("encode intermediate certificate", () => {
                        const icacTlv = TlvIntermediateCertificate.decode(certs.ICAC.TLV);
                        expect(Bytes.toHex(cm.intermediateCaCertToAsn1(icacTlv))).equal(
                            // @ts-expect-error ASN1 might not be in TlvIntermediateCertificate
                            Bytes.toHex(certs.ICAC.ASN1),
                        );
                    });
                }

                if ("ASN1" in certs.NOC) {
                    it("encode operational certificate", () => {
                        const nocTlv = TlvOperationalCertificate.decode(certs.NOC.TLV);
                        expect(Bytes.toHex(cm.nodeOperationalCertToAsn1(nocTlv))).equal(
                            // @ts-expect-error ASN1 might not be in TlvOperationalCertificate
                            Bytes.toHex(certs.NOC.ASN1),
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
                it("verify root certificate", async () => {
                    const rootTlv = TlvRootCertificate.decode(certs.ROOT.TLV);
                    await cm.verifyRootCertificate(rootTlv);
                });

                if ("ICAC" in certs) {
                    it("verify intermediate certificate via ROOT", async () => {
                        const rootCert = TlvRootCertificate.decode(certs.ROOT.TLV);
                        const icacCert = TlvIntermediateCertificate.decode(certs.ICAC.TLV);
                        await cm.verifyIntermediateCaCertificate(rootCert, icacCert);
                    });

                    it("verify operational certificate via ICAC and ROOT", async () => {
                        const rootCert = TlvRootCertificate.decode(certs.ROOT.TLV);
                        const icacCert = TlvIntermediateCertificate.decode(certs.ICAC.TLV);
                        const nocCert = TlvOperationalCertificate.decode(certs.NOC.TLV);
                        await cm.verifyNodeOperationalCertificate(nocCert, rootCert, icacCert);
                    });

                    it("verify operational certificate via ICAC and ROOT with fabricId in root matching", async () => {
                        const rootCert = TlvRootCertificate.decode(certs.ROOT.TLV);
                        const icacCert = TlvIntermediateCertificate.decode(certs.ICAC.TLV);
                        const nocCert = TlvOperationalCertificate.decode(certs.NOC.TLV);
                        rootCert.subject.fabricId = nocCert.subject.fabricId;
                        icacCert.subject.fabricId = undefined;
                        await cm.verifyNodeOperationalCertificate(nocCert, rootCert, icacCert);
                    });

                    it("verify operational certificate via ICAC and ROOT with fabricId in ica matching", async () => {
                        const rootCert = TlvRootCertificate.decode(certs.ROOT.TLV);
                        const icacCert = TlvIntermediateCertificate.decode(certs.ICAC.TLV);
                        const nocCert = TlvOperationalCertificate.decode(certs.NOC.TLV);
                        rootCert.subject.fabricId = undefined;
                        icacCert.subject.fabricId = nocCert.subject.fabricId;
                        await cm.verifyNodeOperationalCertificate(nocCert, rootCert, icacCert);
                    });

                    it("verify operational certificate via ICAC and ROOT with fabricId in all matching", async () => {
                        const rootCert = TlvRootCertificate.decode(certs.ROOT.TLV);
                        const icacCert = TlvIntermediateCertificate.decode(certs.ICAC.TLV);
                        const nocCert = TlvOperationalCertificate.decode(certs.NOC.TLV);
                        rootCert.subject.fabricId = nocCert.subject.fabricId;
                        icacCert.subject.fabricId = nocCert.subject.fabricId;
                        await cm.verifyNodeOperationalCertificate(nocCert, rootCert, icacCert);
                    });

                    it("verify operational certificate via ICAC and ROOT with fabricId in root not matching", async () => {
                        const rootCert = TlvRootCertificate.decode(certs.ROOT.TLV);
                        const icacCert = TlvIntermediateCertificate.decode(certs.ICAC.TLV);
                        const nocCert = TlvOperationalCertificate.decode(certs.NOC.TLV);
                        rootCert.subject.fabricId = FabricId(nocCert.subject.fabricId + 1n);
                        icacCert.subject.fabricId = undefined;
                        await expect(
                            cm.verifyNodeOperationalCertificate(nocCert, rootCert, icacCert),
                        ).to.be.rejectedWith(
                            CertificateError,
                            `FabricId in NoC certificate does not match the fabricId in the parent certificate. "${rootCert.subject.fabricId.toString()}" !== "${nocCert.subject.fabricId.toString()}"`,
                        );
                    });

                    it("verify operational certificate via ICAC and ROOT with fabricId in ica not matching", async () => {
                        const rootCert = TlvRootCertificate.decode(certs.ROOT.TLV);
                        const icacCert = TlvIntermediateCertificate.decode(certs.ICAC.TLV);
                        const nocCert = TlvOperationalCertificate.decode(certs.NOC.TLV);
                        rootCert.subject.fabricId = undefined;
                        icacCert.subject.fabricId = FabricId(nocCert.subject.fabricId + 1n);
                        await expect(
                            cm.verifyNodeOperationalCertificate(nocCert, rootCert, icacCert),
                        ).to.be.rejectedWith(
                            CertificateError,
                            `FabricId in NoC certificate does not match the fabricId in the parent certificate. "${icacCert.subject.fabricId.toString()}" !== "${nocCert.subject.fabricId.toString()}"`,
                        );
                    });
                } else {
                    it("verify operational certificate via ROOT only", async () => {
                        const rootCert = TlvRootCertificate.decode(certs.ROOT.TLV);
                        const nocCert = TlvOperationalCertificate.decode(certs.NOC.TLV);
                        await cm.verifyNodeOperationalCertificate(nocCert, rootCert);
                    });
                }
            });
        });
    });

    describe("special Noc encoding cases", () => {
        it("validates TLV order preserve", () => {
            const NOC_JSON = {
                serialNumber: Bytes.fromHex("01"),
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
                ellipticCurvePublicKey: Bytes.fromHex(
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
                    subjectKeyIdentifier: Bytes.fromHex("50a7b210085872f47492e9442ccb2bfec82097da"),
                    authorityKeyIdentifier: Bytes.fromHex("9f833bc968b9c7ce347b1d10f046ebda0aeb0b3e"),
                },
                signature: Bytes.fromHex(
                    "3fcd56cf81d769100934b32f6a8b07afddfbf6c32f01e97385f251b8c71bc631a876c56fac76dd3c81449b71a0a450d28d9eaf314ccd3a166b61cddd965829f1",
                ),
            };
            const NOC_ASN1 = cm.nodeOperationalCertToAsn1(NOC_JSON);
            const NOC_TLV = TlvOperationalCertificate.encode(NOC_JSON);

            const unTlv = TlvOperationalCertificate.decode(NOC_TLV);
            const unAsn1 = cm.nodeOperationalCertToAsn1(unTlv);

            expect(unTlv).to.deep.equal(NOC_JSON);
            expect(Object.keys(unTlv.subject)).to.deep.equal(Object.keys(NOC_JSON.subject));
            expect(Bytes.toHex(unAsn1)).to.deep.equal(Bytes.toHex(NOC_ASN1));
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
            const result = cm.nodeOperationalCertToAsn1(nocWithCat);

            expect(Bytes.toHex(result)).equal(Bytes.toHex(TEST_NOC_CERT_CAT_ASN1));
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
            expect(() => cm.nodeOperationalCertToAsn1(nocWithCat)).to.throw(
                ValidationOutOfBoundsError,
                "Too many CaseAuthenticatedTags (4).",
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
            expect(() => cm.nodeOperationalCertToAsn1(nocWithCat)).to.throw(
                ValidationOutOfBoundsError,
                "CASEAuthenticatedTags field contains duplicate identifier values.",
            );
        });
    });

    describe("decodeIcacCertificate", () => {
        it("decodes a correct ICAC cert", () => {
            const specsIcacCertTlv = TlvIntermediateCertificate.decode(
                CERTIFICATE_SETS["Matter 1.2 Specification Certificates"].ICAC.TLV,
            );
            expect(specsIcacCertTlv).deep.equal({
                serialNumber: new Uint8Array([45, 180, 68, 133, 86, 65, 174, 223]),
                signatureAlgorithm: 1,
                issuer: { rcacId: BigInt("14612714909889200129") },
                notBefore: 656087023,
                notAfter: 1287239022,
                subject: { icacId: BigInt("14612714909889200131") },
                publicKeyAlgorithm: 1,
                ellipticCurveIdentifier: 1,
                ellipticCurvePublicKey: new Uint8Array([
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
                    subjectKeyIdentifier: new Uint8Array([
                        83, 82, 215, 5, 158, 156, 21, 165, 8, 144, 104, 98, 134, 72, 1, 162, 159, 31, 65, 211,
                    ]),
                    authorityKeyIdentifier: new Uint8Array([
                        19, 175, 129, 171, 55, 55, 75, 46, 210, 169, 100, 155, 18, 183, 163, 164, 40, 126, 21, 29,
                    ]),
                },
                signature: new Uint8Array([
                    132, 26, 6, 212, 59, 94, 159, 236, 210, 78, 135, 177, 36, 78, 181, 28, 106, 44, 242, 13, 155, 94,
                    107, 160, 127, 17, 230, 0, 47, 126, 12, 163, 78, 50, 166, 2, 195, 96, 157, 0, 146, 211, 72, 189,
                    189, 25, 138, 17, 70, 70, 189, 65, 207, 16, 55, 131, 100, 26, 226, 94, 63, 35, 253, 38,
                ]),
            });
        });
    });

    describe("createCertificateSigningRequest", () => {
        it("generates a valid CSR", async () => {
            const result = await cm.createCertificateSigningRequest(
                PrivateKey(TEST_PRIVATE_KEY, { publicKey: TEST_PUBLIC_KEY }),
            );

            const derNode = DerCodec.decode(result);
            expect(derNode[DerKey.Elements]?.length).equal(3);
            const [requestNode, signatureAlgorithmNode, signatureNode] = derNode[DerKey.Elements] as DerNode[];
            expect(DerCodec.encode(signatureAlgorithmNode)).deep.equal(DerCodec.encode(X962.EcdsaWithSHA256));
            const requestBytes = DerCodec.encode(requestNode);
            expect(requestBytes).deep.equal(TEST_CSR_REQUEST_ASN1);
            cm.crypto.verifyEcdsa(
                PublicKey(TEST_PUBLIC_KEY),
                DerCodec.encode(requestNode),
                signatureNode[DerKey.Bytes],
                "der",
            );
        });
    });

    describe("getPublicKeyFromCsr", () => {
        it("get the public key from the CSR", async () => {
            const csr = await cm.createCertificateSigningRequest(
                PrivateKey(TEST_PRIVATE_KEY, { publicKey: TEST_PUBLIC_KEY }),
            );

            const result = await cm.getPublicKeyFromCsr(csr);

            expect(result).deep.equal(TEST_PUBLIC_KEY);
        });
    });
});
