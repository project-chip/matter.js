/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { GeneralDiagnostics } from "../../../cluster/definitions/GeneralDiagnosticsCluster.js";
import { NodeLifecycle } from "../../../node/NodeLifecycle.js";
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

        const lifecycle = this.endpoint.lifecycle as NodeLifecycle;

        if (lifecycle.online !== undefined) {
            this.reactTo(lifecycle.online, this.#online);
        }
    }

    override testEventTrigger({ eventTrigger }: TestEventTriggerRequest) {
        throw new StatusResponseError(`Unsupported test event trigger ${eventTrigger}`, StatusCode.InvalidCommand);
    }

    #online() {
        this.events.bootReason.emit({ bootReason: GeneralDiagnostics.BootReason.Unspecified }, this.context);
    }
}
