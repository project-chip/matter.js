// additional commands to be allowed for registering and triggering handlers

import { LevelControl } from "../cluster/definitions/LevelControlCluster.js";
import { OnOff } from "../cluster/definitions/OnOffCluster.js";
import {
    AttributeInitialValues,
    ClusterServerHandlers,
    ClusterServerObjForCluster,
} from "../cluster/server/ClusterServerTypes.js";

import { createDefaultLevelControlClusterServer } from "../cluster/server/LevelControlServer.js";
import { createDefaultOnOffClusterServer } from "../cluster/server/OnOffServer.js";
import { ClusterId } from "../datatype/ClusterId.js";
import { extendPublicHandlerMethods } from "../util/NamedHandler.js";
import { MaybePromise } from "../util/Promises.js";
import { DeviceTypes } from "./DeviceTypes.js";
import { EndpointOptions } from "./Endpoint.js";
import { OnOffBaseDevice, getClusterInitialAttributeValues } from "./OnOffDevices.js";

type DimmableDeviceCommands = {
    moveToLevel: ClusterServerHandlers<typeof LevelControl.Complete>["moveToLevel"];
    move: ClusterServerHandlers<typeof LevelControl.Complete>["move"];
    step: ClusterServerHandlers<typeof LevelControl.Complete>["step"];
    stop: ClusterServerHandlers<typeof LevelControl.Complete>["stop"];
    moveToLevelWithOnOff: ClusterServerHandlers<typeof LevelControl.Complete>["moveToLevelWithOnOff"];
    moveWithOnOff: ClusterServerHandlers<typeof LevelControl.Complete>["moveWithOnOff"];
    stepWithOnOff: ClusterServerHandlers<typeof LevelControl.Complete>["stepWithOnOff"];
    stopWithOnOff: ClusterServerHandlers<typeof LevelControl.Complete>["stopWithOnOff"];
};

class DimmableBaseDevice extends extendPublicHandlerMethods<typeof OnOffBaseDevice, DimmableDeviceCommands>(
    OnOffBaseDevice,
) {
    protected levelControlCluster?: ClusterServerObjForCluster<typeof LevelControl.Cluster>;

    protected override async addDeviceClusters(
        attributeInitialValues?: { [key: ClusterId]: AttributeInitialValues<any> },
        excludeList: ClusterId[] = [],
    ) {
        await super.addDeviceClusters(attributeInitialValues, [
            ...excludeList,
            OnOff.Cluster.id,
            LevelControl.Cluster.id,
        ]);
        if (!excludeList.includes(OnOff.Cluster.id)) {
            this.onoffCluster = createDefaultOnOffClusterServer(
                this.commandHandler,
                getClusterInitialAttributeValues(
                    attributeInitialValues,
                    OnOff.Cluster.with(OnOff.Feature.LevelControlForLighting),
                ),
            );
            await this.addClusterServer(this.onoffCluster);
        }
        if (!excludeList.includes(LevelControl.Cluster.id)) {
            this.levelControlCluster = createDefaultLevelControlClusterServer(
                this.commandHandler,
                getClusterInitialAttributeValues(
                    attributeInitialValues,
                    LevelControl.Cluster.with(LevelControl.Feature.OnOff, LevelControl.Feature.Lighting),
                ),
            );
            await this.addClusterServer(this.levelControlCluster);
        }
    }

    getCurrentLevel() {
        return this.levelControlCluster?.getCurrentLevelAttribute() ?? 0;
    }

    async setCurrentLevel(level: number | null) {
        await this.levelControlCluster?.setCurrentLevelAttribute(level);
    }

    /**
     * Adds a listener for the CurrentLevel attribute
     *
     * @param listener Listener function to be called when the attribute changes
     */
    addCurrentLevelListener(listener: (newValue: number | null, oldValue: number | null) => MaybePromise<void>) {
        this.levelControlCluster?.subscribeCurrentLevelAttribute(listener);
    }
}

export class DimmablePluginUnitDevice extends DimmableBaseDevice {
    constructor(
        onOffAttributeInitialValues?: AttributeInitialValues<typeof OnOff.Cluster.attributes>,
        dimmableAttributeValues?: AttributeInitialValues<typeof LevelControl.Cluster.attributes>,
        options: EndpointOptions = {},
    ) {
        const initialAttributeValues: { [key: ClusterId]: AttributeInitialValues<any> } = {};
        if (onOffAttributeInitialValues !== undefined) {
            initialAttributeValues[OnOff.Cluster.id] = onOffAttributeInitialValues;
        }
        if (dimmableAttributeValues !== undefined) {
            initialAttributeValues[LevelControl.Cluster.id] = dimmableAttributeValues;
        }
        super(DeviceTypes.DIMMABLE_PLUGIN_UNIT, initialAttributeValues, options);
    }

    static async create(
        onOffAttributeInitialValues?: AttributeInitialValues<typeof OnOff.Cluster.attributes>,
        dimmableAttributeValues?: AttributeInitialValues<typeof LevelControl.Cluster.attributes>,
        options: EndpointOptions = {},
    ) {
        const device = new DimmablePluginUnitDevice(onOffAttributeInitialValues, dimmableAttributeValues, options);
        await device.construction;
        return device;
    }
}

export class DimmableLightDevice extends DimmableBaseDevice {
    constructor(
        onOffAttributeInitialValues?: AttributeInitialValues<typeof OnOff.Cluster.attributes>,
        dimmableAttributeValues?: AttributeInitialValues<typeof LevelControl.Cluster.attributes>,
        options: EndpointOptions = {},
    ) {
        const initialAttributeValues: { [key: ClusterId]: AttributeInitialValues<any> } = {};
        if (onOffAttributeInitialValues !== undefined) {
            initialAttributeValues[OnOff.Cluster.id] = onOffAttributeInitialValues;
        }
        if (dimmableAttributeValues !== undefined) {
            initialAttributeValues[LevelControl.Cluster.id] = dimmableAttributeValues;
        }
        super(DeviceTypes.DIMMABLE_LIGHT, initialAttributeValues, options);
    }

    static async create(
        onOffAttributeInitialValues?: AttributeInitialValues<typeof OnOff.Cluster.attributes>,
        dimmableAttributeValues?: AttributeInitialValues<typeof LevelControl.Cluster.attributes>,
        options: EndpointOptions = {},
    ) {
        const device = new DimmableLightDevice(onOffAttributeInitialValues, dimmableAttributeValues, options);
        await device.construction;
        return device;
    }
}
