/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Behavior } from "../../src/behavior/Behavior.js";
import { BehaviorBacking } from "../../src/behavior/internal/BehaviorBacking.js";
import { Agent } from "../../src/endpoint/Agent.js";
import { EventEmitter, Observable } from "../../src/util/Observable.js";
import { MockEndpoint } from "../endpoint/mock-endpoint.js";

class TestBehavior extends Behavior {
    static override readonly id = "test";
    declare readonly events: TestBehavior.Events;
    declare readonly state: TestBehavior.State;

    constructor(agent: Agent, backing: BehaviorBacking) {
        super(agent, backing);
    }
}

namespace TestBehavior {
    export class State {
        valueOne = 1;
        valueTwo = 2;
    }

    export class Events extends EventEmitter {
        endpointValue$Change = Observable();
    }
}

function test(what: string, fn: (behavior: TestBehavior) => void) {
    it(what, async () => {
        const endpoint = await MockEndpoint.createWith(TestBehavior);
        await endpoint.act(agent => {
            const behavior = agent.test;
            fn(behavior);
        });
    });
}

describe("Behavior", () => {
    type IsObject<T> = T extends undefined ? false : T extends object ? true : false;

    test("instantiates with correct properties", behavior => {
        expect(behavior.agent.get(TestBehavior)).equals(behavior);
        expect(behavior.state.valueOne).equals(1);
        expect(behavior.state.valueTwo).equals(2);
        expect(behavior.events.endpointValue$Change.constructor.name).equals("Emitter");
    });

    test("instantiates with correct properties", behavior => {
        expect(behavior.agent.get(TestBehavior)).equals(behavior);
        expect(behavior.state.valueOne).equals(1);
        expect(behavior.state.valueTwo).equals(2);
        expect(behavior.events.endpointValue$Change.constructor.name).equals("Emitter");
    });

    test("unifies state", behavior => {
        const state = behavior.state;

        ({}) as IsObject<typeof state> satisfies true;

        expect(state.valueOne).equals(1);
        expect(state.valueTwo).equals(2);
    });

    it("set creates new type with proper ID and defaults", async () => {
        const NewBehavior = TestBehavior.set({ valueOne: 3 });
        TestBehavior.id satisfies "test";
        NewBehavior.id satisfies "test";

        const endpoint = await MockEndpoint.createWith(NewBehavior);
        await endpoint.act(agent => {
            const behavior = agent.test;

            const state = behavior.state;

            ({}) as IsObject<typeof state> satisfies true;

            expect(state.valueOne).equals(3);
            expect(state.valueTwo).equals(2);
        });
    });
});
