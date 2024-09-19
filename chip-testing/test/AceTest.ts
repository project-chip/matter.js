/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { AllClustersTestInstance } from "../src/AllClustersTestInstance.js";
import { App } from "./support.js";

describe("ACE", () => {
    Chip.python(App(AllClustersTestInstance), "TC_ACE_1_2");
    Chip.python(App(AllClustersTestInstance), "TC_ACE_1_3");
    Chip.python(App(AllClustersTestInstance), "TC_ACE_1_4");
    Chip.python(App(AllClustersTestInstance), "TC_ACE_1_5");
});
