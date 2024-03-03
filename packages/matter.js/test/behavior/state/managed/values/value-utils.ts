/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ActionContext } from "../../../../../src/behavior/context/ActionContext.js";
import { OnlineContext } from "../../../../../src/behavior/context/server/OnlineContext.js";
import { Datasource } from "../../../../../src/behavior/state/managed/Datasource.js";
import { Val } from "../../../../../src/behavior/state/Val.js";
import { RootSupervisor } from "../../../../../src/behavior/supervision/RootSupervisor.js";
import { ValueSupervisor } from "../../../../../src/behavior/supervision/ValueSupervisor.js";
import { DataModelPath } from "../../../../../src/endpoint/DataModelPath.js";
import { DatatypeModel, FieldElement } from "../../../../../src/model/index.js";
import { Observable } from "../../../../../src/util/Observable.js";
import { MaybePromise } from "../../../../../src/util/Promises.js";
import { camelize } from "../../../../../src/util/String.js";
import { Identity } from "../../../../../src/util/Type.js";

/**
 * Create schema for a single field.
 */
export function fieldOf(name: string, definition: string | Partial<FieldElement>) {
    if (typeof definition === "string") {
        definition = { type: definition };
    }
    return FieldElement({
        ...definition,
        name,
    });
}

/**
 * Create a struct with specified properties.
 */
export function structOf(fields: Record<string, string | Partial<FieldElement>>, structType?: Partial<FieldElement>) {
    return FieldElement({
        name: "Struct",
        type: "struct",

        ...structType,

        children: Object.entries(fields).map(([name, definition]) => fieldOf(name, definition)),
    });
}

/**
 * Create a list of specified entry type.
 */
export function listOf(entryType: string | Partial<FieldElement>, listType?: Partial<FieldElement>) {
    return FieldElement({
        name: "List",
        type: "list",

        ...listType,

        children: [fieldOf("entry", entryType)],
    });
}

export interface Online2 {
    cx1: ActionContext;
    cx2: ActionContext;
    ref1: Val.Struct;
    ref2: Val.Struct;
}

class TestState {}

/**
 * Utility for creating a managed struct via a datasource.
 */
export function TestStruct(fields: Record<string, string | Partial<FieldElement>>, defaults: Val.Struct = {}) {
    const supervisor = new RootSupervisor(new DatatypeModel(structOf(fields)));

    const notifies: { index: string | undefined; oldValue: Val; newValue: Val }[] = [];

    const events = {} as Record<string, Observable<any>>;
    for (const index in fields) {
        const observable = Observable();
        events[`${camelize(index)}$Change`] = observable;
        observable.on((newValue: Val, oldValue: Val) => {
            notifies.push({ index, oldValue, newValue });
        });
    }

    const datasource = Datasource({
        path: DataModelPath("TestStruct"),
        type: TestState,
        supervisor,
        defaults,
        events,
    });

    return {
        get fields() {
            return datasource.view as Val.Struct;
        },
        notifies,

        expect(expected: Val.Struct) {
            expect(this.fields).deep.equals(expected);
        },

        online(cx: OnlineContext.Options, actor: (ref: Val.Struct, cx: ActionContext) => MaybePromise) {
            return OnlineContext(cx).act(cx => actor(this.reference(cx), cx));
        },

        online2(cx1: OnlineContext.Options, cx2: OnlineContext.Options, actor: (online: Online2) => MaybePromise) {
            return this.online(cx1, (ref1, cx1) => this.online(cx2, (ref2, cx2) => actor({ cx1, cx2, ref1, ref2 })));
        },

        reference(context: ValueSupervisor.Session) {
            return datasource.reference(context) as Val.Struct;
        },
    };
}

export type TestStruct = Identity<ReturnType<typeof TestStruct>>;
