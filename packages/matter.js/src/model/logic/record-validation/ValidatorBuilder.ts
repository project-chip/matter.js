/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Logger } from "../../../log/Logger.js";
import { camelize } from "../../../util/String.js";
import { Conformance, Constraint, Quality } from "../../aspects/index.js";
import { FeatureSet } from "../../definitions/index.js";
import { ValueModel } from "../../models/index.js";
import { addConformance } from "./conformance.js";
import { addConstraint } from "./constraint.js";
import { addQuality } from "./quality.js";
import { RecordValidator } from "./RecordValidatorInterface.js";
import { addType } from "./type.js";
import { type ValidatorImplementation } from "./ValidatorImplementation.js";

const logger = new Logger("ValidatorBuilder");

export class ValidatorBuilder extends Array<string> {
    hasChoices = false;

    constructor(
        fields: ValueModel[],
        public definedFeatures: FeatureSet,
        public enabledFeatures: FeatureSet,
    ) {
        super("this.result = { valid: true }", "let v");

        for (const child of fields) {
            if (!(child instanceof ValueModel)) {
                continue;
            }

            const aspects = child.validationAspects;
            if (!aspects.length) {
                continue;
            }

            this.push(`v = record[${JSON.stringify(camelize(child.name, false))}]`);

            for (const aspect of aspects) {
                if (aspect instanceof Constraint) {
                    addConstraint(this, child, aspect);
                } else if (aspect instanceof Conformance) {
                    addConformance(this, child, aspect);
                } else if (aspect instanceof Quality) {
                    addQuality(this, child, aspect);
                }
                addType(this, child);
            }
        }

        if (this.hasChoices) {
            this.unshift("delete this.choices");
            this.push("this.checkChoices()");
        }
        this.push("return this.result");
    }

    addTest(test: string, code: string, source: ValueModel, message: string) {
        if (test == "true") {
            return;
        }
        this.push(
            `if (!(${test})) { this.error(${JSON.stringify(code)}, ${JSON.stringify(source.path)}, ${JSON.stringify(
                message,
            )}) }`,
        );
    }

    logInternalEvaluationError(message: string, e: any) {
        logger.error(`${message}: ${e}`);
        this.logFailure();
    }

    logFailure() {
        logger.debug("Failing record validator implementation:");
        Logger.nest(() => {
            const lineNoWidth = (this.length - 1).toString().length;
            for (let i = 0; i < this.length; i++) {
                logger.debug(`${i.toString().padStart(lineNoWidth, " ")} ${this[i]}`);
            }
        });
    }

    compile() {
        const logInternalEvaluationError = this.logInternalEvaluationError.bind(this);
        try {
            const fn = new Function("record", this.join("\n")) as RecordValidator["validate"];
            return function (this: ValidatorImplementation, record: { [name: string]: any }) {
                try {
                    return fn.call(this, record);
                } catch (e) {
                    logInternalEvaluationError(`Record validator evaluation failed`, e);
                    throw e;
                }
            };
        } catch (e) {
            logInternalEvaluationError("Record validator compilation failed", e);
            throw e;
        }
    }
}
