/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { TlvArray } from "../../src/tlv/TlvArray.js";
import { TlvString } from "../../src/tlv/TlvString.js";
import { ByteArray } from "../../src/util/ByteArray.js";

type TestVector<I, E> = { [testName: string]: { input: I, out: E } };

const validateTestVector: TestVector<string[], boolean> = {
    "validates an array with an acceptable length": { input: ["a", "b"], out: false },
    "throws an error if the array is too short": { input: ["a"], out: true },
    "throws an error if the array is too long": { input: ["a", "b", "c", "d", "e"], out: true },
};

describe("TlvArray", () => {
    const schema = TlvArray(TlvString);

    describe("encode", () => {
        it("encodes an array", () => {
            const result = schema.encode(["a", "b", "c"]);

            expect(result.toHex()).toBe("160c01610c01620c016318");
        });
    });

    describe("decode", () => {
        it("decodes an array", () => {
            const result = schema.decode(ByteArray.fromHex("160c01610c01620c016318"));

            expect(result).toEqual(["a", "b", "c"]);
        });
    });

    describe("validate", () => {
        const schema = TlvArray(TlvString, { minLength: 2, maxLength: 4 });

        for (const testName in validateTestVector) {
            const { input, out: throwException } = validateTestVector[testName];
            it(testName, () => {
                const test = () => schema.validate(input);
                if (throwException) {
                    expect(test).toThrow();
                } else {
                    expect(test).not.toThrow();
                }
            });
        }
    });
});
