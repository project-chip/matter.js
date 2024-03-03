/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DataModelPath } from "../../../endpoint/DataModelPath.js";
import { ClusterModel, Metatype, ValueModel } from "../../../model/index.js";
import { camelize } from "../../../util/String.js";
import { ConformanceError, DatatypeError, SchemaImplementationError } from "../../errors.js";
import { RootSupervisor } from "../../supervision/RootSupervisor.js";
import { Schema } from "../../supervision/Schema.js";
import type { ValueSupervisor } from "../../supervision/ValueSupervisor.js";
import { Val } from "../Val.js";
import { Internal } from "../managed/Internal.js";
import {
    assertArray,
    assertBoolean,
    assertBytes,
    assertNumber,
    assertNumeric,
    assertObject,
    assertString,
} from "./assertions.js";
import { createConformanceValidator } from "./conformance.js";
import { createConstraintValidator } from "./constraint.js";
import { ValidationLocation } from "./location.js";

/**
 * Generate a function that performs data validation.
 *
 * @param schema the schema against which we validate
 * @param factory used to retrieve validators for sub-properties
 */
export function ValueValidator(schema: Schema, factory: RootSupervisor): ValueSupervisor.Validate | undefined {
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
                throw new SchemaImplementationError(DataModelPath(schema.path), `No type defined`);
            }
            throw new SchemaImplementationError(
                DataModelPath(schema.path),
                `Cannot determine metatype for type ${schema.type}`,
            );

        default:
            throw new SchemaImplementationError(
                DataModelPath((schema as Schema).path),
                `Unsupported validation metatype ${metatype}`,
            );
    }

    validator = createNullValidator(schema, validator);

    validator = createConformanceValidator(schema, factory.featureMap, factory.supportedFeatures, validator);

    return validator;
}

function createNullValidator(
    schema: ValueModel,
    nextValidator?: ValueSupervisor.Validate,
): ValueSupervisor.Validate | undefined {
    if (schema.effectiveQuality.nullable === true) {
        return (value, options, location) => {
            if (value !== null) {
                nextValidator?.(value, options, location);
            }
        };
    }

    // If the field is not nullable, let the datatype check handle validation
    return nextValidator;
}

function createEnumValidator(schema: ValueModel): ValueSupervisor.Validate | undefined {
    const valid = new Set(schema.members.map(member => member.id).filter(e => e !== undefined));

    return (value, _session, location) => {
        assertNumber(value, location);
        if (!valid.has(value)) {
            throw new DatatypeError(location, "defined in enum", value);
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

    return (value, _session, location) => {
        assertObject(value, location);

        for (const key in value) {
            const field = fields[key];
            const subpath = location.path.at(key);

            if (field === undefined) {
                throw new DatatypeError(subpath, "defined in bitmap", key);
            }

            const fieldValue = value[key];
            if (field.max === 1) {
                assertBoolean(fieldValue, subpath);
            } else {
                assertNumber(fieldValue, subpath);

                if (fieldValue > field.max) {
                    throw new DatatypeError(subpath, "in range of bit field", fieldValue);
                }
            }
        }
    };
}

function createSimpleValidator(
    schema: ValueModel,
    validateType: (value: Val, location: ValidationLocation) => void,
): ValueSupervisor.Validate {
    const validateConstraint = createConstraintValidator(schema.effectiveConstraint, schema);

    return (value, session, location) => {
        // If undefined, only conformance tests apply
        if (value === undefined) {
            return;
        }

        validateType(value, location);

        validateConstraint?.(value, session, location);
    };
}

function createStructValidator(schema: Schema, factory: RootSupervisor): ValueSupervisor.Validate | undefined {
    const validators = {} as Record<string, ValueSupervisor.Validate>;

    for (const field of schema.members) {
        // Global fields currently handled in lower levels
        if (field.isGlobalAttribute || field.deprecated) {
            continue;
        }
        const validate = factory.get(field).validate;
        if (validate) {
            validators[camelize(field.name)] = validate;
        }
    }

    return (struct, session, location) => {
        assertObject(struct, location);
        const sublocation = {
            path: location.path.at(""),
            siblings: struct,
            choices: {},
        } as ValidationLocation;

        for (const name in validators) {
            let value;

            if ((struct as Val.Dynamic)[Val.properties]) {
                const rootOwner = (struct as unknown as Internal.Collection)[Internal.reference];
                const properties = (struct as Val.Dynamic)[Val.properties](rootOwner, session);
                if (name in properties) {
                    value = properties[name];
                } else {
                    value = struct[name];
                }
            } else {
                value = struct[name];
            }

            sublocation.path.id = name;
            validators[name](value, session, sublocation);
        }

        for (const name in sublocation.choices) {
            const choice = sublocation.choices[name];

            if (choice.count < choice.target) {
                throw new ConformanceError(
                    schema,
                    location,
                    `Too few fields present (${choice.count} of min ${choice.target})`,
                    name,
                );
            }

            if (choice.count > choice.target && !choice.orMore) {
                throw new ConformanceError(
                    schema,
                    location,
                    `Too many fields present (${choice.count} of max ${choice.target})`,
                    name,
                );
            }
        }
    };
}

function createListValidator(schema: ValueModel, factory: RootSupervisor): ValueSupervisor.Validate | undefined {
    const entry = schema.listEntry;
    let validateEntries: undefined | ValueSupervisor.Validate;
    if (entry) {
        const entryValidator = factory.get(entry).validate;

        if (entryValidator) {
            validateEntries = (list: Val, session: ValueSupervisor.Session, location: ValidationLocation) => {
                if (!list || typeof (list as Iterable<unknown>)[Symbol.iterator] !== "function") {
                    throw new DatatypeError(location, "a list", list);
                }

                let index = 0;
                const sublocation = {
                    path: location.path.at(""),
                };
                for (const e of list as Iterable<unknown>) {
                    if (e === undefined || e === null) {
                        // Accept nullish
                        continue;
                    }

                    sublocation.path.id = index;
                    entryValidator(e, session, sublocation);

                    index++;
                }
            };
        }
    }

    const validateConstraint = createConstraintValidator(schema.constraint, schema);

    return (value, session, location) => {
        assertArray(value, location);
        validateConstraint?.(value, session, location);
        validateEntries?.(value, session, location);
    };
}
