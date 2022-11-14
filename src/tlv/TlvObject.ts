/**
 * @license
 * Copyright 2022 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DataReaderLE } from "../util/DataReaderLE.js";
import { DataWriterLE } from "../util/DataWriterLE.js";
import { Merge } from "../util/Type.js";
import { TlvType, TlvCodec, TlvTag, TlvTypeLength } from "./TlvCodec.js";
import { TlvSchema } from "./TlvSchema.js";

interface Field<T> {
    id: number,
    schema: TlvSchema<T>,
    optional?: boolean,
};

interface OptionalField<T> extends Field<T> {
    optional: true,
}

type Fields = { [field: string]: Field<any> };

type MandatoryFieldNames<F extends Fields> = { [K in keyof F]: F[K] extends OptionalField<any> ? never : K }[keyof F];
type OptionalFieldNames<F extends Fields> = { [K in keyof F]: F[K] extends OptionalField<any> ? K : never }[keyof F];
type TypeFromField<F extends Field<any>> = F extends Field<infer T> ? T : never;
type TypeForMandatoryFields<F extends Fields, MF extends keyof F> = { [K in MF]: TypeFromField<F[K]> };
type TypeForOptionalFields<F extends Fields, MF extends keyof F> = { [K in MF]?: TypeFromField<F[K]> };
type TypeFromFields<F extends Fields> = Merge<TypeForMandatoryFields<F, MandatoryFieldNames<F>>, TypeForOptionalFields<F, OptionalFieldNames<F>>>;

/**
 * Schema to encode an object in TLV.
 * 
 * @see {@link MatterCoreSpecificationV1_0} § A.5.1 and § A.11.4
 */
 class ObjectSchema<F extends Fields> extends TlvSchema<TypeFromFields<F>> {
    private readonly fieldById = new Array<{ name: string, field: Field<any>}>();

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

    /** @override */
    encodeTlv(writer: DataWriterLE, value: TypeFromFields<F>, tag: TlvTag = {}): void {
        TlvCodec.writeTag(writer, { type: this.type }, tag);
        for (const name in this.fieldDefinitions) {
            const { id, schema, optional: isOptional } = this.fieldDefinitions[name];
            const fieldValue = (value as any)[name];
            if (fieldValue === undefined) {
                if (!isOptional) throw new Error(`Missing mandatory field ${name}`);
                continue;
            }
            schema.encodeTlv(writer, fieldValue, { id });
        }
        TlvCodec.writeTag(writer, { type: TlvType.EndOfContainer });
    }

    /** @override */
    decodeTlvValue(reader: DataReaderLE, typeLength: TlvTypeLength): TypeFromFields<F> {
        if (typeLength.type !== this.type) throw new Error(`Unexpected type ${typeLength.type}.`);
        const result: any = {};
        while (true) {
            const { tag: { profile, id }, typeLength: elementTypeLength } = TlvCodec.readTagType(reader);
            if (elementTypeLength.type === TlvType.EndOfContainer) break;
            if (profile !== undefined) throw new Error("Structure element tags should be context-specific.");
            if (id === undefined) throw new Error("Structure element tags should have an id.");
            const fieldName = this.fieldById[id];
            if (fieldName === undefined) throw new Error(`Unknown field ${id}`);
            const { field, name }= fieldName;
            result[name] = field.schema.decodeTlvValue(reader, elementTypeLength);
        }
        this.validate(result);
        return result as TypeFromFields<F>;
    }

    /** @override */
    validate(value: TypeFromFields<F>): void {
        for (const name in this.fieldDefinitions) {
            if (!this.fieldDefinitions[name].optional && (value as any)[name] === undefined) throw new Error(`Missing mandatory field ${name}`);
        }
    }
}

/** Object TLV schema. */
export const TlvObject = <F extends Fields>(fields: F, type?: TlvType.Structure | TlvType.List) => new ObjectSchema(fields, type);

/** Object TLV mandatory field. */
export const TlvField = <T>(id: number, schema: TlvSchema<T>) => ({ id, schema, optional: false }) as Field<T>;

/** Object TLV optional field. */
export const TlvOptionalField = <T>(id: number, schema: TlvSchema<T>) => ({ id, schema, optional: true }) as OptionalField<T>;
