/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as assert from "assert";
import { AttributeId } from "../../src/datatype/AttributeId.js";
import { ClusterId } from "../../src/datatype/ClusterId.js";
import { CommandId } from "../../src/datatype/CommandId.js";
import { EndpointNumber } from "../../src/datatype/EndpointNumber.js";
import { EventId } from "../../src/datatype/EventId.js";
import { FabricId } from "../../src/datatype/FabricId.js";
import { FabricIndex } from "../../src/datatype/FabricIndex.js";
import { GroupId } from "../../src/datatype/GroupId.js";
import { NodeId } from "../../src/datatype/NodeId.js";
import { VendorId } from "../../src/datatype/VendorId.js";
import { fromJson, toJson } from "../../src/storage/StringifyTools.js";

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

        it("encode/decode Node.js Buffer", () => {
            if (typeof Buffer === "undefined") {
                //Buffers do not exist in the browser
                return;
            }
            const obj = Buffer.from([1, 2, 3]);

            const json = toJson(obj);

            assert.equal(json, `"{\\"__object__\\":\\"Uint8Array\\",\\"__value__\\":\\"010203\\"}"`);

            const decodedObj = fromJson(json);

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

        it("encode/decode object with matter.js datatypes", () => {
            const obj = {
                attribute: new AttributeId(1),
                cluster: new ClusterId(2),
                command: new CommandId(3),
                endpoint: new EndpointNumber(4),
                event: new EventId(5),
                fabric: new FabricId(BigInt(6)),
                fabricIndex: new FabricIndex(7),
                group: new GroupId(8),
                node: new NodeId(BigInt(9)),
                vendor: new VendorId(11)
            };

            const json = toJson(obj);

            assert.equal(json, `{"attribute":"{\\"__object__\\":\\"AttributeId\\",\\"__value__\\":1}","cluster":"{\\"__object__\\":\\"ClusterId\\",\\"__value__\\":2}","command":"{\\"__object__\\":\\"CommandId\\",\\"__value__\\":3}","endpoint":"{\\"__object__\\":\\"EndpointNumber\\",\\"__value__\\":4}","event":"{\\"__object__\\":\\"EventId\\",\\"__value__\\":5}","fabric":"{\\"__object__\\":\\"FabricId\\",\\"__value__\\":\\"6\\"}","fabricIndex":"{\\"__object__\\":\\"FabricIndex\\",\\"__value__\\":7}","group":"{\\"__object__\\":\\"GroupId\\",\\"__value__\\":8}","node":"{\\"__object__\\":\\"NodeId\\",\\"__value__\\":\\"9\\"}","vendor":"{\\"__object__\\":\\"VendorId\\",\\"__value__\\":11}"}`);

            const decodedObj = fromJson(json);

            assert.deepEqual(decodedObj, obj);
        });
    });
});
