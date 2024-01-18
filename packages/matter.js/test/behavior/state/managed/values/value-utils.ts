/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Val } from "../../../../../src/behavior/state/managed/Val.js";
import { RootSupervisor } from "../../../../../src/behavior/supervision/RootSupervisor.js";
import { ValueSupervisor } from "../../../../../src/behavior/supervision/ValueSupervisor.js";
import { AccessLevel } from "../../../../../src/cluster/Cluster.js";
import { DatatypeModel, FieldElement } from "../../../../../src/model/index.js";

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
    })
}

/**
 * Create a struct with specified properties.
 */
export function structOf(fields: Record<string, string | Partial<FieldElement>>, structType?: Partial<FieldElement>) {
    return FieldElement({
        name: "Struct",
        type: "struct",

        ...structType,

        children:
            Object.entries(fields).map(([name, definition]) => fieldOf(name, definition))
    })
}

/**
 * Create a list of specified entry type.
 */
export function listOf(entryType: string | Partial<FieldElement>, listType?: Partial<FieldElement>) {
    return FieldElement({
        name: "List",
        type: "list",

        ...listType,

        children: [
            fieldOf("entry", entryType)
        ]
    })
}

/**
 * A simplified source for managed structs, similar to Datasource but provides access to the raw underlying values.
 */
export function TestStruct(fields: Record<string, string | Partial<FieldElement>>) {
    const supervisor = new RootSupervisor(new DatatypeModel(structOf(fields)));

    const struct = {} as Val.Struct;

    const rootRef: Val.Reference = {
        value: struct,
        original: {},
        
        change(mutator: () => void) {
            mutator();
        },

        notify() {},

        refresh() {},
    }

    return {
        fields: struct,

        expect(expected: Val.Struct) {
            expect(struct).deep.equals(expected);
        },

        reference(session?: Partial<ValueSupervisor.Session>) {
            return supervisor.manage(
                rootRef,
                { accessLevel: AccessLevel.Administer, ...session }
            ) as Val.Struct;
        }
    }
}
