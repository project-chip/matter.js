/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Bytes, Crypto, StorageBackendMemory, StorageManager } from "#general";
import { Fabric, FabricManager, SecureSession, SessionManager } from "#protocol";
import { FabricId, FabricIndex, NodeId, VendorId } from "#types";
import * as assert from "node:assert";
import { buildFabric } from "./FabricTestingUtil.js";

const OPERATIONAL_ID = Bytes.fromHex("d559af361549a9a2");
const TEST_ROOT_NODE = NodeId(BigInt(1));

const TEST_FABRIC_INDEX = FabricIndex(1);
const TEST_FABRIC_ID = FabricId(BigInt("0x2906C908D115D362"));
const TEST_NODE_ID = NodeId(BigInt("0xCD5544AA7B13EF14"));
const TEST_ROOT_PUBLIC_KEY = Bytes.fromHex(
    "044a9f42b1ca4840d37292bbc7f6a7e11e22200c976fc900dbc98a7a383a641cb8254a2e56d4e295a847943b4e3897c4a773e930277b4d9fbede8a052686bfacfa",
);
const TEST_IDENTITY_PROTECTION_KEY = Bytes.fromHex("9bc61cd9c62a2df6d64dfcaa9dc472d4");
const TEST_RANDOM = Bytes.fromHex("7e171231568dfa17206b3accf8faec2f4d21b580113196f47c7c4deb810a73dc");
const EXPECTED_DESTINATION_ID = Bytes.fromHex("dc35dd5fc9134cc5544538c9c3fc4297c1ec3370c839136a80e10796451d4c53");

const TEST_RANDOM_2 = Bytes.fromHex("147546b42b4212ae62e3b393b973e7892e02a86d387d8f4829b0861495b5743a");
const TEST_NODE_ID_2 = NodeId(BigInt("0x0000000000000009"));
const EXPECTED_DESTINATION_ID_2 = Bytes.fromHex("e62053e0b5226773ab96833d79133c865ddb5a67c9ea932471c73405afcd68da");

const TEST_FABRIC_ID_3 = FabricId(BigInt("0x0000000000000001"));
const TEST_NODE_ID_3 = NodeId(BigInt("0x0000000000000055"));
const TEST_ROOT_PUBLIC_KEY_3 = Bytes.fromHex(
    "04d89eb7e3f3226d0918f4b85832457bb9981bca7aaef58c18fb5ec07525e472b2bd1617fb75ee41bd388f94ae6a6070efc896777516a5c54aff74ec0804cdde9d",
);
const TEST_IDENTITY_PROTECTION_KEY_3 = Bytes.fromHex("0c677d9b5ac585827b577470bd9bd516");
const TEST_RANDOM_3 = Bytes.fromHex("0b2a71876d3d090d37cb5286168ab9be0d2e7e0ccbedc1f55331b8a8051ee02f");
const EXPECTED_DESTINATION_ID_3 = Bytes.fromHex("f7f7009606c61927af62502067581b4b0d27f2f22108e2c82c9f0ddd99ab3557");

describe("FabricBuilder", () => {
    describe("build", () => {
        it("generates the correct compressed Fabric ID", async () => {
            const result = (await buildFabric()).operationalId;

            assert.equal(Bytes.toHex(result), Bytes.toHex(OPERATIONAL_ID));
        });

        it("generates the expected operationalIdentityProtectionKey", async () => {
            const result = (await buildFabric()).operationalIdentityProtectionKey;

            assert.equal(Bytes.toHex(result), Bytes.toHex(TEST_IDENTITY_PROTECTION_KEY_3));
        });
    });
});

describe("Fabric", () => {
    describe("getDestinationId", () => {
        it("generates the correct destination ID", () => {
            const fabric = new Fabric({
                fabricIndex: TEST_FABRIC_INDEX,
                fabricId: TEST_FABRIC_ID,
                nodeId: TEST_NODE_ID,
                rootNodeId: TEST_ROOT_NODE,
                operationalId: Buffer.alloc(0),
                keyPair: Crypto.createKeyPair(),
                rootPublicKey: TEST_ROOT_PUBLIC_KEY,
                rootVendorId: VendorId(0),
                rootCert: Buffer.alloc(0),
                identityProtectionKey: Buffer.alloc(0),
                operationalIdentityProtectionKey: TEST_IDENTITY_PROTECTION_KEY,
                intermediateCACert: Buffer.alloc(0),
                operationalCert: Buffer.alloc(0),
                label: "",
            });

            const result = fabric.getDestinationId(TEST_NODE_ID, TEST_RANDOM);

            assert.equal(Bytes.toHex(result), Bytes.toHex(EXPECTED_DESTINATION_ID));
        });

        it("generates the correct destination ID 2", async () => {
            const fabric = await buildFabric();

            const result = fabric.getDestinationId(TEST_NODE_ID_2, TEST_RANDOM_2);

            assert.equal(Bytes.toHex(result), Bytes.toHex(EXPECTED_DESTINATION_ID_2));
        });

        it("generates the correct destination ID 3", () => {
            const fabric = new Fabric({
                fabricIndex: TEST_FABRIC_INDEX,
                fabricId: TEST_FABRIC_ID_3,
                nodeId: TEST_NODE_ID_3,
                rootNodeId: TEST_ROOT_NODE,
                operationalId: Buffer.alloc(0),
                keyPair: Crypto.createKeyPair(),
                rootPublicKey: TEST_ROOT_PUBLIC_KEY_3,
                rootVendorId: VendorId(0),
                rootCert: Buffer.alloc(0),
                identityProtectionKey: Buffer.alloc(0),
                operationalIdentityProtectionKey: TEST_IDENTITY_PROTECTION_KEY_3,
                intermediateCACert: Buffer.alloc(0),
                operationalCert: Buffer.alloc(0),
                label: "",
            });

            const result = fabric.getDestinationId(TEST_NODE_ID_3, TEST_RANDOM_3);

            assert.equal(Bytes.toHex(result), Bytes.toHex(EXPECTED_DESTINATION_ID_3));
        });
    });

    describe("remove from session", () => {
        it("removes all sessions when removing fabric", async () => {
            const DECRYPT_KEY = Bytes.fromHex("bacb178b2588443d5d5b1e4559e7accc");
            const ENCRYPT_KEY = Bytes.fromHex("66951379d0a6d151cf5472cccf13f360");

            const fabric = await buildFabric();

            let session1Destroyed = false;
            let session2Destroyed = false;
            const manager = await createManager();
            const secureSession1 = new SecureSession({
                manager,
                id: 1,
                fabric: undefined,
                peerNodeId: NodeId.UNSPECIFIED_NODE_ID,
                peerSessionId: 0x8d4b,
                decryptKey: DECRYPT_KEY,
                encryptKey: ENCRYPT_KEY,
                attestationKey: Buffer.alloc(0),
                isInitiator: true,
            });

            fabric.addSession(secureSession1);
            const secureSession2 = new SecureSession({
                manager,
                id: 2,
                fabric: undefined,
                peerNodeId: NodeId.UNSPECIFIED_NODE_ID,
                peerSessionId: 0x8d4b,
                decryptKey: DECRYPT_KEY,
                encryptKey: ENCRYPT_KEY,
                attestationKey: Buffer.alloc(0),
                isInitiator: true,
            });
            fabric.addSession(secureSession2);

            manager.sessions.deleted.on(session => {
                if (session === secureSession1) {
                    session1Destroyed = true;
                }
                if (session === secureSession2) {
                    session2Destroyed = true;
                }
            });

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
            const DECRYPT_KEY = Bytes.fromHex("bacb178b2588443d5d5b1e4559e7accc");
            const ENCRYPT_KEY = Bytes.fromHex("66951379d0a6d151cf5472cccf13f360");

            const fabric = await buildFabric();

            let session1Destroyed = false;
            let session2Destroyed = false;
            const manager = await createManager();
            const secureSession1 = new SecureSession({
                manager,
                id: 1,
                fabric: undefined,
                peerNodeId: NodeId.UNSPECIFIED_NODE_ID,
                peerSessionId: 0x8d4b,
                decryptKey: DECRYPT_KEY,
                encryptKey: ENCRYPT_KEY,
                attestationKey: Buffer.alloc(0),
                isInitiator: true,
            });
            fabric.addSession(secureSession1);
            const secureSession2 = new SecureSession({
                manager,
                id: 2,
                fabric: undefined,
                peerNodeId: NodeId.UNSPECIFIED_NODE_ID,
                peerSessionId: 0x8d4b,
                decryptKey: DECRYPT_KEY,
                encryptKey: ENCRYPT_KEY,
                attestationKey: Buffer.alloc(0),
                isInitiator: true,
            });
            fabric.addSession(secureSession2);

            manager.sessions.deleted.on(session => {
                if (session === secureSession1) {
                    session1Destroyed = true;
                }
                if (session === secureSession2) {
                    session2Destroyed = true;
                }
            });

            fabric.removeSession(secureSession1);

            assert.equal(session1Destroyed, false);
            assert.equal(session2Destroyed, false);
        });
    });
});

async function createManager() {
    const storage = new StorageManager(new StorageBackendMemory());
    await storage.initialize();
    return new SessionManager({
        fabrics: new FabricManager(),
        storage: storage.createContext("session"),
    });
}
