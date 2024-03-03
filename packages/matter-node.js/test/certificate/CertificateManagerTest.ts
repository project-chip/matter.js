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
} from "@project-chip/matter.js/certificate";
import { BYTES_KEY, DerCodec, DerNode, ELEMENTS_KEY, EcdsaWithSHA256_X962 } from "@project-chip/matter.js/codec";
import { ValidationError } from "@project-chip/matter.js/common";
import { Crypto, PrivateKey, PublicKey } from "@project-chip/matter.js/crypto";
import { CaseAuthenticatedTag } from "@project-chip/matter.js/datatype";
import { ByteArray } from "@project-chip/matter.js/util";
import * as assert from "assert";

const ROOT_CERT_TLV = TlvRootCertificate.decode(
    ByteArray.fromHex(
        "153001010024020137032414001826048012542826058015203b37062414001824070124080130094104d89eb7e3f3226d0918f4b85832457bb9981bca7aaef58c18fb5ec07525e472b2bd1617fb75ee41bd388f94ae6a6070efc896777516a5c54aff74ec0804cdde9d370a3501290118240260300414e766069362d7e35b79687161644d222bdde93a68300514e766069362d7e35b79687161644d222bdde93a6818300b404e8fb06526f0332b3e928166864a6d29cade53fb5b8918a6d134d0994bf1ae6dce6762dcba99e80e96249d2f1ccedb336b26990f935dba5a0b9e5b4c9e5d1d8f18",
    ),
);
const ROOT_CERT_ASN1 = ByteArray.fromHex(
    "3082013ca003020102020100300a06082a8648ce3d04030230223120301e060a2b0601040182a27c01040c1030303030303030303030303030303030301e170d3231303631303030303030305a170d3331303630383030303030305a30223120301e060a2b0601040182a27c01040c10303030303030303030303030303030303059301306072a8648ce3d020106082a8648ce3d03010703420004d89eb7e3f3226d0918f4b85832457bb9981bca7aaef58c18fb5ec07525e472b2bd1617fb75ee41bd388f94ae6a6070efc896777516a5c54aff74ec0804cdde9da3633061300f0603551d130101ff040530030101ff300e0603551d0f0101ff040403020106301d0603551d0e04160414e766069362d7e35b79687161644d222bdde93a68301f0603551d23041830168014e766069362d7e35b79687161644d222bdde93a68",
);

const NOC_CERT_TLV = TlvOperationalCertificate.decode(
    ByteArray.fromHex(
        "153001010124020137032414001826048012542826058015203b37062415012411da1824070124080130094104e0bf14a052dd7ab08d485e20570c6e6ac6fbb99513d3aacd66808c722941ae0538e9323ec89f39228bd228270f1716539cecc64e62b26c58c3355d68935d87b2370a350128011824020136030402040118300414c524e05cad04a826ecda84501766732b5f181354300514e766069362d7e35b79687161644d222bdde93a6818300b40aca27ff4b68e81168295b85753e128226ec3d7b35916be9b32f4311bb4eb39a3b9e5583c8d762be1e9332647d61088bb057b6844892654c97624797d0390c9c318",
    ),
);
const NOC_CERT_ASN1 = ByteArray.fromHex(
    "3082017fa003020102020101300a06082a8648ce3d04030230223120301e060a2b0601040182a27c01040c1030303030303030303030303030303030301e170d3231303631303030303030305a170d3331303630383030303030305a30443120301e060a2b0601040182a27c01050c10303030303030303030303030303030313120301e060a2b0601040182a27c01010c10303030303030303030303030303044413059301306072a8648ce3d020106082a8648ce3d03010703420004e0bf14a052dd7ab08d485e20570c6e6ac6fbb99513d3aacd66808c722941ae0538e9323ec89f39228bd228270f1716539cecc64e62b26c58c3355d68935d87b2a38183308180300c0603551d130101ff04023000300e0603551d0f0101ff04040302078030200603551d250101ff0416301406082b0601050507030206082b06010505070301301d0603551d0e04160414c524e05cad04a826ecda84501766732b5f181354301f0603551d23041830168014e766069362d7e35b79687161644d222bdde93a68",
);

const NOC_CERT_CAT_ASN1 = ByteArray.fromHex(
    "308201cea003020102020101300a06082a8648ce3d04030230223120301e060a2b0601040182a27c01040c1030303030303030303030303030303030301e170d3231303631303030303030305a170d3331303630383030303030305a3081923120301e060a2b0601040182a27c01050c10303030303030303030303030303030313120301e060a2b0601040182a27c01010c103030303030303030303030303030444131183016060a2b0601040182a27c01060c08313233343536373831183016060a2b0601040182a27c01060c08353637383930313231183016060a2b0601040182a27c01060c0839303132333435363059301306072a8648ce3d020106082a8648ce3d03010703420004e0bf14a052dd7ab08d485e20570c6e6ac6fbb99513d3aacd66808c722941ae0538e9323ec89f39228bd228270f1716539cecc64e62b26c58c3355d68935d87b2a38183308180300c0603551d130101ff04023000300e0603551d0f0101ff04040302078030200603551d250101ff0416301406082b0601050507030206082b06010505070301301d0603551d0e04160414c524e05cad04a826ecda84501766732b5f181354301f0603551d23041830168014e766069362d7e35b79687161644d222bdde93a68",
);

const ICAC_CERT_TLV_SPECS = TlvIntermediateCertificate.decode(
    ByteArray.fromHex(
        "153001082db444855641aedf2402013703271401000000cacacaca182604ef171b2726056eb5b94c3706271303000000cacacaca1824070124080130094104c5d0861bb8f90c405c12314e4c5ebeea939f72774bcc33239e2f59f6f46af8dc7d4682a0e3ccc646e6df29ea86bf562ae720a898337d383f32c0a09e416019ea370a35012901182402603004145352d7059e9c15a508906862864801a29f1f41d330051413af81ab37374b2ed2a9649b12b7a3a4287e151d18300b40841a06d43b5e9fecd24e87b1244eb51c6a2cf20d9b5e6ba07f11e6002f7e0ca34e32a602c3609d0092d348bdbd198a114646bd41cf103783641ae25e3f23fd2618",
    ),
);

const PRIVATE_KEY = ByteArray.fromHex("727F1005CBA47ED7822A9D930943621617CFD3B79D9AF528B801ECF9F1992204");
const PUBLIC_KEY = ByteArray.fromHex(
    "0462e2b6e1baff8d74a6fd8216c4cb67a3363a31e691492792e61aee610261481396725ef95e142686ba98f339b0ff65bc338bec7b9e8be0bdf3b2774982476220",
);
const CSR_REQUEST_ASN1 = ByteArray.fromHex(
    "3070020100300e310c300a060355040a0c034353523059301306072a8648ce3d020106082a8648ce3d0301070342000462e2b6e1baff8d74a6fd8216c4cb67a3363a31e691492792e61aee610261481396725ef95e142686ba98f339b0ff65bc338bec7b9e8be0bdf3b2774982476220a000",
);

describe("CertificateManager", () => {
    describe("rootCertToAsn1", () => {
        it("generates the correct ASN1 bytes", () => {
            const result = CertificateManager.rootCertToAsn1(ROOT_CERT_TLV);

            assert.equal(result.toHex(), ROOT_CERT_ASN1.toHex());
        });
    });

    describe("nocCertToAsn1", () => {
        it("generates the correct ASN1 bytes without CASE Authenticated Tags", () => {
            const result = CertificateManager.nocCertToAsn1(NOC_CERT_TLV);

            assert.equal(result.toHex(), NOC_CERT_ASN1.toHex());
        });

        it("generates the correct ASN1 bytes with three different CASE Authenticated Tags", () => {
            const nocWithCat = {
                ...NOC_CERT_TLV,
                subject: {
                    ...NOC_CERT_TLV.subject,
                    caseAuthenticatedTags: [
                        CaseAuthenticatedTag(0x12345678),
                        CaseAuthenticatedTag(0x56789012),
                        CaseAuthenticatedTag(0x90123456),
                    ],
                },
            };
            const result = CertificateManager.nocCertToAsn1(nocWithCat);

            assert.equal(result.toHex(), NOC_CERT_CAT_ASN1.toHex());
        });

        it("throws error if more then 3 tags are provided", () => {
            const nocWithCat = {
                ...NOC_CERT_TLV,
                subject: {
                    ...NOC_CERT_TLV.subject,
                    caseAuthenticatedTags: [
                        CaseAuthenticatedTag(0x12345678),
                        CaseAuthenticatedTag(0x56789012),
                        CaseAuthenticatedTag(0x90123456),
                        CaseAuthenticatedTag(0x12345678),
                    ],
                },
            };
            assert.throws(
                () => CertificateManager.nocCertToAsn1(nocWithCat),
                new ValidationError("Too many CaseAuthenticatedTags (4)."),
            );
        });

        it("throws error if tags contain duplicate identifier values", () => {
            const nocWithCat = {
                ...NOC_CERT_TLV,
                subject: {
                    ...NOC_CERT_TLV.subject,
                    caseAuthenticatedTags: [
                        CaseAuthenticatedTag(0x12345678),
                        CaseAuthenticatedTag(0x56789012),
                        CaseAuthenticatedTag(0x12341234),
                    ],
                },
            };
            assert.throws(
                () => CertificateManager.nocCertToAsn1(nocWithCat),
                new ValidationError("CASE Authenticated Tags field contains duplicate identifier values."),
            );
        });
    });

    describe("validateRootCertificate", () => {
        it("validates a correct root cert", () => {
            CertificateManager.validateRootCertificate(ROOT_CERT_TLV);
        });
    });

    describe("validateNocCertificate", () => {
        it("validates a correct NOC cert", () => {
            CertificateManager.validateNocCertificate(ROOT_CERT_TLV, NOC_CERT_TLV);
        });
    });

    describe("decodeIcacCertificate", () => {
        it("decodes a correct ICAC cert", () => {
            assert.deepEqual(ICAC_CERT_TLV_SPECS, {
                serialNumber: new ByteArray([45, 180, 68, 133, 86, 65, 174, 223]),
                signatureAlgorithm: 1,
                issuer: { issuerRcacId: BigInt("14612714909889200129") },
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
                    keyUsage: 96,
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
                PrivateKey(PRIVATE_KEY, { publicKey: PUBLIC_KEY }),
            );

            const derNode = DerCodec.decode(result);
            assert.equal(derNode[ELEMENTS_KEY]?.length, 3);
            const [requestNode, signatureAlgorithmNode, signatureNode] = derNode[ELEMENTS_KEY] as DerNode[];
            assert.deepEqual(DerCodec.encode(signatureAlgorithmNode), DerCodec.encode(EcdsaWithSHA256_X962));
            const requestBytes = DerCodec.encode(requestNode);
            assert.deepEqual(requestBytes, CSR_REQUEST_ASN1);
            Crypto.verify(PublicKey(PUBLIC_KEY), DerCodec.encode(requestNode), signatureNode[BYTES_KEY], "der");
        });
    });

    describe("getPublicKeyFromCsr", () => {
        it("get the public key from the CSR", () => {
            const csr = CertificateManager.createCertificateSigningRequest(
                PrivateKey(PRIVATE_KEY, { publicKey: PUBLIC_KEY }),
            );

            const result = CertificateManager.getPublicKeyFromCsr(csr);

            assert.deepEqual(result, PUBLIC_KEY);
        });
    });
});
