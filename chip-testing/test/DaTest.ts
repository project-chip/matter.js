/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { AllClustersTestInstance } from "../src/AllClustersTestInstance.js";
import { App } from "./support.js";

describe("DA", () => {
    Chip.python(App(AllClustersTestInstance), "TC_DA_1_2");
    Chip.python(App(AllClustersTestInstance), "TC_DA_1_5");
    Chip.python(App(AllClustersTestInstance), "TC_DA_1_7");
});
