/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * A "feature set" is a set of features for a cluster.  The names of features
 * present appear in this set.
 */
export class FeatureSet extends Set<FeatureSet.Flag> {
    /**
     * Create a new feature set from an iterable that returns active names or
     * from an object of the form { [featureName: string]: true }
     */
    constructor(definition?: FeatureSet.Definition) {
        if (definition && typeof (definition as any)[Symbol.iterator] !== "function") {
            definition = Object.entries(definition)
                .filter(([_k, v]) => v)
                .map(([k]) => k);
        }
        super(definition as Iterable<any>);
    }

    /**
     * Access features as an array of feature names.
     */
    get array() {
        return Array.from(this);
    }

    /**
     * Access features as an object mapping feature name -> true.
     */
    get record() {
        return Object.fromEntries(this.map(f => [f, true]));
    }

    map<T>(fn: (name: FeatureSet.Flag) => T): T[] {
        return this.array.map(fn);
    }
}

export namespace FeatureSet {
    export type Flag = string;
    export type Flags = Iterable<FeatureSet.Flag>;
    export type Definition = Flags | { [name: string]: boolean };
}
