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
import { AttributeInitialValues, ClusterServerHandlers } from "../cluster/server/ClusterServerTypes.js";
import { IdentifyCluster, } from "../cluster/definitions/IdentifyCluster.js";
import { OnOffCluster } from "../cluster/definitions/OnOffCluster.js";
import { extendPublicHandlerMethods } from "../util/NamedHandler.js";
import { BitSchema, TypeFromPartialBitSchema } from "../schema/BitmapSchema.js";
import { Attributes, Cluster, Commands, Events } from "../cluster/Cluster.js";
import { EndpointOptions } from "./Endpoint.js";

type OnOffBaseDeviceCommands = {
    identify: ClusterServerHandlers<typeof IdentifyCluster>["identify"];
}

/**
 * Utility function to get the initial attribute values for a cluster out of an object with initial attribute values
 * for multiple clusters
 *
 * @param attributeInitialValues Object with initial attribute values for automatically added clusters
 * @param cluster Cluster to get the initial attribute values for
 */
function getClusterInitialAttributeValues<F extends BitSchema, SF extends TypeFromPartialBitSchema<F>, A extends Attributes, C extends Commands, E extends Events>(attributeInitialValues: { [key: number]: AttributeInitialValues<any> } | undefined, cluster: Cluster<F, SF, A, C, E>): AttributeInitialValues<A> | undefined {
    if (attributeInitialValues === undefined) return undefined;
    return attributeInitialValues[cluster.id] as AttributeInitialValues<A>;
}

/**
 * Abstract Base class for OnOff devices
 */
abstract class OnOffBaseDevice extends extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands>(Device) {

    /**
     * Creates a new OnOffBaseDevice
     *
     * @protected
     * @param definition Device type definition of the device to create
     * @param attributeInitialValues Optional object with initial attribute values for automatically added clusters
     * @param options Optional endpoint options
     */
    protected constructor(definition: DeviceTypeDefinition, attributeInitialValues?: { [key: number]: AttributeInitialValues<any> }, options: EndpointOptions = {}) {
        super(definition, options);
        this.addDeviceClusters(attributeInitialValues);
    }

    /**
     * Adds mandatory clusters to the device
     *
     * @protected
     * @param attributeInitialValues Optional object with initial attribute values for automatically added clusters
     */
    protected addDeviceClusters(attributeInitialValues?: { [key: number]: AttributeInitialValues<any> }) {
        // TODO: Find a way to make this automated based on the required clusters?
        this.addClusterServer(createDefaultIdentifyClusterServer({
            identify: async (data) => await this._executeHandler("identify", data)
        }));
        this.addClusterServer(createDefaultGroupsClusterServer());
        this.addClusterServer(createDefaultScenesClusterServer());
        this.addClusterServer(createDefaultOnOffClusterServer(getClusterInitialAttributeValues(attributeInitialValues, OnOffCluster)));
    }

    /**
     * Turns the device on or off
     * This is an example f a convenient device class API to control the device without need to access clusters
     *
     * @param onOff true to turn on, false to turn off
     */
    async onOff(onOff: boolean) {
        this.getClusterServer(OnOffCluster)?.setOnOffAttribute(onOff);
    }

    /**
     * Toggles the device on or off
     * This is an example f a convenient device class API to control the device without need to access clusters
     */
    async toggle() {
        const cluster = this.getClusterServer(OnOffCluster);
        cluster?.setOnOffAttribute(!cluster?.getOnOffAttribute());
    }

    // Add Listeners convenient for chosen attributes
    /**
     * Adds a listener for the OnOff attribute
     * This is an example of a convenient device class API to control the device without need to access clusters
     *
     * @param listener Listener function to be called when the attribute changes
     */
    addOnOffListener(listener: (newValue: boolean, oldValue: boolean) => void) {
        this.getClusterServer(OnOffCluster)?.subscribeOnOffAttribute(listener);
    }
}


/**
 * Device class for an OnOffPluginUnit Device
 */
export class OnOffPluginUnitDevice extends OnOffBaseDevice {
    constructor(onOffAttributeInitialValues?: AttributeInitialValues<typeof OnOffCluster.attributes>, options: EndpointOptions = {}) {
        super(DeviceTypes.ON_OFF_PLUGIN_UNIT, onOffAttributeInitialValues, options);
    }
}

/**
 * Device class for an OnOffPluginUnit Device
 */
export class OnOffLightDevice extends OnOffBaseDevice {
    constructor(onOffAttributeInitialValues?: AttributeInitialValues<typeof OnOffCluster.attributes>, options: EndpointOptions = {}) {
        super(DeviceTypes.ON_OFF_LIGHT, onOffAttributeInitialValues, options);
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
