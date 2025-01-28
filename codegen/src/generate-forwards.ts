/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { generateMatterjsMainForwards } from "#forwards/matterjs-main.js";
import { generateProjectChipMatterjsForwards } from "#forwards/project-chip-matterjs.js";
import { Progress } from "@matter/tools";

/**
 * Generate a "forward" file for each sub-module re-export.
 */
const progress = new Progress();

progress.startup(`Generating ${progress.emphasize("sub-module forwards")}`, false);

await progress.run("@project-chip/matter.js", generateProjectChipMatterjsForwards);

await progress.run("@matter/main", generateMatterjsMainForwards);

progress.close();
