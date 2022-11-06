/**
 * @file Unit tests for {@link TlvSchema}.
 * @copyright Project CHIP Authors 2022
 * @license Apache-2.0
 */

import assert from "assert";
import { UnsignedNumberTlv } from "../../src/schema/TlvSchema";
import { arrayBufferFromHex, arrayBufferToHex } from "../../src/util/ArrayBuffer";

describe("TlvSchema", () => {

    context("encode", () => {
        it("encodes an 1 byte unsigned int using in TLV", () => {
            const result = UnsignedNumberTlv.encode(1);

            assert.strictEqual(arrayBufferToHex(result), "0401");
        });

        it("encodes a 2 bytes unsigned int using in TLV", () => {
            const result = UnsignedNumberTlv.encode(0x0100);

            assert.strictEqual(arrayBufferToHex(result), "050001");
        });

        it("encodes a 4 bytes unsigned int using in TLV", () => {
            const result = UnsignedNumberTlv.encode(0x01000000);

            assert.strictEqual(arrayBufferToHex(result), "0600000001");
        });

        it("encodes an 8 bytes unsigned int using in TLV", () => {
            const result = UnsignedNumberTlv.encode(BigInt(0x01000000000000));

            assert.strictEqual(arrayBufferToHex(result), "070000000000000100");
        });
    });

    context("decode", () => {
        it("decodes an 1 byte unsigned int using in TLV", () => {
            const result = UnsignedNumberTlv.decode(arrayBufferFromHex("0401"));

            assert.strictEqual(result, 1);
        });

        it("decodes a 2 bytes unsigned int using in TLV", () => {
            const result = UnsignedNumberTlv.decode(arrayBufferFromHex("050001"));

            assert.strictEqual(result, 0x0100);
        });

        it("decodes a 4 bytes unsigned int using in TLV", () => {
            const result = UnsignedNumberTlv.decode(arrayBufferFromHex("0600000001"));

            assert.strictEqual(result, 0x01000000);
        });

        it("decodes an 8 bytes unsigned int using in TLV", () => {
            const result = UnsignedNumberTlv.decode(arrayBufferFromHex("070000000000000100"));

            assert.strictEqual(result, BigInt(0x01000000000000));
        });
    });
});
