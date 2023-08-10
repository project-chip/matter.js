/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { FieldValue } from "../definitions/index.js";
import { Aspect } from "./Aspect.js";

/**
 * An operational view of conformance as defined by the Matter Specification.
 *
 * We extend the specification's syntax to add ">", "<", ">=" and "<=".  These
 * are required to encode some portions of the specification that are described
 * in prose.
 *
 * "Conformance" controls when a data field or cluster element is allowed or
 * required.
 */
export class Conformance extends Aspect<Conformance.Definition> {
    ast: Conformance.Ast;

    get type() {
        return this.ast.type;
    }

    override get empty() {
        return this.type === Conformance.Special.Empty;
    }

    /**
     * Initialize from a Conformance.Definition or the conformance DSL defined
     * by the Matter Specification.
     */
    constructor(definition: Conformance.Definition) {
        super(definition);

        let ast: Conformance.Ast;
        if (definition === undefined) {
            this.ast = { type: Conformance.Special.Empty };
            return;
        } else if (typeof definition === "string") {
            if (definition.toLowerCase() === "desc") {
                this.ast = { type: Conformance.Special.Desc };
                return;
            }
            ast = new Parser(this, definition).ast;
        } else if (Array.isArray(definition)) {
            const asts = definition.map(def => new Parser(this, def).ast);
            if (asts.length === 1) {
                ast = asts[0];
            } else {
                ast = {
                    type: Conformance.Special.Group,
                    param: asts,
                };
            }
        } else {
            ast = definition.ast;
        }
        this.ast = ast;
    }

    validateReferences(lookup: Conformance.ReferenceResolver<boolean>) {
        return Conformance.validateReferences(this, this.ast, lookup);
    }

    override toString() {
        return Conformance.serialize(this.ast);
    }
}

export namespace Conformance {
    export type AstParam =
        | Ast.Name
        | Ast.Value
        | Ast.Option
        | Ast.UnaryOperand
        | Ast.BinaryOperands
        | Ast.Group
        | Ast.Choice;

    export type Ast =
        | {
              type: Special.Empty | Special.Desc | Flag;
          }
        | {
              type: Special.Name;
              param: Ast.Name;
          }
        | {
              type: Special.Value;
              param: Ast.Value;
          }
        | {
              type: Special.Choice;
              param: Ast.Choice;
          }
        | {
              type: Special.Group;
              param: Ast.Group;
          }
        | {
              type: Special.OptionalIf;
              param: Ast.Option;
          }
        | {
              type:
                  | Operator.AND
                  | Operator.OR
                  | Operator.XOR
                  | Operator.EQ
                  | Operator.NE
                  | Operator.LT
                  | Operator.GT
                  | Operator.LTE
                  | Operator.GTE;
              param: Ast.BinaryOperands;
          }
        | {
              type: Operator.NOT;
              param: Ast.UnaryOperand;
          };

    export namespace Ast {
        export type Name = string;
        export type Value = FieldValue;
        export type Option = Ast;
        export type UnaryOperand = Ast;
        export type BinaryOperands = {
            lhs: Ast;
            rhs: Ast;
        };
        export type Group = Ast[];
        export type Choice = {
            name: ChoiceName;
            num: number;
            orMore?: boolean;
            expr: Ast;
        };
    }

    export enum Special {
        Empty = "empty",
        Desc = "desc",
        Name = "name",
        Value = "value",
        Choice = "choice",
        Group = "group",
        OptionalIf = "optionalIf",
    }

    export enum Flag {
        Mandatory = "M",
        Optional = "O",
        Provisional = "P",
        Deprecated = "D",
        Disallowed = "X",
    }

    export enum Operator {
        NOT = "!",
        EQ = "==",
        NE = "!=",
        OR = "|",
        XOR = "^",
        AND = "&",
        DOT = ".",
        GT = ">",
        LT = "<",
        GTE = ">=",
        LTE = "<=",
    }

    export const M = Flag.Mandatory;
    export const O = Flag.Optional;
    export const P = Flag.Provisional;
    export const D = Flag.Deprecated;
    export const X = Flag.Disallowed;
    export const EQ = Operator.EQ;
    export const NE = Operator.NE;
    export const OR = Operator.OR;
    export const XOR = Operator.XOR;
    export const AND = Operator.AND;
    export const DOT = Operator.DOT;
    export const GT = Operator.GT;
    export const LT = Operator.LT;
    export const GTE = Operator.GTE;
    export const LTE = Operator.LTE;

    export type Name = string;

    export type Number = number;

    export type ChoiceName =
        | "a"
        | "b"
        | "c"
        | "d"
        | "e"
        | "f"
        | "g"
        | "h"
        | "i"
        | "j"
        | "k"
        | "l"
        | "m"
        | "n"
        | "o"
        | "p"
        | "q"
        | "r"
        | "s"
        | "t"
        | "u"
        | "v"
        | "w"
        | "x"
        | "y"
        | "z";

    export type ReferenceResolver<T> = (name: string) => T;

    /**
     * Supported ways of expressing conformance.
     */
    export type Definition = Flag | Name | (Flag | Name)[] | { ast: Conformance.Ast } | string | undefined;

    // Serialize with parenthesis if necessary to make the expression atomic
    function serializeAtomic(ast: Ast, otherOperator?: Operator) {
        const serialized = serialize(ast);
        if (
            ast.type === Conformance.Special.Group ||
            (otherOperator !== undefined && isHigherPrecedence(otherOperator, ast.type))
        ) {
            return `(${serialized})`;
        }
        return serialized;
    }

    export function validateReferences(conformance: Conformance, ast: Ast, resolver: ReferenceResolver<boolean>) {
        switch (ast.type) {
            case Operator.OR:
            case Operator.XOR:
            case Operator.AND:
            case Operator.EQ:
            case Operator.NE:
            case Operator.GT:
            case Operator.LT:
            case Operator.GTE:
            case Operator.LTE:
                validateReferences(conformance, ast.param.lhs, resolver);
                validateReferences(conformance, ast.param.rhs, resolver);
                break;

            case Operator.NOT:
                validateReferences(conformance, ast.param, resolver);
                break;

            case Special.Group:
                for (const a of ast.param) {
                    validateReferences(conformance, a, resolver);
                }
                break;

            case Special.Name:
                if (!resolver(ast.param)) {
                    conformance.error(
                        `UNRESOLVED_CONFORMANCE_${ast.type.toUpperCase()}`,
                        `Conformance ${ast.type} reference "${ast.param}" does not resolve`,
                    );
                }
                break;
        }
    }

    export function serialize(ast: Ast): string {
        switch (ast.type) {
            case Operator.OR:
            case Operator.XOR:
            case Operator.AND:
            case Operator.EQ:
            case Operator.NE:
            case Operator.GT:
            case Operator.LT:
            case Operator.GTE:
            case Operator.LTE:
                const lhs = serializeAtomic(ast.param.lhs, ast.type);
                const rhs = serializeAtomic(ast.param.rhs, ast.type);
                return `${lhs} ${ast.type} ${rhs}`;

            case Operator.NOT:
                return `!${serializeAtomic(ast.param)}`;

            case Special.Empty:
                return "";

            case Special.Desc:
                return "desc";

            case Special.Choice:
                let result = `${serializeAtomic(ast.param.expr)}.${ast.param.name}`;
                if (ast.param.num > 1) {
                    result = `${result}${ast.param.num}`;
                }
                if (ast.param.orMore) {
                    result = `${result}+`;
                }
                return result;

            case Special.Group:
                return ast.param.map(d => serialize(d)).join(", ");

            case Special.OptionalIf:
                return `[${serialize(ast.param)}]`;

            case Special.Name:
            case Special.Value:
                // Name or value
                return FieldValue.serialize(ast.param) as string;

            default:
                // Flag
                return ast.type;
        }
    }

    export function isBinaryOperator(type: Ast["type"] | Operator): type is Operator {
        return Parser.BinaryOperators.has(type as any);
    }

    export function precedenceOf(operator: Ast["type"] | Operator) {
        const index = Parser.BinaryOperatorPrecedence.findIndex(ops => ops.indexOf(operator as any) != -1);
        return index === -1 ? undefined : index;
    }

    export function isHigherPrecedence(operator: Ast["type"] | Operator, other: Ast["type"] | Operator) {
        const precedence1 = precedenceOf(operator);
        if (precedence1 === undefined) {
            return false;
        }

        const precedence2 = precedenceOf(other);
        if (precedence2 === undefined) {
            return false;
        }

        return precedence1 < precedence2;
    }
}

function isNameChar(c: string) {
    return (c >= "A" && c <= "Z") || (c >= "a" && c <= "z") || (c >= "0" && c <= "9") || c === "_";
}

namespace Tokenizer {
    export enum Special {
        Not = "!",
        Equal = "==",
        NotEqual = "!=",
        Or = "|",
        Xor = "^",
        And = "&",
        Dot = ".",
        Comma = ",",
        OptionalBegin = "[",
        OptionalEnd = "]",
        GroupBegin = "(",
        GroupEnd = ")",
        Plus = "+",
        GreaterThan = ">",
        LessThan = "<",
        GreaterThanOrEqual = ">=",
        LessThanOrEqual = "<=",
    }

    export enum TokenType {
        Flag,
        Special,
        Name,
        Choice,
        Number,
    }

    namespace Token {
        export type Flag = {
            type: TokenType.Flag;
            value: Conformance.Flag;
        };

        export type Special = {
            type: TokenType.Special;
            value: Tokenizer.Special;
        };

        export type Name = {
            type: TokenType.Name;
            value: string;
        };

        export type Choice = {
            type: TokenType.Choice;
            value: Conformance.ChoiceName;
        };

        export type Number = {
            type: TokenType.Number;
            value: FieldValue;
        };
    }

    export type Token = Token.Flag | Token.Special | Token.Name | Token.Choice | Token.Number;

    export function* tokenize(conformance: Conformance, definition: string): Generator<Token> {
        const i = definition[Symbol.iterator]();

        let current = i.next();
        if (current.done) {
            return;
        }
        let peeked = i.next();

        function next() {
            current = peeked;
            if (!current.done) {
                peeked = i.next();
            }
        }

        function tokenizeName(): Token {
            const name = [current.value];
            while (isNameChar(peeked.value)) {
                next();
                name.push(current.value);
            }
            return { type: TokenType.Name, value: name.join("") };
        }

        while (!current.done) {
            switch (current.value) {
                case Conformance.Flag.Mandatory:
                case Conformance.Flag.Optional:
                case Conformance.Flag.Provisional:
                case Conformance.Flag.Deprecated:
                case Conformance.Flag.Disallowed:
                    if (isNameChar(peeked.value)) {
                        yield tokenizeName();
                    } else {
                        yield { type: TokenType.Flag, value: current.value };
                    }
                    break;

                case Special.Or:
                case Special.Xor:
                case Special.And:
                case Special.Dot:
                case Special.Comma:
                case Special.OptionalBegin:
                case Special.OptionalEnd:
                case Special.GroupBegin:
                case Special.GroupEnd:
                case Special.Plus:
                    yield { type: TokenType.Special, value: current.value };
                    break;

                case "0":
                case "1":
                case "2":
                case "3":
                case "4":
                case "5":
                case "6":
                case "7":
                case "8":
                case "9":
                    let num: FieldValue = 0;
                    while (true) {
                        num = num * 10 + current.value.charCodeAt(0) - "0".charCodeAt(0);
                        if (peeked.done || peeked.value < "0" || peeked.value > "9") {
                            break;
                        }
                        next();
                    }
                    if (peeked.value === "%") {
                        next();
                        num = FieldValue.Percent(num);
                    } else if (peeked.value === "°") {
                        next();
                        if (peeked.value?.toLowerCase() === "C") {
                            next();
                        }
                        num = FieldValue.Celsius(num);
                    }
                    yield { type: TokenType.Number, value: num };
                    break;

                case "!":
                case ">":
                case "<":
                    {
                        const base = current.value;
                        if (peeked.value === "=") {
                            next();
                            yield { type: TokenType.Special, value: `${base}${peeked.value}` as Special };
                        } else {
                            yield { type: TokenType.Special, value: base as Special };
                        }
                    }
                    break;

                case "=":
                    if (peeked.value === "=") {
                        next();
                    } else {
                        conformance.error("BAD_EQUAL", `"=" must be followed by another "="`);
                    }
                    yield { type: TokenType.Special, value: Special.Equal };
                    break;

                case " ":
                case "\t":
                case "\r":
                case "\n":
                case "\v":
                case "\f":
                    break;

                default:
                    if (current.value >= "a" && current.value <= "z") {
                        yield { type: TokenType.Choice, value: current.value as Conformance.ChoiceName };
                    } else if (current.value >= "A" && current.value <= "Z") {
                        yield tokenizeName();
                    } else {
                        conformance.error("GARBAGE_CHARACTER", `Unexpected character "${current.value}"`);
                    }
                    break;
            }
            next();
        }
    }
}

// The DSL is *almost* complex enough to warrant a proper parser library.  Not
// quite though...
class Parser {
    public ast: Conformance.Ast;

    private tokens: Iterator<Tokenizer.Token>;
    private token?: Tokenizer.Token;
    private peeked?: Tokenizer.Token;

    constructor(
        private conformance: Conformance,
        definition: string,
    ) {
        // Spec conformance sometimes encodes "or" (illegally) as "or" rather
        // than "|"
        definition = definition.replace(" or ", " | ");

        this.tokens = Tokenizer.tokenize(conformance, definition);
        const next = this.tokens.next();
        if (!next.done) {
            this.peeked = next.value;
            this.next();
        }
        this.ast = this.parse();
    }

    private next() {
        this.token = this.peeked;
        const next = this.tokens.next();

        if (next.done) {
            this.peeked = undefined;
        } else {
            this.peeked = next.value;
        }
    }

    // Note that Conformance.Definition effectively serves as our AST.  Its
    // design is slightly suboptimal for this purpose because it also attempts
    // to serve as a DSL for manual expression of conformance
    private parse(): Conformance.Ast {
        return this.parseGroup();
    }

    private parseGroup(end?: Tokenizer.Special): Conformance.Ast {
        const group = [] as Conformance.Ast[];

        function groupAsAst(): Conformance.Ast {
            if (group.length === 1) {
                return group[0];
            }

            return {
                type: Conformance.Special.Group,
                param: group,
            };
        }

        while (true) {
            if (!this.token) {
                if (end) {
                    this.conformance.error("UNTERMINATED_CONFORMANCE_GROUPING", "Unterminated conformance grouping");
                }
                return groupAsAst();
            }

            // Optional brackets are only allowed at the top-level
            const optional = !end && this.atSpecial(Tokenizer.Special.OptionalBegin);

            if (optional) {
                this.next();
                let expr: Conformance.Ast = {
                    type: Conformance.Special.OptionalIf,
                    param: this.parseGroup(Tokenizer.Special.OptionalEnd),
                };
                expr = this.parseChoice(expr) as Conformance.Ast;
                group.push(expr);
            } else {
                const expr = this.parseExpression();
                if (expr) {
                    group.push(expr);
                }
            }

            if (this.atSpecial(Tokenizer.Special.Comma)) {
                this.next();
            } else if (end && this.atSpecial(end)) {
                this.next();
                return groupAsAst();
            }
        }
    }

    private atSpecial(special: Tokenizer.Special) {
        return this.token && this.token.type === Tokenizer.TokenType.Special && this.token.value === special;
    }

    private parseExpression() {
        const elements = [] as (Tokenizer.Special | Conformance.Ast | string)[];

        // Collect binary expressions into an array so we can back up and
        // apply operator precedence
        let expr = this.parseAtomicExpression();
        if (expr) {
            elements.push(expr);
        }
        while (
            this.token &&
            this.token.type === Tokenizer.TokenType.Special &&
            Parser.BinaryOperators.has(this.token.value)
        ) {
            elements.push(this.token.value);
            this.next();
            expr = this.parseAtomicExpression();
            if (expr) {
                elements.push(expr);
            }
        }

        // Convert binary operators into AST nodes in order of precedence
        Parser.BinaryOperatorPrecedence.forEach(operators => {
            for (let i = 0; i < elements.length; i++) {
                if (operators.indexOf(elements[i + 1] as Tokenizer.Special) !== -1) {
                    const [lhs, op, rhs] = elements.splice(i, 3);
                    elements.splice(i, 0, {
                        type: op,
                        param: { lhs, rhs },
                    } as Conformance.Ast);
                    i--;
                }
            }
        });

        return elements[0] as Conformance.Ast;
    }

    private parseChoice(expr: string | Conformance.Ast | undefined): string | Conformance.Ast | undefined {
        if (!this.atSpecial(Tokenizer.Special.Dot)) {
            return expr;
        }

        this.next();

        if ((this.token as any)?.type !== Tokenizer.TokenType.Choice) {
            this.conformance.error(
                "INVALID_CHOICE",
                'Choice indicator (".") must be followed by a single lowercase letter',
            );
        }
        const choice = {
            name: this.token?.value ?? "?",
            expr: expr,
            num: 1,
        } as Conformance.Ast.Choice;
        this.next();
        if ((this.token as any)?.type === Tokenizer.TokenType.Number) {
            choice.num = this.token?.value as number;
            this.next();
        }
        if (this.atSpecial(Tokenizer.Special.Plus)) {
            choice.orMore = true;
            this.next();
        }

        return {
            type: Conformance.Special.Choice,
            param: choice,
        };
    }

    private parseAtomicExpression(): string | Conformance.Ast | undefined {
        const expr = this.parseAtomicExpressionWithoutChoice();
        if (!expr) {
            return;
        }

        return this.parseChoice(expr);
    }

    private parseAtomicExpressionWithoutChoice(): string | Conformance.Ast | undefined {
        if (!this.token) {
            this.conformance.error("PREMATURE_CONFORMANCE_TERMINATION", "Terminated with expression expected");
            return;
        }

        if (this.token.type === Tokenizer.TokenType.Flag) {
            const value = this.token.value;
            this.next();
            return { type: value };
        }

        if (this.token.type === Tokenizer.TokenType.Name) {
            const name = this.token.value;
            this.next();
            return { type: Conformance.Special.Name, param: name };
        }

        if (this.token.type === Tokenizer.TokenType.Number) {
            const value = this.token.value;
            this.next();
            return { type: Conformance.Special.Value, param: value };
        }

        if (this.atSpecial(Tokenizer.Special.Not)) {
            this.next();
            return { type: Conformance.Operator.NOT, param: this.parseAtomicExpression() as Conformance.Ast };
        }

        if (this.atSpecial(Tokenizer.Special.GroupBegin)) {
            this.next();
            return this.parseGroup(Tokenizer.Special.GroupEnd);
        }

        this.conformance.error("UNEXPECTED_CONFORMANCE_TOKEN", `Unexpected "${this.token.value}"`);
        this.next();
    }
}

namespace Parser {
    // Highest precedence first
    export const BinaryOperatorPrecedence = [
        [Tokenizer.Special.And],
        [Tokenizer.Special.Or, Tokenizer.Special.Xor],
        [
            Tokenizer.Special.GreaterThan,
            Tokenizer.Special.LessThan,
            Tokenizer.Special.GreaterThanOrEqual,
            Tokenizer.Special.LessThanOrEqual,
        ],
        [Tokenizer.Special.Equal, Tokenizer.Special.NotEqual],
    ];

    export const BinaryOperators = new Set(BinaryOperatorPrecedence.flat());
}
