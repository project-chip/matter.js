/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { Logger } from "@project-chip/matter.js-general";
import { GeneralDiagnosticsServer } from "@project-chip/matter.js/behavior/definitions/general-diagnostics";
import { Status } from "@project-chip/matter.js/cluster";
import { StatusResponseError } from "@project-chip/matter.js/interaction";

const logger = Logger.get("TestGeneralDiagnosticServer");

export class TestGeneralDiagnosticsServer extends GeneralDiagnosticsServer {
    override triggerTestEvent(testEvent: number | bigint): void {
        logger.info("Test event triggered: ", testEvent);
        if (testEvent === BigInt("0xfffffffffff10000")) {
            this.triggerTestEvent(0x0000000000000003);
        } else if (testEvent !== 0x0000000000000003) {
            throw new StatusResponseError("Wrong test event", Status.InvalidCommand);
        }
    }
}
