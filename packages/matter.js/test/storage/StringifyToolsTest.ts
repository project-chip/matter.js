/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

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

            expect(json).toBe(
                `{"aNumber":1,"aNumberString":"2","aString":"hello","aBoolean":true,"aNull":null,"anObject":{"a":1,"b":2,"c":3},"anNumberArray":[1,2,3],"anStringArray":["a","b","c"],"anObjectArray":[{"a":1},{"b":2},{"c":3}]}`,
            );

            const decodedObj = fromJson(json);

            expect(decodedObj).toEqual(obj);
        });

        it("encode/decode BigInt", () => {
            const obj = BigInt("12345678901234567890");

            const json = toJson(obj);

            expect(json).toBe(`"{\\"__object__\\":\\"BigInt\\",\\"__value__\\":\\"12345678901234567890\\"}"`);

            const decodedObj = fromJson(json);

            expect(decodedObj).toEqual(obj);
            expect(typeof decodedObj).toBe("bigint");
        });

        it("encode/decode Uint8Array", () => {
            const obj = new Uint8Array([1, 2, 3]);

            const json = toJson(obj);

            expect(json).toBe(`"{\\"__object__\\":\\"Uint8Array\\",\\"__value__\\":\\"010203\\"}"`);

            const decodedObj = fromJson(json);

            expect(decodedObj).toEqual(obj);
            expect(decodedObj instanceof Uint8Array).toBeTruthy();
        });

        it("encode/decode Node.js Buffer", () => {
            if (typeof Buffer === "undefined") {
                //Buffers do not exist in the browser
                return;
            }
            const obj = Buffer.from([1, 2, 3]);

            const json = toJson(obj);

            expect(json).toBe(`"{\\"__object__\\":\\"Uint8Array\\",\\"__value__\\":\\"010203\\"}"`);

            const decodedObj = fromJson(json);

            expect(decodedObj instanceof Uint8Array).toBeTruthy();
        });

        it("encode/decode Map", () => {
            const obj = new Map([
                ["a", 1],
                ["b", 2],
                ["c", 3],
            ]);

            const json = toJson(obj);

            expect(json).toBe(
                `"{\\"__object__\\":\\"Map\\",\\"__value__\\":\\"[[\\\\\\"a\\\\\\",1],[\\\\\\"b\\\\\\",2],[\\\\\\"c\\\\\\",3]]\\"}"`,
            );

            const decodedObj = fromJson(json);

            expect(decodedObj).toEqual(obj);
            expect(decodedObj instanceof Map).toBeTruthy();
            expect((decodedObj as Map<any, any>).get("a")).toBe(1);
        });

        it("encode/decide Map of Maps", () => {
            const obj = new Map([
                [1, new Map([["a", 1]])],
                [2, new Map([["b", 2]])],
            ]);

            const json = toJson(obj);

            expect(json).toBe(
                `"{\\"__object__\\":\\"Map\\",\\"__value__\\":\\"[[1,\\\\\\"{\\\\\\\\\\\\\\"__object__\\\\\\\\\\\\\\":\\\\\\\\\\\\\\"Map\\\\\\\\\\\\\\",\\\\\\\\\\\\\\"__value__\\\\\\\\\\\\\\":\\\\\\\\\\\\\\"[[\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"a\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\",1]]\\\\\\\\\\\\\\"}\\\\\\"],[2,\\\\\\"{\\\\\\\\\\\\\\"__object__\\\\\\\\\\\\\\":\\\\\\\\\\\\\\"Map\\\\\\\\\\\\\\",\\\\\\\\\\\\\\"__value__\\\\\\\\\\\\\\":\\\\\\\\\\\\\\"[[\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"b\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\",2]]\\\\\\\\\\\\\\"}\\\\\\"]]\\"}"`,
            );

            const decodedObj = fromJson(json);

            expect(decodedObj).toEqual(obj);

            expect(decodedObj).toBeInstanceOf(Map);
            if (!(decodedObj instanceof Map)) return;

            const map1 = decodedObj?.get(1);
            const map2 = decodedObj?.get(2);
            expect(map1).toBeInstanceOf(Map);
            expect(map2).toBeInstanceOf(Map);
            if (!(map1 instanceof Map) || !(map2 instanceof Map)) return;

            expect(map1.get("a")).toBe(1);
            expect(map2.get("b")).toBe(2);
        });

        it("encode/decode object with matter.js datatypes", () => {
            const obj = {
                attribute: AttributeId(1),
                cluster: ClusterId(2),
                command: CommandId(3),
                endpoint: EndpointNumber(4),
                event: EventId(5),
                fabric: FabricId(BigInt(6)),
                fabricIndex: FabricIndex(7),
                group: GroupId(8),
                node: NodeId(BigInt(9)),
                vendor: VendorId(11),
            };

            const json = toJson(obj);

            expect(json).toBe(
                `{"attribute":1,"cluster":2,"command":3,"endpoint":4,"event":5,"fabric":"{\\"__object__\\":\\"BigInt\\",\\"__value__\\":\\"6\\"}","fabricIndex":7,"group":8,"node":"{\\"__object__\\":\\"BigInt\\",\\"__value__\\":\\"9\\"}","vendor":11}`,
            );

            const decodedObj = fromJson(json);

            expect(decodedObj).toEqual(obj);
        });
    });
});
