/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Constraint } from "../../aspects/index.js";
import { Metatype } from "../../definitions/index.js";
import { ValueModel } from "../../models/index.js";
import { type ValidatorBuilder } from "./ValidatorBuilder.js";

export function addConstraint(builder: ValidatorBuilder, model: ValueModel, constraint: Constraint) {
    builder.addTest(
        generateConstraintExpr(model, constraint),
        "CONSTRAINT_VIOLATION",
        model,
        "Value disallowed by constraint",
    );

    function generateConstraintExpr(model: ValueModel, ast: Constraint.Ast): string {
        if (ast.parts) {
            return `(${ast.parts.map(part => generateConstraintExpr(model, part)).join(" || ")})`;
        }

        const metatype = model.metatype;
        switch (metatype) {
            case Metatype.array:
                let entryTest;
                if (ast.entry && model.children[0]) {
                    entryTest = generateConstraintExpr(model.children[0], ast.entry);
                }
                return generateRangeTest("v.length", ast, "Array.isArray(v)", entryTest);

            case Metatype.bytes:
                return generateRangeTest("v.length", ast, "v instanceof Uint8Array");

            case Metatype.string:
                return generateRangeTest("v.length", ast, "typeof v === 'string'");
        }

        return generateRangeTest("v", ast);
    }

    function generateRangeTest(value: string, ast: Constraint.Ast, typeTest?: string, entryTest?: string) {
        const parts = Array<string>();
        if (typeTest) {
            parts.push(...typeTest);
        }

        if (ast.value) {
            parts.push(`${value} === ${ast.value}`);
        } else {
            if (ast.min) {
                parts.push(`${value} >= ${ast.min}`);
            }
            if (ast.max) {
                parts.push(`${value} < ${ast.max}`);
            }
        }

        if (entryTest) {
            parts.push(entryTest);
        }

        if (!parts.length) {
            // Shouldn't really happen
            return "true";
        }

        return `(${parts.join(" && ")})`;
    }
}
