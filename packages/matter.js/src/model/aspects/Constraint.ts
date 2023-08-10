/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { camelize } from "../../util/String.js";
import { FieldValue } from "../definitions/index.js";
import { Aspect } from "./Aspect.js";

/**
 * An operational view of constraints as defined by the Matter specification.
 *
 * A "constraint" limits possible data values.
 *
 * Formally a constraint is not considered a quality by the specification.
 * It is handled similarly to qualities, though, so we keep it in the same
 * section.
 */
export class Constraint extends Aspect<Constraint.Definition> implements Constraint.Ast {
    desc?: boolean;
    value?: FieldValue;
    min?: FieldValue;
    max?: FieldValue;
    entry?: Constraint;
    parts?: Constraint[];

    /**
     * Initialize from a Constraint.Definition or the constraint DSL defined
     * by the Matter Specification.
     */
    constructor(definition: Constraint.Definition) {
        super(definition);

        let ast;
        switch (typeof definition) {
            case "string":
                ast = Constraint.parse(this, definition);
                break;

            case "number":
                ast = { value: definition };
                break;

            default:
                ast = definition;
        }

        Object.assign(this, ast);
    }

    /**
     * Test a value against a constraint.
     */
    test(value: FieldValue) {
        if (value === undefined) {
            return false;
        }

        if (this.value === value) {
            return true;
        }

        if (this.value !== undefined || value === null) {
            return false;
        }

        if (this.min !== undefined && this.min !== null) {
            if (typeof this.min !== typeof value || this.min > value) {
                return false;
            }
        }

        if (this.max !== undefined && this.max !== null) {
            if (typeof this.max !== typeof value || this.max <= value) {
                return false;
            }
        }

        return true;
    }

    override toString() {
        return Constraint.serialize(this);
    }
}

export namespace Constraint {
    export type NumberOrIdentifier = number | string;

    /**
     * Parsed list structure.
     */
    export type Ast = {
        /**
         * Indicates constraint is defined in prose and cannot be enforced
         * automatically.
         */
        desc?: boolean;

        /**
         * Constant value.
         */
        value?: FieldValue;

        /**
         * Lower bound on value or sequence length.
         */
        min?: FieldValue;

        /**
         * Upper bound on value or sequence length.
         */
        max?: FieldValue;

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
     * These are all ways to describe a constraint.
     */
    export type Definition = (Ast & { definition?: Definition }) | string | number | undefined;

    function parseValue(numOrName: string): FieldValue {
        let value;
        if (numOrName.startsWith("0x") || numOrName.startsWith("0b")) {
            value = Number.parseInt(numOrName);
        } else {
            value = Number.parseFloat(numOrName);
        }
        if (Number.isNaN(value)) {
            return FieldValue.Reference(camelize(numOrName));
        }
        if (numOrName.endsWith("%")) {
            return FieldValue.Percent(value);
        }
        if (numOrName.endsWith("°C")) {
            return FieldValue.Celsius(value);
        }
        return value;
    }

    function parseAtom(constraint: Constraint, words: string[]): Ast | undefined {
        switch (words.length) {
            case 0:
                return undefined;

            case 1:
                switch (words[0].toLowerCase()) {
                    case "desc":
                        return { desc: true };

                    case "all":
                    case "any":
                        return {};
                }
                const value = parseValue(words[0]);
                if (value === undefined || value === null) {
                    return;
                }
                return { value };

            case 2:
                switch (words[0].toLowerCase()) {
                    case "min":
                        const min = parseValue(words[1]);
                        if (min === undefined || min === null) {
                            return;
                        }
                        return { min: min };

                    case "max":
                        const max = parseValue(words[1]);
                        if (max === undefined || max === null) {
                            return;
                        }
                        return { max: max };

                    default:
                        constraint.error(
                            "INVALID_CONSTRAINT",
                            `Two word constraint "${words.join(" ")}" does not start with "min" or "max"`,
                        );
                }
                return;

            case 3:
                if (words[1].toLowerCase() === "to") {
                    function parseBound(name: string, pos: number) {
                        if (words[pos].toLowerCase() === name) {
                            return undefined;
                        }
                        return parseValue(words[pos]);
                    }

                    const ast: Ast = {};

                    const min = parseBound("min", 0);
                    if (min !== undefined && min !== null) {
                        ast.min = min;
                    }

                    const max = parseBound("max", 2);
                    if (max !== undefined && max !== null) {
                        ast.max = max;
                    }

                    if ((ast.min !== undefined && ast.min !== null) || (ast.max !== undefined && ast.max !== null)) {
                        return ast;
                    }
                }
                return;
        }

        constraint.error("INVALID_CONSTRAINT", `Unrecognized value constraint "${words.join(" ")}"`);
    }

    /**
     * Parse constraint DSL.  Extremely lenient.
     */
    export function parse(constraint: Constraint, definition: string): Ast {
        let pos = 2;
        let current: string | undefined = definition[0];
        let peeked: string | undefined = definition[1];

        function next() {
            current = peeked;
            if (pos === definition.length) {
                peeked = undefined;
            } else {
                peeked = definition[pos];
                pos++;
            }
        }

        function scan(depth: number): Ast {
            const parts = Array<Ast>();
            let words = Array<string>();
            let word = "";

            function parseWords() {
                if (word) {
                    words.push(word);
                    word = "";
                }

                const atom = parseAtom(constraint, words);
                words = Array<string>();
                return atom;
            }

            function emit() {
                const atom = parseWords();
                if (atom !== undefined) {
                    parts.push(atom);
                }
            }

            while (current !== undefined) {
                switch (current) {
                    case " ":
                    case "\t":
                    case "\r":
                    case "\n":
                    case "\v":
                    case "\f":
                        if (word) {
                            words.push(word);
                            word = "";
                        }
                        break;

                    case "[":
                        next();
                        let ast = parseWords();
                        const entry = scan(depth + 1);
                        if (entry) {
                            if (!ast) {
                                ast = {};
                            }
                            ast.entry = entry;
                        }
                        if (ast) {
                            parts.push(ast);
                        }
                        break;

                    case "]":
                        if (!depth) {
                            constraint.error("INVALID_CONSTRAINT", 'Unexpected "]"');
                            break;
                        }
                        emit();
                        if (parts.length > 1) {
                            return { parts: parts };
                        }
                        return parts[0];

                    case ",":
                        emit();
                        break;

                    default:
                        word += current;
                        break;
                }

                next();
            }

            if (depth) {
                constraint.error("INVALID_CONSTRAINT", "Unterminated sub-constraint");
            }

            emit();

            if (parts.length < 2) {
                return parts[0];
            }

            return { parts: parts };
        }

        return scan(0);
    }

    function serializeAtom(ast: Ast) {
        if (ast.desc) {
            return "desc";
        }

        if (ast.value !== undefined && ast.value !== null) {
            return `${FieldValue.serialize(ast.value)}`;
        } else if (ast.min !== undefined && ast.min !== null) {
            if (ast.max === undefined || ast.max === null) {
                return `min ${FieldValue.serialize(ast.min)}`;
            }
            return `${FieldValue.serialize(ast.min)} to ${FieldValue.serialize(ast.max)}`;
        } else if (ast.max !== undefined && ast.max !== null) {
            return `max ${FieldValue.serialize(ast.max)}`;
        }

        return "all";
    }

    export function serialize(ast: Ast): string {
        if (ast.parts) {
            return ast.parts.map(serialize).join(", ");
        }
        if (ast.entry) {
            return `${serializeAtom(ast)}[${serialize(ast.entry)}]`;
        }
        return serializeAtom(ast);
    }
}
