/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { Groups, Identify, OnOff } from "#clusters";
import { extendPublicHandlerMethods, MakeMandatory } from "#general";
import { Attributes, BitSchema, Cluster, ClusterId, Commands, Events, TypeFromPartialBitSchema } from "#types";
import { AttributeInitialValues, ClusterServerHandlers } from "../cluster/server/ClusterServerTypes.js";
import { createDefaultGroupsClusterServer } from "../cluster/server/GroupsServer.js";
import { createDefaultIdentifyClusterServer } from "../cluster/server/IdentifyServer.js";
import { createDefaultOnOffClusterServer } from "../cluster/server/OnOffServer.js";
import { Device } from "./Device.js";
import { DeviceTypeDefinition, DeviceTypes } from "./DeviceTypes.js";
import { EndpointOptions } from "./Endpoint.js";

type OnOffBaseDeviceCommands = {
    identify: ClusterServerHandlers<typeof Identify.Cluster>["identify"];
    offWithEffect: MakeMandatory<ClusterServerHandlers<typeof OnOff.Complete>["offWithEffect"]>;
};

/**
 * Utility function to get the initial attribute values for a cluster out of an object with initial attribute values
 * for multiple clusters
 *
 * @param attributeInitialValues Object with initial attribute values for automatically added clusters
 * @param cluster Cluster to get the initial attribute values for
 */
export function getClusterInitialAttributeValues<
    F extends BitSchema,
    SF extends TypeFromPartialBitSchema<F>,
    A extends Attributes,
    C extends Commands,
    E extends Events,
>(
    attributeInitialValues: { [key: ClusterId]: AttributeInitialValues<any> } | undefined,
    cluster: Cluster<F, SF, A, C, E>,
): AttributeInitialValues<A> | undefined {
    if (attributeInitialValues === undefined) return undefined;
    return attributeInitialValues[cluster.id] as AttributeInitialValues<A>;
}

/**
 * Abstract Base class for OnOff devices
 */
export class OnOffBaseDevice extends extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands>(Device) {
    /**
     * Creates a new OnOffBaseDevice
     *
     * @protected
     * @param definition Device type definition of the device to create
     * @param attributeInitialValues Optional object with initial attribute values for automatically added clusters
     * @param options Optional endpoint options
     * @param isLighting Define if Lighting feature is set
     */
    constructor(
        definition: DeviceTypeDefinition,
        attributeInitialValues?: { [key: ClusterId]: AttributeInitialValues<any> },
        options: EndpointOptions = {},
        protected isLighting = false,
    ) {
        super(definition, options);
        this.addDeviceClusters(attributeInitialValues);
    }

    /**
     * Adds mandatory clusters to the device
     *
     * @protected
     * @param attributeInitialValues Optional object with initial attribute values for automatically added clusters
     * @param excludeList List of clusters to exclude from being added
     */
    protected addDeviceClusters(
        attributeInitialValues?: { [key: ClusterId]: AttributeInitialValues<any> },
        excludeList: ClusterId[] = [],
    ) {
        // TODO: Find a way to make this automated based on the required clusters?
        if (!excludeList.includes(Identify.Cluster.id)) {
            this.addClusterServer(
                createDefaultIdentifyClusterServer({
                    identify: async data => await this._executeHandler("identify", data),
                }),
            );
        }
        if (!excludeList.includes(Groups.Cluster.id)) {
            this.addClusterServer(createDefaultGroupsClusterServer());
        }
        if (!excludeList.includes(OnOff.Cluster.id)) {
            this.addClusterServer(
                createDefaultOnOffClusterServer(
                    this.commandHandler,
                    getClusterInitialAttributeValues(attributeInitialValues, OnOff.Cluster),
                    this.isLighting,
                ),
            );
        }
    }

    /**
     * Turns the device on or off
     * This is an example f a convenient device class API to control the device without need to access clusters
     *
     * @param onOff true to turn on, false to turn off
     */
    setOnOff(onOff: boolean) {
        this.getClusterServer(OnOff.Cluster)?.setOnOffAttribute(onOff);
    }

    getOnOff() {
        return this.getClusterServer(OnOff.Cluster)?.getOnOffAttribute() ?? false;
    }

    /**
     * Toggles the device on or off
     * This is an example f a convenient device class API to control the device without need to access clusters
     */
    toggle() {
        const cluster = this.getClusterServer(OnOff.Cluster);
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
        this.getClusterServer(OnOff.Cluster)?.subscribeOnOffAttribute(listener);
    }
}

/**
 * Device class for an OnOffPluginUnit Device
 */
export class OnOffPluginUnitDevice extends OnOffBaseDevice {
    constructor(
        onOffAttributeInitialValues?: AttributeInitialValues<typeof OnOff.Cluster.attributes>,
        options: EndpointOptions = {},
    ) {
        const initialAttributeValues: { [key: ClusterId]: AttributeInitialValues<any> } = {};
        if (onOffAttributeInitialValues !== undefined) {
            initialAttributeValues[OnOff.Cluster.id] = onOffAttributeInitialValues;
        }
        super(DeviceTypes.ON_OFF_PLUGIN_UNIT, initialAttributeValues, options, false);
    }
}

/**
 * Device class for an OnOffPluginUnit Device
 */
export class OnOffLightDevice extends OnOffBaseDevice {
    constructor(
        onOffAttributeInitialValues?: AttributeInitialValues<typeof OnOff.Cluster.attributes>,
        options: EndpointOptions = {},
    ) {
        const initialAttributeValues: { [key: ClusterId]: AttributeInitialValues<any> } = {};
        if (onOffAttributeInitialValues !== undefined) {
            initialAttributeValues[OnOff.Cluster.id] = onOffAttributeInitialValues;
        }
        super(DeviceTypes.ON_OFF_LIGHT, initialAttributeValues, options, true);
    }

    protected override addDeviceClusters(
        attributeInitialValues?: { [key: ClusterId]: AttributeInitialValues<any> },
        excludeList: ClusterId[] = [],
    ) {
        super.addDeviceClusters(attributeInitialValues, [OnOff.Cluster.id]);
        if (!excludeList.includes(OnOff.Cluster.id)) {
            this.addClusterServer(
                createDefaultOnOffClusterServer(
                    this.commandHandler,
                    getClusterInitialAttributeValues(
                        attributeInitialValues,
                        OnOff.Cluster.with(OnOff.Feature.Lighting),
                    ),
                    true,
                ),
            );
        }
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
