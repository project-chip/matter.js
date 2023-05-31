import { DeviceTypes, DeviceTypeDefinition } from "./DeviceTypes.js";
import { Device } from "./Device.js";
import { createDefaultOnOffClusterServer } from "../cluster/server/OnOffServer.js";
import { createDefaultGroupsClusterServer } from "../cluster/server/GroupsServer.js";
import { createDefaultScenesClusterServer } from "../cluster/server/ScenesServer.js";
import { createDefaultIdentifyClusterServer } from "../cluster/server/IdentifyServer.js";
import { createDefaultLevelControlClusterServer } from "../cluster/server/LevelControlServer.js";
import { createDefaultFanControlClusterServer } from "../cluster/server/FanControlServer.js";
import { AttributeInitialValues, ClusterServerHandlers } from "../cluster/server/ClusterServer.js";
import { IdentifyCluster } from "../cluster/IdentifyCluster.js";
import { OnOffCluster } from "../cluster/OnOffCluster.js";
import { LevelControlCluster } from "../cluster/LevelControlCluster.js";
import { FanControlCluster } from "../cluster/FanControlCluster.js";
import { ThermostatCluster } from "../cluster/ThermostatCluster.js";
import { extendPublicHandlerMethods } from "../util/NamedHandler.js";
import { BitSchema, TypeFromBitSchema } from "../schema/BitmapSchema.js";
import { Attributes, Cluster, Commands, Events } from "../cluster/Cluster.js";
import { createDefaultThermostatClusterServer } from "../cluster/server/ThermostatServer.js";

type HeatingCoolingDeviceCommands = {
    identify: ClusterServerHandlers<typeof IdentifyCluster>["identify"];
}

/**
 * Utility function to get the initial attribute values for a cluster out of an object with initial attribute values
 * for multiple clusters
 *
 * @param attributeInitialValues Object with initial attribute values for automatically added clusters
 * @param cluster Cluster to get the initial attribute values for
 */
function getClusterInitialAttributeValues<F extends BitSchema, SF extends TypeFromBitSchema<F>, A extends Attributes, C extends Commands, E extends Events>(attributeInitialValues: { [key: number]: AttributeInitialValues<any> } | undefined, cluster: Cluster<F, SF, A, C, E>): AttributeInitialValues<A> | undefined {
    if (attributeInitialValues === undefined) return undefined;
    return attributeInitialValues[cluster.id] as AttributeInitialValues<A>;
}

/** @internal */
class HeatingCoolingBaseDevice extends extendPublicHandlerMethods<typeof Device, HeatingCoolingDeviceCommands>(Device) {

    constructor(
        definition: DeviceTypeDefinition,
        attributeInitialValues?: { [key: number]: AttributeInitialValues<any> },
        endpointId?: number
    ) {
        super(definition, endpointId);
        this.addDeviceClusters(attributeInitialValues);
    }

    protected addDeviceClusters(attributeInitialValues?: { [key: number]: AttributeInitialValues<any> }) {
        this.addClusterServer(createDefaultIdentifyClusterServer({
            identify: async (data) => await this._executeHandler("identify", data)
        }));
        this.addClusterServer(createDefaultGroupsClusterServer());
        this.addClusterServer(createDefaultOnOffClusterServer(getClusterInitialAttributeValues(attributeInitialValues, OnOffCluster)));
        this.addClusterServer(createDefaultScenesClusterServer());
        this.addClusterServer(createDefaultLevelControlClusterServer(getClusterInitialAttributeValues(attributeInitialValues, LevelControlCluster)));
        this.addClusterServer(createDefaultFanControlClusterServer(getClusterInitialAttributeValues(attributeInitialValues, FanControlCluster)));
        this.addClusterServer(createDefaultThermostatClusterServer(getClusterInitialAttributeValues(attributeInitialValues, ThermostatCluster)));



    }

    async onOff(onOff: boolean) {
        this.getClusterServer(OnOffCluster)?.setOnOffAttribute(onOff);
    }

    addOnOffListener(listener: (newValue: boolean, oldValue: boolean) => void) {
        this.getClusterServer(OnOffCluster)?.subscribeOnOffAttribute(listener);
    }

    // Additional methods and listeners specific to the HeatingCoolingDevice can be added here
}

export class HVACDevice extends HeatingCoolingBaseDevice {
    constructor(
        attributeInitialValues?: { [key: number]: AttributeInitialValues<any> },
        endpointId?: number
    ) {
        super(DeviceTypes.HEATING_COOLING_UNIT, attributeInitialValues, endpointId);
    }
}

