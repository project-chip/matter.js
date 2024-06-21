/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ByteArray } from "../../src/util/ByteArray.js";

describe("ByteArray", () => {
    describe("fromHex", () => {
        it("decodes the hex string", () => {
            const result = ByteArray.fromHex("1234");

            expect(result).deep.equal(ByteArray.of(0x12, 0x34));
        });

        it("decodes an empty array", () => {
            const result = ByteArray.fromHex("");

            expect(result).deep.equal(new ByteArray(0));
        });
    });

    describe("fromBase64", () => {
        it("decodes the base64 string", () => {
            const result = ByteArray.fromBase64("EjQ=");

            expect(result).deep.equal(ByteArray.of(0x12, 0x34));
        });

        it("decodes the base64 string with trailing/leading 0", () => {
            const result = ByteArray.fromBase64("ABI0AA==");

            expect(result).deep.equal(ByteArray.of(0x00, 0x12, 0x34, 0x00));
        });

        it("decodes an empty array", () => {
            const result = ByteArray.fromBase64("");

            expect(result).deep.equal(new ByteArray(0));
        });
    });

    describe("fromString", () => {
        it("get the bytes of a string", () => {
            const result = ByteArray.fromString("0");

            expect(result).deep.equal(ByteArray.of(0x30));
        });
    });

    describe("toHex", () => {
        it("encodes the bytes as a hex string", () => {
            const result = ByteArray.of(0x12, 0x34).toHex();

            expect(result).equal("1234");
        });

        it("encodes an empty array", () => {
            const result = new ByteArray(0).toHex();

            expect(result).equal("");
        });
    });

    describe("toBase64", () => {
        it("encodes the bytes as a base64 string", () => {
            const result = ByteArray.of(0x12, 0x34).toBase64();

            expect(result).equal("EjQ=");
        });

        it("encodes the bytes as a hex string with leading/trailing 0", () => {
            const result = ByteArray.of(0x00, 0x12, 0x34, 0x00).toBase64();

            expect(result).equal("ABI0AA==");
        });

        it("encodes an empty array", () => {
            const result = new ByteArray(0).toBase64();

            expect(result).equal("");
        });
    });

    describe("concat", () => {
        it("concats two ByteArrays", () => {
            const result = ByteArray.concat(ByteArray.of(0x12), ByteArray.of(0x34));

            expect(result).deep.equal(ByteArray.of(0x12, 0x34));
        });
    });
});
