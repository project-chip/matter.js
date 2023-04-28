/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { TlvTag, TlvType, TlvTypeLength } from "./TlvCodec.js";
import { TlvReader, TlvSchema, TlvWriter } from "./TlvSchema.js";
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
        readonly elementSchema: TlvSchema<T>,
        private readonly minLength: number = 0,
        private readonly maxLength: number = 1024,
    ) {
        super();
    }

    override encodeTlvInternal(writer: TlvWriter, value: T[], tag: TlvTag = {}): void {
        writer.writeTag({ type: TlvType.Array }, tag);
        value.forEach(element => this.elementSchema.encodeTlvInternal(writer, element));
        writer.writeTag({ type: TlvType.EndOfContainer });
    }

    override decodeTlvInternalValue(reader: TlvReader, typeLength: TlvTypeLength): T[] {
        if (typeLength.type !== TlvType.Array) throw new Error(`Unexpected type ${typeLength.type}.`);
        const result = new Array<T>();
        while (true) {
            const { tag: elementTag, typeLength: elementTypeLength } = reader.readTagType();
            if (elementTag !== undefined) throw new Error("Array element tags should be anonymous.");
            if (elementTypeLength.type === TlvType.EndOfContainer) break;
            result.push(this.elementSchema.decodeTlvInternalValue(reader, elementTypeLength));
        }
        return result;
    }

    override validate(data: T[]): void {
        if (!Array.isArray(data)) throw new Error(`Expected array, got ${typeof data}.`);
        if (data.length > this.maxLength) throw new Error(`Array is too long: ${data.length}, max ${this.maxLength}.`);
        if (data.length < this.minLength) throw new Error(`Array is too short: ${data.length}, min ${this.minLength}.`);
        data.forEach(element => this.elementSchema.validate(element));
    }
}

/** Array TLV schema. */
export const TlvArray = <T>(elementSchema: TlvSchema<T>, { minLength, maxLength, length }: LengthConstraints = {}) => new ArraySchema(elementSchema, length ?? minLength, length ?? maxLength);
