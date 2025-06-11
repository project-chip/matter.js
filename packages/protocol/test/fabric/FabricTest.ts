/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Fabric } from "#fabric/Fabric.js";
import { FabricManager } from "#fabric/FabricManager.js";
import { TestFabric } from "#fabric/TestFabric.js";
import { b$, Bytes, Crypto, StorageBackendMemory, StorageManager } from "#general";
import { NodeSession } from "#session/NodeSession.js";
import { SessionManager } from "#session/SessionManager.js";
import { FabricId, FabricIndex, NodeId, VendorId } from "#types";

const OPERATIONAL_ID = b$`6cf78388a7e78e3d`;
const TEST_ROOT_NODE = NodeId(1n);

const TEST_FABRIC_INDEX = FabricIndex(1);
const TEST_FABRIC_ID = FabricId(0x2906c908d115d362n);
const TEST_NODE_ID = NodeId(0xcd5544aa7b13ef14n);
const TEST_ROOT_PUBLIC_KEY = b$`044a9f42b1ca4840d37292bbc7f6a7e11e22200c976fc900dbc98a7a383a641cb8254a2e56d4e295a847943b4e3897c4a773e930277b4d9fbede8a052686bfacfa`;
const TEST_IDENTITY_PROTECTION_KEY = b$`9bc61cd9c62a2df6d64dfcaa9dc472d4`;
const TEST_RANDOM = b$`7e171231568dfa17206b3accf8faec2f4d21b580113196f47c7c4deb810a73dc`;
const EXPECTED_DESTINATION_ID = b$`dc35dd5fc9134cc5544538c9c3fc4297c1ec3370c839136a80e10796451d4c53`;

const TEST_RANDOM_2 = b$`147546b42b4212ae62e3b393b973e7892e02a86d387d8f4829b0861495b5743a`;
const TEST_NODE_ID_2 = NodeId(0x0000000000000009n);
const EXPECTED_DESTINATION_ID_2 = b$`d9d01e0b21c11dd1078cd65ad078f7f54a26ec0a2ae8256906eea7f898cd3298`;

const TEST_FABRIC_ID_3 = FabricId(0x0000000000000001n);
const TEST_NODE_ID_3 = NodeId(0x0000000000000055n);
const TEST_ROOT_PUBLIC_KEY_3 = b$`04d89eb7e3f3226d0918f4b85832457bb9981bca7aaef58c18fb5ec07525e472b2bd1617fb75ee41bd388f94ae6a6070efc896777516a5c54aff74ec0804cdde9d`;
const TEST_IDENTITY_PROTECTION_KEY_3 = b$`6624ed691e9b53b1f286d98117918c3a`;
const TEST_RANDOM_3 = b$`0b2a71876d3d090d37cb5286168ab9be0d2e7e0ccbedc1f55331b8a8051ee02f`;
const EXPECTED_DESTINATION_ID_3 = b$`b1ce1a45fd930831203024286cd609ec4f9bbe71ed8e10c2c4cab0be49a87e8a`;

describe("FabricBuilder", () => {
    describe("build", () => {
        it("generates the correct compressed Fabric ID", async () => {
            const result = (await TestFabric()).operationalId;

            expect(Bytes.toHex(result)).to.equal(Bytes.toHex(OPERATIONAL_ID));
        });

        it("generates the expected operationalIdentityProtectionKey", async () => {
            const result = (await TestFabric()).operationalIdentityProtectionKey;

            expect(Bytes.toHex(result)).to.equal(Bytes.toHex(TEST_IDENTITY_PROTECTION_KEY_3));
        });
    });
});

const NO_BYTES = new Uint8Array();

describe("Fabric", () => {
    before(MockCrypto.init);

    describe("getDestinationId", () => {
        it("generates the correct destination ID", async () => {
            const fabric = new Fabric({
                fabricIndex: TEST_FABRIC_INDEX,
                fabricId: TEST_FABRIC_ID,
                nodeId: TEST_NODE_ID,
                rootNodeId: TEST_ROOT_NODE,
                operationalId: NO_BYTES,
                keyPair: await Crypto.createKeyPair(),
                rootPublicKey: TEST_ROOT_PUBLIC_KEY,
                rootVendorId: VendorId(0),
                rootCert: NO_BYTES,
                identityProtectionKey: NO_BYTES,
                operationalIdentityProtectionKey: TEST_IDENTITY_PROTECTION_KEY,
                intermediateCACert: NO_BYTES,
                operationalCert: NO_BYTES,
                label: "",
            });

            const result = await fabric.currentDestinationIdFor(TEST_NODE_ID, TEST_RANDOM);

            expect(Bytes.toHex(result)).to.equal(Bytes.toHex(EXPECTED_DESTINATION_ID));
        });

        it("generates the correct destination ID 2", async () => {
            const fabric = await TestFabric();

            const result = await fabric.currentDestinationIdFor(TEST_NODE_ID_2, TEST_RANDOM_2);
            expect(Bytes.toHex(result)).to.equal(Bytes.toHex(EXPECTED_DESTINATION_ID_2));
        });

        it("generates the correct destination ID 3", async () => {
            const fabric = new Fabric({
                fabricIndex: TEST_FABRIC_INDEX,
                fabricId: TEST_FABRIC_ID_3,
                nodeId: TEST_NODE_ID_3,
                rootNodeId: TEST_ROOT_NODE,
                operationalId: NO_BYTES,
                keyPair: await Crypto.createKeyPair(),
                rootPublicKey: TEST_ROOT_PUBLIC_KEY_3,
                rootVendorId: VendorId(0),
                rootCert: NO_BYTES,
                identityProtectionKey: NO_BYTES,
                operationalIdentityProtectionKey: TEST_IDENTITY_PROTECTION_KEY_3,
                intermediateCACert: NO_BYTES,
                operationalCert: NO_BYTES,
                label: "",
            });

            const result = await fabric.currentDestinationIdFor(TEST_NODE_ID_3, TEST_RANDOM_3);

            expect(Bytes.toHex(result)).to.equal(Bytes.toHex(EXPECTED_DESTINATION_ID_3));
        });
    });

    describe("remove from session", () => {
        it("removes all sessions when removing fabric", async () => {
            const DECRYPT_KEY = b$`bacb178b2588443d5d5b1e4559e7accc`;
            const ENCRYPT_KEY = b$`66951379d0a6d151cf5472cccf13f360`;

            const fabric = await TestFabric();

            let session1Destroyed = false;
            let session2Destroyed = false;
            const manager = await createManager();
            const secureSession1 = new NodeSession({
                manager,
                id: 1,
                fabric: undefined,
                peerNodeId: NodeId.UNSPECIFIED_NODE_ID,
                peerSessionId: 0x8d4b,
                decryptKey: DECRYPT_KEY,
                encryptKey: ENCRYPT_KEY,
                attestationKey: NO_BYTES,
                isInitiator: true,
            });

            fabric.addSession(secureSession1);
            const secureSession2 = new NodeSession({
                manager,
                id: 2,
                fabric: undefined,
                peerNodeId: NodeId.UNSPECIFIED_NODE_ID,
                peerSessionId: 0x8d4b,
                decryptKey: DECRYPT_KEY,
                encryptKey: ENCRYPT_KEY,
                attestationKey: NO_BYTES,
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

            expect(session1Destroyed).to.be.true;
            expect(secureSession1.closingAfterExchangeFinished).to.be.false;
            expect(secureSession1.sendCloseMessageWhenClosing).to.be.false;
            expect(session2Destroyed).to.be.false; // Not destroyed directly because delayed because was session of fabric removal
            expect(secureSession2.closingAfterExchangeFinished).to.be.true;
            expect(secureSession2.sendCloseMessageWhenClosing).to.be.false;
            expect(removeCallbackCalled).to.be.true;
        });

        it("removes one sessions without doing anything", async () => {
            const DECRYPT_KEY = b$`bacb178b2588443d5d5b1e4559e7accc`;
            const ENCRYPT_KEY = b$`66951379d0a6d151cf5472cccf13f360`;

            const fabric = await TestFabric();

            let session1Destroyed = false;
            let session2Destroyed = false;
            const manager = await createManager();
            const secureSession1 = new NodeSession({
                manager,
                id: 1,
                fabric: undefined,
                peerNodeId: NodeId.UNSPECIFIED_NODE_ID,
                peerSessionId: 0x8d4b,
                decryptKey: DECRYPT_KEY,
                encryptKey: ENCRYPT_KEY,
                attestationKey: NO_BYTES,
                isInitiator: true,
            });
            fabric.addSession(secureSession1);
            const secureSession2 = new NodeSession({
                manager,
                id: 2,
                fabric: undefined,
                peerNodeId: NodeId.UNSPECIFIED_NODE_ID,
                peerSessionId: 0x8d4b,
                decryptKey: DECRYPT_KEY,
                encryptKey: ENCRYPT_KEY,
                attestationKey: NO_BYTES,
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

            expect(session1Destroyed).to.be.false;
            expect(session2Destroyed).to.be.false;
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
