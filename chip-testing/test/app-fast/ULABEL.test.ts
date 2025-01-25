/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { edit } from "@matter/testing";

describe("ULABEL", () => {
    // Test enforces 20 entry list limit that is not defined in specification.  Disable this
    before(async () => {
        await chip.testFor("UserLabelClusterConstraints").edit(
            edit.lines({
                after: /Attempt to write a large label list/,
                before: /writeAttribute/,
                replacement: "      disabled: true",
            }),
        );
    });

    // chip("ULABEL/*", "UserLabelCluster", "UserLabelClusterConstraints");
    chip("UserLabelClusterConstraints");
});
