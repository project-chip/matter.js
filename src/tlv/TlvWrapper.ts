/**
 * @license
 * Copyright 2022 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DataReaderLE } from "../util/DataReaderLE.js";
import { DataWriterLE } from "../util/DataWriterLE.js";
import { TlvTag, TlvTypeLength } from "./TlvCodec.js";
import { TlvSchema } from "./TlvSchema.js";

export class TlvWrapper<O, T> extends TlvSchema<O> {
    constructor(
        private readonly underlyingSchema: TlvSchema<T>,
        private readonly wrap: (object: O) => T,
        private readonly unwrap: (value: T) => O,
    ) {
        super();
    }

    decodeTlvValue(reader: DataReaderLE, typeLength: TlvTypeLength): O {
        return this.unwrap(this.underlyingSchema.decodeTlvValue(reader, typeLength));
    }

    encodeTlv(writer: DataWriterLE, value: O, tag?: TlvTag | undefined): void {
        this.underlyingSchema.encodeTlv(writer, this.wrap(value), tag);
    }

    /** @override */
    validate(value: O): void {
        this.underlyingSchema.validate(this.wrap(value));
    }
}
