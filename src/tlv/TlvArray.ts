/**
 * @license
 * Copyright 2022 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DataReaderLE } from "../util/DataReaderLE.js";
import { DataWriterLE } from "../util/DataWriterLE.js";
import { TlvType, TlvCodec, TlvTag, TlvTypeLength } from "./TlvCodec.js";
import { TlvSchema } from "./TlvSchema.js";
import { MatterCoreSpecificationV1_0 } from "../spec/Specifications.js"; 

type LengthConstraints = {
    minLength?: number,
    maxLength?: number,
    length?: number,
};

/**
 * Schema to encode an array or string in TLV.
 * 
 * @see {@link MatterCoreSpecificationV1_0} § A.11.2 and A.11.4
 */
export class ArraySchema<T> extends TlvSchema<T[]> {
    constructor(
        private readonly elementSchema: TlvSchema<T>,
        private readonly minLength: number = 0,
        private readonly maxLength: number = 1024,
    ) {
        super();
    }

    /** @override */
    encodeTlv(writer: DataWriterLE, value: T[], tag: TlvTag = {}): void {
        TlvCodec.writeTag(writer, { type: TlvType.Array }, tag);
        value.forEach(element => this.elementSchema.encodeTlv(writer, element));
        TlvCodec.writeTag(writer, { type: TlvType.EndOfContainer });
    }

    /** @override */
    decodeTlvValue(reader: DataReaderLE, typeLength: TlvTypeLength): T[] {
        if (typeLength.type !== TlvType.Array) throw new Error(`Unexpected type ${typeLength.type}.`);
        const result = new Array<T>();
        while (true) {
            const { tag: elementTag, typeLength: elementTypeLength } = TlvCodec.readTagType(reader);
            if (elementTag.id !== undefined || elementTag.profile !== undefined) throw new Error("Array element tags should be anonymous.");
            if (elementTypeLength.type === TlvType.EndOfContainer) break;
            result.push(this.elementSchema.decodeTlvValue(reader, elementTypeLength));
        }
        this.validate(result);
        return result;
    }

    /** @override */
    validate({ length }: T[]): void {
        if (length > this.maxLength) throw new Error(`Array is too long: ${length}, max ${this.maxLength}.`);
        if (length < this.minLength) throw new Error(`Array is too short: ${length}, min ${this.minLength}.`);
    }
}

/** Array TLV schema. */
export const TlvArray = <T>(elementSchema: TlvSchema<T>, {minLength, maxLength, length}: LengthConstraints = {}) => new ArraySchema(elementSchema, length ?? minLength, length ?? maxLength);
