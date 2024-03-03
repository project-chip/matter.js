/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

// This script builds cluster elements from the connectedhomeip XML cluster
// definitions.

import { loadChip } from "./mom/chip/load-chip.js";
import { generateIntermediateModel } from "./mom/common/generate-intermediate.js";
import "./util/setup.js";

export async function main() {
    const elements = await loadChip();
    generateIntermediateModel("chip", elements);
}
