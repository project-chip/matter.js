/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { GeneralDiagnosticsServer } from "@project-chip/matter.js/behavior/definitions/general-diagnostics";
import { Status } from "@project-chip/matter.js/cluster";
import { StatusResponseError } from "@project-chip/matter.js/interaction";
import { Logger } from "@project-chip/matter.js/log";

const logger = Logger.get("TestGeneralDiagnosticServer");

export class TestGeneralDiagnosticsServer extends GeneralDiagnosticsServer {
    override triggerTestEvent(testEvent: number): void {
        logger.info("Test event triggered: ", testEvent);
        if (testEvent !== 0x0000000000000003) {
            throw new StatusResponseError("Wrong test event", Status.InvalidCommand);
        }
    }
}
