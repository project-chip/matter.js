/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { RvcApp } from "../support.js";

describe("RVCOPSTATE", () => {
    chip("RVCOPSTATE/*").subject(RvcApp).exclude(
        // Exclude because of timing issues with the filesocket/backchannel commands
        "RVCOPSTATE/2.1",
        "RVCOPSTATE/2.3",
        "RVCOPSTATE/2.4",
    );
});
