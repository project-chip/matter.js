/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { InternalError } from "../../../common/MatterError.js";
import { ClusterModel, Metatype, ValueModel } from "../../../model/index.js";
import { camelize } from "../../../util/String.js";
import { ConformanceError, DatatypeError } from "../../errors.js";
import { RootSupervisor } from "../../supervision/RootSupervisor.js";
import { Schema } from "../../supervision/Schema.js";
import type { ValueSupervisor } from "../../supervision/ValueSupervisor.js";
import {
    assertArray,
    assertBytes,
    assertNumber,
    assertNumeric,
    assertObject,
    assertString,
} from "../validation/assertions.js";
import { createConformanceValidator } from "../validation/conformance.js";
import { createConstraintValidator } from "../validation/constraint.js";
import { ValidationContext } from "../validation/context.js";
import { Val } from "./Val.js";

/**
 * Generate a function that performs data validation.
 *
 * @param schema the schema against which we validate
 * @param factory used to retrieve validators for sub-properties
 */
export function ValueValidator(schema: Schema, factory: RootSupervisor): ValueSupervisor.Validate {
    if (schema instanceof ClusterModel) {
        return createStructValidator(schema, factory) ?? (() => {});
    }

    let validator: ValueSupervisor.Validate | undefined;

    const metatype = schema.effectiveMetatype;
    switch (metatype) {
        case Metatype.enum:
            validator = createEnumValidator(schema);
            break;

        case Metatype.bitmap:
            validator = createBitmapValidator(schema);
            break;

        case Metatype.integer:
        case Metatype.float:
            validator = createSimpleValidator(schema, assertNumeric);
            break;

        case Metatype.string:
            validator = createSimpleValidator(schema, assertString);
            break;

        case Metatype.bytes:
            validator = createSimpleValidator(schema, assertBytes);
            break;

        case Metatype.object:
            validator = createStructValidator(schema, factory);
            break;

        case Metatype.array:
            validator = createListValidator(schema, factory);
            break;

        case Metatype.boolean:
        case Metatype.date:
        case Metatype.any:
            break;

        case undefined:
            if (schema.type === undefined) {
                throw new InternalError(`There is no type defined for ${schema.name}`);
            }
            throw new InternalError(`Cannot determine metatype for ${schema.name} type ${schema.type}`);

        default:
            throw new InternalError(`Unsupported validation metatype ${metatype}`);
    }

    validator = createNullValidator(schema, validator);

    validator = createConformanceValidator(schema, factory.featureMap, factory.supportedFeatures, validator);

    return validator || (() => {});
}

function createNullValidator(
    schema: ValueModel,
    nextValidator?: ValueSupervisor.Validate,
): ValueSupervisor.Validate | undefined {
    if (schema.effectiveQuality.nullable !== true) {
        return (value, options) => {
            if (value === null) {
                throw new DatatypeError(schema, "be null", value);
            }
            nextValidator?.(value, options);
        };
    }

    return nextValidator;
}

function createEnumValidator(schema: ValueModel): ValueSupervisor.Validate | undefined {
    const valid = new Set(schema.members.map(member => member.id).filter(e => e !== undefined));

    return value => {
        assertNumber(value, schema);
        if (!valid.has(value)) {
            throw new DatatypeError(schema, "defined in enum", value);
        }
    };
}

function createBitmapValidator(schema: ValueModel): ValueSupervisor.Validate | undefined {
    const fields = {} as Record<string, { schema: ValueModel; max: number }>;

    for (const field of schema.members) {
        const constraint = field.effectiveConstraint;
        let max;
        if (typeof constraint.min === "number" && typeof constraint.max === "number") {
            max = constraint.max - constraint.min;
        } else {
            max = 1;
        }
        fields[camelize(field.name)] = {
            schema: field,
            max,
        };
    }

    return value => {
        assertObject(value, schema);

        for (const key in value) {
            const field = fields[key];
            if (field === undefined) {
                throw new DatatypeError(schema, "defined in bitmap", key);
            }

            const fieldValue = value[key];
            assertNumber(fieldValue, field.schema);

            if (fieldValue > field.max) {
                throw new DatatypeError(field.schema, "in range of bit field", fieldValue);
            }
        }
    };
}

function createSimpleValidator(
    schema: ValueModel,
    validateType: (value: Val, schema: ValueModel) => void,
): ValueSupervisor.Validate {
    const validateConstraint = createConstraintValidator(schema.effectiveConstraint, schema);

    return (value, options) => {
        // If undefined, only conformance tests apply
        if (value === undefined) {
            return;
        }

        validateType(value, schema);

        validateConstraint?.(value, options?.siblings);
    };
}

function createStructValidator(schema: Schema, factory: RootSupervisor): ValueSupervisor.Validate | undefined {
    const validators = {} as Record<string, ValueSupervisor.Validate>;

    for (const field of schema.members) {
        // Global fields currently handled internally
        if (field.global) {
            continue;
        }

        validators[camelize(field.name)] = factory.get(field).validate;
    }

    return value => {
        assertObject(value, schema);
        const options: ValidationContext = {
            siblings: value,
            choices: {},
        };

        for (const name in validators) {
            validators[name](value[name], options);
        }

        for (const name in options.choices) {
            const choice = options.choices[name];
            if (choice.count < choice.target) {
                throw new ConformanceError(
                    schema,
                    `Too few fields present (${choice.count} of min ${choice.target})`,
                    name,
                );
            }
            if (choice.count > choice.target && !choice.orMore) {
                throw new ConformanceError(
                    schema,
                    `Too many fields present (${choice.count} of max ${choice.target})`,
                    name,
                );
            }
        }
    };
}

function createListValidator(schema: ValueModel, factory: RootSupervisor): ValueSupervisor.Validate | undefined {
    const entry = schema.listEntry;
    let validateEntries: undefined | ((list: Val.List) => void);
    if (entry) {
        const entryValidator = factory.get(entry).validate;

        validateEntries = (list: Val.List) => {
            for (const e of list) {
                entryValidator(e);
            }
        };
    }

    const validateConstraint = createConstraintValidator(schema.constraint, schema);

    return (value, options) => {
        assertArray(value, schema);
        validateConstraint?.(value, options?.siblings);
        validateEntries?.(value);
    };
}
