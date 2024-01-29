#!/usr/bin/env node
/**
 * @license
 * Copyright 2022 The node-matter Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { AllClustersTestInstanceLegacy } from "./AllClustersTestInstanceLegacy.js";
import { startTestApp } from "./GenericTestApp.js";

console.log("Start AllClustersApp-Legacy");
console.log(process.pid);
console.log(process.argv);

startTestApp("AllClustersApp-Legacy", AllClustersTestInstanceLegacy).catch(console.error);
