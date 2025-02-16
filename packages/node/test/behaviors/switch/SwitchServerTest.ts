/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { SwitchServer } from "#behaviors/switch";
import { Switch } from "#clusters/switch";
import { MockEndpoint } from "../../endpoint/mock-endpoint.js";

function createEventCatcher(device: MockEndpoint<any>) {
    return device.captureEvents(
        SwitchServer.for(Switch.Complete).with(
            Switch.Feature.LatchingSwitch,
            Switch.Feature.MomentarySwitch,
            Switch.Feature.MomentarySwitchRelease,
            Switch.Feature.MomentarySwitchLongPress,
            Switch.Feature.MomentarySwitchMultiPress,
        ),
        {
            names: [
                "currentPosition$Changed",
                "rawPosition$Changed",
                "switchLatched",
                "initialPress",
                "shortRelease",
                "longRelease",
                "multiPressOngoing",
                "longPress",
                "multiPressComplete",
            ],
        },
    );
}

async function createLatchingSwitch() {
    return MockEndpoint.createWith(SwitchServer.with(Switch.Feature.LatchingSwitch));
}

async function createMsSwitch() {
    return MockEndpoint.createWith(SwitchServer.with(Switch.Feature.MomentarySwitch));
}

async function createMsMsrSwitch() {
    return MockEndpoint.createWith(
        SwitchServer.with(Switch.Feature.MomentarySwitch, Switch.Feature.MomentarySwitchRelease),
    );
}

async function createMsMsrMslSwitch() {
    return MockEndpoint.createWith(
        SwitchServer.with(
            Switch.Feature.MomentarySwitch,
            Switch.Feature.MomentarySwitchRelease,
            Switch.Feature.MomentarySwitchLongPress,
        ),
    );
}

async function createMsMsrMslMsmSwitch() {
    return MockEndpoint.createWith(
        SwitchServer.with(
            Switch.Feature.MomentarySwitch,
            Switch.Feature.MomentarySwitchRelease,
            Switch.Feature.MomentarySwitchLongPress,
            Switch.Feature.MomentarySwitchMultiPress,
        ),
    );
}

async function doTestPress(
    device: MockEndpoint<any>,
    delay: number,
    expectedEvents: any[],
    pressSequence: number[] = [1, 0],
) {
    await device.set({
        switch: {
            numberOfPositions: pressSequence.reduce((acc, val) => Math.max(acc, val), 0) + 1,
        },
    });

    const events = createEventCatcher(device);

    for (let i = 0; i < pressSequence.length; i++) {
        if (i !== 0 && delay !== 0) {
            await MockTime.advance(delay);
        }
        await device.set({
            switch: {
                currentPosition: pressSequence[i],
            },
        });
    }

    expect(events).deep.equals(expectedEvents);
}

/**
 * The tests are mainly based on examples described in the @see {@link MatterSpecification.v11.Cluster} §1.12.7/8/9
 */
describe("SwitchServer", () => {
    describe("test custom validators", () => {
        it("Accept valid currentPosition", async () => {
            const device = await createLatchingSwitch();
            await expect(device.set({ switch: { currentPosition: 1 } })).to.not.be.rejected;
        });

        it("Reject invalid currentPosition", async () => {
            const device = await createLatchingSwitch();
            await expect(device.set({ switch: { currentPosition: 2 } })).to.be.rejectedWith(
                'Validating node0.part0.switch.state: Constraint "max numberOfPositions - 1": Value 2 is not within bounds defined by constraint (135)',
            );
        });

        it("Accept valid rawPosition", async () => {
            const device = await createLatchingSwitch();
            await expect(device.set({ switch: { rawPosition: 1 } })).to.not.be.rejected;
        });

        it("Reject invalid rawPosition", async () => {
            const device = await createLatchingSwitch();
            await expect(device.set({ switch: { rawPosition: 2 } })).to.be.rejectedWith(
                "Error in reactor<node0.part0.switch.#assertPositionInRange>: (135) Position 2 invalid",
            );
        });
    });

    describe("Test Debounce", () => {
        let device: MockEndpoint<any>;

        beforeEach(async () => {
            device = await createLatchingSwitch();
            await device.set({ switch: { debounceDelay: 50 } });
        });

        it("set currentState is immediately", async () => {
            const events = createEventCatcher(device);

            await device.set({
                switch: {
                    currentPosition: 1,
                },
            });

            expect(events).deep.equals([
                {
                    name: "switchLatched",
                    value: { newPosition: 1 },
                },
                {
                    name: "currentPosition$Changed",
                    oldValue: 0,
                    newValue: 1,
                },
            ]);
        });

        it("set rawPosition with debounceDelay=0 is immediately", async () => {
            await device.set({ switch: { debounceDelay: 0 } });

            const events = createEventCatcher(device);

            await device.set({
                switch: {
                    rawPosition: 1,
                },
            });

            expect(events).deep.equals([
                {
                    name: "rawPosition$Changed",
                    newValue: 1,
                    oldValue: 0,
                },
                {
                    name: "switchLatched",
                    value: { newPosition: 1 },
                },
                {
                    name: "currentPosition$Changed",
                    oldValue: 0,
                    newValue: 1,
                },
            ]);
        });

        it("set stable rawPosition with debounceDelay is respecting debounceDelay", async () => {
            const events = createEventCatcher(device);

            await device.set({
                switch: {
                    rawPosition: 1,
                },
            });

            expect(events).deep.equals([
                {
                    name: "rawPosition$Changed",
                    newValue: 1,
                    oldValue: 0,
                },
            ]);

            await MockTime.advance(30);

            expect(events).deep.equals([
                {
                    name: "rawPosition$Changed",
                    newValue: 1,
                    oldValue: 0,
                },
            ]);

            await MockTime.advance(30);

            // We need to trick the event loop a bit - but we do not advance time any further so anything is still "not timer based"
            await new Promise<void>(resolve => device.events.switch.currentPosition$Changed.on(() => resolve()));

            expect(events).deep.equals([
                {
                    name: "rawPosition$Changed",
                    newValue: 1,
                    oldValue: 0,
                },
                {
                    name: "switchLatched",
                    value: { newPosition: 1 },
                },
                {
                    name: "currentPosition$Changed",
                    oldValue: 0,
                    newValue: 1,
                },
            ]);
        });

        it("set unstable rawPosition with debounceDelay is respecting debounceDelay", async () => {
            const events = createEventCatcher(device);

            await device.set({
                switch: {
                    rawPosition: 1,
                },
            });

            expect(events).deep.equals([
                {
                    name: "rawPosition$Changed",
                    newValue: 1,
                    oldValue: 0,
                },
            ]);

            await MockTime.advance(10);

            // After 10ms set back to 0
            await device.set({
                switch: {
                    rawPosition: 0,
                },
            });

            expect(events).deep.equals([
                {
                    name: "rawPosition$Changed",
                    newValue: 1,
                    oldValue: 0,
                },
                {
                    name: "rawPosition$Changed",
                    newValue: 0,
                    oldValue: 1,
                },
            ]);

            await MockTime.advance(10);

            // After another 10ms set back to 1
            await device.set({
                switch: {
                    rawPosition: 1,
                },
            });

            expect(events).deep.equals([
                {
                    name: "rawPosition$Changed",
                    newValue: 1,
                    oldValue: 0,
                },
                {
                    name: "rawPosition$Changed",
                    newValue: 0,
                    oldValue: 1,
                },
                {
                    name: "rawPosition$Changed",
                    newValue: 1,
                    oldValue: 0,
                },
            ]);

            await MockTime.advance(30);

            expect(events).deep.equals([
                {
                    name: "rawPosition$Changed",
                    newValue: 1,
                    oldValue: 0,
                },
                {
                    name: "rawPosition$Changed",
                    newValue: 0,
                    oldValue: 1,
                },
                {
                    name: "rawPosition$Changed",
                    newValue: 1,
                    oldValue: 0,
                },
            ]);

            await MockTime.advance(30);

            // We need to trick the event loop a bit - but we do not advance time any further so anything is still "not timer based"
            await new Promise<void>(resolve => device.events.switch.currentPosition$Changed.on(() => resolve()));

            expect(events).deep.equals([
                {
                    name: "rawPosition$Changed",
                    newValue: 1,
                    oldValue: 0,
                },
                {
                    name: "rawPosition$Changed",
                    newValue: 0,
                    oldValue: 1,
                },
                {
                    name: "rawPosition$Changed",
                    newValue: 1,
                    oldValue: 0,
                },
                {
                    name: "switchLatched",
                    value: { newPosition: 1 },
                },
                {
                    name: "currentPosition$Changed",
                    oldValue: 0,
                    newValue: 1,
                },
            ]);
        });

        it("set unstable rawPosition with debounceDelay ending on source value is respecting debounceDelay", async () => {
            const events = createEventCatcher(device);

            await device.set({
                switch: {
                    rawPosition: 1,
                },
            });

            expect(events).deep.equals([
                {
                    name: "rawPosition$Changed",
                    newValue: 1,
                    oldValue: 0,
                },
            ]);

            await MockTime.advance(10);

            // After 10ms set back to 0
            await device.set({
                switch: {
                    rawPosition: 0,
                },
            });

            expect(events).deep.equals([
                {
                    name: "rawPosition$Changed",
                    newValue: 1,
                    oldValue: 0,
                },
                {
                    name: "rawPosition$Changed",
                    newValue: 0,
                    oldValue: 1,
                },
            ]);

            await MockTime.advance(10);

            // After another 10ms set back to 1
            await device.set({
                switch: {
                    rawPosition: 1,
                },
            });

            expect(events).deep.equals([
                {
                    name: "rawPosition$Changed",
                    newValue: 1,
                    oldValue: 0,
                },
                {
                    name: "rawPosition$Changed",
                    newValue: 0,
                    oldValue: 1,
                },
                {
                    name: "rawPosition$Changed",
                    newValue: 1,
                    oldValue: 0,
                },
            ]);

            await MockTime.advance(10);

            // After another 10ms set back to 1
            await device.set({
                switch: {
                    rawPosition: 0,
                },
            });

            expect(events).deep.equals([
                {
                    name: "rawPosition$Changed",
                    newValue: 1,
                    oldValue: 0,
                },
                {
                    name: "rawPosition$Changed",
                    newValue: 0,
                    oldValue: 1,
                },
                {
                    name: "rawPosition$Changed",
                    newValue: 1,
                    oldValue: 0,
                },
                {
                    name: "rawPosition$Changed",
                    newValue: 0,
                    oldValue: 1,
                },
            ]);
            await MockTime.advance(30);

            expect(events).deep.equals([
                {
                    name: "rawPosition$Changed",
                    newValue: 1,
                    oldValue: 0,
                },
                {
                    name: "rawPosition$Changed",
                    newValue: 0,
                    oldValue: 1,
                },
                {
                    name: "rawPosition$Changed",
                    newValue: 1,
                    oldValue: 0,
                },
                {
                    name: "rawPosition$Changed",
                    newValue: 0,
                    oldValue: 1,
                },
            ]);

            await MockTime.advance(30);

            // Make sure nothing is left somewhere in event loop
            for (let i = 0; i < 20; i++) {
                await MockTime.yield3();
            }

            expect(events).deep.equals([
                {
                    name: "rawPosition$Changed",
                    newValue: 1,
                    oldValue: 0,
                },
                {
                    name: "rawPosition$Changed",
                    newValue: 0,
                    oldValue: 1,
                },
                {
                    name: "rawPosition$Changed",
                    newValue: 1,
                    oldValue: 0,
                },
                {
                    name: "rawPosition$Changed",
                    newValue: 0,
                    oldValue: 1,
                },
            ]);
        });
    });

    describe("Test LS", () => {
        it("Test Single Press with 2 positions", async () => {
            const device = await createLatchingSwitch();

            await doTestPress(device, 0, [
                {
                    name: "switchLatched",
                    value: { newPosition: 1 },
                },
                {
                    name: "currentPosition$Changed",
                    oldValue: 0,
                    newValue: 1,
                },
                {
                    name: "switchLatched",
                    value: { newPosition: 0 },
                },
                {
                    name: "currentPosition$Changed",
                    oldValue: 1,
                    newValue: 0,
                },
            ]);
        });

        it("Test Single Press with 3 positions", async () => {
            const device = await createLatchingSwitch();

            await doTestPress(
                device,
                0,
                [
                    {
                        name: "switchLatched",
                        value: { newPosition: 1 },
                    },
                    {
                        name: "currentPosition$Changed",
                        oldValue: 0,
                        newValue: 1,
                    },
                    {
                        name: "switchLatched",
                        value: { newPosition: 2 },
                    },
                    {
                        name: "currentPosition$Changed",
                        oldValue: 1,
                        newValue: 2,
                    },
                    {
                        name: "switchLatched",
                        value: { newPosition: 0 },
                    },
                    {
                        name: "currentPosition$Changed",
                        oldValue: 2,
                        newValue: 0,
                    },
                ],
                [1, 2, 0],
            );
        });
    });

    describe("Test MS & MSR & MSL", () => {
        let device: MockEndpoint<any>;

        beforeEach(async () => {
            device = await createMsMsrMslSwitch();
            await device.set({ switch: { longPressDelay: 100 } });
        });

        it("Test short Press with 2 positions", async () => {
            await doTestPress(device, 50, [
                {
                    name: "initialPress",
                    value: { newPosition: 1 },
                },
                {
                    name: "currentPosition$Changed",
                    oldValue: 0,
                    newValue: 1,
                },
                {
                    name: "shortRelease",
                    value: {
                        previousPosition: 1,
                    },
                },
                {
                    name: "currentPosition$Changed",
                    oldValue: 1,
                    newValue: 0,
                },
            ]);
        });

        it("Test long Press with 2 positions", async () => {
            await doTestPress(device, 110, [
                {
                    name: "initialPress",
                    value: { newPosition: 1 },
                },
                {
                    name: "currentPosition$Changed",
                    oldValue: 0,
                    newValue: 1,
                },
                {
                    name: "longPress",
                    value: {
                        newPosition: 1,
                    },
                },
                {
                    name: "longRelease",
                    value: {
                        previousPosition: 1,
                    },
                },
                {
                    name: "currentPosition$Changed",
                    oldValue: 1,
                    newValue: 0,
                },
            ]);
        });

        it("Test even longer Press with 2 positions", async () => {
            await doTestPress(device, 300, [
                {
                    name: "initialPress",
                    value: { newPosition: 1 },
                },
                {
                    name: "currentPosition$Changed",
                    oldValue: 0,
                    newValue: 1,
                },
                {
                    name: "longPress",
                    value: {
                        newPosition: 1,
                    },
                },
                {
                    name: "longRelease",
                    value: {
                        previousPosition: 1,
                    },
                },
                {
                    name: "currentPosition$Changed",
                    oldValue: 1,
                    newValue: 0,
                },
            ]);
        });
    });

    describe("Test MS & MSR & !MSL", () => {
        let device: MockEndpoint<any>;

        beforeEach(async () => {
            device = await createMsMsrSwitch();
        });

        it("Test short Press with 2 positions", async () => {
            await doTestPress(device, 50, [
                {
                    name: "initialPress",
                    value: { newPosition: 1 },
                },
                {
                    name: "currentPosition$Changed",
                    oldValue: 0,
                    newValue: 1,
                },
                {
                    name: "shortRelease",
                    value: {
                        previousPosition: 1,
                    },
                },
                {
                    name: "currentPosition$Changed",
                    oldValue: 1,
                    newValue: 0,
                },
            ]);
        });

        it("Test short Presses with 3 positions", async () => {
            await doTestPress(
                device,
                50,
                [
                    {
                        name: "initialPress",
                        value: { newPosition: 1 },
                    },
                    {
                        name: "currentPosition$Changed",
                        oldValue: 0,
                        newValue: 1,
                    },
                    {
                        name: "shortRelease",
                        value: {
                            previousPosition: 1,
                        },
                    },
                    {
                        name: "currentPosition$Changed",
                        oldValue: 1,
                        newValue: 0,
                    },
                    {
                        name: "initialPress",
                        value: { newPosition: 2 },
                    },
                    {
                        name: "currentPosition$Changed",
                        oldValue: 0,
                        newValue: 2,
                    },
                    {
                        name: "shortRelease",
                        value: {
                            previousPosition: 2,
                        },
                    },
                    {
                        name: "currentPosition$Changed",
                        oldValue: 2,
                        newValue: 0,
                    },
                ],
                [1, 0, 2, 0],
            );
        });

        it("Test short Presses joystick-like", async () => {
            await doTestPress(
                device,
                50,
                [
                    {
                        name: "initialPress",
                        value: { newPosition: 6 },
                    },
                    {
                        name: "currentPosition$Changed",
                        oldValue: 0,
                        newValue: 6,
                    },
                    {
                        name: "initialPress",
                        value: { newPosition: 5 },
                    },
                    {
                        name: "currentPosition$Changed",
                        oldValue: 6,
                        newValue: 5,
                    },
                    {
                        name: "shortRelease",
                        value: {
                            previousPosition: 5,
                        },
                    },
                    {
                        name: "currentPosition$Changed",
                        oldValue: 5,
                        newValue: 0,
                    },
                ],
                [6, 5, 0],
            );
        });

        it("Test long Press with 2 positions", async () => {
            await doTestPress(device, 110, [
                {
                    name: "initialPress",
                    value: { newPosition: 1 },
                },
                {
                    name: "currentPosition$Changed",
                    oldValue: 0,
                    newValue: 1,
                },
                {
                    name: "shortRelease",
                    value: {
                        previousPosition: 1,
                    },
                },
                {
                    name: "currentPosition$Changed",
                    oldValue: 1,
                    newValue: 0,
                },
            ]);
        });

        it("Test even longer Press with 2 positions", async () => {
            await doTestPress(device, 300, [
                {
                    name: "initialPress",
                    value: { newPosition: 1 },
                },
                {
                    name: "currentPosition$Changed",
                    oldValue: 0,
                    newValue: 1,
                },
                {
                    name: "shortRelease",
                    value: {
                        previousPosition: 1,
                    },
                },
                {
                    name: "currentPosition$Changed",
                    oldValue: 1,
                    newValue: 0,
                },
            ]);
        });
    });

    describe("Test MS & !MSR & !MSL", () => {
        let device: MockEndpoint<any>;

        beforeEach(async () => {
            device = await createMsSwitch();
        });

        it("Test short Press with 2 positions", async () => {
            await doTestPress(device, 50, [
                {
                    name: "initialPress",
                    value: { newPosition: 1 },
                },
                {
                    name: "currentPosition$Changed",
                    oldValue: 0,
                    newValue: 1,
                },
                {
                    name: "currentPosition$Changed",
                    oldValue: 1,
                    newValue: 0,
                },
            ]);
        });

        it("Test long Press with 2 positions", async () => {
            await doTestPress(device, 110, [
                {
                    name: "initialPress",
                    value: { newPosition: 1 },
                },
                {
                    name: "currentPosition$Changed",
                    oldValue: 0,
                    newValue: 1,
                },
                {
                    name: "currentPosition$Changed",
                    oldValue: 1,
                    newValue: 0,
                },
            ]);
        });

        it("Test even longer Press with 2 positions", async () => {
            await doTestPress(device, 300, [
                {
                    name: "initialPress",
                    value: { newPosition: 1 },
                },
                {
                    name: "currentPosition$Changed",
                    oldValue: 0,
                    newValue: 1,
                },
                {
                    name: "currentPosition$Changed",
                    oldValue: 1,
                    newValue: 0,
                },
            ]);
        });
    });

    describe("Test MS & MSR & MSL & MSM", () => {
        let device: MockEndpoint<any>;

        beforeEach(async () => {
            device = await createMsMsrMslMsmSwitch();
            await device.set({ switch: { longPressDelay: 100, multiPressDelay: 150, multiPressMax: 3 } });
        });

        it("Test long Press with 2 positions", async () => {
            await doTestPress(device, 110, [
                {
                    name: "initialPress",
                    value: { newPosition: 1 },
                },
                {
                    name: "currentPosition$Changed",
                    oldValue: 0,
                    newValue: 1,
                },
                {
                    name: "longPress",
                    value: {
                        newPosition: 1,
                    },
                },
                {
                    name: "longRelease",
                    value: {
                        previousPosition: 1,
                    },
                },
                {
                    name: "currentPosition$Changed",
                    oldValue: 1,
                    newValue: 0,
                },
            ]);
        });

        it("Test one short Press with 2 positions", async () => {
            const events = createEventCatcher(device);

            await device.set({
                switch: {
                    currentPosition: 1,
                },
            });

            expect(events).deep.equals([
                {
                    name: "initialPress",
                    value: {
                        newPosition: 1,
                    },
                },
                {
                    name: "currentPosition$Changed",
                    newValue: 1,
                    oldValue: 0,
                },
            ]);

            await MockTime.advance(50);

            await device.set({
                switch: {
                    currentPosition: 0,
                },
            });

            expect(events).deep.equals([
                {
                    name: "initialPress",
                    value: {
                        newPosition: 1,
                    },
                },
                {
                    name: "currentPosition$Changed",
                    newValue: 1,
                    oldValue: 0,
                },
                {
                    name: "shortRelease",
                    value: {
                        previousPosition: 1,
                    },
                },
                {
                    name: "currentPosition$Changed",
                    newValue: 0,
                    oldValue: 1,
                },
            ]);

            await MockTime.advance(160);
            await MockTime.yield3();

            expect(events).deep.equals([
                {
                    name: "initialPress",
                    value: {
                        newPosition: 1,
                    },
                },
                {
                    name: "currentPosition$Changed",
                    newValue: 1,
                    oldValue: 0,
                },
                {
                    name: "shortRelease",
                    value: {
                        previousPosition: 1,
                    },
                },
                {
                    name: "currentPosition$Changed",
                    newValue: 0,
                    oldValue: 1,
                },
                {
                    name: "multiPressComplete",
                    value: {
                        previousPosition: 1,
                        totalNumberOfPressesCounted: 1,
                    },
                },
            ]);
        });

        it("Test two short Presses with 2 positions", async () => {
            const events = createEventCatcher(device);

            await device.set({
                switch: {
                    currentPosition: 1,
                },
            });

            await MockTime.advance(50);

            await device.set({
                switch: {
                    currentPosition: 0,
                },
            });

            await MockTime.advance(50);

            await device.set({
                switch: {
                    currentPosition: 1,
                },
            });

            await MockTime.advance(50);

            await device.set({
                switch: {
                    currentPosition: 0,
                },
            });

            await MockTime.advance(160);
            await MockTime.yield3();

            expect(events).deep.equals([
                {
                    name: "initialPress",
                    value: {
                        newPosition: 1,
                    },
                },
                {
                    name: "currentPosition$Changed",
                    newValue: 1,
                    oldValue: 0,
                },
                {
                    name: "shortRelease",
                    value: {
                        previousPosition: 1,
                    },
                },
                {
                    name: "currentPosition$Changed",
                    newValue: 0,
                    oldValue: 1,
                },
                {
                    name: "initialPress",
                    value: {
                        newPosition: 1,
                    },
                },
                {
                    name: "multiPressOngoing",
                    value: {
                        newPosition: 1,
                        currentNumberOfPressesCounted: 2,
                    },
                },
                {
                    name: "currentPosition$Changed",
                    newValue: 1,
                    oldValue: 0,
                },
                {
                    name: "shortRelease",
                    value: {
                        previousPosition: 1,
                    },
                },
                {
                    name: "currentPosition$Changed",
                    newValue: 0,
                    oldValue: 1,
                },
                {
                    name: "multiPressComplete",
                    value: {
                        previousPosition: 1,
                        totalNumberOfPressesCounted: 2,
                    },
                },
            ]);
        });

        it("Test three short Presses with 2 positions", async () => {
            const events = createEventCatcher(device);

            await device.set({
                switch: {
                    currentPosition: 1,
                },
            });

            await MockTime.advance(50);

            await device.set({
                switch: {
                    currentPosition: 0,
                },
            });

            await MockTime.advance(50);

            await device.set({
                switch: {
                    currentPosition: 1,
                },
            });

            await MockTime.advance(50);

            await device.set({
                switch: {
                    currentPosition: 0,
                },
            });

            await MockTime.advance(50);

            await device.set({
                switch: {
                    currentPosition: 1,
                },
            });

            await MockTime.advance(50);

            await device.set({
                switch: {
                    currentPosition: 0,
                },
            });

            await MockTime.advance(160);
            await MockTime.yield3();

            expect(events).deep.equals([
                {
                    name: "initialPress",
                    value: {
                        newPosition: 1,
                    },
                },
                {
                    name: "currentPosition$Changed",
                    newValue: 1,
                    oldValue: 0,
                },
                {
                    name: "shortRelease",
                    value: {
                        previousPosition: 1,
                    },
                },
                {
                    name: "currentPosition$Changed",
                    newValue: 0,
                    oldValue: 1,
                },
                {
                    name: "initialPress",
                    value: {
                        newPosition: 1,
                    },
                },
                {
                    name: "multiPressOngoing",
                    value: {
                        newPosition: 1,
                        currentNumberOfPressesCounted: 2,
                    },
                },
                {
                    name: "currentPosition$Changed",
                    newValue: 1,
                    oldValue: 0,
                },
                {
                    name: "shortRelease",
                    value: {
                        previousPosition: 1,
                    },
                },
                {
                    name: "currentPosition$Changed",
                    newValue: 0,
                    oldValue: 1,
                },
                {
                    name: "initialPress",
                    value: {
                        newPosition: 1,
                    },
                },
                {
                    name: "multiPressOngoing",
                    value: {
                        newPosition: 1,
                        currentNumberOfPressesCounted: 3,
                    },
                },
                {
                    name: "currentPosition$Changed",
                    newValue: 1,
                    oldValue: 0,
                },
                {
                    name: "shortRelease",
                    value: {
                        previousPosition: 1,
                    },
                },
                {
                    name: "currentPosition$Changed",
                    newValue: 0,
                    oldValue: 1,
                },
                {
                    name: "multiPressComplete",
                    value: {
                        previousPosition: 1,
                        totalNumberOfPressesCounted: 3,
                    },
                },
            ]);
        });

        it("Test three short Presses, but we only support max 2, but we continue as normal for now with 2 positions", async () => {
            const events = createEventCatcher(device);
            await device.set({
                switch: {
                    multiPressMax: 2,
                },
            });

            await device.set({
                switch: {
                    currentPosition: 1,
                },
            });

            await MockTime.advance(50);

            await device.set({
                switch: {
                    currentPosition: 0,
                },
            });

            await MockTime.advance(50);

            await device.set({
                switch: {
                    currentPosition: 1,
                },
            });

            await MockTime.advance(50);

            await device.set({
                switch: {
                    currentPosition: 0,
                },
            });

            await MockTime.advance(50);

            await device.set({
                switch: {
                    currentPosition: 1,
                },
            });

            await MockTime.advance(50);

            await device.set({
                switch: {
                    currentPosition: 0,
                },
            });

            await MockTime.advance(160);
            await MockTime.yield3();

            expect(events).deep.equals([
                {
                    name: "initialPress",
                    value: {
                        newPosition: 1,
                    },
                },
                {
                    name: "currentPosition$Changed",
                    newValue: 1,
                    oldValue: 0,
                },
                {
                    name: "shortRelease",
                    value: {
                        previousPosition: 1,
                    },
                },
                {
                    name: "currentPosition$Changed",
                    newValue: 0,
                    oldValue: 1,
                },
                {
                    name: "initialPress",
                    value: {
                        newPosition: 1,
                    },
                },
                {
                    name: "multiPressOngoing",
                    value: {
                        newPosition: 1,
                        currentNumberOfPressesCounted: 2,
                    },
                },
                {
                    name: "currentPosition$Changed",
                    newValue: 1,
                    oldValue: 0,
                },
                {
                    name: "shortRelease",
                    value: {
                        previousPosition: 1,
                    },
                },
                {
                    name: "currentPosition$Changed",
                    newValue: 0,
                    oldValue: 1,
                },
                {
                    name: "initialPress",
                    value: {
                        newPosition: 1,
                    },
                },
                {
                    name: "multiPressOngoing",
                    value: {
                        newPosition: 1,
                        currentNumberOfPressesCounted: 3,
                    },
                },
                {
                    name: "currentPosition$Changed",
                    newValue: 1,
                    oldValue: 0,
                },
                {
                    name: "shortRelease",
                    value: {
                        previousPosition: 1,
                    },
                },
                {
                    name: "currentPosition$Changed",
                    newValue: 0,
                    oldValue: 1,
                },
                {
                    name: "multiPressComplete",
                    value: {
                        previousPosition: 1,
                        totalNumberOfPressesCounted: 3,
                    },
                },
            ]);
        });

        it("Test two short Presses with different positions", async () => {
            await device.set({
                switch: {
                    numberOfPositions: 3,
                },
            });

            const events = createEventCatcher(device);

            await device.set({
                switch: {
                    currentPosition: 1,
                },
            });

            await MockTime.advance(50);

            await device.set({
                switch: {
                    currentPosition: 2,
                },
            });

            await MockTime.advance(50);

            await device.set({
                switch: {
                    currentPosition: 1,
                },
            });

            await MockTime.advance(50);

            await device.set({
                switch: {
                    currentPosition: 2,
                },
            });

            await MockTime.advance(50);

            await device.set({
                switch: {
                    currentPosition: 0,
                },
            });

            await MockTime.advance(160);
            await MockTime.yield3();

            expect(events).deep.equals([
                {
                    name: "initialPress",
                    value: {
                        newPosition: 1,
                    },
                },
                {
                    name: "currentPosition$Changed",
                    newValue: 1,
                    oldValue: 0,
                },
                {
                    name: "initialPress",
                    value: {
                        newPosition: 2,
                    },
                },
                {
                    name: "multiPressOngoing",
                    value: {
                        currentNumberOfPressesCounted: 2,
                        newPosition: 2,
                    },
                },
                {
                    name: "currentPosition$Changed",
                    newValue: 2,
                    oldValue: 1,
                },
                {
                    name: "initialPress",
                    value: {
                        newPosition: 1,
                    },
                },
                {
                    name: "multiPressOngoing",
                    value: {
                        newPosition: 1,
                        currentNumberOfPressesCounted: 3,
                    },
                },
                {
                    name: "currentPosition$Changed",
                    newValue: 1,
                    oldValue: 2,
                },
                {
                    name: "initialPress",
                    value: {
                        newPosition: 2,
                    },
                },
                {
                    name: "multiPressOngoing",
                    value: {
                        currentNumberOfPressesCounted: 4,
                        newPosition: 2,
                    },
                },
                {
                    name: "currentPosition$Changed",
                    newValue: 2,
                    oldValue: 1,
                },
                {
                    name: "shortRelease",
                    value: {
                        previousPosition: 2,
                    },
                },
                {
                    name: "currentPosition$Changed",
                    newValue: 0,
                    oldValue: 2,
                },
                {
                    name: "multiPressComplete",
                    value: {
                        previousPosition: 2,
                        totalNumberOfPressesCounted: 4,
                    },
                },
            ]);
        });
    });
});
