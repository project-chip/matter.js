/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { AccessControl } from "../../../../src/behavior/AccessControl.js";
import { StateType } from "../../../../src/behavior/state/StateType.js";
import { Datasource } from "../../../../src/behavior/state/managed/Datasource.js";
import { Val } from "../../../../src/behavior/state/managed/Val.js";
import { BehaviorSupervisor } from "../../../../src/behavior/supervision/BehaviorSupervisor.js";
import { ValueSupervisor } from "../../../../src/behavior/supervision/ValueSupervisor.js";
import { Observable } from "../../../../src/util/Observable.js";

class MyState {
    foo = "bar";
}

const supervisor = BehaviorSupervisor({ id: "myState", State: MyState });

function ds<const T extends StateType = typeof MyState>(options: Partial<Datasource.Options<T>> = {}): Datasource<T> {
    return Datasource({
        name: "test.state",
        type: MyState,
        supervisor,
        ...options,
    })
}

describe("Datasource", () => {
    it("reference is a MyState", () => {
        const datasource = ds();
        const state = datasource.reference(AccessControl.OfflineSession);
        state satisfies MyState;
        expect(state.foo).equals("bar");
    });

    it("caches state implementations", () => {
        const ds1 = ds();
        const ds2 = ds();

        const constructor1 = ds1.reference(AccessControl.OfflineSession).constructor;
        const constructor2 = ds2.reference(AccessControl.OfflineSession).constructor;

        expect(constructor1).equals(constructor2);
    });

    it("sets and gets immediately without transaction", () => {
        const datasource = ds();
        const state = datasource.reference(AccessControl.OfflineSession);

        state.foo = "BAR";
        expect(state.foo).equals("BAR");

        const state2 = datasource.reference(AccessControl.OfflineSession);
        expect(state2.foo).equals("BAR");
    });

    it("triggers events immediately without transaction", async () => {
        const events = {
            foo$Change: Observable(),
        };

        const result = new Promise(resolve => events.foo$Change.on((...args: any[]) => resolve(args)));

        const datasource = ds({ events });
        const state = datasource.reference(AccessControl.OfflineSession);

        state.foo = "BAR";

        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        expect(result).eventually.deep.equal(["BAR", "bar", context]);
    });

    it("handles rejection well", () => {
        class State {
            get foo() {
                return "foo";
            }

            set foo(value) {
                throw new Error(`Bad value "${value}"`);
            }
        }

        const supervisor = BehaviorSupervisor({ id: "test", State });

        const datasource = ds({
            type: State,
            supervisor
        });

        const state = datasource.reference(AccessControl.OfflineSession);

        expect(() => (state.foo = "bar")).throws(`Bad value "bar"`);
        expect(state.foo).equals("foo");
    });

    it("handles dynamic properties", () => {
        const dynamic = {
            foo: "hello",
        }
        class State {
            foo = "";

            [Val.properties](_session: ValueSupervisor.Session) {
                return dynamic;
            }
        }

        const supervisor = BehaviorSupervisor({ id: "test", State });

        const datasource = ds({
            type: State,
            supervisor
        });

        const state = datasource.reference(AccessControl.OfflineSession);

        expect(state.foo).equals("hello");
        state.foo = "goodbye";
        expect(state.foo).equals("goodbye");
        expect(dynamic.foo).equals("goodbye");
    })
});
