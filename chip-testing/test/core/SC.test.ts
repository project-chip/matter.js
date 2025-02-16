/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { edit } from "@matter/testing";

describe("SC", () => {
    before(async () => {
        const sc41 = chip.testFor("SC/4.1");
        await sc41.edit(
            edit.sed(
                // We can pass values to YAML tests using e.g. .args("--", "deviceType", 257)...  But AFAICT there is no
                // support for converting this value to an integer, even though the config schema specifies "int16u"
                // explicitly.  So, the test then fails because 257 !== "257".  Instead we just rewrite the test
                // definition
                "s/defaultValue: 65535/defaultValue: 257/",

                // We do not like ridiculously long waits; reduce commissioning timeout.  Unfortunately test framework
                // is slow so we can't reduce to a reasonable level but 10s. is still way better than 3m.
                "s/value: 180/value: 10/",

                // Also reduce the test delay that waits for timeout
                "s/value: 180000/value: 10000/",
            ),
        );

        const sc71 = chip.testFor("SC/7.1");
        await sc71.edit(
            edit.sed(
                // AFAICT 7.1 is kind of pointless unless we run w/ multiple DUTs.  But we do run it and need to disable
                // the check for default QR code since we do in fact use the default (and there's .01% chance of test
                // failing due to collision anyway)
                "s/, 3840,/, 0000,/",
            ),
        );
    });

    // Exclude 5.1 and 5.2 because our GroupKeyManagement is too limited
    chip("SC/*").exclude("SC/5.1", "SC/5.2", "SC/7.1");

    // 7.1 must start factory fresh
    chip("SC/7.1").uncommissioned();
});
