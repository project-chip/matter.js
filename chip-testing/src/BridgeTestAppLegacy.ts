#!/usr/bin/env node
/**
 * @license
 * Copyright 2022 The node-matter Authors
 * SPDX-License-Identifier: Apache-2.0
 */
//    logger.info("mDNS service published:");
//    logger.info(`SetupQRCode: [${qrPairingCode}]`);

import { BridgeTestInstanceLegacy } from "./BridgeTestInstanceLegacy.js";
import { startTestApp } from "./GenericTestApp.js";

console.log("Start BridgeApp-Legacy");
console.log(process.pid);
console.log(process.argv);

await startTestApp("BridgeApp-Legacy", BridgeTestInstanceLegacy);
