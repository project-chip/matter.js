/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { NodeId } from "@project-chip/matter.js/datatype";
import { SessionManager } from "@project-chip/matter.js/session";
import { StorageBackendMemory, StorageContext } from "@project-chip/matter.js/storage";
import { ByteArray } from "@project-chip/matter.js/util";
import * as assert from "assert";

const DUMMY_BYTEARRAY = new ByteArray();

describe("SessionManager", () => {
    describe("getNextAvailableSessionId", () => {
        let storage: StorageBackendMemory;
        let storageContext: StorageContext;
        let sessionManager: SessionManager<any>;

        beforeEach(() => {
            storage = new StorageBackendMemory();
            storageContext = new StorageContext(storage, ["context"]);

            sessionManager = new SessionManager({}, storageContext);
        });

        it("next number is increasing", async () => {
            let first = await sessionManager.getNextAvailableSessionId();
            if (first === 0xffff) {
                // Keep test simple and just ignore the special case and let it overflow
                first = await sessionManager.getNextAvailableSessionId();
            }
            const second = await sessionManager.getNextAvailableSessionId();
            assert.strictEqual(first + 1, second);
        });

        it("verify that id is 1 after being 0xffff", async () => {
            const first = await sessionManager.getNextAvailableSessionId();
            if (first === 0xffff) {
                assert.strictEqual(await sessionManager.getNextAvailableSessionId(), 1);
            } else {
                for (let i = first; i < 0xfffe; i++) {
                    // read over until one before overrun
                    await sessionManager.getNextAvailableSessionId();
                }
                assert.strictEqual(await sessionManager.getNextAvailableSessionId(), 0xffff);
                assert.strictEqual(await sessionManager.getNextAvailableSessionId(), 1);
            }
        });

        it("verify that existing session ids are skipped", async () => {
            let first = await sessionManager.getNextAvailableSessionId();
            if (first === 0xfffe) {
                // Keep test simple and just ignore the special case and let it overflow
                first = await sessionManager.getNextAvailableSessionId();
            }
            if (first === 0xffff) {
                // Keep test simple and just ignore the special case and let it overflow
                first = await sessionManager.getNextAvailableSessionId();
            }
            // Create a session with "next expected number"
            await sessionManager.createSecureSession({
                sessionId: first + 1,
                fabric: undefined,
                peerNodeId: NodeId.UNSPECIFIED_NODE_ID,
                peerSessionId: 0x8d4b,
                sharedSecret: DUMMY_BYTEARRAY,
                salt: DUMMY_BYTEARRAY,
                isInitiator: false,
                isResumption: false,
            });
            assert.strictEqual(await sessionManager.getNextAvailableSessionId(), first + 2);
        });

        it("verify that oldest session gets closed when no more ids are available", async () => {
            const first = await sessionManager.getNextAvailableSessionId();
            let firstClosed = false;
            sessionManager.sessionClosed.on(() => {
                firstClosed = true;
            });
            await sessionManager.createSecureSession({
                sessionId: first,
                fabric: undefined,
                peerNodeId: NodeId.UNSPECIFIED_NODE_ID,
                peerSessionId: 0x8d4b,
                sharedSecret: DUMMY_BYTEARRAY,
                salt: DUMMY_BYTEARRAY,
                isInitiator: false,
                isResumption: false,
            });
            await MockTime.advance(1000);
            for (let i = 0; i < 0xfffe; i++) {
                const sessionId = await sessionManager.getNextAvailableSessionId();
                await sessionManager.createSecureSession({
                    sessionId,
                    fabric: undefined,
                    peerNodeId: NodeId.UNSPECIFIED_NODE_ID,
                    peerSessionId: 0x8d4b,
                    sharedSecret: DUMMY_BYTEARRAY,
                    salt: DUMMY_BYTEARRAY,
                    isInitiator: false,
                    isResumption: false,
                });
            }
            assert.strictEqual(await sessionManager.getNextAvailableSessionId(), first);
            assert.strictEqual(firstClosed, true);
        }).timeout(10000);
    });
});
