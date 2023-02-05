/**
 * @license
 * Copyright 2022 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { TlvObject, TlvField, TlvOptionalField } from "../../src/tlv/TlvObject.js";
import { TypeFromSchema } from "../../src/tlv/TlvSchema.js";
import { TlvByteString, TlvString } from "../../src/tlv/TlvString.js";
import { TlvUInt8 } from "../../src/tlv/TlvNumber.js";
import { ByteArray } from "../../src/util/ByteArray.js";
import { TlvArray } from "../../src/tlv/TlvArray";
import { TlvBoolean } from "../../src/tlv/TlvBoolean";
import { TlvNullable } from "../../src/tlv/TlvNullable";

const schema = TlvObject({
    /** Mandatory field jsdoc */
    arrayField: TlvField(1,
        TlvArray(
            TlvObject({
                /** Mandatory array field jsdoc */
                mandatoryNumber: TlvField(1, TlvUInt8),

                /** Optional array field jsdoc */
                optionalByteString: TlvOptionalField(2, TlvByteString.bound({ minLength: 3, maxLength: 3 })),
            }), { minLength: 1, maxLength: 2 }
        )
    ),

    /** Optional field jsdoc */
    optionalString: TlvOptionalField(2, TlvString),

    /** Nullable field jsdoc */
    nullableBoolean: TlvField(3, TlvNullable(TlvBoolean)),
});

type CodecVector<I, E> = {[valueDescription: string]: { encoded: E, decoded: I }};
type CodecErrorVector<I> = {[valueDescription: string]: { structure: I, expectedError?: string }};

const codecVector: CodecVector<TypeFromSchema<typeof schema>, string> = {
    "an object with all fields": {
        decoded: {
            arrayField: [
                { mandatoryNumber: 1, optionalByteString: ByteArray.fromHex("000000") },
                { mandatoryNumber: 2, optionalByteString: ByteArray.fromHex("999999") },
            ],
            optionalString: "test",
            nullableBoolean: true,
        },
        encoded: "15360115240101300203000000181524010230020399999918182c020474657374290318"
    },
    "an object with minimum fields": {
        decoded: {
            arrayField: [
                { mandatoryNumber: 1 },
            ],
            nullableBoolean: null,
        },
        encoded: "153601152401011818340318"
    },
};

const codecErrorVector: CodecErrorVector<TypeFromSchema<typeof schema>> = {
    "an object with no fields": {
        // @ts-ignore - Disable TS Compiler checks to proper test validation logic
        structure: {},
        expectedError: "Missing mandatory field arrayField"
    },
    "an object with empty array": {
        // @ts-ignore - Disable TS Compiler checks to proper test validation logic
        structure: {
            arrayField: [
            ],
        },
        expectedError: "Array is too short: 0, min 1."
    },
    "an object with missing nullable value": {
        // @ts-ignore - Disable TS Compiler checks to proper test validation logic
        structure: {
            arrayField: [
                { mandatoryNumber: 1 },
            ],
        },
        expectedError: "Missing mandatory field nullableBoolean"
    },
    "an object with invalid datatype in array": {
        structure: {
            arrayField: [
                // @ts-ignore - Disable TS Compiler checks to proper test validation logic
                { mandatoryNumber: "test" },
            ],
        },
        expectedError: "Expected number, got string."
    },
    "an object with invalid datatype in array #2": {
        structure: {
            arrayField: [
                {
                    // @ts-ignore - Disable TS Compiler checks to proper test validation logic
                    mandatoryNumber: [
                        { mandatoryNumber: 1 },
                    ]
                },
            ],
        },
        expectedError: "Expected number, got object."
    },
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

    describe("errors", () => {
        for (const valueDescription in codecErrorVector) {
            const { structure, expectedError } = codecErrorVector[valueDescription];
            it(`checks ${valueDescription}`, () => {
                try {
                    schema.validate(structure);
                } catch (error) {
                    expect((error as Error).message).toBe(expectedError || '');
                }
            });
        }
    });

});
