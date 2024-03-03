/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Access, ClusterModel, DatatypeModel, FeatureSet, FieldModel, type ValueModel } from "../../model/index.js";
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
 * BehaviorSchema derives operational schema from a "logical" schema.  If the
 * {@link Behavior} implementation has a static schema property this
 * defines the logical schema.  Otherwise the logical schema is
 * {@link Schema.empty}.
 *
 * This function loads the logical schema and mutates as required:
 *
 *   - Filters schema elements to only those applicable for the supported
 *     features.  This improves validation performance and drops conflicting
 *     elements with multiple definitions for different feature selections.
 *
 *   - Adds fields for any programmatic extensions of state.  This allows
 *     schema-driven logic to process state fields added in pure JS.
 *
 * The {@link RootSupervisor} is then constructed from the mutated logical
 * schema.
 */
export function BehaviorSupervisor(options: BehaviorSupervisor.Options): RootSupervisor {
    let featuresAvailable: Set<string>, featuresSupported: FeatureSet;

    const logical = options.schema ?? Schema.empty;

    // Extract features and supportedFeatures from the logical schema
    if (logical instanceof ClusterModel) {
        ({ featuresAvailable, featuresSupported } = FeatureSet.normalize(
            logical.featureMap,
            logical.supportedFeatures,
        ));
    } else {
        featuresAvailable = new Set();
        featuresSupported = new FeatureSet([]);
    }

    // Filter children based on feature conformance
    const children = logical.children
        .filter(child => child.effectiveConformance.isApplicable(featuresAvailable, featuresSupported))
        .map(child => child.clone());

    // Add fields for programmatic extensions
    addExtensionFields(logical, new options.State(), children);

    // Create the root operational schema
    let schema: Schema;
    if (logical instanceof ClusterModel) {
        schema = new ClusterModel({
            ...logical,
            name: `${camelize(options.id, true)}$State`,
            children,
            supportedFeatures: featuresSupported,
        });
    } else {
        schema = new DatatypeModel({
            ...logical,
            type: logical.type ?? "struct",
            name: `${camelize(options.id, true)}$State`,
            children,
        });
    }

    return new RootSupervisor(schema, options.State);
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
 * Note 1: We skip all attributes, not just those that are applicable given the
 * supported features.
 *
 * Note 2: Finding fields isn't as simple as just using "for ... in" because
 * ES6 class accessors are non-enumerable.  So we instead search the prototype
 * chain for read/write descriptors.
 *
 * Note 3: We can't do anything with types either.  This means e.g. writing to
 * subfields won't behave as expected.  Really to do things correctly behavior
 * authors should hand-craft schema.  Or maybe we do something with decorators?.
 */
function addExtensionFields(base: Schema, defaultState: Val.Struct, children: ValueModel[]) {
    const props = new Set<string>();
    for (const field of base.members) {
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
