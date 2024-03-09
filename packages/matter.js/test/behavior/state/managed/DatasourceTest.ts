/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ActionContext } from "../../../../src/behavior/context/ActionContext.js";
import { NodeActivity } from "../../../../src/behavior/context/server/NodeActivity.js";
import { OfflineContext } from "../../../../src/behavior/context/server/OfflineContext.js";
import { StateType } from "../../../../src/behavior/state/StateType.js";
import { Val } from "../../../../src/behavior/state/Val.js";
import { Datasource } from "../../../../src/behavior/state/managed/Datasource.js";
import { BehaviorSupervisor } from "../../../../src/behavior/supervision/BehaviorSupervisor.js";
import { ValueSupervisor } from "../../../../src/behavior/supervision/ValueSupervisor.js";
import { DataModelPath } from "../../../../src/endpoint/DataModelPath.js";
import { DatatypeModel, FieldElement } from "../../../../src/model/index.js";
import { Observable } from "../../../../src/util/Observable.js";
import { MaybePromise } from "../../../../src/util/Promises.js";

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

        children: [FieldElement({ name: "foo", type: "string", quality: "N" })],
    }),
});

function createStore(initialValues: Val.Struct = {}): Datasource.Store & { sets: Val.Struct[] } {
    return {
        initialValues: {
            ...initialValues,
        },

        async set(_transaction, values) {
            this.sets.push(values);
        },

        sets: [],
    };
}

function createDatasource<const T extends StateType = typeof MyState>(
    options: Partial<Datasource.Options<T>> = {},
): Datasource<T> {
    return Datasource({
        path: DataModelPath("TestDatasource"),
        type: (options.type ?? MyState) as T,
        supervisor,
        ...options,
    });
}

async function withReference<R, const T extends StateType>(
    datasource: Datasource<T>,
    actor: (params: { context: ActionContext; state: InstanceType<T> }) => MaybePromise<R>,
) {
    return await OfflineContext.act("test-datasource", new NodeActivity(), context =>
        actor({
            context,
            state: datasource.reference(context),
        }),
    );
}

async function withDatasourceAndReference<R, const T extends StateType = typeof MyState>(
    options: Partial<Datasource.Options<T>> = {},
    actor: (params: { context: ActionContext; state: InstanceType<T>; ds: Datasource<T> }) => MaybePromise<R>,
) {
    const ds = createDatasource(options);
    return await withReference(ds, ({ context, state }) => actor({ context, state, ds }));
}

describe("Datasource", () => {
    it("reference is a MyState", async () => {
        await withDatasourceAndReference({}, ({ state }) => {
            state satisfies MyState;
            expect(state.foo).equals("bar");
        });
    });

    it("caches state implementations", async () => {
        const constructor1 = await withDatasourceAndReference({}, ({ state }) => state.constructor);
        const constructor2 = await withDatasourceAndReference({}, ({ state }) => state.constructor);

        expect(constructor1).equals(constructor2);
    });

    it("sets and gets with proper isolation", async () => {
        await withDatasourceAndReference({}, async ({ ds, state, context }) => {
            state.foo = "BAR";
            expect(state.foo).equals("BAR");

            await withReference(ds, async ({ state: state2, context: context2 }) => {
                expect(state2.foo).equals("bar");

                await context.transaction.commit();

                expect(state2.foo).equals("BAR");
                await context2.transaction.rollback();
                expect(state2.foo).equals("BAR");

                await withReference(ds, async ({ state: state3 }) => {
                    expect(state3.foo).equals("BAR");
                });
            });
        });
    });

    it("handles rejection well", async () => {
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

        await withDatasourceAndReference({ type: State, supervisor }, ({ state }) => {
            expect(() => (state.foo = "bar")).throws(`Bad value "bar"`);
            expect(state.foo).equals("foo");
        });
    });

    it("handles dynamic properties", async () => {
        const dynamic = {
            foo: "hello",
        };
        class State {
            foo = "";

            [Val.properties](_session: ValueSupervisor.Session) {
                return dynamic;
            }
        }

        const supervisor = BehaviorSupervisor({ id: "test", State });

        await withDatasourceAndReference({ type: State, supervisor }, ({ state }) => {
            expect(state.foo).equals("hello");
            state.foo = "goodbye";
            expect(state.foo).equals("goodbye");
            expect(dynamic.foo).equals("goodbye");
        });
    });

    it("auto-commits changes after initial load", async () => {
        const store = createStore();
        await withDatasourceAndReference(
            {
                store,
                supervisor: persistentSupervisor,
            },

            // Just set foo, rely on auto-commit when we leave transaction context
            ({ state }) => (state.foo = "rab"),
        );

        expect(store.sets).deep.equals([
            {
                foo: "rab",
            },
        ]);
    });

    it("commits persistent changes subsequent to initialization", async () => {
        const store = createStore();
        const ds = createDatasource({
            store: store,
            supervisor: persistentSupervisor,
        });

        await withReference(ds, async ({ state, context }) => {
            await context.transaction.commit();
            expect(store.sets.length).equals(0);

            state.foo = "rab";
            await context.transaction.commit();

            expect(store.sets.length).equals(1);
            expect(store.sets[0]).deep.equals({ foo: "rab" });
        });

        await withReference(ds, async ({ state }) => {
            state.foo = "woof";

            // Auto-commit
        });

        expect(store.sets.length).equals(2);
        expect(store.sets[1]).deep.equals({ foo: "woof" });
    });

    it("triggers events after transaction commit", async () => {
        const events = {
            foo$Change: Observable<any>(),
        };

        let changed = false;
        const result = new Promise(resolve =>
            events.foo$Change.on((...args: any[]) => {
                changed = true;
                resolve(args);
            }),
        );

        let actualContext: ActionContext | undefined;

        await withDatasourceAndReference({ events }, async ({ context, state }) => {
            actualContext = context;

            await context.transaction.commit();

            expect(changed).false;

            state.foo = "BAR";

            expect(changed).false;

            // Auto-commit
        });

        expect(changed).true;

        await expect(result).eventually.deep.equal(["BAR", "bar", actualContext]);
    });
});
