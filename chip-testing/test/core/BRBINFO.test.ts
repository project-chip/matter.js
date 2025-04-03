/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { BridgeApp } from "../support.js";

describe("BRBINFO", () => {
    chip("BRBINFO/*").subject(BridgeApp).exclude("BRBINFO/4.1"); // Exclude ICD; test doesn't specify PICS
});
