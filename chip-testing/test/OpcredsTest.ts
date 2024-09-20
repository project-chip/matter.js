/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { AllClustersTestInstance } from "../src/AllClustersTestInstance.js";
import { App } from "./support.js";

describe("OPCREDS", () => {
    Chip.python(App(AllClustersTestInstance), "TC_OPCREDS_3_1");
    Chip.python(App(AllClustersTestInstance), "TC_OPCREDS_3_2");
});
