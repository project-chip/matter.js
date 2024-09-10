/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Instrumentation, Val } from "#node";
import { inspect } from "util";

/**
 * Node's default console formatting makes it difficult to view the value of managed collections.  This function
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
