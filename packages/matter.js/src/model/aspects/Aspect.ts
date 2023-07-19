/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { serialize } from "../../util/String.js";
import { DefinitionError } from "../definitions/DefinitionError.js";

/**
 * An "aspect" is metadata about a Matter element that affects implementation
 * behavior.  Aspects are mostly "qualities" in the Matter specification except
 * for "constraint" which is not formally described as a quality.
 */
export class Aspect<D> {
    definition: D;
    errors?: DefinitionError[];

    get valid() {
        return !this.errors;
    }

    constructor(definition: D) {
        this.definition = definition;
    }

    get empty() {
        for (const [k, v] of Object.entries(this)) {
            if (k !== "definition" && k !== "errors" && v !== undefined) {
                return false;
            }
        }
        return true;
    }

    valueOf() {
        return this.toString();
    }

    error(code: string, message: string) {
        if (!this.errors) {
            this.errors = [];
        }
        this.errors.push({
            code,
            source: `${this.constructor.name} ${serialize(this.definition)}`,
            message
        });
    }

    extend(other: Exclude<D, "string">) {
        const descriptors = [
            ...Object.entries(Object.getOwnPropertyDescriptors(this)),
            ...Object.entries(Object.getOwnPropertyDescriptors(other))
        ]

        const definition = {} as { [name: string]: any };
        for (const [name, descriptor] of descriptors) {
            if (name === "definition" || name === "errors" || descriptor.value === undefined) {
                continue;
            }
            definition[name] = descriptor.value;
        }

        const constructor = this.constructor as new (definition: any) => Aspect<D>;
        return new constructor(definition);
    }
}
