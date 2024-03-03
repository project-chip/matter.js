/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { VendorId } from "../../src/datatype/VendorId.js";
import { ByteArray } from "../../src/util/ByteArray.js";
import { isDeepEqual } from "../../src/util/DeepEqual.js";

describe("DeepEqual", () => {
    it("Equality of primitives", () => {
        expect(isDeepEqual(1, 1)).ok;
        expect(!isDeepEqual(1, 2)).ok;
        expect(!isDeepEqual(1, true)).ok;
        expect(!isDeepEqual(0, false)).ok;
        expect(!isDeepEqual(1, "1")).ok;
        expect(!isDeepEqual(true, "true")).ok;
        expect(isDeepEqual(null, null)).ok;
        expect(!isDeepEqual(0, null)).ok;
        expect(!isDeepEqual(null, 0)).ok;
        expect(!isDeepEqual(null, undefined)).ok;
        expect(!isDeepEqual(undefined, null)).ok;
        expect(!isDeepEqual(undefined, 0)).ok;
        expect(!isDeepEqual(undefined, "")).ok;
    });

    it("Equality of arrays", () => {
        expect(isDeepEqual([1], [1])).ok;
        expect(!isDeepEqual([1], [2])).ok;
        expect(!isDeepEqual([1], [1, 2])).ok;
        expect(isDeepEqual([1, 2], [1, 2])).ok;
        expect(!isDeepEqual(["", ""], [0, 0])).ok;
        expect(!isDeepEqual(["", ""], [0, ""])).ok;
        expect(!isDeepEqual(["", true], ["", false])).ok;
        expect(isDeepEqual(["", ""], ["", ""])).ok;
    });

    it("Equality of objects", () => {
        expect(isDeepEqual({ a: 1 }, { a: 1 })).ok;
        expect(!isDeepEqual({ a: 1 }, { a: 2 })).ok;
        expect(!isDeepEqual({ a: 1 }, { a: 1, b: 1 })).ok;
        expect(!isDeepEqual({ a: 1 }, { b: 1 })).ok;
        expect(!isDeepEqual({ a: 1 }, {})).ok;
        expect(!isDeepEqual({}, { a: 1 })).ok;
        expect(!isDeepEqual({ a: 1 }, { a: 1, b: 1 })).ok;
        expect(isDeepEqual({}, {})).ok;
        expect(isDeepEqual({ a: {}, b: {} }, { a: {}, b: {} })).ok;
        expect(!isDeepEqual({ a: {}, b: {} }, { a: {}, b: { c: 1 } })).ok;
        expect(!isDeepEqual({ a: {}, b: { c: 1 } }, { a: {}, b: {} })).ok;
    });

    it("Equality of special Matter objects", () => {
        expect(isDeepEqual(VendorId(0), VendorId(0))).ok;
        expect(!isDeepEqual(VendorId(0), VendorId(1))).ok;

        expect(isDeepEqual(ByteArray.fromHex("00"), ByteArray.fromHex("00"))).ok;
        expect(!isDeepEqual(ByteArray.fromHex("00"), ByteArray.fromHex("01"))).ok;
    });
});
