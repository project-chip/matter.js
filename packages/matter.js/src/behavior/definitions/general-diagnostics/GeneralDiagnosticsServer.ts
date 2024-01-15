/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { StatusCode, StatusResponseError } from "../../../protocol/interaction/StatusCode.js";
import { GeneralDiagnosticsBehavior } from "./GeneralDiagnosticsBehavior.js";
import { TestEventTriggerRequest } from "./GeneralDiagnosticsInterface.js";

/**
 * This is the default server implementation of GeneralDiagnosticsBehavior.
 */
export class GeneralDiagnosticsServer extends GeneralDiagnosticsBehavior {
    override initialize() {
        if (this.state.testEventTriggersEnabled === undefined) {
            this.state.testEventTriggersEnabled = false;
        }

        if (this.state.rebootCount === undefined) {
            this.state.rebootCount = 0;
        } else {
            this.state.rebootCount++;
        }
    }

    override testEventTrigger({ eventTrigger }: TestEventTriggerRequest) {
        throw new StatusResponseError(`Unsupported test event trigger ${eventTrigger}`, StatusCode.InvalidCommand);
    }
}
