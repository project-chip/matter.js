/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { VendorId } from "../../src/datatype/VendorId.js";
import { ByteArray } from "../../src/util/ByteArray.js";
import { isDeepEqual } from "../../src/util/DeepEqual.js";

describe("DeepEqual", () => {
    it("Equality of primitives", () => {
        expect(isDeepEqual(1, 1)).toBeTruthy();
        expect(!isDeepEqual(1, 2)).toBeTruthy();
        expect(!isDeepEqual(1, true)).toBeTruthy();
        expect(!isDeepEqual(0, false)).toBeTruthy();
        expect(!isDeepEqual(1, "1")).toBeTruthy();
        expect(!isDeepEqual(true, "true")).toBeTruthy();
        expect(isDeepEqual(null, null)).toBeTruthy();
        expect(!isDeepEqual(0, null)).toBeTruthy();
        expect(!isDeepEqual(null, 0)).toBeTruthy();
        expect(!isDeepEqual(null, undefined)).toBeTruthy();
        expect(!isDeepEqual(undefined, null)).toBeTruthy();
        expect(!isDeepEqual(undefined, 0)).toBeTruthy();
        expect(!isDeepEqual(undefined, "")).toBeTruthy();
    });

    it("Equality of arrays", () => {
        expect(isDeepEqual([1], [1])).toBeTruthy();
        expect(!isDeepEqual([1], [2])).toBeTruthy();
        expect(!isDeepEqual([1], [1, 2])).toBeTruthy();
        expect(isDeepEqual([1, 2], [1, 2])).toBeTruthy();
        expect(!isDeepEqual(["", ""], [0, 0])).toBeTruthy();
        expect(!isDeepEqual(["", ""], [0, ""])).toBeTruthy();
        expect(!isDeepEqual(["", true], ["", false])).toBeTruthy();
        expect(isDeepEqual(["", ""], ["", ""])).toBeTruthy();
    });

    it("Equality of objects", () => {
        expect(isDeepEqual({ a: 1 }, { a: 1 })).toBeTruthy();
        expect(!isDeepEqual({ a: 1 }, { a: 2 })).toBeTruthy();
        expect(!isDeepEqual({ a: 1 }, { a: 1, b: 1 })).toBeTruthy();
        expect(!isDeepEqual({ a: 1 }, { b: 1 })).toBeTruthy();
        expect(!isDeepEqual({ a: 1 }, {})).toBeTruthy();
        expect(!isDeepEqual({}, { a: 1 })).toBeTruthy();
        expect(!isDeepEqual({ a: 1 }, { a: 1, b: 1 })).toBeTruthy();
        expect(isDeepEqual({}, {})).toBeTruthy();
        expect(isDeepEqual({ a: {}, b: {} }, { a: {}, b: {} })).toBeTruthy();
        expect(!isDeepEqual({ a: {}, b: {} }, { a: {}, b: { c: 1 } })).toBeTruthy();
        expect(!isDeepEqual({ a: {}, b: { c: 1 } }, { a: {}, b: {} })).toBeTruthy();
    });

    it("Equality of special Matter objects", () => {
        expect(isDeepEqual(VendorId(0), VendorId(0))).toBeTruthy();
        expect(!isDeepEqual(VendorId(0), VendorId(1))).toBeTruthy();

        expect(isDeepEqual(ByteArray.fromHex("00"), ByteArray.fromHex("00"))).toBeTruthy();
        expect(!isDeepEqual(ByteArray.fromHex("00"), ByteArray.fromHex("01"))).toBeTruthy();
    });
});
