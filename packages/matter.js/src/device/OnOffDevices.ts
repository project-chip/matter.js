/**
 * @license
 * Copyright 2022 The matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { Attributes, Cluster, Commands, Events } from "../cluster/Cluster.js";
import { Groups } from "../cluster/definitions/GroupsCluster.js";
import { Identify } from "../cluster/definitions/IdentifyCluster.js";
import { OnOff } from "../cluster/definitions/OnOffCluster.js";
import { Scenes } from "../cluster/definitions/ScenesCluster.js";
import {
    AttributeInitialValues,
    ClusterServerHandlers,
    ClusterServerObjForCluster,
} from "../cluster/server/ClusterServerTypes.js";
import { createDefaultGroupsClusterServer } from "../cluster/server/GroupsServer.js";
import { createDefaultIdentifyClusterServer } from "../cluster/server/IdentifyServer.js";
import { createDefaultOnOffClusterServer } from "../cluster/server/OnOffServer.js";
import { createDefaultScenesClusterServer } from "../cluster/server/ScenesServer.js";
import { ClusterId } from "../datatype/ClusterId.js";
import { BitSchema, TypeFromPartialBitSchema } from "../schema/BitmapSchema.js";
import { AsyncConstruction } from "../util/AsyncConstruction.js";
import { extendPublicHandlerMethods } from "../util/NamedHandler.js";
import { MaybePromise } from "../util/Promises.js";
import { MakeMandatory } from "../util/Type.js";
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
    #construction: AsyncConstruction<OnOffBaseDevice>;
    protected onoffCluster?: ClusterServerObjForCluster<typeof OnOff.Cluster>;

    override get construction() {
        return this.#construction;
    }

    /**
     * Creates a new OnOffBaseDevice
     *
     * @protected
     * @param definition Device type definition of the device to create
     * @param attributeInitialValues Optional object with initial attribute values for automatically added clusters
     * @param options Optional endpoint options
     */
    constructor(
        definition: DeviceTypeDefinition,
        attributeInitialValues?: { [key: ClusterId]: AttributeInitialValues<any> },
        options: EndpointOptions = {},
    ) {
        super(definition, options);
        const deviceConstruction = super.construction;
        this.#construction = AsyncConstruction(this, async () => {
            await deviceConstruction;
            await this.addDeviceClusters(attributeInitialValues);
        });
    }

    /**
     * Adds mandatory clusters to the device
     *
     * @protected
     * @param attributeInitialValues Optional object with initial attribute values for automatically added clusters
     * @param excludeList List of clusters to exclude from being added
     */
    protected override async addDeviceClusters(
        attributeInitialValues?: { [key: ClusterId]: AttributeInitialValues<any> },
        excludeList: ClusterId[] = [],
    ) {
        await super.addDeviceClusters(attributeInitialValues, excludeList);
        // TODO: Find a way to make this automated based on the required clusters?
        if (!excludeList.includes(Identify.Cluster.id)) {
            await this.addClusterServer(
                createDefaultIdentifyClusterServer({
                    identify: async data => await this._executeHandler("identify", data),
                }),
            );
        }
        if (!excludeList.includes(Groups.Cluster.id)) {
            await this.addClusterServer(createDefaultGroupsClusterServer());
        }
        if (!excludeList.includes(Scenes.Cluster.id)) {
            await this.addClusterServer(createDefaultScenesClusterServer());
        }
        if (!excludeList.includes(OnOff.Cluster.id)) {
            this.onoffCluster = createDefaultOnOffClusterServer(
                this.commandHandler,
                getClusterInitialAttributeValues(attributeInitialValues, OnOff.Cluster),
            );
            await this.addClusterServer(this.onoffCluster);
        }
    }

    /**
     * Turns the device on or off
     * This is an example f a convenient device class API to control the device without need to access clusters
     *
     * @param onOff true to turn on, false to turn off
     */
    async setOnOff(onOff: boolean) {
        await this.onoffCluster?.setOnOffAttribute(onOff);
    }

    getOnOff() {
        return this.onoffCluster?.getOnOffAttribute() ?? false;
    }

    /**
     * Toggles the device on or off
     * This is an example f a convenient device class API to control the device without need to access clusters
     */
    async toggle() {
        await this.onoffCluster?.setOnOffAttribute(!this.onoffCluster?.getOnOffAttribute());
    }

    // Add Listeners convenient for chosen attributes
    /**
     * Adds a listener for the OnOff attribute
     * This is an example of a convenient device class API to control the device without need to access clusters
     *
     * @param listener Listener function to be called when the attribute changes
     */
    addOnOffListener(listener: (newValue: boolean, oldValue: boolean) => MaybePromise<void>) {
        this.onoffCluster?.subscribeOnOffAttribute(listener);
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
        super(DeviceTypes.ON_OFF_PLUGIN_UNIT, initialAttributeValues, options);
    }

    static async create(
        onOffAttributeInitialValues?: AttributeInitialValues<typeof OnOff.Cluster.attributes>,
        options: EndpointOptions = {},
    ) {
        const device = new OnOffPluginUnitDevice(onOffAttributeInitialValues, options);
        await device.construction;
        return device;
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
        super(DeviceTypes.ON_OFF_LIGHT, initialAttributeValues, options);
    }

    static async create(
        onOffAttributeInitialValues?: AttributeInitialValues<typeof OnOff.Cluster.attributes>,
        options: EndpointOptions = {},
    ) {
        const device = new OnOffLightDevice(onOffAttributeInitialValues, options);
        await device.construction;
        return device;
    }

    protected override async addDeviceClusters(
        attributeInitialValues?: { [key: ClusterId]: AttributeInitialValues<any> },
        excludeList: ClusterId[] = [],
    ) {
        await super.addDeviceClusters(attributeInitialValues, [OnOff.Cluster.id]);
        if (!excludeList.includes(OnOff.Cluster.id)) {
            await this.addClusterServer(
                createDefaultOnOffClusterServer(
                    this.commandHandler,
                    getClusterInitialAttributeValues(
                        attributeInitialValues,
                        OnOff.Cluster.with(OnOff.Feature.LevelControlForLighting),
                    ),
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
