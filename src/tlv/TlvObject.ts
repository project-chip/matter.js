/**
 * @license
 * Copyright 2022 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Merge } from "../util/Type.js";
import { TlvType, TlvTag, TlvTypeLength } from "./TlvCodec.js";
import { TlvReader, TlvSchema, TlvWriter } from "./TlvSchema.js";
import { MatterCoreSpecificationV1_0 } from "../spec/Specifications.js";
import { TlvAny } from "./TlvAny.js";

export interface FieldType<T> {
    id: number,
    schema: TlvSchema<T>,
    optional?: boolean,
};

export interface OptionalFieldType<T> extends FieldType<T> {
    optional: true,
}

export type TlvFields = { [field: string]: FieldType<any> };

type MandatoryFieldNames<F extends TlvFields> = { [K in keyof F]: F[K] extends OptionalFieldType<any> ? never : K }[keyof F];
type OptionalFieldNames<F extends TlvFields> = { [K in keyof F]: F[K] extends OptionalFieldType<any> ? K : never }[keyof F];
type TypeFromField<F extends FieldType<any>> = F extends FieldType<infer T> ? T : never;
type TypeForMandatoryFields<F extends TlvFields, MF extends keyof F> = { [K in MF]: TypeFromField<F[K]> };
type TypeForOptionalFields<F extends TlvFields, MF extends keyof F> = { [K in MF]?: TypeFromField<F[K]> };
export type TypeFromFields<F extends TlvFields> = Merge<TypeForMandatoryFields<F, MandatoryFieldNames<F>>, TypeForOptionalFields<F, OptionalFieldNames<F>>>;

/**
 * Schema to encode an object in TLV.
 * 
 * @see {@link MatterCoreSpecificationV1_0} § A.5.1 and § A.11.4
 */
export class ObjectSchema<F extends TlvFields> extends TlvSchema<TypeFromFields<F>> {
    private readonly fieldById = new Array<{ name: string, field: FieldType<any>}>();

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

    override encodeTlvInternal(writer: TlvWriter, value: TypeFromFields<F>, tag: TlvTag = {}): void {
        writer.writeTag({ type: this.type }, tag);
        for (const name in this.fieldDefinitions) {
            const { id, schema, optional: isOptional } = this.fieldDefinitions[name];
            const fieldValue = (value as any)[name];
            if (fieldValue === undefined) {
                if (!isOptional) throw new Error(`Missing mandatory field ${name}`);
                continue;
            }
            schema.encodeTlvInternal(writer, fieldValue, { id });
        }
        writer.writeTag({ type: TlvType.EndOfContainer });
    }

    override decodeTlvInternalValue(reader: TlvReader, typeLength: TlvTypeLength): TypeFromFields<F> {
        if (typeLength.type !== this.type) throw new Error(`Unexpected type ${typeLength.type}.`);
        const result: any = {};
        while (true) {
            const { tag: { profile, id } = {}, typeLength: elementTypeLength } = reader.readTagType();
            if (elementTypeLength.type === TlvType.EndOfContainer) break;
            if (profile !== undefined) throw new Error("Structure element tags should be context-specific.");
            if (id === undefined) throw new Error("Structure element tags should have an id.");
            const fieldName = this.fieldById[id];
            if (fieldName === undefined) {
                // Ignore unknown field by decoding it as raw TLV so we skip forward the proper length.
                TlvAny.decodeTlvInternalValue(reader, elementTypeLength);
                continue;
            }
            const { field, name } = fieldName;
            result[name] = field.schema.decodeTlvInternalValue(reader, elementTypeLength);
        }
        this.validate(result);
        return result as TypeFromFields<F>;
    }

    override validate(value: TypeFromFields<F>): void {
        for (const name in this.fieldDefinitions) {
            if (!this.fieldDefinitions[name].optional && (value as any)[name] === undefined) throw new Error(`Missing mandatory field ${name}`);
        }
    }
}

/** Object TLV schema. */
export const TlvObject = <F extends TlvFields>(fields: F) => new ObjectSchema(fields, TlvType.Structure);

/** List TLV schema. */
export const TlvList = <F extends TlvFields>(fields: F) => new ObjectSchema(fields, TlvType.List);

/** Object TLV mandatory field. */
export const TlvField = <T>(id: number, schema: TlvSchema<T>) => ({ id, schema, optional: false }) as FieldType<T>;

/** Object TLV optional field. */
export const TlvOptionalField = <T>(id: number, schema: TlvSchema<T>) => ({ id, schema, optional: true }) as OptionalFieldType<T>;
