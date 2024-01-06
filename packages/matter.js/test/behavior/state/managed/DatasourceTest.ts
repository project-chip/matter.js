/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { AccessControl } from "../../../../src/behavior/AccessControl.js";
import { Datasource } from "../../../../src/behavior/state/managed/Datasource.js";
import { BehaviorSupervisor } from "../../../../src/behavior/supervision/BehaviorSupervisor.js";
import { Observable } from "../../../../src/util/Observable.js";

class MyState {
    foo = "bar";
}

const schema = BehaviorSupervisor({ id: "myState", State: MyState });

describe("Datasource", () => {
    it("reference is a MyState", () => {
        const datasource = Datasource({ type: MyState, supervisor: schema });
        const state = datasource.reference(AccessControl.OfflineSession);
        state satisfies MyState;
        expect(state.foo).equals("bar");
    });

    it("caches state implementations", () => {
        const ds1 = Datasource({ type: MyState, supervisor: schema });
        const ds2 = Datasource({ type: MyState, supervisor: schema });

        const constructor1 = ds1.reference(AccessControl.OfflineSession).constructor;
        const constructor2 = ds2.reference(AccessControl.OfflineSession).constructor;

        expect(constructor1).equals(constructor2);
    });

    it("sets and gets immediately without transaction", () => {
        const datasource = Datasource({ type: MyState, supervisor: schema });
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

        const datasource = Datasource({ type: MyState, supervisor: schema, events });
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

        const schema = BehaviorSupervisor({ id: "test", State });

        const datasource = Datasource({
            supervisor: schema,
            type: State,
        });

        const state = datasource.reference(AccessControl.OfflineSession);

        expect(() => (state.foo = "bar")).throws(`Bad value "bar"`);
        expect(state.foo).equals("foo");
    });
});
