/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { AllClustersTestInstance } from "../src/AllClustersTestInstance.js";
import { App } from "./support.js";

describe("SC", () => {
    Chip.python(App(AllClustersTestInstance), "TC_SC_3_6");
    Chip.python(App(AllClustersTestInstance), "TC_SC_7_1");
});
