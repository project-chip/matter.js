/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ValidationError } from "../../src/common/MatterError.js";
import { TlvVoid } from "../../src/tlv/TlvVoid.js";

describe("TlvVoid", () => {
    describe("encode", () => {
        it("encodes undefined", () => {
            expect(TlvVoid.encode(undefined).toHex()).toBe("");
        });
    });

    describe("validation", () => {
        it("throws an error if the value is.toBeDefined()", () => {
            expect(() => TlvVoid.validate("a" as any)).toThrow(new ValidationError("Expected void, got string."));
        });

        it("does not throw an error if the value is undefined", () => {
            expect(TlvVoid.validate(undefined)).toBe(undefined);
        });
    });
});
