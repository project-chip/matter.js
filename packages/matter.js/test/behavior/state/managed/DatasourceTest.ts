/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { AccessControl } from "../../../../src/behavior/AccessControl.js";
import { StateType } from "../../../../src/behavior/state/StateType.js";
import { Datasource } from "../../../../src/behavior/state/managed/Datasource.js";
import { Val } from "../../../../src/behavior/state/managed/Val.js";
import { Transaction } from "../../../../src/behavior/state/transaction/Transaction.js";
import { BehaviorSupervisor } from "../../../../src/behavior/supervision/BehaviorSupervisor.js";
import { ValueSupervisor } from "../../../../src/behavior/supervision/ValueSupervisor.js";
import { AccessLevel } from "../../../../src/cluster/Cluster.js";
import { DatatypeModel, FieldElement } from "../../../../src/model/index.js";
import { Observable } from "../../../../src/util/Observable.js";

class MyState {
    foo = "bar";
}

const supervisor = BehaviorSupervisor({ id: "myState", State: MyState });
const persistentSupervisor = BehaviorSupervisor({
    id: "myState",
    State: MyState,

    schema: new DatatypeModel({
        name: "MyState",
        type: "struct",

        children: [
            FieldElement({ name: "foo", type: "string", quality: "N" })
        ]
    })
});

function createStore(initialValues: Val.Struct = {}): Datasource.Store & { sets: Val.Struct[] } {
    return {
        initialValues: {
            __version__: 1,
            ...initialValues,
        },

        async set(_transaction, values) {
            this.sets.push(values);
        },

        sets: [],
    }
}

function createDatasource<const T extends StateType = typeof MyState>(options: Partial<Datasource.Options<T>> = {}): Datasource<T> {
    return Datasource({
        name: "test.state",
        type: MyState,
        supervisor,
        ...options,
    })
}

describe("Datasource", () => {
    it("reference is a MyState", () => {
        const ds = createDatasource();
        const state = ds.reference(AccessControl.OfflineSession);
        state satisfies MyState;
        expect(state.foo).equals("bar");
    });

    it("caches state implementations", () => {
        const ds1 = createDatasource();
        const ds2 = createDatasource();

        const constructor1 = ds1.reference(AccessControl.OfflineSession).constructor;
        const constructor2 = ds2.reference(AccessControl.OfflineSession).constructor;

        expect(constructor1).equals(constructor2);
    });

    it("sets and gets immediately without transaction", () => {
        const ds = createDatasource();
        const state = ds.reference(AccessControl.OfflineSession);

        state.foo = "BAR";
        expect(state.foo).equals("BAR");

        const state2 = ds.reference(AccessControl.OfflineSession);
        expect(state2.foo).equals("BAR");
    });

    it("triggers events immediately without transaction", async () => {
        const events = {
            foo$Change: Observable(),
        };

        const result = new Promise(resolve => events.foo$Change.on((...args: any[]) => resolve(args)));

        const ds = createDatasource({ events });
        const state = ds.reference(AccessControl.OfflineSession);

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

        const ds = createDatasource({
            type: State,
            supervisor
        });

        const state = ds.reference(AccessControl.OfflineSession);

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

        const datasource = createDatasource({
            type: State,
            supervisor
        });

        const state = datasource.reference(AccessControl.OfflineSession);

        expect(state.foo).equals("hello");
        state.foo = "goodbye";
        expect(state.foo).equals("goodbye");
        expect(dynamic.foo).equals("goodbye");
    })

    it("commits version after initial load (no transaction)", async () => {
        const store = createStore({ __version__: undefined });
        const ds = createDatasource({ store });

        const tx = new Transaction("test");
        ds.save(tx);
        await tx.commit();

        expect(store.sets.length).equals(1);
        expect(Object.keys(store.sets[0]).length === 1);
        expect(typeof store.sets[0].__version__).equals("number");
    })

    it("commits changes after initial load (no transaction)", async () => {
        const store = createStore();
        const ds = createDatasource({ store, supervisor: persistentSupervisor });

        ds.reference(AccessControl.OfflineSession).foo = "rab";

        const tx = new Transaction("test");
        ds.save(tx);
        await tx.commit();

        expect(store.sets).deep.equals(
            [
                {
                    __version__: 2,
                    foo: "rab",
                }
            ]
        )
    })

    it("isolates changes with transaction then commits", async () => {
        const ds = createDatasource();
        const tx = new Transaction("test");

        ds.reference({ accessLevel: AccessLevel.Administer, transaction: tx }).foo = "rab";

        expect(ds.reference(AccessControl.OfflineSession).foo).equals("bar");

        await tx.commit();

        expect(ds.reference(AccessControl.OfflineSession).foo).equals("rab");
    })

    it("commits persistent changes with transaction", async () => {
        const store = createStore({ __version__: 1 });
        const ds = createDatasource({ store, supervisor: persistentSupervisor });
        const tx = new Transaction("test");

        ds.reference({ accessLevel: AccessLevel.Administer, transaction: tx }).foo = "rab";

        expect(store.sets.length).equals(0);

        await tx.commit();

        expect(store.sets).deep.equals(
            [
                {
                    __version__: 2,
                    foo: "rab",
                }
            ]
        );
    })

    it("triggers events after transaction commit", async () => {
        const events = {
            foo$Change: Observable(),
        };

        let changed = false;
        const result = new Promise(resolve =>
            events.foo$Change.on((...args: any[]) => {
                changed = true;
                resolve(args)
            })
        );

        const ds = createDatasource({ events });
        const tx = new Transaction("test");
        const state = ds.reference({ accessLevel: AccessLevel.Administer, transaction: tx });

        state.foo = "BAR";

        expect(changed).false;

        await tx.commit();

        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        expect(result).eventually.deep.equal(["BAR", "bar", context]);
    })
});
