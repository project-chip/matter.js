/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Behavior } from "../../src/behavior/Behavior.js";
import { BehaviorBacking } from "../../src/behavior/BehaviorBacking.js";
import { Agent } from "../../src/endpoint/Agent.js";
import { EventEmitter, Observable } from "../../src/util/Observable.js";
import { MockPart } from "../endpoint/mock-part.js";

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

describe("Behavior", () => {
    type IsObject<T> = T extends undefined ? false : T extends object ? true : false;

    it("instantiates with correct properties", () => {
        const behavior = MockPart.createBehavior(TestBehavior);
        expect(behavior.agent.get(TestBehavior)).equals(behavior);
        expect(behavior.state.valueOne).equals(1);
        expect(behavior.state.valueTwo).equals(2);
        expect(behavior.events.endpointValue$Change.constructor.name).equals("Event");
    });

    it("unifies state", () => {
        const behavior = MockPart.createBehavior(TestBehavior);
        const state = behavior.state;

        ({}) as IsObject<typeof state> satisfies true;

        expect(state.valueOne).equals(1);
        expect(state.valueTwo).equals(2);
    });

    it("set creates new type with proper ID and defaults", () => {
        const NewBehavior = TestBehavior.set({ valueOne: 3 });
        TestBehavior.id satisfies "test";
        NewBehavior.id satisfies "test";

        const behavior = MockPart.createBehavior(NewBehavior);
        const state = behavior.state;

        ({}) as IsObject<typeof state> satisfies true;

        expect(state.valueOne).equals(3);
        expect(state.valueTwo).equals(2);
    });
});
