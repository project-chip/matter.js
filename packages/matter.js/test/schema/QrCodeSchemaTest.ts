/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as assert from "assert";
import { QrCode } from "../../src/schema/QrCodeSchema.js";

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

describe("QrCodeSchema", () => {
    describe("encode", () => {
        it("encodes a string", () => {
            const result = QrCode.encode("MT:6FCJ142C00KA0648G00");

            assert.equal(result, QR_CODE);
        });
    });
});
