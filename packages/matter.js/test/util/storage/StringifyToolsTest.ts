/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as assert from "assert";
import { fromJson, toJson } from "../../../src/storage/StringifyTools.js";

describe("JsonConverter", () => {

    describe("encode/decode", () => {
        it("encode/decode object with primitives", () => {
            const obj = {
                aNumber: 1,
                aNumberString: "2",
                aString: "hello",
                aBoolean: true,
                aNull: null,
                anObject: { a: 1, b: 2, c: 3 },
                anNumberArray: [1, 2, 3],
                anStringArray: ["a", "b", "c"],
                anObjectArray: [{ a: 1 }, { b: 2 }, { c: 3 }],
            };

            const json = toJson(obj);

            assert.equal(json, `{"aNumber":1,"aNumberString":"2","aString":"hello","aBoolean":true,"aNull":null,"anObject":{"a":1,"b":2,"c":3},"anNumberArray":[1,2,3],"anStringArray":["a","b","c"],"anObjectArray":[{"a":1},{"b":2},{"c":3}]}`);

            const decodedObj = fromJson(json);

            assert.deepEqual(decodedObj, obj);
        });

        it("encode/decode BigInt", () => {
            const obj = BigInt("12345678901234567890");

            const json = toJson(obj);

            assert.equal(json, `"{\\"__object__\\":\\"BigInt\\",\\"__value__\\":\\"12345678901234567890\\"}"`);

            const decodedObj = fromJson(json);

            assert.deepEqual(decodedObj, obj);
            assert.equal(typeof decodedObj, "bigint");
        });

        it("encode/decode Uint8Array", () => {
            const obj = new Uint8Array([1, 2, 3]);

            const json = toJson(obj);

            assert.equal(json, `"{\\"__object__\\":\\"Uint8Array\\",\\"__value__\\":\\"010203\\"}"`);

            const decodedObj = fromJson(json);

            assert.deepEqual(decodedObj, obj);
            assert.ok(decodedObj instanceof Uint8Array);
        });

        it("encode/decode Map", () => {
            const obj = new Map([["a", 1], ["b", 2], ["c", 3]]);

            const json = toJson(obj);

            assert.equal(json, `"{\\"__object__\\":\\"Map\\",\\"__value__\\":\\"[[\\\\\\"a\\\\\\",1],[\\\\\\"b\\\\\\",2],[\\\\\\"c\\\\\\",3]]\\"}"`);

            const decodedObj = fromJson(json);

            assert.deepEqual(decodedObj, obj);
            assert.ok(decodedObj instanceof Map);
            assert.equal(decodedObj.get("a"), 1);
        });

        it("encode/decide Map of Maps", () => {
            const obj = new Map([[1, new Map([["a", 1]])], [2, new Map([["b", 2]])]]);

            const json = toJson(obj);

            assert.equal(json, `"{\\"__object__\\":\\"Map\\",\\"__value__\\":\\"[[1,\\\\\\"{\\\\\\\\\\\\\\"__object__\\\\\\\\\\\\\\":\\\\\\\\\\\\\\"Map\\\\\\\\\\\\\\",\\\\\\\\\\\\\\"__value__\\\\\\\\\\\\\\":\\\\\\\\\\\\\\"[[\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"a\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\",1]]\\\\\\\\\\\\\\"}\\\\\\"],[2,\\\\\\"{\\\\\\\\\\\\\\"__object__\\\\\\\\\\\\\\":\\\\\\\\\\\\\\"Map\\\\\\\\\\\\\\",\\\\\\\\\\\\\\"__value__\\\\\\\\\\\\\\":\\\\\\\\\\\\\\"[[\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"b\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\",2]]\\\\\\\\\\\\\\"}\\\\\\"]]\\"}"`);

            const decodedObj = fromJson(json);

            assert.deepEqual(decodedObj, obj);

            assert.ok(decodedObj instanceof Map);
            const map1 = decodedObj.get(1);
            const map2 = decodedObj.get(2);
            assert.ok(map1 instanceof Map);
            assert.equal(map1.get("a"), 1);
            assert.ok(map2 instanceof Map);
            assert.equal(map2.get("b"), 2);
        });
    });
});
