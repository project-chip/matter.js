/**
 * Copyright 2022 Project CHIP Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { ByteArray } from "../../src/util/ByteArray.js";
import { TlvObject, TlvField } from "../../src/tlv/TlvObject.js";
import { TlvSchema } from "../../src/tlv/TlvSchema.js";
import { TlvString } from "../../src/tlv/TlvString.js";
import { TlvBoolean } from "../../src/tlv/TlvBoolean.js";
import { TlvArray } from "../../src/tlv/TlvArray.js";
import { 
    TlvUInt8, TlvUInt16, TlvUInt32, TlvUInt64, 
    TlvInt8, TlvInt16, TlvInt32, TlvInt64,
    TlvFloat, TlvDouble 
} from "../../src/tlv/TlvNumber.js";

type TestEntry<T> = {
    name: string,
    schema: TlvSchema<T>,
    tlv: string,
    jsObj: T
}

const theTestTlvVector = [
    {
        name: "TlvObject: TlvUInt16 and TlvBoolean fields",
        schema: TlvObject({
            field2: TlvField(2, TlvUInt16),
            field3: TlvField(3, TlvUInt16),
            field4: TlvField(4, TlvBoolean),
        }),
        tlv: "15240201240300280418",
        jsObj: { field2: 1, field3: 0, field4: false },
    },
    {
        name: "TlvObject: TlvString fields",
        schema: TlvObject({
            field1: TlvField(1, TlvString),
            field2: TlvField(2, TlvString),
        }),
        tlv: "152c010648656c6c6f212c02174865792074686572652c20686f772061726520796f753f18",
        jsObj: { field1: "Hello!", field2: "Hey there, how are you?" },
    },
    {
        name: "TlvObject: TlvArray field",
        schema: TlvObject({
            field1: TlvField(1, TlvArray(TlvString)),
        }),
        tlv: "1536010c01610c01620c01630c037a7a7a1818",
        jsObj: { field1: ["a", "b", "c", "zzz"] },
    },
    {
        name: "TlvObject: TlvNumber fields",
        schema: TlvObject({
            fieldFloat: TlvField(1, TlvFloat),
            fieldDouble: TlvField(2, TlvDouble),
            fieldInt8: TlvField(3, TlvInt8),
            fieldInt16: TlvField(4, TlvInt16),
            fieldInt32: TlvField(5, TlvInt32),
            fieldInt64: TlvField(6, TlvInt64),
            fieldUInt8: TlvField(7, TlvUInt8),
            fieldUInt16: TlvField(8, TlvUInt16),
            fieldUInt32: TlvField(9, TlvUInt32),
            fieldUInt64: TlvField(10, TlvUInt64),
        }),
        tlv: "152a010892cc452b022fdd24064192b9402003ff2004ff2005ff2006ff240701240801240901240a0118",
        jsObj: { 
            fieldFloat: 6546.25390625,
            fieldDouble: 6546.254,
            fieldInt8: -1,
            fieldInt16: -1,
            fieldInt32: -1,
            fieldInt64: -1,
            fieldUInt8: 1,
            fieldUInt16: 1,
            fieldUInt32: 1,
            fieldUInt64: 1,
        },
    },
]

function testTlvSchemaEncode(testEntry:TestEntry<any>)
{
    const { name, schema, tlv, jsObj } = testEntry
    const testName = "TlvSchema.encode " + name

    it(testName, () => {
        const tlvByteArray = schema.encode(jsObj)
        const tlvHex = tlvByteArray.toHex()
        expect(tlvHex).toBe(tlv)
    })

}

function testTlvSchemaDecode(testEntry:TestEntry<any>)
{
    const { name, schema, tlv, jsObj } = testEntry
    const testName = "TlvSchema.decode " + name

    it(testName, () => {
        const tlvBuffer = ByteArray.fromHex(tlv)
        const decoded = schema.decode(tlvBuffer)
        expect(decoded).toEqual(jsObj)
    })
}

describe("Test TlvSchema", () => {
    theTestTlvVector.forEach(testEntry => {
        testTlvSchemaEncode(testEntry)
        testTlvSchemaDecode(testEntry)
    })
})
