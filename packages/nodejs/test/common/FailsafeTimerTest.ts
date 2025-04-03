/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { createPromise } from "#general";
import { FailsafeTimer } from "@matter/protocol";
import * as assert from "node:assert";

// TODO identify more cases that are not handled by chip tool tests
describe("FailSafeTimer Test", () => {
    describe("Verify Expiry handling", () => {
        it("Expiry callback is called when failsafe expires", async () => {
            const { promise, resolver } = createPromise<void>();
            new FailsafeTimer(undefined, 1, 100, async () => resolver());

            await MockTime.advance(1000);

            await promise;
        });

        it("Expiry callback is called when failsafe expires after being rearmed (extended)", async () => {
            let expired = false;
            const failSafe = new FailsafeTimer(undefined, 3, 100, async () => {
                expired = true;
            });

            await MockTime.advance(1500);
            assert.equal(expired, false);
            await failSafe.reArm(undefined, 3);
            assert.equal(expired, false);
            await MockTime.advance(1500);
            assert.equal(expired, false);
            await MockTime.advance(1499);
            assert.equal(expired, false);
            await MockTime.advance(1);
            assert.equal(expired, true);
        });

        it("Expiry callback is called directly when failsafe expires after being rearmed (with 0)", async () => {
            let expired = false;
            const failSafe = new FailsafeTimer(undefined, 3, 100, async () => {
                expired = true;
            });

            await MockTime.advance(1500);
            assert.equal(expired, false);
            await failSafe.reArm(undefined, 0);
            assert.equal(expired, true);
        });

        it("Expiry callback is called when max cumulative failsafe expires", async () => {
            let expired = false;
            const failSafe = new FailsafeTimer(undefined, 3, 2, async () => {
                expired = true;
            });

            await MockTime.advance(1500);
            assert.equal(expired, false);
            await failSafe.reArm(undefined, 1);
            assert.equal(expired, false);
            await MockTime.advance(500);
            assert.equal(expired, true);
        });

        it("Expiry callback is not called when failsafe was completed", async () => {
            let expired = false;
            const failSafe = new FailsafeTimer(undefined, 3, 2, async () => {
                expired = true;
            });

            await MockTime.advance(1500);
            assert.equal(expired, false);
            failSafe.complete();
            assert.equal(expired, false);
            await MockTime.advance(1500);
            assert.equal(expired, false);
        });
    });
});
