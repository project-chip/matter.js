/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import {
    BitByteArray,
    ContextTagged,
    DerCodec,
    EcdsaWithSHA256_X962,
    OrganisationName_X520,
    PublicKeyEcPrime256v1_X962,
} from "../../src/codec/DerCodec.js";
import { ByteArray } from "../../src/util/ByteArray.js";

const DECODED = {
    request: {
        version: 0,
        subject: { organization: OrganisationName_X520("CSR") },
        publicKey: PublicKeyEcPrime256v1_X962(
            ByteArray.fromHex(
                "00044BD687ABD29B59D8B12E8C6614BD1664ADB2D402455B6CA3EF4E581E3BE344B83212E614F27EA4EEC8F31C75747438739B1D451A7EAB3A30542A0A7D1882A459",
            ),
        ),
        endSignedBytes: ContextTagged(0),
    },
    signAlgorithm: EcdsaWithSHA256_X962,
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

            expect(result.toHex()).toBe(ENCODED.toHex());
        });
    });
});
