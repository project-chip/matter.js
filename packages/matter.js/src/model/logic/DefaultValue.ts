/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { NotImplementedError } from "../../common/MatterError.js";
import { ByteArray } from "../../util/ByteArray.js";
import { camelize } from "../../util/String.js";
import { FieldValue, Metatype } from "../index.js";
import { ValueModel } from "../models/index.js";

/**
 * Obtain a native JS default value for a ValueModel.
 *
 * This code assumes defaults have been previously validated (e.g. by model
 * validator).  It throws errors for a few structural issues but generally
 * returns undefined if the model's default value cannot be converted to the
 * correct type.
 */
export function DefaultValue(model: ValueModel): any {
    const value = castValue(model);
    if (value === undefined) {
        return buildValue(model);
    }
    return value;
}

/**
 * When an explicit value is present, cast to native JS type.
 */
function castValue(model: ValueModel) {
    const modelDefault = model.default;
    if (modelDefault === undefined) {
        return;
    }

    if (modelDefault === null) {
        if (model.nullable) {
            return null;
        }
        return;
    }

    const metatype = model.effectiveMetatype;
    switch (metatype) {
        case undefined:
        case Metatype.any:
            return FieldValue.unwrap(modelDefault);

        case Metatype.integer:
        case Metatype.float:
            return FieldValue.numericValue(modelDefault, model.type);

        case Metatype.enum:
            let enumValueModel;
            if (typeof modelDefault === "number" || typeof modelDefault === "string") {
                enumValueModel = model.member(modelDefault);
            }
            if (enumValueModel) {
                return enumValueModel.effectiveId;
            }
            return;

        case Metatype.bitmap:
            if (typeof modelDefault === "number" || typeof modelDefault === "bigint") {
                return modelDefault;
            }
            return;

        case Metatype.object:
            return FieldValue.objectValue(modelDefault);

        case Metatype.string:
            return modelDefault.toString();

        case Metatype.bytes:
            if (ArrayBuffer.isView(modelDefault)) {
                return new ByteArray(modelDefault.buffer, modelDefault.byteOffset, modelDefault.byteLength);
            }
            if (typeof modelDefault === "string") {
                return ByteArray.fromHex(modelDefault);
            }
            return;

        case Metatype.date:
            if (modelDefault instanceof Date) {
                return modelDefault;
            }
            if (typeof modelDefault === "number" || typeof modelDefault === "string") return new Date(modelDefault);
            return;

        case Metatype.array:
            if (Array.isArray(modelDefault)) {
                return modelDefault;
            }
            return;

        case Metatype.boolean:
            return !!modelDefault;

        default:
            throw new NotImplementedError(`Unsupported metatype "${metatype}"`);
    }
}
/**
 * When an explicit default value is not present, for some types we generate
 * a default from the structure.
 */
function buildValue(model: ValueModel) {
    switch (model.effectiveMetatype) {
        case Metatype.array:
            // We don't really build default array values except in the case of
            // non-nullable arrays where zero items is allowed; then we create
            // an empty array
            if (
                !model.nullable &&
                model.effectiveMetatype === Metatype.array &&
                !model.constraint.min &&
                !model.constraint.value
            ) {
                return [];
            }
            return;

        case Metatype.object:
            return buildObject(model);

        case Metatype.bitmap:
            return buildBitmap(model);
    }
}

function buildObject(model: ValueModel) {
    let result: { [key: string]: any } | undefined;

    for (const child of model.members) {
        const name = camelize(child.name, false);
        if (result && result[name] !== undefined) {
            continue;
        }

        const value = child.effectiveDefault;
        if (value !== undefined) {
            if (!result) {
                result = {};
            }

            result[name] = value;
        }
    }

    return result;
}

function buildBitmap(model: ValueModel) {
    let result;
    let fieldsDefined = 0;

    for (const m of model.members) {
        const defaultValue = FieldValue.numericValue(m.default);
        if (defaultValue === undefined) {
            continue;
        }

        if (result === undefined) {
            result = 0;
        }

        let minBit, maxBit;

        const constraintValue = FieldValue.numericValue(m.constraint.value);
        if (constraintValue !== undefined) {
            minBit = constraintValue;
            maxBit = constraintValue + 1;
        } else {
            minBit = FieldValue.numericValue(m.constraint.min);
            maxBit = FieldValue.numericValue(m.constraint.max);
        }

        if (minBit === undefined) {
            minBit = 0;
        }
        if (maxBit === undefined) {
            maxBit = Math.trunc(Math.log2(defaultValue)) + 1;
        }

        for (let i = 0, mask = 1 << minBit; i < maxBit - minBit; i++, mask << 1) {
            if (fieldsDefined & mask) {
                continue;
            }
            fieldsDefined |= mask;
            if (defaultValue & (1 << i)) {
                result |= mask;
            }
        }
    }

    return result;
}
