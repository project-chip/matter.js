/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { InternalError } from "#general";
import { Constraint, FieldValue, Metatype, ValueModel } from "#model";
import { ConstraintError } from "../../errors.js";
import { ValueSupervisor } from "../../supervision/ValueSupervisor.js";
import { Val } from "../Val.js";
import { assertArray, assertBoolean, assertNumeric, assertSequence } from "./assertions.js";

/**
 * Creates a function that validates values based on the constraint in the
 * schema.
 */
export function createConstraintValidator(
    constraint: Constraint,
    schema: ValueModel,
): ValueSupervisor.Validate | undefined {
    if (constraint.empty) {
        return;
    }

    const metatype = schema.effectiveMetatype;
    if (metatype === Metatype.array) {
        return createArrayConstraintValidator(constraint, schema);
    }

    if (constraint.in) {
        return (value, _session, location) => {
            if (!constraint.test(value as FieldValue, location.siblings)) {
                throw new ConstraintError(
                    schema,
                    location,
                    `Value ${value} is not one of the values allowed by "in" constraint`,
                );
            }
        };
    }

    switch (schema.effectiveMetatype) {
        case Metatype.integer:
        case Metatype.float:
            return (value, _session, location) => {
                assertNumeric(value, location);
                if (!constraint.test(value, location.siblings)) {
                    throw new ConstraintError(
                        schema,
                        location,
                        `Value ${value} is not within bounds defined by constraint`,
                    );
                }
            };

        case Metatype.boolean:
            return (value, _session, location) => {
                assertBoolean(value, location);
                if (!constraint.test(value, location.siblings)) {
                    throw new ConstraintError(schema, location, `Value ${value} is disallowed by constraint`);
                }
            };

        case Metatype.string:
        case Metatype.bytes:
            return (value: Val, _session, location) => {
                assertSequence(value, location);
                if (!constraint.test(value.length, location.siblings)) {
                    throw new ConstraintError(
                        schema,
                        location,
                        `Lenght of value ${value} is not within bounds defined by constraint`,
                    );
                }
            };

        default:
            throw new InternalError(`Cannot define constraint for unsupported metatype ${schema.effectiveMetatype}`);
    }
}

/**
 * Validate array constraints specifically.
 *
 * Array constraints behave like other sequence constraints in that they apply
 * to the length.  They are special however as they may have sub-constraints
 * that apply to data elements.
 */
function createArrayConstraintValidator(constraint: Constraint, schema: ValueModel): ValueSupervisor.Validate {
    let validateEntryConstraint: ValueSupervisor.Validate | undefined;
    if (constraint.entry) {
        const entrySchema = schema.listEntry;
        if (entrySchema) {
            validateEntryConstraint = createConstraintValidator(constraint.entry, entrySchema);
        }
    }

    return (value, session, location) => {
        assertArray(value, location);

        if (!constraint.test(value.length, location.siblings)) {
            throw new ConstraintError(
                schema,
                location,
                `Array length ${value.length} is not within bounds defined by constraint`,
            );
        }

        if (validateEntryConstraint) {
            const sublocation = {
                ...location,
                path: location.path.at(""),
            };

            let pos = 0;
            for (const e of value) {
                if (e === undefined || e === null) {
                    // Accept nullish
                    continue;
                }

                sublocation.path.id = pos;
                validateEntryConstraint(e, session, sublocation);

                pos++;
            }
        }
    };
}
