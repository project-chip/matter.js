/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { OfflineContext } from "../../../../src/behavior/server/context/OfflineContext.js";
import { StateType } from "../../../../src/behavior/state/StateType.js";
import { Datasource } from "../../../../src/behavior/state/managed/Datasource.js";
import { Val } from "../../../../src/behavior/state/managed/Val.js";
import { BehaviorSupervisor } from "../../../../src/behavior/supervision/BehaviorSupervisor.js";
import { ValueSupervisor } from "../../../../src/behavior/supervision/ValueSupervisor.js";
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

function createReference<const T extends StateType = typeof MyState>(datasource: Datasource<T>) {
    const context = OfflineContext();
    const state = datasource.reference(context);
    return { context, state };
}

function createDatasourceAndReference<const T extends StateType = typeof MyState>(
    options: Partial<Datasource.Options<T>> = {}
) {
    const ds = createDatasource(options);
    const { context, state } = createReference(ds);
    return { ds: ds, context, state };
}

describe("Datasource", () => {
    it("reference is a MyState", () => {
        const { state } = createDatasourceAndReference();
        state satisfies MyState;
        expect(state.foo).equals("bar");
    });

    it("caches state implementations", () => {
        const { state: state1 } = createDatasourceAndReference();
        const { state: state2 } = createDatasourceAndReference();

        const constructor1 = state1.constructor;
        const constructor2 = state2.constructor;

        expect(constructor1).equals(constructor2);
    });

    it("sets and gets", async () => {
        const { ds, state, context } = createDatasourceAndReference();

        state.foo = "BAR";
        expect(state.foo).equals("BAR");

        const { state: state2, context: context2 } = createReference(ds);
        expect(state2.foo).equals("bar");
        
        await context.transaction.commit();

        // state2 reads should be isolated
        expect(state2.foo).equals("bar");
        await context2.transaction.rollback();
        expect(state2.foo).equals("BAR");

        const { state: state3 } = createReference(ds);
        expect(state3.foo).equals("BAR");
    });

    it("handles rejection well", () => {
        class State {
            get foo() {
                return "foo";
            }

            set foo(value) {
                if (value === "foo") {
                    return;
                }
                throw new Error(`Bad value "${value}"`);
            }
        }

        const supervisor = BehaviorSupervisor({ id: "test", State });

        const { state } = createDatasourceAndReference({
            type: State,
            supervisor
        });

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

        const { state } = createDatasourceAndReference({
            type: State,
            supervisor
        });

        expect(state.foo).equals("hello");
        state.foo = "goodbye";
        expect(state.foo).equals("goodbye");
        expect(dynamic.foo).equals("goodbye");
    })

    it("commits version after initial load and not subsequently", async () => {
        const store = createStore({ __version__: undefined });

        const { ds, context } = createDatasourceAndReference({ store, versioning: true });
        await context.transaction.commit();

        expect(store.sets.length).equals(1);
        expect(Object.keys(store.sets[0]).length).equals(1);
        expect(typeof store.sets[0].__version__).equals("number");

        const { context: context2 } = createReference(ds);
        await context2.transaction.commit();

        expect(store.sets.length).equals(1);
    })

    it("does not commit version if already persisted", async () => {
        const store = createStore({ __version__: 1234 });

        const { ds, context } = createDatasourceAndReference({ store, versioning: true });
        await context.transaction.commit();

        expect(store.sets.length).equals(0);
        expect(ds.version).equals(1234);
    })

    it("commits changes after initial load", async () => {
        const store = createStore();
        const { context, state } = createDatasourceAndReference({
            store,
            versioning: true,
            supervisor: persistentSupervisor,
        })

        state.foo = "rab";

        await context.transaction.commit();

        expect(store.sets).deep.equals(
            [
                {
                    __version__: 2,
                    foo: "rab",
                }
            ]
        )
    })

    it("commits persistent changes subsequent to initialization", async () => {
        const store = createStore();
        const { ds, state, context } = createDatasourceAndReference({
            store,
            versioning: true,
            supervisor: persistentSupervisor,
        });

        await context.transaction.commit();
        expect(store.sets.length).equals(0);

        state.foo = "rab";
        await context.transaction.commit();

        expect(store.sets.length).equals(1);
        expect(store.sets[0]).deep.equals({ __version__: 2, foo: "rab" });

        const { context: context2, state: state2 } = createReference(ds);
        state2.foo = "woof";
        await context2.transaction.commit();

        expect(store.sets.length).equals(2);
        expect(store.sets[1]).deep.equals({ __version__: 3, foo: "woof" });
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

        const { context, state } = createDatasourceAndReference({ events });
        await context.transaction.commit();

        expect(changed).false;

        state.foo = "BAR";

        expect(changed).false;

        await context.transaction.commit();

        expect(changed).true;

        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        expect(result).eventually.deep.equal(["BAR", "bar", context]);
    })
});
