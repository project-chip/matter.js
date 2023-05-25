/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as assert from "assert";
import { isDeepEqual } from "../../src/util/DeepEqual.js";
import { VendorId } from "../../src/datatype/VendorId.js";
import { ByteArray } from "../../src/util/ByteArray.js";

describe("DeepEqual", () => {

    it("Equality of primitives", () => {
        assert.ok(isDeepEqual(1, 1));
        assert.ok(!isDeepEqual(1, 2));
        assert.ok(!isDeepEqual(1, true));
        assert.ok(!isDeepEqual(0, false));
        assert.ok(!isDeepEqual(1, "1"));
        assert.ok(!isDeepEqual(true, "true"));
        assert.ok(isDeepEqual(null, null));
        assert.ok(!isDeepEqual(0, null));
        assert.ok(!isDeepEqual(null, 0));
        assert.ok(!isDeepEqual(null, undefined));
        assert.ok(!isDeepEqual(undefined, null));
        assert.ok(!isDeepEqual(undefined, 0));
        assert.ok(!isDeepEqual(undefined, ""));
    });

    it("Equality of arrays", () => {
        assert.ok(isDeepEqual([1], [1]));
        assert.ok(!isDeepEqual([1], [2]));
        assert.ok(!isDeepEqual([1], [1, 2]));
        assert.ok(isDeepEqual([1, 2], [1, 2]));
        assert.ok(!isDeepEqual(["", ""], [0, 0]));
        assert.ok(!isDeepEqual(["", ""], [0, ""]));
        assert.ok(!isDeepEqual(["", true], ["", false]));
        assert.ok(isDeepEqual(["", ""], ["", ""]));
    });

    it("Equality of objects", () => {
        assert.ok(isDeepEqual({ a: 1 }, { a: 1 }));
        assert.ok(!isDeepEqual({ a: 1 }, { a: 2 }));
        assert.ok(!isDeepEqual({ a: 1 }, { a: 1, b: 1 }));
        assert.ok(!isDeepEqual({ a: 1 }, { b: 1 }));
        assert.ok(!isDeepEqual({ a: 1 }, {}));
        assert.ok(!isDeepEqual({}, { a: 1 }));
        assert.ok(!isDeepEqual({ a: 1 }, { a: 1, b: 1 }));
        assert.ok(isDeepEqual({}, {}));
        assert.ok(isDeepEqual({ a: {}, b: {} }, { a: {}, b: {} }));
        assert.ok(!isDeepEqual({ a: {}, b: {} }, { a: {}, b: { c: 1 } }));
        assert.ok(!isDeepEqual({ a: {}, b: { c: 1 } }, { a: {}, b: {} }));
    });

    it("Equality of special Matter objects", () => {
        assert.ok(isDeepEqual(new VendorId(0), new VendorId(0)));
        assert.ok(!isDeepEqual(new VendorId(0), new VendorId(1)));

        assert.ok(isDeepEqual(ByteArray.fromHex("00"), ByteArray.fromHex("00")));
        assert.ok(!isDeepEqual(ByteArray.fromHex("00"), ByteArray.fromHex("01")));
    });
});
