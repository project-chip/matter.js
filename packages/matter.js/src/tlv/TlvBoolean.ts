/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { TlvTag, TlvType, TlvTypeLength } from "./TlvCodec.js";
import { TlvReader, TlvSchema, TlvWriter } from "./TlvSchema.js";
import { MatterCoreSpecificationV1_0 } from "../spec/Specifications.js";

/**
 * Schema to encode a boolean in TLV.
 *
 * @see {@link MatterCoreSpecificationV1_0} § A.11.3
 */
export class BooleanSchema extends TlvSchema<boolean> {
    override encodeTlvInternal(writer: TlvWriter, value: boolean, tag: TlvTag = {}): void {
        writer.writeTag({ type: TlvType.Boolean, value }, tag);
    }

    override decodeTlvInternalValue(_reader: TlvReader, typeLength: TlvTypeLength) {
        if (typeLength.type !== TlvType.Boolean) throw new Error(`Unexpected type ${typeLength.type}.`)
        return typeLength.value;
    }

    override validate(value: boolean): void {
        if (typeof value !== "boolean") throw new Error(`Expected boolean, got ${typeof value}.`);
    }
}

/** Boolean TLV schema. */
export const TlvBoolean = new BooleanSchema();
