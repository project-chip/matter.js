#!/usr/bin/env node
/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import "@project-chip/matter-node.js";
import { startTestApp } from "./GenericTestApp.js";
import { TvTestInstance } from "./TvTestInstance.js";

console.log("Start TvApp");
console.log(process.pid);
console.log(process.argv);

startTestApp("TvApp", TvTestInstance).catch(console.error);
