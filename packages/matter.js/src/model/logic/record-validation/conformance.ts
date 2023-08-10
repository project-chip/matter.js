/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Logger } from "../../../log/Logger.js";
import { camelize } from "../../../util/String.js";
import { Conformance } from "../../aspects/index.js";
import { ValueModel } from "../../models/index.js";
import { type ValidatorBuilder } from "./ValidatorBuilder.js";

const logger = Logger.get("conformance-validation");

const BinaryOperatorMap = {
    [Conformance.Operator.AND]: "&&",
    [Conformance.Operator.EQ]: "===",
    [Conformance.Operator.NE]: "!==",
    [Conformance.Operator.OR]: "||",
    [Conformance.Operator.GT]: ">",
    [Conformance.Operator.LT]: "<",
    [Conformance.Operator.GTE]: ">=",
    [Conformance.Operator.LTE]: "<=",
};

export function addConformance(builder: ValidatorBuilder, model: ValueModel, conformance: Conformance) {
    builder.addTest(
        `(${expr(conformance.ast).text})`,
        "CONFORMANCE_VIOLATION",
        model,
        `Value of ${camelize(model.name, false)} is disallowed by conformance`,
    );

    // Generates JS equivalent of conformance expression.  While generating the
    // expression we also track feature conformance because feature conformance
    // doesn't map directly to set logic that can be expressed as a simple
    // expression.  In general the conformance AST jumbles set logic with
    // expression evaluation so we need to track two types of state to implement
    // properly
    //
    // The generated value is a try-state expression.  "true" means the test
    // passes.  "false" means the test did not pass but in a group subsequent
    // tests should continue.  "null" means a group should fail entirely
    function expr(ast: Conformance.Ast | undefined): { text: string; feature?: boolean } {
        if (!ast) {
            logger.error("Undefined conformance AST type");
            return { text: "true" };
        }

        switch (ast?.type) {
            case undefined:
                logger.error("Missing conformance AST type");
                return { text: "true" };

            default:
                // Must cast AST to any because this list is exhaustive so
                // TS thinks ast type is "never"
                logger.error(`Unknown conformance AST type ${(ast as any).type}`);
                return { text: "true" };

            case Conformance.Special.Empty:
            case Conformance.Special.Desc:
            case Conformance.Flag.Provisional:
            case Conformance.Flag.Deprecated:
            case Conformance.Flag.Optional:
                return { text: "true" };

            case Conformance.Special.Choice:
                builder.hasChoices = true;
                const choice = ast.param;
                const choiceName = `${model.parent?.path || "?"}.${choice.name}`;
                return {
                    text: `this.testChoice(${JSON.stringify(choiceName)}, ${
                        expr(choice.expr).text
                    }, (v !== undefined && v !== null), ${choice.num}, ${choice.orMore ? "true" : "false"})`,
                };

            case Conformance.Special.Group:
                if (!Array.isArray(ast.param)) {
                    logger.error("Conformance AST group parameter is not an array");
                    return { text: "true" };
                }
                return { text: `this.testGroup(${ast.param.map(e => expr(e).text).join(", ")})` };

            case Conformance.Special.Name:
                const name = ast.param;
                if (builder.definedFeatures.has(name)) {
                    if (builder.enabledFeatures.has(name)) {
                        return { text: "(v !== undefined && v !== null)", feature: true };
                    }
                    return { text: "(v === undefined || v === null)", feature: false };
                }
                return { text: `record[${JSON.stringify(name)}]` };

            case Conformance.Special.OptionalIf: {
                const e = expr(ast.param);

                // If e is the result of a positive conformance test then
                // accept any value
                if (e.feature === true) {
                    // Do not set feature flag; feature specialization
                    // doesn't work on an optional group
                    return { text: "true" };
                }

                // If e is the result of a failing conformance test then accept
                // no values
                if (e.feature === false) {
                    // Do not set feature flag (same as above)
                    return { text: "(v === undefined || v === null)" };
                }

                // Not sure if this is legal but whatever the expression is,
                // also except missing values
                return { text: `(${e.text} || v === undefined || v === null)` };
            }

            case Conformance.Special.Value:
                return { text: `(record[${JSON.stringify(ast.param)}] == undefined ? true : false)` };

            case Conformance.Flag.Disallowed:
                return { text: "false" };

            case Conformance.Flag.Mandatory:
                return { text: "(v !== undefined && v !== null)" };

            case Conformance.Operator.AND:
            case Conformance.Operator.EQ:
            case Conformance.Operator.NE:
            case Conformance.Operator.OR:
            case Conformance.Operator.GT:
            case Conformance.Operator.LT:
            case Conformance.Operator.GTE:
            case Conformance.Operator.LTE:
            case Conformance.Operator.XOR: {
                const e1 = expr(ast.param.lhs);
                const e2 = expr(ast.param.rhs);

                // Reduce feature conjunction/disjunction to a single
                // boolean expression
                if (e1.feature !== undefined && e2.feature !== undefined) {
                    let feature: boolean | undefined;
                    switch (ast.type) {
                        case Conformance.Operator.AND:
                            feature = e1.feature && e2.feature;
                            break;

                        case Conformance.Operator.OR:
                            feature = e1.feature || e2.feature;
                            break;

                        case Conformance.Operator.XOR:
                            feature = e1.feature !== e2.feature;
                            break;
                    }
                    if (feature !== undefined) {
                        return {
                            text: feature ? "(v !== undefined && v !== null)" : "(v === undefined || v === null)",
                            feature,
                        };
                    }
                }

                // XOR has no native equivalent except for bitwise ^ which
                // won't work with our tri-state return values
                if (ast.type == Conformance.Operator.XOR) {
                    return { text: `${e1.text} ? !${e2.text} : ${e2.text}` };
                }

                return { text: `${e1.text} ${BinaryOperatorMap[ast.type]} ${e2.text}` };
            }

            case Conformance.Operator.NOT: {
                const e = expr(ast.param);

                // Invert feature state
                if (e.feature !== undefined) {
                    e.feature = !e.feature;
                }

                return { text: `!${e.text}`, feature: e.feature };
            }
        }
    }
}
