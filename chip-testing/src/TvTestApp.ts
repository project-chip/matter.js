#!/usr/bin/env node
/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import "@matter/nodejs";
import { startTestApp } from "./GenericTestApp.js";
import { TvTestInstance } from "./TvTestInstance.js";
import { StorageBackendAsyncJsonFile } from "./storage/StorageBackendAsyncJsonFile.js";

console.log("Start TvApp");
console.log(process.pid);
console.log(process.argv);

startTestApp(TvTestInstance, StorageBackendAsyncJsonFile).catch(console.error);
