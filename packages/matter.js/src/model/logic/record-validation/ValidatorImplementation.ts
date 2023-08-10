/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Properties } from "../../../util/Type.js";
import { FeatureSet } from "../../definitions/FeatureSet.js";
import { ValueModel } from "../../models/index.js";
import { RecordValidationResult, RecordValidator } from "./RecordValidatorInterface.js";
import { ValidatorBuilder } from "./ValidatorBuilder.js";

type ChoiceState = {
    count: number;
    num: number;
    orMore?: boolean;
};

/**
 * This is an internal class that implements validation.
 *
 * Actual validation occurs in a the generated "validate" method except for
 * portions exposed as utility methods on this class.
 */
export class ValidatorImplementation implements RecordValidator {
    validate: (record: Properties) => RecordValidationResult;
    logFailure: () => void;

    choices?: { [name: string]: ChoiceState };
    result?: RecordValidationResult;

    constructor(
        public fields: ValueModel[],
        definedFeatures: FeatureSet,
        public enabledFeatures: FeatureSet,
    ) {
        const builder = new ValidatorBuilder(fields, definedFeatures, enabledFeatures);
        this.validate = builder.compile();
        this.logFailure = () => builder.logFailure();
    }

    // Compiled validator invokes to test group values
    testGroup(...args: any[]) {
        for (const a of args) {
            if (a === true) {
                return true;
            }
            if (a === null) {
                return false;
            }
        }
        return false;
    }

    // Compiled validator invokes to record active choice.  A counter is kept
    // using a key of the form ".a" in values.  After conformance is tested on
    // each field, choices must be reexamined to ensure choices are correct
    testChoice(name: string, result: any, hasValue: boolean, num: number, orMore: boolean) {
        if (!this.choices) {
            this.choices = {};
        }
        let choice = this.choices[name];
        if (!choice) {
            choice = this.choices[name] = {
                count: 0,
                num: num,
                orMore: orMore,
            };
        }
        if (hasValue) {
            choice.count++;
        }

        // Just pass result through.  Error handling occurs in checkChoices
        return result;
    }

    // Compiled validator invokes to check choices
    checkChoices() {
        for (const name in this.choices) {
            const choice = this.choices[name];
            if (choice.count < choice.num) {
                this.error("CHOICE_THRESHOLD_NOT_MET", name, `Choice minimum of ${choice.num} not met`);
            } else if (choice.count > choice.num && !choice.orMore) {
                this.error("CHOICE_THRESHOLD_EXCEEDED", name, `Choice maximum of ${choice.num} exceeded`);
            }
        }
    }

    // Compiled validator calls to add a validation error
    error(code: string, source: string, message: string) {
        const result = this.result;
        if (!result) {
            // This cannot fail but TS & eslint don't know that
            return;
        }

        if (!result.errors) {
            result.valid = false;
            result.errors = [];
        }
        result.errors.push({ code, source, message });
    }
}
