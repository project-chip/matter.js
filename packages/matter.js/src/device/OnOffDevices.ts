/**
 * @license
 * Copyright 2022 The matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { DeviceTypes, DeviceTypeDefinition } from "./DeviceTypes.js";
import { Device } from "./Device.js";
import { createDefaultOnOffClusterServer } from "../cluster/server/OnOffServer.js";
import { createDefaultGroupsClusterServer } from "../cluster/server/GroupsServer.js";
import { createDefaultScenesClusterServer } from "../cluster/server/ScenesServer.js";
import { createDefaultIdentifyClusterServer } from "../cluster/server/IdentifyServer.js";
import { AttributeInitialValues, CommandHandler } from "../cluster/server/ClusterServer.js";
import { IdentifyCluster, } from "../cluster/IdentifyCluster.js";
import { OnOffCluster } from "../cluster/OnOffCluster.js";
import { extendPublicHandlerMethods } from "../util/NamedHandler.js";
import { BitSchema } from "../schema/index.js";
import { Attributes, Cluster, Commands, Events } from "../cluster/Cluster.js";

type OnOffBaseDeviceCommands = {
    identify: CommandHandler<typeof IdentifyCluster.commands.identify, any>;
}

function getClusterInitialAttributeValues<F extends BitSchema, A extends Attributes, C extends Commands, E extends Events>(attributeInitialValues: { [key: number]: AttributeInitialValues<any> } | undefined, cluster: Cluster<F, A, C, E>): AttributeInitialValues<A> | undefined {
    if (attributeInitialValues === undefined) return undefined;
    return attributeInitialValues[cluster.id] as AttributeInitialValues<A>;
}

abstract class OnOffBaseDevice extends extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands>(Device) {

    protected constructor(definition: DeviceTypeDefinition, attributeInitialValues?: { [key: number]: AttributeInitialValues<any> }, endpointId?: number) {
        super(definition, [], endpointId);
        this.addMandatoryDeviceClusters(attributeInitialValues);
    }

    protected addMandatoryDeviceClusters(attributeInitialValues?: { [key: number]: AttributeInitialValues<any> }) {
        this.addClusterServer(createDefaultIdentifyClusterServer({
            identify: async (data) => await this._executeHandler("identify", data)
        }));
        this.addClusterServer(createDefaultGroupsClusterServer());
        this.addClusterServer(createDefaultScenesClusterServer());
        this.addClusterServer(createDefaultOnOffClusterServer(getClusterInitialAttributeValues(attributeInitialValues, OnOffCluster)));
    }

    // Example of Convenient methods to control the device without need to access clusters

    async onOff(onOff: boolean) {
        this.getClusterServer(OnOffCluster)?.setOnOffAttribute(onOff);
    }

    async toggle() {
        const cluster = this.getClusterServer(OnOffCluster);
        cluster?.setOnOffAttribute(!cluster?.getOnOffAttribute());
    }

    // Add Listeners convenient for chosen attributes
    addOnOffListener(listener: (newValue: boolean, oldValue: boolean) => void) {
        this.getClusterServer(OnOffCluster)?.subscribeOnOffAttribute(listener);
    }
}

export class OnOffPluginUnitDevice extends OnOffBaseDevice {
    constructor(onOffAttributeInitialValues?: AttributeInitialValues<typeof OnOffCluster.attributes>, endpointId?: number) {
        super(DeviceTypes.ON_OFF_PLUGIN_UNIT, onOffAttributeInitialValues, endpointId);
    }
}

export class OnOffLightDevice extends OnOffBaseDevice {
    constructor(onOffAttributeInitialValues?: AttributeInitialValues<typeof OnOffCluster.attributes>, endpointId?: number) {
        super(DeviceTypes.ON_OFF_LIGHT, onOffAttributeInitialValues, endpointId);
    }
}


/*
Example to enhance the exposed commands of the device

// additional commands to be allowed for registering and triggering handlers
type OnOffLightingDeviceCommands = {
    fadeOut: (time: number) => Promise<void>;
}

class OnOffLightingDevice extends extendPublicHandlerMethods<typeof OnOffBaseDevice, OnOffLightingDeviceCommands>(OnOffBaseDevice) {

    test() {
        // This still works
        this._executeHandler("identify", 5);

        // this works too
        this.__internal__DO_NOT_CALL_THIS_OR_YOU_WILL_BE_FIRED__executeHandler("fadeOut", 5);
    }
}
 */
