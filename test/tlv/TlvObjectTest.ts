/**
 * @license
 * Copyright 2022 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { TlvObject, TlvField, TlvOptionalField } from "../../src/tlv/TlvObject.js";
import { TlvString } from "../../src/tlv/TlvString.js";
import { TlvUInt, TlvUInt8 } from "../../src/tlv/TlvUInt.js";
import { ByteArray } from "../../src/util/ByteArray.js";

describe("TlvObject", () => {
    const schema = TlvObject({
        /** Mandatory field jsdoc */
        mandatory: TlvField(1, TlvUInt8),

        /** Optional field jsdoc */
        optional: TlvOptionalField(2, TlvString()),
    });

    describe("encode", () => {
        it("encodes an object with all fields", () => {
            const result = schema.encode({ mandatory: 1, optional: "test" });

            expect(result.toHex()).toBe("152401012c02047465737418");
        });

        it("encodes an object without optional fields", () => {
            const result = schema.encode({ mandatory: 1 });

            expect(result.toHex()).toBe("1524010118");
        });
    });

    describe("decode", () => {
        it("decodes an object with all fields", () => {
            const result = schema.decode(ByteArray.fromHex("152401012c02047465737418"));

            expect(result).toEqual({ mandatory: 1, optional: "test" });
        });

        it("decodes an object without optional fields", () => {
            const result = schema.decode(ByteArray.fromHex("1524010118"));

            expect(result).toEqual({ mandatory: 1 });
        });
    });
});
