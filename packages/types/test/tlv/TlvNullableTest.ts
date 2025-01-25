/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Bytes } from "#general";
import { TlvAny } from "#tlv/TlvAny.js";
import { TlvArray } from "#tlv/TlvArray.js";
import { TlvNullable } from "#tlv/TlvNullable.js";
import { TlvString } from "#tlv/TlvString.js";

type CodecVector<I, E> = { [valueDescription: string]: { encoded: E; decoded: I } };

const codecVector: CodecVector<string | null, string> = {
    "a non-null value": { decoded: "a", encoded: "0c0161" },
    "a null value": { decoded: null, encoded: "14" },
};

describe("TlvNullable", () => {
    const schema = TlvNullable(TlvString);

    describe("encode", () => {
        for (const valueDescription in codecVector) {
            const { encoded, decoded } = codecVector[valueDescription];
            it(`encodes ${valueDescription}`, () => {
                expect(Bytes.toHex(schema.encode(decoded))).equal(encoded);
            });
        }
    });

    describe("calculate byte length", () => {
        for (const valueDescription in codecVector) {
            const { encoded, decoded } = codecVector[valueDescription];
            it(`calculate byte length ${valueDescription}`, () => {
                const tlvEncoded = schema.encodeTlv(decoded);
                expect(TlvAny.getEncodedByteLength(tlvEncoded)).equal(encoded.length / 2);
            });
        }
    });

    describe("decode", () => {
        for (const valueDescription in codecVector) {
            const { encoded, decoded } = codecVector[valueDescription];
            it(`decodes ${valueDescription}`, () => {
                expect(schema.decode(Bytes.fromHex(encoded))).equal(decoded);
            });
        }
    });

    describe("decode nullable types with constraints but zero length as null", () => {
        it("decodes null correctly without constraint", () => {
            const encoded = schema.encode(null);
            const schemaWithConstraint = TlvNullable(TlvString.bound({ minLength: 0 }));
            expect(schemaWithConstraint.decode(encoded)).equal(null);
        });

        it("decodes null correctly with constraint", () => {
            const encoded = schema.encode(null);
            const schemaWithConstraint = TlvNullable(TlvString.bound({ minLength: 1 }));
            expect(schemaWithConstraint.decode(encoded)).equal(null);
        });

        it("decodes zero length string with minlength 0 as null", () => {
            const encoded = schema.encode("");
            const schemaWithConstraint = TlvNullable(TlvString.bound({ minLength: 0 }));
            expect(schemaWithConstraint.decode(encoded)).equal(null);
        });

        it("decodes zero length string with constraint as null", () => {
            const encoded = schema.encode("");
            const schemaWithConstraint = TlvNullable(TlvString.bound({ minLength: 1 }));
            expect(schemaWithConstraint.decode(encoded)).equal(null);
        });

        it("decodes zero length array with minlength 0 as nully", () => {
            const encoded = TlvNullable(TlvArray(TlvString)).encode([]);
            const schemaWithConstraint = TlvNullable(TlvArray(TlvString, { minLength: 0 }));
            expect(schemaWithConstraint.decode(encoded)).deep.equal(null);
        });

        it("decodes zero length string with constraint as null", () => {
            const encoded = TlvNullable(TlvArray(TlvString)).encode([]);
            const schemaWithConstraint = TlvNullable(TlvArray(TlvString, { minLength: 1 }));
            expect(schemaWithConstraint.decode(encoded)).equal(null);
        });
    });
});
