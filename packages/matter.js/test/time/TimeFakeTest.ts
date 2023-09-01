/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { TimeFake } from "../../src/time/TimeFake.js";

const FAKE_TIME = 36000000;

describe("TimeFake", () => {
    let timeFake: TimeFake;

    beforeEach(() => {
        timeFake = new TimeFake(FAKE_TIME);
    });

    describe("now", () => {
        it("returns the fake date", () => {
            const result = timeFake.now();

            expect(result.getTime()).equal(FAKE_TIME);
        });
    });

    describe("nowMs", () => {
        it("returns the fake time", () => {
            const result = timeFake.nowMs();

            expect(result).equal(FAKE_TIME);
        });
    });

    describe("advanceTime", () => {
        it("advances the time by the duration specified", async () => {
            await timeFake.advanceTime(45);

            expect(timeFake.nowMs()).equal(FAKE_TIME + 45);
        });
    });

    describe("getPeriodicTimer", () => {
        it("returns a periodic timer that will call a callback periodically", async () => {
            let firedTime;

            const result = timeFake.getPeriodicTimer(30, () => (firedTime = timeFake.nowMs()));
            expect(result.isRunning).equal(false);

            result.start();

            expect(result.isRunning).equal(true);
            expect(firedTime).equal(undefined);

            await timeFake.advanceTime(45);

            expect(firedTime).equal(FAKE_TIME + 30);

            await timeFake.advanceTime(20);

            expect(firedTime).equal(FAKE_TIME + 60);

            expect(result.isRunning).equal(true);

            result.stop();
            expect(result.isRunning).equal(false);
        });

        it("returns a periodic timer that can be stopped", async () => {
            let firedTime;

            const result = timeFake.getPeriodicTimer(30, () => (firedTime = timeFake.nowMs()));
            result.start();
            result.stop();

            expect(firedTime).equal(undefined);

            await timeFake.advanceTime(45);

            expect(firedTime).equal(undefined);
            expect(result.isRunning).equal(false);
        });
    });

    describe("getTimer", () => {
        it("returns a timer that will call a callback in the future", async () => {
            let firedTime;

            const result = timeFake.getTimer(30, () => (firedTime = timeFake.nowMs()));
            expect(result.isRunning).equal(false);
            result.start();
            expect(result.isRunning).equal(true);

            expect(firedTime).equal(undefined);

            await timeFake.advanceTime(45);

            expect(firedTime).equal(FAKE_TIME + 30);
            expect(result.isRunning).equal(false);
        });

        it("returns a timer that can be stopped", async () => {
            let firedTime;

            const result = timeFake.getTimer(30, () => (firedTime = timeFake.nowMs()));
            expect(result.isRunning).equal(false);
            result.start();
            expect(result.isRunning).equal(true);
            result.stop();
            expect(result.isRunning).equal(false);

            expect(firedTime).equal(undefined);

            await timeFake.advanceTime(45);

            expect(firedTime).equal(undefined);
            expect(result.isRunning).equal(false);
        });
    });
});
