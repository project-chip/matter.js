/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { TlvTag, TlvTypeLength } from "./TlvCodec.js";
import { TlvReader, TlvSchema, TlvWriter } from "./TlvSchema.js";

export class TlvWrapper<O, T> extends TlvSchema<O> {
    constructor(
        private readonly underlyingSchema: TlvSchema<T>,
        private readonly wrap: (object: O) => T,
        private readonly unwrap: (value: T) => O,
    ) {
        super();
    }

    override decodeTlvInternalValue(reader: TlvReader, typeLength: TlvTypeLength): O {
        return this.unwrap(this.underlyingSchema.decodeTlvInternalValue(reader, typeLength));
    }

    override encodeTlvInternal(writer: TlvWriter, value: O, tag?: TlvTag | undefined): void {
        this.underlyingSchema.encodeTlvInternal(writer, this.wrap(value), tag);
    }

    override validate(value: O): void {
        this.underlyingSchema.validate(this.wrap(value));
    }
}
