/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Val } from "@project-chip/matter.js/behavior/state";
import { Instrumentation } from "@project-chip/matter.js/behavior/state/managed";
import { inspect } from "util";

/**
 * Node's default console formatting makes it difficult to view the value of manaaged collections.  This function
 * instruments values to make inspection work more naturally.
 */
export function installInspectionInstrumentation() {
    Instrumentation.instrumentStruct = constructor => {
        constructor.prototype[inspect.custom] = function (this: Val.Struct) {
            return { ...this };
        };

        return constructor;
    };

    Instrumentation.instrumentList = (factory): Instrumentation.ListFactory => {
        return (handlers, target) => {
            (target as any)[inspect.custom] = function (this: Val.List) {
                return [...this];
            };

            return factory(handlers, target);
        };
    };
}
