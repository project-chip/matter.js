#!/usr/bin/env node
/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import "@project-chip/matter-node.js";
import { AllClustersTestInstance } from "./AllClustersTestInstance.js";
import { startTestApp } from "./GenericTestApp.js";

console.log("Start AllClustersApp");
console.log(process.pid);
console.log(process.argv);

startTestApp("AllClustersApp", AllClustersTestInstance).catch(console.error);
