/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as assert from "assert";
import { TimeFake } from "../../../src/time/TimeFake.js";

const FAKE_TIME = 36000000;

describe("TimeFake", () => {
    let timeFake: TimeFake;

    beforeEach(() => {
        timeFake = new TimeFake(FAKE_TIME);
    });

    describe("now", () => {
        it("returns the fake date", () => {
            const result = timeFake.now();

            assert.equal(result.getTime(), FAKE_TIME);
        });
    });

    describe("nowMs", () => {
        it("returns the fake time", () => {
            const result = timeFake.nowMs();

            assert.equal(result, FAKE_TIME);
        });
    });

    describe("advanceTime", () => {
        it("advances the time by the duration specified", async () => {
            await timeFake.advanceTime(45);

            assert.equal(timeFake.nowMs(), FAKE_TIME + 45);
        });
    });

    describe("getPeriodicTimer", () => {
        it("returns a periodic timer that will call a callback periodically", async () => {
            let firedTime;

            const result = timeFake.getPeriodicTimer(30, () => firedTime = timeFake.nowMs());
            result.start();

            assert.equal(firedTime, undefined);

            await timeFake.advanceTime(45);

            assert.equal(firedTime, FAKE_TIME + 30);

            await timeFake.advanceTime(20);

            assert.equal(firedTime, FAKE_TIME + 60);
        });

        it("returns a periodic timer that can be stopped", async () => {
            let firedTime;

            const result = timeFake.getPeriodicTimer(30, () => firedTime = timeFake.nowMs());
            result.start();
            result.stop();

            assert.equal(firedTime, undefined);

            await timeFake.advanceTime(45);

            assert.equal(firedTime, undefined);
        });
    });

    describe("getTimer", () => {
        it("returns a timer that will call a callback in the future", async () => {
            let firedTime;

            const result = timeFake.getTimer(30, () => firedTime = timeFake.nowMs());
            result.start();

            assert.equal(firedTime, undefined);

            await timeFake.advanceTime(45);

            assert.equal(firedTime, FAKE_TIME + 30);
        });

        it("returns a timer that can be stopped", async () => {
            let firedTime;

            const result = timeFake.getTimer(30, () => firedTime = timeFake.nowMs());
            result.start();
            result.stop();

            assert.equal(firedTime, undefined);

            await timeFake.advanceTime(45);

            assert.equal(firedTime, undefined);
        });
    });
});
