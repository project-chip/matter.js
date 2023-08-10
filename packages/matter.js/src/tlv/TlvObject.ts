/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { UnexpectedDataError, ValidationError } from "../common/MatterError.js";
import { MatterCoreSpecificationV1_0 } from "../spec/Specifications.js";
import { Merge } from "../util/Type.js";
import { TlvAny } from "./TlvAny.js";
import { TlvTag, TlvType, TlvTypeLength } from "./TlvCodec.js";
import { TlvReader, TlvSchema, TlvWriter } from "./TlvSchema.js";

export interface FieldType<T> {
    id: number;
    schema: TlvSchema<T>;
    optional?: boolean;
    fallback?: T;
}

export interface OptionalFieldType<T> extends FieldType<T> {
    optional: true;
}

export type TlvFields = { [field: string]: FieldType<any> };

type MandatoryFieldNames<F extends TlvFields> = {
    [K in keyof F]: F[K] extends OptionalFieldType<any> ? never : K;
}[keyof F];
type OptionalFieldNames<F extends TlvFields> = {
    [K in keyof F]: F[K] extends OptionalFieldType<any> ? K : never;
}[keyof F];
type TypeFromField<F extends FieldType<any>> = F extends FieldType<infer T> ? T : never;
type TypeForMandatoryFields<F extends TlvFields, MF extends keyof F> = { [K in MF]: TypeFromField<F[K]> };
type TypeForOptionalFields<F extends TlvFields, MF extends keyof F> = { [K in MF]?: TypeFromField<F[K]> };
export type TypeFromFields<F extends TlvFields> = Merge<
    TypeForMandatoryFields<F, MandatoryFieldNames<F>>,
    TypeForOptionalFields<F, OptionalFieldNames<F>>
>;

/**
 * Schema to encode an object in TLV.
 *
 * @see {@link MatterCoreSpecificationV1_0} § A.5.1 and § A.11.4
 */
export class ObjectSchema<F extends TlvFields> extends TlvSchema<TypeFromFields<F>> {
    private readonly fieldById = new Array<{ name: string; field: FieldType<any> }>();

    constructor(
        private readonly fieldDefinitions: F,
        private readonly type: TlvType.Structure | TlvType.List = TlvType.Structure,
    ) {
        super();

        for (const name in this.fieldDefinitions) {
            const field = this.fieldDefinitions[name];
            this.fieldById[field.id] = { name, field };
        }
    }

    override encodeTlvInternal(writer: TlvWriter, value: TypeFromFields<F>, tag?: TlvTag): void {
        writer.writeTag({ type: this.type }, tag);
        for (const name in this.fieldDefinitions) {
            const { id, schema, optional: isOptional } = this.fieldDefinitions[name];
            const fieldValue = (value as any)[name];
            if (fieldValue === undefined) {
                if (!isOptional) {
                    throw new ValidationError(`Missing mandatory field ${name}`);
                }
                continue;
            }
            schema.encodeTlvInternal(writer, fieldValue, { id });
        }
        writer.writeTag({ type: TlvType.EndOfContainer });
    }

    override decodeTlvInternalValue(reader: TlvReader, typeLength: TlvTypeLength): TypeFromFields<F> {
        if (typeLength.type !== this.type)
            throw new UnexpectedDataError(`Unexpected type ${typeLength.type} (expected ${this.type}).`);
        const result: any = {};
        while (true) {
            const { tag: { profile, id } = {}, typeLength: elementTypeLength } = reader.readTagType();
            if (elementTypeLength.type === TlvType.EndOfContainer) break;
            if (profile !== undefined)
                throw new UnexpectedDataError("Structure element tags should be context-specific.");
            if (id === undefined) throw new UnexpectedDataError("Structure element tags should have an id.");
            const fieldName = this.fieldById[id];
            if (fieldName === undefined) {
                // Ignore unknown field by decoding it as raw TLV so we skip forward the proper length.
                TlvAny.decodeTlvInternalValue(reader, elementTypeLength);
                continue;
            }
            const { field, name } = fieldName;
            result[name] = field.schema.decodeTlvInternalValue(reader, elementTypeLength);
        }
        // Check mandatory fields and, if missing, populate with fallback value if defined.
        for (const name in this.fieldDefinitions) {
            const { optional, fallback } = this.fieldDefinitions[name];
            if (optional) continue;
            const value = result[name];
            if (value !== undefined) continue;
            if (fallback !== undefined) {
                result[name] = fallback;
            }
        }
        return result as TypeFromFields<F>;
    }

    override validate(value: TypeFromFields<F>): void {
        for (const name in this.fieldDefinitions) {
            const { optional, schema } = this.fieldDefinitions[name];
            if ((value as any)[name] === undefined) {
                if (optional) {
                    continue;
                }
                throw new ValidationError(`Missing mandatory field ${name}`);
            }
            schema.validate((value as any)[name]);
        }
    }

    override injectField(
        value: TypeFromFields<F>,
        fieldId: number,
        fieldValue: any,
        injectChecker: (fieldValue: any | undefined) => boolean,
    ): TypeFromFields<F> {
        for (const k in this.fieldDefinitions) {
            const field = this.fieldDefinitions[k] as FieldType<any>;

            if (field.id === fieldId) {
                if (injectChecker((value as any)[k])) {
                    field.schema.validate(fieldValue); // Make sure type matches
                    (value as any)[k] = fieldValue;
                }
            } else {
                (value as any)[k] = field.schema.injectField((value as any)[k], fieldId, fieldValue, injectChecker);
            }
        }
        return value;
    }

    override removeField(
        value: TypeFromFields<F>,
        fieldId: number,
        removeChecker: (fieldValue: any) => boolean,
    ): TypeFromFields<F> {
        for (const k in this.fieldDefinitions) {
            const field = this.fieldDefinitions[k] as FieldType<any>;

            if (field.id === fieldId) {
                if (removeChecker((value as any)[k])) {
                    delete (value as any)[k];
                }
            } else {
                (value as any)[k] = field.schema.removeField((value as any)[k], fieldId, removeChecker);
            }
        }
        return value;
    }
}

/** Object TLV schema. */
export const TlvObject = <F extends TlvFields>(fields: F) => new ObjectSchema(fields, TlvType.Structure);

/** List TLV schema. */
export const TlvList = <F extends TlvFields>(fields: F) => new ObjectSchema(fields, TlvType.List);

/**
 * Object TLV mandatory field. Optionally provide a fallback value to initialize the field value when devices omit
 * providing a value against the specifications or in special usecases. Make sure to use a value that is an equivalent
 * to the value being empty.
 */
export const TlvField = <T>(id: number, schema: TlvSchema<T>, fallback?: T) =>
    ({ id, schema, fallback, optional: false }) as FieldType<T>;

/** Object TLV optional field. */
export const TlvOptionalField = <T>(id: number, schema: TlvSchema<T>) =>
    ({ id, schema, optional: true }) as OptionalFieldType<T>;
