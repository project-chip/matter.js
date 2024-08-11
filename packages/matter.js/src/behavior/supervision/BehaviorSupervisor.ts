/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Access, ClusterModel, DatatypeModel, FieldModel, type ValueModel } from "../../model/index.js";
import { camelize } from "../../util/String.js";
import type { Behavior } from "../Behavior.js";
import type { StateType } from "../state/StateType.js";
import type { Val } from "../state/Val.js";
import { RootSupervisor } from "./RootSupervisor.js";
import { Schema } from "./Schema.js";

/**
 * Create a {@link RootSupervisor} for a {@link Behavior}.
 *
 * {@link Behavior} uses this internally for its {@link Behavior.supervisor}.
 *
 * BehaviorSupervisor derives operational schema from a "logical" schema.  If the {@link Behavior} implementation has a
 * static schema property this defines the logical schema.  Otherwise the logical schema is {@link Schema.empty}.
 *
 * This function loads the logical schema and mutates as required.  This includes addition of fields for any
 * programmatic extensions of state.  This allows schema-driven logic to process state fields added in pure JS.
 *
 * The {@link RootSupervisor} is then constructed from the mutated logical schema.
 */
export function BehaviorSupervisor(options: BehaviorSupervisor.Options): RootSupervisor {
    const logical = options.schema ?? Schema.empty;

    // Copy children so we can extend
    const children = logical.children.map(child => child.clone());

    // Add fields for programmatic extensions
    addExtensionFields(logical, new options.State(), children);

    // Create the root operational schema
    let schema: Schema;
    if (logical instanceof ClusterModel) {
        schema = new ClusterModel({
            ...logical,
            name: `${camelize(options.id, true)}$State`,
            children,
        });
    } else {
        schema = new DatatypeModel({
            ...logical,
            type: logical.type ?? "struct",
            name: `${camelize(options.id, true)}$State`,
            children,
        });
    }

    schema.freeze();

    return new RootSupervisor(schema);
}

export namespace BehaviorSupervisor {
    export interface Options {
        id: string;
        schema?: Schema;
        State: StateType;
    }
}

/**
 * Adds a field for every property in state that isn't defined in the schema.
 *
 * Note 1: We skip all attributes, not just those that are applicable given the supported features.
 *
 * Note 2: Finding fields isn't as simple as just using "for ... in" because ES6 class accessors are non-enumerable.  So
 * we instead search the prototype chain for read/write descriptors.
 *
 * Note 3: We can't do anything with types either.  This means e.g. writing to subfields won't behave as expected.
 * Really to do things correctly behavior authors should hand-craft schema.  Or maybe we do something with decorators?.
 */
function addExtensionFields(base: Schema, defaultState: Val.Struct, children: ValueModel[]) {
    const props = new Set<string>();
    for (const field of base.activeMembers) {
        props.add(camelize(field.name));
    }

    function addProperties(object: null | Val.Struct) {
        if (!object || object === Object.prototype) {
            return;
        }

        const descriptors = Object.getOwnPropertyDescriptors(object);

        for (const name in descriptors) {
            if (props.has(name) || name === "constructor") {
                continue;
            }

            if (!props.has(name)) {
                props.add(name);

                const field = new FieldModel({
                    name,
                    type: "any",

                    access: new Access({
                        readPriv: Access.Privilege.View,
                        writePriv: Access.Privilege.Operate,
                    }),
                });

                const descriptor = descriptors[name];
                if (!descriptor.writable && !descriptor.set) {
                    field.quality = "F";
                }

                children.push(field);
            }
        }

        addProperties(Object.getPrototypeOf(object));
    }

    addProperties(defaultState);
}
