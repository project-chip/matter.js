/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterElement } from "@project-chip/matter.js/model";

/**
 * This is a partial Matter model that adds elements and properties unavailable
 * (or incorrect) in other sources.
 */
export const LocalMatter = MatterElement({
    name: "LocalMatter",
    description: "Matter.js Matter overrides",
    version: "1.1",
    children: [],
});
