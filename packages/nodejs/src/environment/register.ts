/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Boot, Environment } from "#general";
import { NodeJsEnvironment } from "./NodeJsEnvironment.js";

Boot.init(() => {
    Environment.default = NodeJsEnvironment();
});
