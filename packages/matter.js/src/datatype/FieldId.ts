/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { tryCatch } from "../common/TryCatchHandler.js";
import { ValidationError } from "../common/ValidationError.js";
import { TlvUInt32 } from "../tlv/TlvNumber.js";
import { TlvWrapper } from "../tlv/TlvWrapper.js";
import { Branded } from "../util/Type.js";
import { fromMEI } from "./ManufacturerExtensibleIdentifier.js";

/**
 * A "field ID" is an unsigned 32-bit integer that identifies a specific field
 * in a cluster struct type.
 *
 * @see {@link MatterSpecification.v11.Core} § 7.18.2.18
 */
export type FieldId = Branded<number, "FieldId">;

export function FieldId(fieldId: number, validate = true): FieldId {
    if (!validate) {
        return fieldId as FieldId;
    }
    if (fieldId >= 0xe0 && fieldId <= 0xfe) {
        // Global
        return fieldId as FieldId;
    }
    const { typeSuffix } = fromMEI(fieldId);
    if (typeSuffix >= 0x00 && typeSuffix <= 0xdf) {
        return fieldId as FieldId;
    }
    throw new ValidationError(`Invalid field ID: ${fieldId}`);
}

export namespace FieldId {
    export const isGlobal = (fieldId: number): boolean => {
        return fieldId >= 0xe0 && fieldId <= 0xfe;
    };

    export const isValid = (fieldId: number): fieldId is FieldId => {
        return tryCatch(
            () => {
                FieldId(fieldId);
                return true;
            },
            ValidationError,
            false,
        );
    };
}

/** TLV schema for a field ID. */
export const TlvFieldId = new TlvWrapper<FieldId, number>(
    TlvUInt32,
    fieldId => fieldId,
    value => FieldId(value, false), // No automatic validation on decode
);
