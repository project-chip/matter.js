/**
 * @license
 * Copyright 2022 The node-matter Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import assert from "assert";
import { QrCode } from "../../src/codec/QrCode";

const QR_CODE = [
    "▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄",
    "█ ▄▄▄▄▄ ██▀▄▀▄█ ▄▄▄▄▄ █",
    "█ █   █ █▄▀▄▀▄█ █   █ █",
    "█ █▄▄▄█ ██ ▀▀▄█ █▄▄▄█ █",
    "█▄▄▄▄▄▄▄█ █ ▀▄█▄▄▄▄▄▄▄█",
    "█▄▄ ▀▄▄▄▄ ▀ █  ▄▀██ █▀█",
    "█▀▄▀▄ ▄▄ ▀▀█ ▀ ▀   ▀█▀█",
    "█▄▄▄██▄▄▄█▀▄▀ ▀▄▄ █▄▄▀█",
    "█ ▄▄▄▄▄ █   █▄█▄▀█▀ █ █",
    "█ █   █ █▄▀▄█▄ ▄▀▄▀▀▀██",
    "█ █▄▄▄█ █ █▀█▄█  ▀▄▀▀ █",
    "█▄▄▄▄▄▄▄█▄█▄█▄████▄▄█▄█",
    "▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀",
    ""
].join("\n");

describe("QrCode", () => {
    context("encode", () => {
        it("encodes a string", () => {
            const result = QrCode.encode("MT:6FCJ142C00KA0648G00");

            assert.equal(result, QR_CODE);
        });
    });
});
