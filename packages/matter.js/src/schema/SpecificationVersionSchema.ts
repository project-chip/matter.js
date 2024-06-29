/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ByteArray } from "../util/ByteArray.js";
import { toHex } from "../util/Number.js";
import { BitField, ByteArrayBitmapSchema } from "./BitmapSchema.js";

export type SpecificationVersion = {
    major: number;
    minor: number;
    patch: number;
};

const SpecificationVersionSchema = ByteArrayBitmapSchema({
    major: BitField(0, 8),
    minor: BitField(8, 8),
    patch: BitField(16, 8),
    reserved: BitField(24, 8),
});

export namespace SpecificationVersion {
    export const encode = (version: SpecificationVersion) =>
        parseInt(SpecificationVersionSchema.encode({ ...version, reserved: 0 }).toHex(), 16);
    export const decode = (version: number) => SpecificationVersionSchema.decode(ByteArray.fromHex(toHex(version)));
}
