/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { camelize } from "../../util/String.js";
import { FeatureSet } from "../definitions/index.js";
import { ValueModel } from "../models/index.js";
import { RecordValidator } from "./record-validation/RecordValidatorInterface.js";
import { ValidatorImplementation } from "./record-validation/ValidatorImplementation.js";

/**
 * Creates a utility object that can validate records based on a model.
 *
 * TODO - doesn't currently recurse into children
 *
 * @param fields defines the record to test
 * @param features active features
 *
 * @return a Validator
 */
export function RecordValidator(fields: ValueModel[], featureMap: ValueModel, features: FeatureSet): RecordValidator {
    const definedFeatures = new FeatureSet();
    const enabledFeatures = new FeatureSet();
    for (const feature of featureMap.children) {
        definedFeatures.add(feature.name);
        if (feature.description && features.has(camelize(feature.description, false))) {
            enabledFeatures.add(feature.name);
        }
    }

    return new ValidatorImplementation(fields, definedFeatures, enabledFeatures);
}
