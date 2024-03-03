/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DataModelPath } from "../../../endpoint/DataModelPath.js";
import { Conformance, FeatureSet, FieldValue, ValueModel } from "../../../model/index.js";
import { AccessControl } from "../../AccessControl.js";
import { ConformanceError, SchemaImplementationError } from "../../errors.js";
import { ValueSupervisor } from "../../supervision/ValueSupervisor.js";
import { Val } from "../Val.js";
import {
    Code,
    ConformantNode,
    DynamicNode,
    NonconformantNode,
    StaticNode,
    asBoolean,
    asConformance,
    createComparison,
    createLogicalBinaryEvaluator,
    createLogicalInversion,
    evaluateNode,
    isStatic,
    type RuntimeNode,
} from "./conformance-util.js";
import { ValidationLocation } from "./location.js";

/**
 * Generates JS function equivalent of a conformance expression.
 *
 * We generate a function for each node in the AST.  In addition to the
 * function, we track whether the function evaluates pure-feature conformance
 * (vs. an expression).
 *
 * In general the conformance AST jumbles set logic with expression evaluation
 * so we need to track two types of state to implement properly.
 *
 * Many of the comments reference "static" vs "runtime" evaluation.  This is
 * an important distinction that we use to heavily optimize the generated
 * function:
 *
 *   - "static" means conformance is known at compile time and runtime
 *     evaluation is thus minimal.  These result in a {@link StaticNode}.
 *
 *   - "runtime" means conformance depends on sibling fields in an object.
 *     These result in a {@link RuntimeNode} with additional logic that
 *     performs additional logic against operational state.
 */
export function astToFunction(
    schema: ValueModel,
    featureMap: ValueModel,
    supportedFeatures: FeatureSet,
): ValueSupervisor.Validate | undefined {
    const ast = schema.conformance.ast;
    const { featuresAvailable, featuresSupported } = FeatureSet.normalize(featureMap, supportedFeatures);

    // Compile the AST
    const compiledNode = compile(ast);

    // The compiled AST is DynamicNode describing how to test a field for
    // conformance.  Convert this into a validation function.
    switch (compiledNode.code) {
        case Code.Conformant:
            // Passes validation if the field is present
            return requireValue;

        case Code.Nonconformant:
        case Code.Disallowed:
            // Passes validation if the field is not present
            return disallowValue;

        case Code.Optional:
            // No conformance validation required
            return;

        case Code.Evaluate:
            // We must perform runtime evaluation to determine whether the
            // field is conformant
            const evaluate = compiledNode.evaluate;

            return (value, session, location) => {
                const staticNode = evaluate(value, location);

                switch (staticNode.code) {
                    case Code.Conformant:
                        requireValue(value, session, location);
                        break;

                    case Code.Nonconformant:
                    case Code.Disallowed:
                        disallowValue(value, session, location);
                        break;

                    case Code.Optional:
                        break;

                    default:
                        throw new SchemaImplementationError(
                            DataModelPath(schema.path),
                            `Unknown or unsupported top-level conformance node type ${compiledNode.code}`,
                        );
                }
            };

        default:
            throw new SchemaImplementationError(
                DataModelPath(schema.path),
                `Unknown or unsupported top-level conformance node type ${compiledNode.code}`,
            );
    }

    /**
     * Convert an AST node into a DynamicNode.
     *
     * If the node requires runtime evaluation it will be a RuntimeNode, which
     * is a proxy that creates a StaticNode for a specific record.
     *
     * Runtime evaluation is required if the conformance expression has a
     * choice or cross-references other properties of the same object.
     *
     * Otherwise the node is a StaticNode.
     */
    function compile(ast: Conformance.Ast): DynamicNode {
        switch (ast?.type) {
            case Conformance.Special.Empty:
            case Conformance.Special.Desc:
            case Conformance.Flag.Provisional:
            case Conformance.Flag.Deprecated:
            case Conformance.Flag.Optional:
                // Alone these all effectively map to "optional" and thus
                // result in no test as all values are acceptable
                return { code: Code.Optional };

            case Conformance.Special.Choice:
                return createChoice(ast.param);

            case Conformance.Special.Group:
                return createGroup(ast.param);

            case Conformance.Special.Name:
                return createName(ast.param);

            case Conformance.Special.OptionalIf:
                return createOptionalIf(ast.param);

            case Conformance.Special.Value:
                return createValue(ast.param);

            case Conformance.Flag.Disallowed:
                return createDisallowed();

            case Conformance.Flag.Mandatory:
                return createMandatory();

            case Conformance.Operator.AND:
            case Conformance.Operator.OR:
            case Conformance.Operator.XOR:
                return createLogicalBinaryOp(ast.type, ast.param);

            case Conformance.Operator.EQ:
            case Conformance.Operator.NE:
            case Conformance.Operator.GT:
            case Conformance.Operator.LT:
            case Conformance.Operator.GTE:
            case Conformance.Operator.LTE:
                return createComparisonOp(ast.type, ast.param);

            case Conformance.Operator.NOT:
                return createNotOp(ast.param);

            default:
                // Fail at compile time if list is not exhaustive
                ast satisfies never;

                // Throw at runtime
                throw new SchemaImplementationError(
                    DataModelPath(schema.path),
                    `Unsupported conformance AST node type ${(ast as any).type}`,
                );
        }
    }

    /**
     * A "choice" is an AST node such as "O.a".
     *
     * Choice conformance is only relevant when validating multiple properties
     * on the same cluster or struct.
     *
     * Compiling a choice always results in a RuntimeNode that updates the
     * count in options.choice.  If a property is validated individually then
     * choice is irrelevant and the node does not affect conformance.
     */
    function createChoice(param: Conformance.Ast.Choice): DynamicNode {
        const compiled = compile(param.expr);

        const name = param.name;
        const template: ValidationLocation.Choice = {
            count: 0,
            target: param.num,
            orMore: !!param.orMore,
        };

        return {
            code: Code.Evaluate,

            evaluate: (value, options) => {
                // Update choice definitions.  This is supplied by the struct
                // validator.  If we're only validating a single field then
                // choices aren't available so the choice is ignored
                const choices = options?.choices;
                let choice;
                if (choices) {
                    choice = choices[name];
                    if (!choice) {
                        choice = choices[name] = { ...template };
                    }
                    if (value !== undefined) {
                        choice.count++;
                    }
                }

                // The status of the subexpression is not relevant for the
                // choice.  If conformance fails then it doesn't matter if
                // we count the choice or not
                return evaluateNode(compiled, value, options);
            },
        };
    }

    /**
     * A "group" node is a list or the entries in an optional ([ ... ]) clause.
     * The resulting node is the value of the first list member that does not
     * report as Code.Nonconformant.
     */
    function createGroup(param: Conformance.Ast.Group): DynamicNode {
        if (!Array.isArray(param)) {
            throw new SchemaImplementationError(
                DataModelPath(schema.path),
                "Conformance AST group parameter is not an array",
            );
        }

        // A "group" is a list of conformances; any success passes the entire
        // group and subsequent tests are not evaluated
        const members = param.map(test => compile(test));

        // Reduce tests that must be evaluated at runtime vs. compile time
        const reduced = Array<DynamicNode>();
        for (const member of members) {
            // Nonconformant - ignore
            if (member.code === Code.Nonconformant) {
                continue;
            }

            // Optional & required - no need to evaluate subsequent nodes
            if (member.code === Code.Optional || member.code === Code.Conformant) {
                // Runtime evaluation; this will be the final result
                if (reduced.length) {
                    reduced.push(member);
                    break;
                }

                // No need to runtime evaluation
                return member;
            }

            // Evaluate - remains in list and requires evaluation at runtime
            reduced.push(member);
        }

        // We must further reduce at runtime
        return {
            code: Code.Evaluate,

            evaluate: (value, options) => {
                for (const member of reduced) {
                    const node = evaluateNode(member, value, options);
                    if (node.code !== Code.Nonconformant) {
                        return node;
                    }
                }
                return NonconformantNode;
            },
        };
    }

    /**
     * A name references a feature or the name of a sibling property on the
     * containing object.  We treat the name as a feature if the name is
     * present in featuresAvailable.
     *
     * For features, conformance is known at compile time so the resuling node
     * is a StaticNode.
     *
     * For property names, we need to load the corresponding value at runtime.
     * This results in a RuntimeNode that retrieves the value from
     * options.siblings.
     */
    function createName(param: string): DynamicNode {
        if (featuresAvailable.has(param)) {
            // Name references a feature.  We know whether features are
            // supported by a cluster at compile time so this results in a
            // static node that is conformant iff the feature is supported
            if (featuresSupported.has(param)) {
                return ConformantNode;
            } else {
                return NonconformantNode;
            }
        } else {
            // Name references a sibling property.  This results in a value
            // node but must be evaluated at runtime against a specific struct
            return {
                code: Code.Evaluate,

                evaluate: (_value, options) => {
                    return {
                        code: Code.Value,
                        value: options?.siblings?.[param],
                    };
                },
            };
        }
    }

    /**
     * Compile an "optional if" node.  This converts conformant nodes into
     * optional nodes and otherwise leaves the node unchanged.
     *
     * This represents a conformance expression surrounded by brackets
     * such as [ FOO, BAR ].  We first evaluate the internal expression which
     * may happen statically or at runtime.  Then we convert conformant nodes
     * to optional.
     */
    function createOptionalIf(param: Conformance.Ast): DynamicNode {
        let node = compile(param) ?? {};
        node = asConformance(node);

        switch (node.code) {
            case Code.Conformant:
                return { code: Code.Optional };

            case Code.Evaluate:
                const evaluate = node.evaluate;
                return {
                    code: Code.Evaluate,

                    evaluate: (value, options) => {
                        let staticNode = evaluate(value, options);
                        staticNode = asConformance(staticNode);

                        if (staticNode.code === Code.Conformant) {
                            return { code: Code.Optional };
                        }

                        return staticNode;
                    },
                };

            default:
                return node;
        }
    }

    /**
     * A value node represents is static literal value.  This is how we encode
     * numeric literals used in expressions.
     */
    function createValue(param: FieldValue): DynamicNode {
        return {
            code: Code.Value,
            value: param,
        };
    }

    /**
     * "Disallowed" represents "X" in a conformance expression which explicitly
     * disallows the property.
     */
    function createDisallowed(): StaticNode {
        return {
            code: Code.Disallowed,
        };
    }

    /**
     * "Mandatory" is a conformance "M" and maps explicitly to conformant.
     *
     * This means that we will convert [ M ] to optional but that's a pretty
     * silly construct that the spec doesn't use.  Otherwise the field will be
     * required.
     */
    function createMandatory(): DynamicNode {
        return ConformantNode;
    }

    /**
     * A logical binary operator is an expression that compares two values
     * using a logical operator.  So e.g. "LF | TL".
     *
     * These operators work on conformance values.  Effectively casts
     * non-binary field values to booleans where undefined =
     * false/nonconformant and defined = true/conformant.
     *
     * This code is rather long because we unroll each operator by hand
     * depending on whether the operators may be evaluated statically or not.
     * This makes sense because we can avoid most runtime computations for
     * common cases such as the "LF | TL" example.
     */
    function createLogicalBinaryOp(
        operator: Conformance.Operator,
        { lhs, rhs }: Conformance.Ast.BinaryOperands,
    ): DynamicNode {
        const compiledLhs = compile(lhs);
        const compiledRhs = compile(rhs);

        switch (operator) {
            case Conformance.Operator.AND:
                // Static LHS
                if (isStatic(compiledLhs)) {
                    if (asBoolean(compiledLhs)) {
                        return compiledRhs;
                    } else {
                        return NonconformantNode;
                    }
                }

                // Dynamic LHS, static RHS
                if (isStatic(compiledRhs)) {
                    if (asBoolean(compiledRhs)) {
                        return compiledLhs;
                    } else {
                        return NonconformantNode;
                    }
                }

                // Both sides dynamic
                return createLogicalBinaryEvaluator(compiledLhs, compiledRhs, (lhs, rhs) => lhs && rhs);

            case Conformance.Operator.OR:
                // Static LHS
                if (isStatic(compiledLhs)) {
                    if (asBoolean(compiledLhs)) {
                        return ConformantNode;
                    } else {
                        return compiledRhs;
                    }
                }

                // Dynamic LHS, static RHS
                if (isStatic(compiledRhs)) {
                    if (asBoolean(compiledRhs)) {
                        return ConformantNode;
                    } else {
                        return compiledLhs;
                    }
                }

                // Both sides dynamic
                return createLogicalBinaryEvaluator(compiledLhs, compiledRhs, (lhs, rhs) => lhs || rhs);

            case Conformance.Operator.XOR:
                // Static LHS
                if (isStatic(compiledLhs)) {
                    if (asBoolean(compiledLhs)) {
                        return createLogicalInversion(compiledRhs);
                    } else {
                        return compiledRhs;
                    }
                }

                // Dynamic LHS, static RHS
                if (isStatic(compiledRhs)) {
                    if (asBoolean(compiledRhs)) {
                        return createLogicalInversion(compiledLhs);
                    } else {
                        return compiledLhs;
                    }
                }

                // Both sides dynamic
                return createLogicalBinaryEvaluator(compiledLhs, compiledRhs, (lhs, rhs) => (lhs ? !rhs : rhs));

            default:
                throw new SchemaImplementationError(
                    DataModelPath(schema.path),
                    `Unknown logical binary operator ${operator}`,
                );
        }
    }

    /**
     * A comparison operator compares two values.  So e.g. "FieldName > 4".
     *
     * Throws an error if the input AST nodes are not values.  We could
     * convert conformance to a binary 0 or 1 but this does not have real-world
     * applicability and would only occur for malformed conformance.
     */
    function createComparisonOp(
        operator: Conformance.Operator,
        { lhs, rhs }: Conformance.Ast.BinaryOperands,
    ): DynamicNode {
        return createComparison(operator, compile(lhs), compile(rhs), schema);
    }

    /**
     * Inverts the meaning of conformance.  A conformant node becomes
     * non-conformant and vice-versa.
     */
    function createNotOp(param: Conformance.Ast): DynamicNode {
        const operand = compile(param);
        return createLogicalInversion(operand);
    }

    function requireValue(value: Val, _session: AccessControl.Session, location: ValidationLocation) {
        if (value === undefined) {
            throw new ConformanceError(schema, location, "Field must be defined");
        }
    }

    function disallowValue(value: Val, _session: AccessControl.Session, location: ValidationLocation) {
        if (value !== undefined) {
            throw new ConformanceError(schema, location, "Field must not be defined");
        }
    }
}
