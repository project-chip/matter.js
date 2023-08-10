/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Time, TimeFake } from "@project-chip/matter.js/time";
import { ByteArray } from "@project-chip/matter.js/util";

Time.get = () => new TimeFake(0);

import { Crypto } from "@project-chip/matter.js/crypto";
import { CryptoNode } from "../../src/crypto/CryptoNode";

Crypto.get = () => new CryptoNode();

import { FabricId, FabricIndex, NodeId, VendorId } from "@project-chip/matter.js/datatype";
import { Fabric, FabricBuilder } from "@project-chip/matter.js/fabric";
import * as assert from "assert";

const ROOT_CERT = ByteArray.fromHex(
    "153001010024020137032414001826048012542826058015203b37062414001824070124080130094104d89eb7e3f3226d0918f4b85832457bb9981bca7aaef58c18fb5ec07525e472b2bd1617fb75ee41bd388f94ae6a6070efc896777516a5c54aff74ec0804cdde9d370a3501290118240260300414e766069362d7e35b79687161644d222bdde93a68300514e766069362d7e35b79687161644d222bdde93a6818300b404e8fb06526f0332b3e928166864a6d29cade53fb5b8918a6d134d0994bf1ae6dce6762dcba99e80e96249d2f1ccedb336b26990f935dba5a0b9e5b4c9e5d1d8f1818181824ff0118",
);
const NEW_OP_CERT = ByteArray.fromHex(
    "153001010124020137032414001826048012542826058015203b370624150124110918240701240801300941049ac1dc9995e6897f2bf1420a6efdba30781ac3dcdb7bb15e993050ff0ce92c52727b029c30f11f163b177d3bfa37f015db156994801f0e0f9b64c72bf8a15153370a35012801182402013603040204011830041402cce0d7bfa29e98e454be38e27bfe6c0f162302300514e766069362d7e35b79687161644d222bdde93a6818300b4050e8183c290f438a57516faea006282d6d2b5178d5d15dfcc3ec8a9232db942894ff2d2ce941d3b42dd8a2cd51eea4f3f50b66757959368868c3a0a1b5fe665f18",
);
const IPK_KEY = ByteArray.fromHex("74656d706f726172792069706b203031");
const OPERATIONAL_ID = ByteArray.fromHex("d559af361549a9a2");
const TEST_ROOT_NODE = NodeId(BigInt(1));

const TEST_FABRIC_INDEX = FabricIndex(1);
const TEST_FABRIC_ID = FabricId(BigInt("0x2906C908D115D362"));
const TEST_NODE_ID = NodeId(BigInt("0xCD5544AA7B13EF14"));
const TEST_ROOT_PUBLIC_KEY = ByteArray.fromHex(
    "044a9f42b1ca4840d37292bbc7f6a7e11e22200c976fc900dbc98a7a383a641cb8254a2e56d4e295a847943b4e3897c4a773e930277b4d9fbede8a052686bfacfa",
);
const TEST_IDENTITY_PROTECTION_KEY = ByteArray.fromHex("9bc61cd9c62a2df6d64dfcaa9dc472d4");
const TEST_RANDOM = ByteArray.fromHex("7e171231568dfa17206b3accf8faec2f4d21b580113196f47c7c4deb810a73dc");
const EXPECTED_DESTINATION_ID = ByteArray.fromHex("dc35dd5fc9134cc5544538c9c3fc4297c1ec3370c839136a80e10796451d4c53");

const TEST_RANDOM_2 = ByteArray.fromHex("147546b42b4212ae62e3b393b973e7892e02a86d387d8f4829b0861495b5743a");
const TEST_NODE_ID_2 = NodeId(BigInt("0x0000000000000009"));
const EXPECTED_DESTINATION_ID_2 = ByteArray.fromHex("e62053e0b5226773ab96833d79133c865ddb5a67c9ea932471c73405afcd68da");

const TEST_FABRIC_ID_3 = FabricId(BigInt("0x0000000000000001"));
const TEST_NODE_ID_3 = NodeId(BigInt("0x0000000000000055"));
const TEST_ROOT_PUBLIC_KEY_3 = ByteArray.fromHex(
    "04d89eb7e3f3226d0918f4b85832457bb9981bca7aaef58c18fb5ec07525e472b2bd1617fb75ee41bd388f94ae6a6070efc896777516a5c54aff74ec0804cdde9d",
);
const TEST_IDENTITY_PROTECTION_KEY_3 = ByteArray.fromHex("0c677d9b5ac585827b577470bd9bd516");
const TEST_RANDOM_3 = ByteArray.fromHex("0b2a71876d3d090d37cb5286168ab9be0d2e7e0ccbedc1f55331b8a8051ee02f");
const EXPECTED_DESTINATION_ID_3 = ByteArray.fromHex("f7f7009606c61927af62502067581b4b0d27f2f22108e2c82c9f0ddd99ab3557");

describe("FabricBuilder", () => {
    describe("build", () => {
        const builder = new FabricBuilder(TEST_FABRIC_INDEX);
        builder.setRootVendorId(VendorId(0));
        builder.setRootNodeId(TEST_ROOT_NODE);
        builder.setRootCert(ROOT_CERT);
        builder.setOperationalCert(NEW_OP_CERT);
        builder.setIdentityProtectionKey(IPK_KEY);

        it("generates the correct compressed Fabric ID", async () => {
            const result = (await builder.build()).operationalId;

            assert.equal(result.toHex(), OPERATIONAL_ID.toHex());
        });

        it("generates the expected operationalIdentityProtectionKey", async () => {
            const result = (await builder.build()).operationalIdentityProtectionKey;

            assert.equal(result.toHex(), TEST_IDENTITY_PROTECTION_KEY_3.toHex());
        });
    });
});

describe("Fabric", () => {
    describe("getDestinationId", () => {
        it("generates the correct destination ID", () => {
            const fabric = new Fabric(
                TEST_FABRIC_INDEX,
                TEST_FABRIC_ID,
                TEST_NODE_ID,
                TEST_ROOT_NODE,
                Buffer.alloc(0),
                TEST_ROOT_PUBLIC_KEY,
                Crypto.createKeyPair(),
                VendorId(0),
                Buffer.alloc(0),
                Buffer.alloc(0),
                TEST_IDENTITY_PROTECTION_KEY,
                undefined,
                Buffer.alloc(0),
                "",
            );

            const result = fabric.getDestinationId(TEST_NODE_ID, TEST_RANDOM);

            assert.equal(result.toHex(), EXPECTED_DESTINATION_ID.toHex());
        });

        it("generates the correct destination ID 2", async () => {
            const builder = new FabricBuilder(TEST_FABRIC_INDEX);
            builder.setRootVendorId(VendorId(0));
            builder.setRootCert(ROOT_CERT);
            builder.setRootNodeId(TEST_ROOT_NODE);
            builder.setOperationalCert(NEW_OP_CERT);
            builder.setIdentityProtectionKey(IPK_KEY);
            const fabric = await builder.build();

            const result = fabric.getDestinationId(TEST_NODE_ID_2, TEST_RANDOM_2);

            assert.equal(result.toHex(), EXPECTED_DESTINATION_ID_2.toHex());
        });

        it("generates the correct destination ID 3", () => {
            const fabric = new Fabric(
                TEST_FABRIC_INDEX,
                TEST_FABRIC_ID_3,
                TEST_NODE_ID_3,
                TEST_ROOT_NODE,
                Buffer.alloc(0),
                TEST_ROOT_PUBLIC_KEY_3,
                Crypto.createKeyPair(),
                VendorId(0),
                Buffer.alloc(0),
                Buffer.alloc(0),
                TEST_IDENTITY_PROTECTION_KEY_3,
                undefined,
                Buffer.alloc(0),
                "",
            );

            const result = fabric.getDestinationId(TEST_NODE_ID_3, TEST_RANDOM_3);

            assert.equal(result.toHex(), EXPECTED_DESTINATION_ID_3.toHex());
        });
    });
});
