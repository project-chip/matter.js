/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { edit } from "@matter/testing";

describe("Discovery", () => {
    before(() =>
        chip.testFor("Discovery").edit(
            edit.sed(
                // We have our timeouts set artificially low (1 s.) so we need to reduce the timeout in the "discovery
                // window too short" test to be zero
                "s/value: 120/value: 0/",
            ),
        ),
    );
    chip("Discovery");
});
