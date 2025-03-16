#!/usr/bin/env node
/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { LogFormat, Logger } from "@matter/general";
import "@matter/nodejs";
import { createFileLogger } from "@matter/nodejs";
import { writeFileSync } from "node:fs";
import { ControllerTestInstance, startControllerTestApp } from "./ControllerTestInstance.js";
import { StorageBackendAsyncJsonFile } from "./storage/StorageBackendAsyncJsonFile.js";

Logger.format = LogFormat.PLAIN;
Logger.log = await createFileLogger("./test.log");

const logger = Logger.get("ControllerWebSocketTestApp");
logger.info("Start Controller WebSocket App");
logger.info(process.pid);
logger.info(process.argv);

process.on("unhandledRejection", reason => {
    writeFileSync("error.log", `Rejection: ${reason}\n`);
});
process.on("uncaughtException", error => {
    writeFileSync("error.log", `Exception: ${error.stack}\n`);
});

//if (process.argv.includes("--test")) {
startControllerTestApp(ControllerTestInstance, StorageBackendAsyncJsonFile).catch(error =>
    logger.error("Error starting ControllerTestInstance", error),
);
//} else {
//    console.log("== WebSocket Server Ready");
//    setTimeout(() => process.exit(), 5000000);
//}
