/**
 * @license
 * Copyright 2022-2025 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DimmableLightDevice } from "#devices/dimmable-light";
import { Endpoint } from "#endpoint/Endpoint.js";
import { Time } from "#general";
import { MockServerNode } from "../../node/mock-server-node.js";

describe("LevelControlServer", () => {
    it("emits CurrentLevel and RemainingTime updates quietly", async () => {
        const { node, endpoint, events, complete } = await setup();

        await changeLevel(endpoint);

        await complete;

        expect(events).deep.equals([
            { kind: "time", ms: 0, value: 150 },
            { kind: "level", ms: 100, value: 2 },
            { kind: "level", ms: 1000, value: 10 },
            { kind: "level", ms: 1000, value: 32 },
            { kind: "level", ms: 1000, value: 42 },
            { kind: "level", ms: 1000, value: 66 },
            { kind: "level", ms: 1000, value: 76 },
            { kind: "level", ms: 1000, value: 100 },
            { kind: "level", ms: 1000, value: 110 },
            { kind: "level", ms: 1000, value: 134 },
            { kind: "level", ms: 1000, value: 144 },
            { kind: "level", ms: 1000, value: 168 },
            { kind: "level", ms: 1000, value: 178 },
            { kind: "level", ms: 1000, value: 202 },
            { kind: "level", ms: 1000, value: 212 },
            { kind: "level", ms: 1000, value: 235 },
            { kind: "level", ms: 1000, value: 246 },
            { kind: "level", ms: 200, value: 254 },
            { kind: "time", ms: 0, value: 0 },
        ]);

        await node.close();
    });

    it("transitions to off with correct events", async () => {
        const { node, endpoint, events, complete } = await setup();

        await endpoint.set({
            levelControl: {
                currentLevel: 128,
            },

            onOff: {
                onOff: true,
            },
        });

        await node.online({ command: true }, async agent => {
            const endpointAgent = agent.context.agentFor(endpoint);

            await agent.context.transaction.addResources(endpointAgent.levelControl);

            await endpointAgent.levelControl.moveToLevelWithOnOff({
                level: 1,
                transitionTime: 40,
                optionsMask: {},
                optionsOverride: {},
            });
        });

        await MockTime.resolve(complete, { stepMs: 10 });

        expect(endpoint.state.levelControl.currentLevel).equals(1);

        expect(events).deep.equals([
            // Startup
            { kind: "level", value: 128, ms: 0 },

            // Initiate transition
            { kind: "time", value: 40, ms: 0 },

            // Transitioning
            { kind: "level", value: 96, ms: 1000 },
            { kind: "level", value: 65, ms: 1000 },
            { kind: "level", value: 33, ms: 1000 },

            // Transition complete
            { kind: "level", value: 1, ms: 930 },
            { kind: "time", value: 0, ms: 0 },
        ]);
    });

    it("emits RemainingTime with command changes", async () => {
        const { node, endpoint } = await initializeDimmableLight();

        const remainingTimeReports = Array<number>();

        const complete = new Promise<void>(resolve =>
            endpoint.events.levelControl.remainingTime$Changed.online.on(value => {
                remainingTimeReports.push(value);
                if (value === 0) {
                    resolve();
                }
            }),
        );

        // Partial steps so transition doesn't complete
        await changeLevel(endpoint, 50);

        await MockTime.yield();

        // Start new transition; should report because initiated by command
        await changeLevel(endpoint);

        await complete;

        expect(remainingTimeReports).deep.equals([150, 150, 0]);

        await node.close();
    });

    it("stops transition timers when destroyed", async () => {
        (globalThis as any).KILLME = true;

        // No timers should be present initially
        expectTimers(0);

        // Ensure test is repeatable regardless of previous tests
        MockTime.reset();

        const { node, endpoint } = await initializeDimmableLight();

        await MockTime.yield();

        // Partial steps so transition doesn't complete.  The step value here will affect the state of the tests; since
        // state is deterministic we know that 50 (5 seconds) results in having a deferred emit queued
        await changeLevel(endpoint, 50);

        // There should be two timers, one driving the transition and one to handled the delayed emit interval
        expectTimers(1);

        // Close with small step interval because otherwise timer may resolve while awaiting close
        await node.close(10);

        // Ensure ttimers are cleaned up
        expectTimers(0);

        // To be on the safe side, advance time beyond when the timer would trigger.  If nothing blows up, timers were
        // correctly shut down
        await MockTime.advance(100_000);
    }).timeout(200000);
});

function expectTimers(count: number) {
    expect(MockTime.timerCountFor("transition-node0.part0-LevelControlServerLogic"), "transition timer").equals(count);
    expect(MockTime.timerCountFor("delayed emit"), "deferred emit timer").equals(count);
}

async function setup() {
    MockTime.reset();

    const { node, endpoint } = await initializeDimmableLight();

    const events = Array<{
        kind: "level" | "time";
        value: number | null;
        ms: number;
    }>();

    let last = Time.nowMs();

    endpoint.events.levelControl.remainingTime$Changed.online.on(value => {
        events.push({ kind: "time", value, ms: Time.nowMs() - last });
        last = Time.nowMs();
    });

    endpoint.events.levelControl.currentLevel$Changed.online.on(value => {
        events.push({ kind: "level", value, ms: Time.nowMs() - last });
        last = Time.nowMs();
    });

    const complete = new Promise<void>(resolve =>
        endpoint.events.levelControl.remainingTime$Changed.online.on(value => {
            if (value === 0) {
                resolve();
            }
        }),
    );

    return { node, endpoint, events, complete };
}

async function initializeDimmableLight() {
    const node = await MockServerNode.createOnline({
        device: undefined,
    });

    const endpoint = await node.add(DimmableLightDevice, {
        onOff: { onOff: true },
        levelControl: {
            managedTransitionTimeHandling: true,
            currentLevel: 0,
        },
    });

    return { node, endpoint };
}

async function changeLevel(endpoint: Endpoint<DimmableLightDevice>, steps = 200) {
    const node = endpoint.owner as MockServerNode;
    await node.online({ command: true }, async agent => {
        const endpointAgent = agent.context.agentFor(endpoint);

        await agent.context.transaction.addResources(endpointAgent.levelControl);

        await endpointAgent.levelControl.moveToLevel({
            level: 254,
            transitionTime: 150,
            optionsMask: {},
            optionsOverride: {},
        });
    });

    for (let i = 0; i < steps; i++) {
        await MockTime.advance(100);
    }
}
