/**
 * @license
 * Copyright 2022 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { TlvObject, TlvField, TlvOptionalField } from "../../src/tlv/TlvObject.js";
import { TypeFromSchema } from "../../src/tlv/TlvSchema.js";
import { TlvString } from "../../src/tlv/TlvString.js";
import { TlvUInt8 } from "../../src/tlv/TlvNumber.js";
import { ByteArray } from "../../src/util/ByteArray.js";
import { Schema } from "../../src/schema/Schema.js";

const schema = TlvObject({
    /** Mandatory field jsdoc */
    mandatoryField: TlvField(1, TlvUInt8),

    /** Optional field jsdoc */
    optionalField: TlvOptionalField(2, TlvString()),
});

type CodecVector<I, E> = {[valueDescription: string]: { encoded: E, decoded: I }};

const codecVector: CodecVector<TypeFromSchema<typeof schema>, string> = {
    "an object with all fields": { decoded: { mandatoryField: 1, optionalField: "test" }, encoded: "152401012c02047465737418" },
    "an object without optional fields": { decoded: { mandatoryField: 1 }, encoded: "1524010118" },
};

describe("TlvObject", () => {

    describe("encode", () => {
        for (const valueDescription in codecVector) {
            const { encoded, decoded } = codecVector[valueDescription];
            it(`encodes ${valueDescription}`, () => {
                expect(schema.encode(decoded).toHex())
                    .toBe(encoded);
            });
        }
    });

    describe("decode", () => {
        for (const valueDescription in codecVector) {
            const { encoded, decoded } = codecVector[valueDescription];
            it(`decodes ${valueDescription}`, () => {
                expect(schema.decode(ByteArray.fromHex(encoded)))
                    .toEqual(decoded);
            });
        }
    });
});
