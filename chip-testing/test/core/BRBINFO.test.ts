/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

describe("BRBINFO", () => {
    chip("BRBINFO/*").exclude("BRBINFO/4.1"); // Exclude ICD; test doesn't specify PICS
});
