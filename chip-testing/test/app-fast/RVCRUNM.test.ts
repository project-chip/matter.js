/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { RvcApp } from "../support.js";

describe("RVCRUNM", () => {
    chip("RVCRUNM/*").subject(RvcApp).exclude(
        // Exclude because of timing issues with the filesocket/backchannel commands
        "RVCRUNM/2.2",
    );
});
