// additional commands to be allowed for registering and triggering handlers

import { LevelControl, OnOff } from "#clusters";
import { AttributeInitialValues, ClusterServerHandlers } from "../cluster/server/ClusterServerTypes.js";

import { extendPublicHandlerMethods } from "#general";
import { ClusterId } from "#types";
import { createDefaultLevelControlClusterServer } from "../cluster/server/LevelControlServer.js";
import { createDefaultOnOffClusterServer } from "../cluster/server/OnOffServer.js";
import { DeviceTypeDefinition, DeviceTypes } from "./DeviceTypes.js";
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
    constructor(
        definition: DeviceTypeDefinition,
        attributeInitialValues?: { [key: ClusterId]: AttributeInitialValues<any> },
        options: EndpointOptions = {},
        isLighting = false,
    ) {
        super(definition, attributeInitialValues, options, isLighting);
    }

    protected override addDeviceClusters(
        attributeInitialValues?: { [key: ClusterId]: AttributeInitialValues<any> },
        excludeList: ClusterId[] = [],
    ) {
        super.addDeviceClusters(attributeInitialValues, [...excludeList, OnOff.Cluster.id, LevelControl.Cluster.id]);
        if (!excludeList.includes(OnOff.Cluster.id)) {
            this.addClusterServer(
                createDefaultOnOffClusterServer(
                    this.commandHandler,
                    getClusterInitialAttributeValues(
                        attributeInitialValues,
                        OnOff.Cluster.with(OnOff.Feature.Lighting),
                    ),
                    this.isLighting,
                ),
            );
        }
        if (!excludeList.includes(LevelControl.Cluster.id)) {
            this.addClusterServer(
                createDefaultLevelControlClusterServer(
                    this.commandHandler,
                    getClusterInitialAttributeValues(
                        attributeInitialValues,
                        LevelControl.Cluster.with(LevelControl.Feature.OnOff, LevelControl.Feature.Lighting),
                    ),
                ),
            );
        }
    }

    getCurrentLevel() {
        return this.getClusterServer(LevelControl.Cluster)?.getCurrentLevelAttribute() ?? 0;
    }

    setCurrentLevel(level: number | null) {
        this.getClusterServer(LevelControl.Cluster)?.setCurrentLevelAttribute(level);
    }

    /**
     * Adds a listener for the CurrentLevel attribute
     *
     * @param listener Listener function to be called when the attribute changes
     */
    addCurrentLevelListener(listener: (newValue: number | null, oldValue: number | null) => void) {
        this.getClusterServer(LevelControl.Cluster)?.subscribeCurrentLevelAttribute(listener);
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
        super(DeviceTypes.DIMMABLE_PLUGIN_UNIT, initialAttributeValues, options, false);
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
        super(DeviceTypes.DIMMABLE_LIGHT, initialAttributeValues, options, true);
    }
}
