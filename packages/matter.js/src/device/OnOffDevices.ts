/**
 * @license
 * Copyright 2022 The matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { DEVICE, DeviceTypeDefinition } from "../common/DeviceTypes.js";

import { Device } from "./Device.js";
import { Logger } from "../log/Logger.js";
import { createDefaultOnOffClusterServer } from "../cluster/server/OnOffServer.js";
import { createDefaultGroupsClusterServer } from "../cluster/server/GroupsServer.js";
import { createDefaultScenesClusterServer } from "../cluster/server/ScenesServer.js";
import { createDefaultIdentifyClusterServer } from "../cluster/server/IdentifyServer.js";
import { OnOffCluster } from "../cluster/index.js";

const logger = Logger.get("OnOffLightDevice");

abstract class OnOffBaseDevice extends Device {
    constructor(definition: DeviceTypeDefinition, endpointId?: number) {
        super(definition, [], endpointId);
        this.addMandatoryDeviceClusters();
    }

    protected addMandatoryDeviceClusters() {
        this.addClusterServer(createDefaultIdentifyClusterServer({
            identify: async ({ request: { identifyTime } }) => this.onIdentify(identifyTime)
        }));
        this.addClusterServer(createDefaultGroupsClusterServer());
        this.addClusterServer(createDefaultScenesClusterServer());
        this.addClusterServer(createDefaultOnOffClusterServer());
    }

    // Example of Convenient methods to control the device without need to access clusters

    async onOff(onOff: boolean) {
        this.getClusterServer(OnOffCluster)?.attributes.onOff.set(onOff);
    }

    async toggle() {
        const cluster = this.getClusterServer(OnOffCluster);
        cluster?.attributes.onOff.set(!cluster?.attributes.onOff.get());
    }

    // Method that can be overridden to implement own identify logic, or we change to an event?
    async onIdentify(identifyTime: number) {
        logger.info(`Identify request received for ${identifyTime}s`);
    }

    // Add Listeners convenient for chosen attributes
    addOnOffListener(listener: (newValue: boolean, oldValue: boolean) => void) {
        this.getClusterServer(OnOffCluster)?.attributes.onOff.addListener(listener);
    }
}

export class OnOffPluginUnitDevice extends OnOffBaseDevice {
    constructor(endpointId?: number) {
        super(DEVICE.ON_OFF_PLUGIN_UNIT, endpointId);
    }
}

export class OnOffLightDevice extends OnOffBaseDevice {
    constructor(endpointId?: number) {
        super(DEVICE.ON_OFF_LIGHT, endpointId);
    }
}
