/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { X520, X962 } from "../../src/certificate/CertificateDerTypes.js";
import { BitByteArray, ContextTagged, DatatypeOverride, DerCodec, DerType } from "../../src/codec/DerCodec.js";

import { ByteArray } from "../../src/util/ByteArray.js";

const DECODED = {
    request: {
        version: 0,
        subject: { organization: X520.OrganisationName("CSR") },
        publicKey: X962.PublicKeyEcPrime256v1(
            ByteArray.fromHex(
                "00044BD687ABD29B59D8B12E8C6614BD1664ADB2D402455B6CA3EF4E581E3BE344B83212E614F27EA4EEC8F31C75747438739B1D451A7EAB3A30542A0A7D1882A459",
            ),
        ),
        endSignedBytes: ContextTagged(0),
    },
    signAlgorithm: X962.EcdsaWithSHA256,
    signature: BitByteArray(
        ByteArray.fromHex(
            "00304602210080861AD536EFF01CAD42816A8172F71BE3E4FD7230CF73A45E34945FE89D5D7202210087FC1F47ADB6D150580706865E2E21E2963C9C15006B64DAB5658BFB980A2AD3",
        ),
    ),
};

const ENCODED = ByteArray.fromHex(
    "3081cb3071020100300e310c300a060355040a0c03435352305a301306072a8648ce3d020106082a8648ce3d03010703430000044bd687abd29b59d8b12e8c6614bd1664adb2d402455b6ca3ef4e581e3be344b83212e614f27ea4eec8f31c75747438739b1d451a7eab3a30542a0a7d1882a459a000300a06082a8648ce3d040302034a0000304602210080861ad536eff01cad42816a8172f71be3e4fd7230cf73a45e34945fe89d5d7202210087fc1f47adb6d150580706865e2e21e2963c9c15006b64dab5658bfb980a2ad3",
);

describe("DerCodec", () => {
    describe("encode", () => {
        it("encodes a message", () => {
            const result = DerCodec.encode(DECODED);

            expect(result.toHex()).equal(ENCODED.toHex());
        });
    });

    describe("DER encode datatypes", () => {
        it("encodes Numbers correctly", () => {
            expect(DerCodec.encode(100).toHex()).equal("020164");
            expect(DerCodec.encode(10000000).toHex()).equal("020400989680");
            expect(DerCodec.encode(BigInt("0x123456789")).toHex()).equal("02050123456789");
            expect(DerCodec.encode(BigInt("0x1234567890")).toHex()).equal("02051234567890");
            expect(DerCodec.encode(BigInt("0x1234567890")).toHex()).equal("02051234567890");
            expect(DerCodec.encode(BigInt("0x1234567890abcdef")).toHex()).equal("02081234567890abcdef");
            expect(DerCodec.encode(BigInt("0x1234567890abcdef01234567890")).toHex()).equal(
                "020e01234567890abcdef01234567890",
            );
            expect(DerCodec.encode(BigInt("0x1234567890abcdef01234567890abcdef0123456")).toHex()).equal(
                "02141234567890abcdef01234567890abcdef0123456",
            );
            expect(
                DerCodec.encode(
                    DatatypeOverride(DerType.Integer, ByteArray.fromHex("1234567890abcdef01234567890abcdef0123456")),
                ).toHex(),
            ).equal("02141234567890abcdef01234567890abcdef0123456");
        });

        it("encodes BitStrings correctly", () => {
            expect(DerCodec.encode(DatatypeOverride(DerType.BitString, 0)).toHex()).equal("03020800");
            expect(DerCodec.encode(DatatypeOverride(DerType.BitString, 1)).toHex()).equal("03020780");
            expect(DerCodec.encode(DatatypeOverride(DerType.BitString, 0x60)).toHex()).equal("03020106");
        });

        it("encodes DateTime correctly", () => {
            expect(DerCodec.encode(new Date("2024-04-04 15:30:45Z")).toHex()).equal("170d3234303430343135333034355a");
        });

        it("encodes special non-well defined GeneralizedDate correctly", () => {
            expect(DerCodec.encode(X520.NON_WELL_DEFINED_DATE).toHex()).equal("180f39393939313233313233353935395a");
        });
    });
});
