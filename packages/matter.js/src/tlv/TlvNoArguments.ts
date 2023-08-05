/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { TlvTag } from "./TlvCodec.js";
import { TlvWriter } from "./TlvSchema.js";
import { TlvObject } from "./TlvObject.js";
import { VoidSchema } from "./TlvVoid.js";
import { UnexpectedDataError } from "../common/MatterError.js";

const TlvEmptyObject = TlvObject({});

/**
 * Schema to encode void.
 */
export class NoArgumentsSchema extends VoidSchema {

    override encodeTlvInternal(writer: TlvWriter, value: void, tag?: TlvTag): void {
        if (value !== undefined) throw new UnexpectedDataError("No value should be passed");
        TlvEmptyObject.encodeTlvInternal(writer, {}, tag);
    }
}

/** Void TLV schema. */
export const TlvNoArguments = new NoArgumentsSchema();
