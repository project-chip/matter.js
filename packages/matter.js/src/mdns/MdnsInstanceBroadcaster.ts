/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import {
    CommissionerInstanceData,
    CommissioningModeInstanceData,
    InstanceBroadcaster,
} from "../common/InstanceBroadcaster.js";
import { Fabric } from "../fabric/Fabric.js";
import { MdnsBroadcaster } from "./MdnsBroadcaster.js";

/**
 * This class is handing MDNS Announcements for one instance of a device aka "port".
 */
export class MdnsInstanceBroadcaster implements InstanceBroadcaster {
    constructor(
        private readonly instancePort: number,
        private readonly mdnsBroadcaster: MdnsBroadcaster,
    ) {}

    async setCommissionMode(mode: number, deviceData: CommissioningModeInstanceData) {
        await this.mdnsBroadcaster.setCommissionMode(this.instancePort, mode, deviceData);
    }

    /** Set the Broadcaster Data to announce a device for operative discovery (aka "already paired") */
    async setFabrics(fabrics: Fabric[]) {
        await this.mdnsBroadcaster.setFabrics(this.instancePort, fabrics);
    }

    /** Set the Broadcaster data to announce a Commissioner (aka Commissioner discovery) */
    async setCommissionerInfo(commissionerData: CommissionerInstanceData) {
        await this.mdnsBroadcaster.setCommissionerInfo(this.instancePort, commissionerData);
    }

    async announce() {
        await this.mdnsBroadcaster.announce(this.instancePort);
    }
}
