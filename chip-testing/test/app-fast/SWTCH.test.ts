/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { edit } from "@matter/testing";

describe("SWTCH", () => {
    // We need to patch the test a bit
    before(async () => {
        await chip.testFor("SWTCH-run3").edit(
            edit.lines({
                after: / {8}self.step\("7b"\)/,
                before: / */,
                replacement: "        self._ask_for_switch_idle(endpoint_id)",
            }),
        );
    });

    chip(
        "SWTCH/*",

        // There's an unnumbered python SWTCH test with multiple runs
        "SWTCH*",
    );
}).timeout(120000);
