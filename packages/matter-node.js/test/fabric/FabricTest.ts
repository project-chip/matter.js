/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Crypto } from "@project-chip/matter.js/crypto";
import { ByteArray } from "@project-chip/matter.js/util";

import { FabricId, FabricIndex, NodeId, VendorId } from "@project-chip/matter.js/datatype";
import { Fabric } from "@project-chip/matter.js/fabric";
import { SecureSession } from "@project-chip/matter.js/session";
import * as assert from "assert";
import { buildFabric } from "./FabricTestingUtil.js";

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
        it("generates the correct compressed Fabric ID", async () => {
            const result = (await buildFabric()).operationalId;

            assert.equal(result.toHex(), OPERATIONAL_ID.toHex());
        });

        it("generates the expected operationalIdentityProtectionKey", async () => {
            const result = (await buildFabric()).operationalIdentityProtectionKey;

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
            const fabric = await buildFabric();

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

    describe("remove from session", () => {
        it("removes all sessions when removing fabric", async () => {
            const DECRYPT_KEY = ByteArray.fromHex("bacb178b2588443d5d5b1e4559e7accc");
            const ENCRYPT_KEY = ByteArray.fromHex("66951379d0a6d151cf5472cccf13f360");

            const fabric = await buildFabric();

            let session1Destroyed = false;
            let session2Destroyed = false;
            const secureSession1 = new SecureSession({
                context: {} as any,
                id: 1,
                fabric: undefined,
                peerNodeId: NodeId.UNSPECIFIED_NODE_ID,
                peerSessionId: 0x8d4b,
                decryptKey: DECRYPT_KEY,
                encryptKey: ENCRYPT_KEY,
                attestationKey: Buffer.alloc(0),
                closeCallback: async () => {
                    session1Destroyed = true;
                },
                isInitiator: true,
            });
            fabric.addSession(secureSession1);
            const secureSession2 = new SecureSession({
                context: {} as any,
                id: 2,
                fabric: undefined,
                peerNodeId: NodeId.UNSPECIFIED_NODE_ID,
                peerSessionId: 0x8d4b,
                decryptKey: DECRYPT_KEY,
                encryptKey: ENCRYPT_KEY,
                attestationKey: Buffer.alloc(0),
                closeCallback: async () => {
                    session2Destroyed = true;
                },
                isInitiator: true,
            });
            fabric.addSession(secureSession2);

            let removeCallbackCalled = false;
            fabric.addRemoveCallback(async () => {
                removeCallbackCalled = true;
            });

            await fabric.remove(secureSession2.id);

            assert.equal(session1Destroyed, true);
            assert.equal(secureSession1.closingAfterExchangeFinished, false);
            assert.equal(secureSession1.sendCloseMessageWhenClosing, false);
            assert.equal(session2Destroyed, false); // Not destroyed directly because delayed because was session of fabric removal
            assert.equal(secureSession2.closingAfterExchangeFinished, true);
            assert.equal(secureSession2.sendCloseMessageWhenClosing, false);
            assert.equal(removeCallbackCalled, true);
        });

        it("removes one sessions without doing anything", async () => {
            const DECRYPT_KEY = ByteArray.fromHex("bacb178b2588443d5d5b1e4559e7accc");
            const ENCRYPT_KEY = ByteArray.fromHex("66951379d0a6d151cf5472cccf13f360");

            const fabric = await buildFabric();

            let session1Destroyed = false;
            let session2Destroyed = false;
            const secureSession1 = new SecureSession({
                context: {} as any,
                id: 1,
                fabric: undefined,
                peerNodeId: NodeId.UNSPECIFIED_NODE_ID,
                peerSessionId: 0x8d4b,
                decryptKey: DECRYPT_KEY,
                encryptKey: ENCRYPT_KEY,
                attestationKey: Buffer.alloc(0),
                closeCallback: async () => {
                    session1Destroyed = true;
                },
                isInitiator: true,
            });
            fabric.addSession(secureSession1);
            const secureSession2 = new SecureSession({
                context: {} as any,
                id: 2,
                fabric: undefined,
                peerNodeId: NodeId.UNSPECIFIED_NODE_ID,
                peerSessionId: 0x8d4b,
                decryptKey: DECRYPT_KEY,
                encryptKey: ENCRYPT_KEY,
                attestationKey: Buffer.alloc(0),
                closeCallback: async () => {
                    session2Destroyed = true;
                },
                isInitiator: true,
            });
            fabric.addSession(secureSession2);
            fabric.removeSession(secureSession1);

            assert.equal(session1Destroyed, false);
            assert.equal(session2Destroyed, false);
        });
    });
});
