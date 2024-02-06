/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { BridgedDeviceBasicInformationBehavior } from "./BridgedDeviceBasicInformationBehavior.js";

/**
 * This is the default server implementation of BridgedDeviceBasicInformationBehavior.
 * 
 * All attributes are optional except for the "reachable" attribute.
 */
export class BridgedDeviceBasicInformationServer extends BridgedDeviceBasicInformationBehavior {
    override initialize() {
        this.reactTo(this.events.reachable$Change, this.#emitReachableChange);
    }

    #emitReachableChange(reachable: boolean) {
        // Per the specification.  Not sure what this adds vs. subscribing to attribute changes
        this.events.reachableChanged.emit({ reachableNewValue: reachable }, this.context);
    }
}

export namespace BridgedDeviceBasicInformationServer {
    export class State extends BridgedDeviceBasicInformationBehavior.State {
        // TODO - need real-world feedback to determine best default
        override reachable = false;
    }
}
