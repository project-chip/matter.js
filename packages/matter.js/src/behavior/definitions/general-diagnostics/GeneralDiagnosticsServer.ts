/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { GeneralDiagnostics } from "../../../cluster/definitions/GeneralDiagnosticsCluster.js";
import { StatusCode, StatusResponseError } from "../../../protocol/interaction/StatusCode.js";
import { NetworkServer } from "../../system/networking/NetworkServer.js";
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

        this.reactTo(
            this.agent.get(NetworkServer).events.online$Change,
            this.#emitEvents
        );
    }

    override testEventTrigger({ eventTrigger }: TestEventTriggerRequest) {
        throw new StatusResponseError(`Unsupported test event trigger ${eventTrigger}`, StatusCode.InvalidCommand);
    }

    #emitEvents(online: boolean) {
        if (online) {
            this.events.bootReason.emit(
                { bootReason: GeneralDiagnostics.BootReason.Unspecified },
                this.context
            );
        }
    }
}
