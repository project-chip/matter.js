/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Lexer } from "#parser/Lexer.js";
import { TokenStream } from "#parser/TokenStream.js";
import { camelize } from "@matter/general";
import { FieldValue } from "../common/index.js";
import { Aspect } from "./Aspect.js";

/**
 * An operational view of constraints as defined by the Matter specification.
 *
 * A "constraint" limits possible data values.
 */
export class Constraint extends Aspect<Constraint.Definition> implements Constraint.Ast {
    declare desc?: boolean;
    declare value?: Constraint.Expression;
    declare min?: Constraint.Expression;
    declare max?: Constraint.Expression;
    declare in?: FieldValue;
    declare entry?: Constraint;
    declare parts?: Constraint[];

    /**
     * Initialize from a Constraint.Definition or the constraint DSL defined by the Matter Specification.
     */
    constructor(definition: Constraint.Definition) {
        super(definition);

        let ast;
        switch (typeof definition) {
            case "string":
                // The spec designates a "0b000xxxxx" syntax for specifying constraints as bitmasks.  Through 1.3 we
                // only see this on bitmaps which constraint fine using the bit definitions.  So just ignore it. We also
                // handle one invalid case where there is no "0b" or "0x" prefix on a mask
                if (definition.match(/(?:0b[0x ]*x[0x ]*)|(?:0x[0x_]*x[0x_]*)|(?:00[0x]*x)/i)) {
                    break;
                }
                ast = Parser.parse(this, definition);
                break;

            case "number":
                ast = { value: definition };
                break;

            default:
                ast = definition;
                if (ast?.definition) {
                    this.definition = ast.definition;
                }
                break;
        }

        if (!ast) {
            return;
        }

        if (ast.desc !== undefined) {
            this.desc = ast.desc;
        }
        if (ast.value !== undefined) {
            this.value = ast.value;
        }
        if (ast.min !== undefined) {
            this.min = ast.min;
        }
        if (ast.max !== undefined) {
            this.max = ast.max;
        }
        if (ast.in !== undefined) {
            this.in = ast.in;
        }
        if (ast.entry !== undefined) {
            this.entry = new Constraint(ast.entry);
        }
        if (ast.parts !== undefined) {
            this.parts = ast.parts.map(p => new Constraint(p));
        }

        this.freeze();
    }

    /**
     * Test a value against a constraint.  Does not recurse into arrays.
     */
    test(value: FieldValue, properties?: Record<string, any>): boolean {
        // Helper that looks up "reference" field values in properties.  This is for constraints such as "min FieldName"
        function valueOf(value: Constraint.Expression | undefined, raw = false): FieldValue | undefined {
            if (!raw && (typeof value === "string" || Array.isArray(value))) {
                return value.length;
            }
            if (typeof value === "object" && value !== null && "type" in value) {
                const { type } = value;
                switch (type) {
                    case FieldValue.reference:
                        if (typeof value.name === "string") {
                            value = valueOf(properties?.[camelize(value.name)], raw);
                        }
                        break;

                    case "+":
                        {
                            const lhs = valueOf(value.lhs);
                            const rhs = valueOf(value.rhs);
                            if (typeof lhs === "number" && typeof rhs === "number") {
                                return lhs + rhs;
                            }
                            return undefined;
                        }
                        break;

                    case "-":
                        {
                            const lhs = valueOf(value.lhs);
                            const rhs = valueOf(value.rhs);
                            if (typeof lhs === "number" && typeof rhs === "number") {
                                return lhs - rhs;
                            }
                            return undefined;
                        }
                        break;
                }
            }

            return value;
        }

        if (value === undefined) {
            return false;
        }

        if (this.in) {
            let set = valueOf(this.in, true);
            if (!Array.isArray(set)) {
                set = set === undefined ? [] : [set];
            }
            return (set as unknown[]).indexOf(value) !== -1;
        }

        const v = valueOf(this.value);
        if (v === value) {
            return true;
        }

        if (v !== undefined || value === null) {
            return false;
        }

        if (this.min !== undefined && this.min !== null) {
            const min = valueOf(this.min);
            if (min !== undefined && min !== null && min > value) {
                return false;
            }
        }

        if (this.max !== undefined && this.max !== null) {
            const max = valueOf(this.max);
            if (max !== undefined && max !== null && max < value) {
                return false;
            }
        }

        if (this.parts?.every(part => part.test(value, properties) === false)) {
            return false;
        }

        return true;
    }

    override toString() {
        if (!this.valid && this.definition) {
            return this.definition.toString();
        }
        return Serializer.serialize(this);
    }

    protected override freeze() {
        if (this.parts) {
            Object.freeze(this.parts);
        }
        super.freeze();
    }
}

export namespace Constraint {
    export type NumberOrIdentifier = number | string;

    /**
     * Parsed constraint.
     */
    export type Ast = {
        /**
         * Indicates constraint is defined in prose and cannot be enforced automatically.
         */
        desc?: boolean;

        /**
         * Constant value.
         */
        value?: Expression;

        /**
         * Lower bound on value or sequence length.
         */
        min?: Expression;

        /**
         * Upper bound on value or sequence length.
         */
        max?: Expression;

        /**
         * Require set membership for the value.
         */
        in?: FieldValue;

        /**
         * Constraint on list child element.
         */
        entry?: Ast;

        /**
         * List of sub-constraints in a sequence.
         */
        parts?: Ast[];
    };

    /**
     * Parsed binary operator.
     */
    export interface BinaryOperator {
        type: "+" | "-";

        lhs: Expression;

        rhs: Expression;
    }

    /**
     * Parsed expression.
     */
    export type Expression = FieldValue | BinaryOperator;

    /**
     * These are all ways to describe a constraint.
     */
    export type Definition = (Ast & { definition?: Definition }) | string | number | undefined;
}

namespace Serializer {
    export function serialize(ast: Constraint.Ast): string {
        if (ast.parts) {
            return ast.parts.map(serialize).join(", ");
        }
        if (ast.entry) {
            return `${serializeAtom(ast)}[${serialize(ast.entry)}]`;
        }
        return serializeAtom(ast);
    }

    function serializeValue(value: Constraint.Expression): string {
        if (typeof value !== "object" || value === null || Array.isArray(value) || value instanceof Date) {
            return FieldValue.serialize(value);
        }

        switch (value.type) {
            case "+":
            case "-":
                return `(${serializeValue(value.lhs)} ${value.type} ${serializeValue(value.rhs)})`;

            default:
                return FieldValue.serialize(value);
        }
    }

    function serializeAtom(ast: Constraint.Ast) {
        if (ast.desc) {
            return "desc";
        }

        if (ast.value !== undefined && ast.value !== null) {
            return `${serializeValue(ast.value)}`;
        }

        if (ast.min !== undefined && ast.min !== null) {
            if (ast.max === undefined || ast.max === null) {
                return `min ${serializeValue(ast.min)}`;
            }
            return `${serializeValue(ast.min)} to ${serializeValue(ast.max)}`;
        }

        if (ast.max !== undefined && ast.max !== null) {
            return `max ${serializeValue(ast.max)}`;
        }

        if (ast.in !== undefined) {
            return `in ${serializeValue(ast.in)}`;
        }

        return "all";
    }
}

namespace Parser {
    const lexer = new Lexer(["in", "min", "max", "to", "all", "desc", "true", "false"]);

    export function parse(constraint: Constraint, definition: string): Constraint.Ast {
        const tokens = TokenStream(lexer.lex(definition, (code, message) => constraint.error(code, message)));

        const result = parseParts();

        if (tokens.token && tokens.token?.type !== ",") {
            constraint.error("UNEXPECTED_CONSTRAINT_TOKEN", `Unexpected ${tokens.description}`);
        }

        return result;

        function parseParts(): Constraint.Ast {
            const parts = Array<Constraint.Ast>();

            while (true) {
                const part = parsePart();

                if (part !== undefined) {
                    parts.push(part);
                }

                if (tokens.done) {
                    break;
                }

                if (tokens.token?.type !== ",") {
                    break;
                }

                tokens.next();
            }

            if (!parts.length) {
                return {};
            }

            if (parts.length === 1) {
                return parts[0];
            }

            return { parts };
        }

        function parsePart(): Constraint.Ast | undefined {
            const result = parsePartWithoutArray();

            if (result !== undefined && tokens.token?.type === "[") {
                tokens.next();

                const entry = parseParts();

                if (tokens.token?.type !== ("]" as any)) {
                    constraint.error("MISSING_ENTRY_END", 'Entry constraint does not end with "]"');
                }

                tokens.next();

                if (entry !== undefined) {
                    result.entry = entry;
                }
            }

            return result;
        }

        function parsePartWithoutArray(): Constraint.Ast | undefined {
            const { token } = tokens;

            if (!token) {
                return;
            }

            switch (token.type) {
                case "desc":
                    tokens.next();
                    return { desc: true };

                case "all":
                    tokens.next();
                    return {};

                case "min":
                case "max":
                    tokens.next();
                    return parseSingleBound(token.type);

                case "in":
                    tokens.next();
                    if (tokens.token?.type === "word") {
                        const name = tokens.token.value;
                        tokens.next();
                        return { in: FieldValue.Reference(name) };
                    }
                    constraint.error("MISSING_IN_FIELD", 'Expected field name to follow "in"');
                    break;
            }

            const value = parseExpression();

            if (value === undefined || tokens.token?.type !== "to") {
                return { value };
            }

            tokens.next();

            const max = parseExpression();
            if (max === undefined) {
                constraint.error("MISSING_UPPER_BOUND", `"to" must be followed by upper boundary value`);
                return;
            }

            return {
                min: value,
                max,
            };
        }

        function parseSingleBound(kind: "min" | "max"): Constraint.Ast | undefined {
            const bound = parseExpression();
            if (bound === undefined) {
                constraint.error("MISSING_SINGLE_BOUND", `"${kind}" must be followed by boundary value`);
                return;
            }
            return { [kind]: bound };
        }

        function parseExpression(): Constraint.Expression | undefined {
            const value = parseValueExpression();

            if (value === undefined) {
                return value;
            }

            switch (tokens.token?.type) {
                case "+":
                case "-":
                    const type = tokens.token.type;
                    tokens.next();
                    const rhs = parseValueExpression();
                    if (rhs === undefined) {
                        constraint.error("MISSING_RIGHT_OPERAND", `Missing operand after "${type}"`);
                        return;
                    }

                    return {
                        type,
                        lhs: value,
                        rhs,
                    };
            }

            return value;
        }

        function parseValueExpression(): Constraint.Expression | undefined {
            const { token } = tokens;

            if (token === undefined) {
                return;
            }

            switch (token.type) {
                case "value":
                    tokens.next();
                    return token.value;

                case "true":
                    tokens.next();
                    return true;

                case "false":
                    tokens.next();
                    return false;

                case "word":
                    const ref = FieldValue.Reference(camelize(token.value));
                    tokens.next();
                    return ref;

                case "(": {
                    tokens.next();

                    const result = parseExpression();
                    if (tokens.token?.type !== ")") {
                        constraint.error("MISSING_GROUP_END", 'Group does not end with ")"');
                    }

                    tokens.next();

                    return result;
                }
            }
        }
    }
}
