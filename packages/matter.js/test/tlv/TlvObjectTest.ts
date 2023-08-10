/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { TlvArray } from "../../src/tlv/TlvArray.js";
import { TlvNullable } from "../../src/tlv/TlvNullable.js";
import { TlvUInt8 } from "../../src/tlv/TlvNumber.js";
import { TlvField, TlvObject, TlvOptionalField } from "../../src/tlv/TlvObject.js";
import { TypeFromSchema } from "../../src/tlv/TlvSchema.js";
import { TlvString } from "../../src/tlv/TlvString.js";
import { ByteArray } from "../../src/util/ByteArray.js";

const schema = TlvObject({
    /** Mandatory field jsdoc */
    mandatoryField: TlvField(1, TlvUInt8),

    /** Optional field jsdoc */
    optionalField: TlvOptionalField(2, TlvString),
});
const schemaUnknownField1 = TlvObject({
    /** Optional field jsdoc */
    optionalField: TlvOptionalField(2, TlvString),
});

type CodecVector<I, E> = { [valueDescription: string]: { encoded: E; decoded: I } };

const codecVector: CodecVector<TypeFromSchema<typeof schema>, string> = {
    "an object with all fields": {
        decoded: { mandatoryField: 1, optionalField: "test" },
        encoded: "152401012c02047465737418",
    },
    "an object without optional fields": { decoded: { mandatoryField: 1 }, encoded: "1524010118" },
};

describe("TlvObject", () => {
    describe("encode", () => {
        for (const valueDescription in codecVector) {
            const { encoded, decoded } = codecVector[valueDescription];
            it(`encodes ${valueDescription}`, () => {
                expect(schema.encode(decoded).toHex()).toBe(encoded);
            });
        }
    });

    describe("decode", () => {
        for (const valueDescription in codecVector) {
            const { encoded, decoded } = codecVector[valueDescription];
            it(`decodes ${valueDescription}`, () => {
                expect(schema.decode(ByteArray.fromHex(encoded))).toEqual(decoded);
            });
        }

        it("ignores unknown fields", () => {
            const result = schemaUnknownField1.decode(schema.encode({ mandatoryField: 1, optionalField: "test" }));

            expect(result).toEqual({ optionalField: "test" });
        });
    });

    describe("encodeTlv with decodeTlv", () => {
        for (const valueDescription in codecVector) {
            const { decoded } = codecVector[valueDescription];
            it(`encode/decodes ${valueDescription}`, () => {
                const tlvEncoded = schema.encodeTlv(decoded);
                const tlvDecoded = schema.decodeTlv(tlvEncoded);
                expect(tlvDecoded).toEqual(decoded);
            });
        }
    });

    describe("inject Field value", () => {
        it("injects field value on missing value", () => {
            const result = schema.injectField({ mandatoryField: 1 }, 2, "test", () => true);
            expect(result).toEqual({ mandatoryField: 1, optionalField: "test" });
        });

        it("injects field value on existing", () => {
            const result = schema.injectField({ mandatoryField: 1, optionalField: "original" }, 2, "test", () => true);
            expect(result).toEqual({ mandatoryField: 1, optionalField: "test" });
        });

        it("do not inject field value when not wanted", () => {
            const result = schema.injectField({ mandatoryField: 1 }, 2, "test", () => false);
            expect(result).toEqual({ mandatoryField: 1 });
        });

        it("do not inject field value when existing", () => {
            const result = schema.injectField({ mandatoryField: 1, optionalField: "original" }, 2, "test", () => false);
            expect(result).toEqual({ mandatoryField: 1, optionalField: "original" });
        });

        it("throw error on invalid field value", () => {
            expect(() => schema.injectField({ mandatoryField: 1 }, 2, 2, () => true)).toThrow(
                new Error("Expected string, got number."),
            );
        });

        it("injects field value also on nullable array schema", () => {
            const schema = TlvNullable(
                TlvArray(
                    TlvObject({
                        /** Mandatory field jsdoc */
                        mandatoryField: TlvField(1, TlvUInt8),

                        /** Optional field jsdoc */
                        optionalField: TlvOptionalField(2, TlvString),
                    }),
                ),
            );

            const result = schema.injectField([{ mandatoryField: 1 }, { mandatoryField: 2 }], 2, "test", () => true);
            expect(result).toEqual([
                { mandatoryField: 1, optionalField: "test" },
                { mandatoryField: 2, optionalField: "test" },
            ]);
        });
    });

    describe("remove Field value", () => {
        it("remove field value on missing value", () => {
            const result = schema.removeField({ mandatoryField: 1, optionalField: "test" }, 2, () => true);
            expect(result).toEqual({ mandatoryField: 1 });
        });

        it("do not change field value when missing", () => {
            const result = schema.removeField({ mandatoryField: 1 }, 2, () => true);
            expect(result).toEqual({ mandatoryField: 1 });
        });

        it("do not remove field value when existing but unwanted", () => {
            const result = schema.removeField({ mandatoryField: 1, optionalField: "original" }, 2, () => false);
            expect(result).toEqual({ mandatoryField: 1, optionalField: "original" });
        });

        it("removes field value also on nullable array schema", () => {
            const schema = TlvNullable(
                TlvArray(
                    TlvObject({
                        /** Mandatory field jsdoc */
                        mandatoryField: TlvField(1, TlvUInt8),

                        /** Optional field jsdoc */
                        optionalField: TlvOptionalField(2, TlvString),
                    }),
                ),
            );

            const result = schema.removeField(
                [
                    { mandatoryField: 1, optionalField: "test" },
                    { mandatoryField: 2, optionalField: "test" },
                ],
                2,
                () => true,
            );
            expect(result).toEqual([{ mandatoryField: 1 }, { mandatoryField: 2 }]);
        });
    });
});
