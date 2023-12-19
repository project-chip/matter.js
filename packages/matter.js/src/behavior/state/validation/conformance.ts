/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { FeatureSet, ValueModel } from "../../../model/index.js";
import { ValueSupervisor } from "../../supervision/ValueSupervisor.js";
import { astToFunction } from "./conformance-compiler.js";

/**
 * Creates a function that validates a field based on its conformance
 * definition.
 */
export function createConformanceValidator(
    schema: ValueModel,
    featureMap: ValueModel,
    supportedFeatures: FeatureSet,
    nextValidator?: ValueSupervisor.Validate,
): ValueSupervisor.Validate | undefined {
    const validate = astToFunction(schema, featureMap, supportedFeatures);

    if (validate) {
        return (value, options) => {
            validate(value, options);
            nextValidator?.(value, options);
        };
    }

    return nextValidator;
}
