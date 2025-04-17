/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { RvcApp } from "../support.js";

describe("SEAR", () => {
    chip("SEAR/*").subject(RvcApp).exclude(
        // Exclude because incompatible PICS used by rvc app vs our default PICS
        "SEAR/1.2",

        // Exclude because one Scipt parameter is not correctly parsed out of the python file
        "SEAR/1.3",
    );
});
