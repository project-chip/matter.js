/**
 * @license
 * Copyright 2022 The matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { DeviceTypes, DeviceTypeDefinition } from "./DeviceTypes.js";
import { Device } from "./Device.js";
import { createDefaultGroupsClusterServer } from "../cluster/server/GroupsServer.js";
import { createDefaultIdentifyClusterServer } from "../cluster/server/IdentifyServer.js";
import { AttributeInitialValues, ClusterServerHandlers } from "../cluster/server/ClusterServer.js";
import { IdentifyCluster, } from "../cluster/IdentifyCluster.js";
import { extendPublicHandlerMethods } from "../util/NamedHandler.js";
import { BitSchema, TypeFromBitSchema } from "../schema/BitmapSchema.js";
import { Attributes, Cluster, Commands, Events } from "../cluster/Cluster.js";
import { FanControlCluster, FanMode, FanModeSequence } from "../cluster/FanControlCluster.js";
import { LevelControlCluster, OnOffCluster, ThermostatCluster, createDefaultFanControlClusterServer, createDefaultLevelControlClusterServer, createDefaultOnOffClusterServer, createDefaultScenesClusterServer, createDefaultThermostatClusterServer } from "../cluster/index.js";

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
function getClusterInitialAttributeValues<F extends BitSchema, SF extends TypeFromBitSchema<F>, A extends Attributes, C extends Commands, E extends Events>(attributeInitialValues: { [key: number]: AttributeInitialValues<any> } | undefined, cluster: Cluster<F, SF, A, C, E>): AttributeInitialValues<A> | undefined {
    if (attributeInitialValues === undefined) return undefined;
    return attributeInitialValues[cluster.id] as AttributeInitialValues<A>;
}

/**
 * Abstract Base class for OnOff devices
 */
abstract class FanControlBaseDevice extends extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands>(Device) {

    /**
     * Creates a new OnOffBaseDevice
     *
     * @protected
     * @param definition Device type definition of the device to create
     * @param attributeInitialValues Optional object with initial attribute values for automatically added clusters
     * @param endpointId Optional endpoint ID of the device. If not set, the device will be instanced as a root device
     */
    protected constructor(definition: DeviceTypeDefinition, attributeInitialValues?: { [key: number]: AttributeInitialValues<any> }, endpointId?: number) {
        super(definition, endpointId);
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
        //this.addClusterServer(createDefaultOnOffClusterServer(getClusterInitialAttributeValues(attributeInitialValues, OnOffCluster)));
        this.addClusterServer(createDefaultFanControlClusterServer(getClusterInitialAttributeValues(attributeInitialValues, FanControlCluster)));
        
    }

    // async setFanMode(mode: FanMode) {
    //     this.getClusterServer(FanControlCluster)?.setFanModeAttribute(mode);
    // }

    // async setFanModeSequence(sequence: FanModeSequence) {
    //     this.getClusterServer(FanControlCluster)?.setFanModeSequenceAttribute(sequence);
    // }

    // async setPercentSetting(percent: number) {
    //     this.getClusterServer(FanControlCluster)?.setPercentSettingAttribute(percent);
    // }

    // async setPercentCurrent(percent: number) {
    //     this.getClusterServer(FanControlCluster)?.setPercentCurrentAttribute(percent);
    // }

    // async setSpeedMax(speed: number) {
    //     this.getClusterServer(FanControlCluster)?.setSpeedMaxAttribute(speed);
    // }

    // async setSpeedSetting(speed: number) {
    //     this.getClusterServer(FanControlCluster)?.setSpeedSettingAttribute(speed);
    // }

    // async setSpeedCurrent(speed: number) {
    //     this.getClusterServer(FanControlCluster)?.setSpeedCurrentAttribute(speed);
    // }

    // async setLocalTemperature(temperature: number) {
    //     this.getClusterServer(ThermostatCluster)?.setLocalTemperatureAttribute(temperature);
    // }

    // // Add Listeners convenient for chosen attributes
    // addOccupiedCoolingSetpointListener(listener: (newValue: number | null, oldValue: number | null) => void) {
    //     this.getClusterServer(ThermostatCluster)?.subscribeOccupiedCoolingSetpointAttribute(listener);
    // }    

    // addOccupiedHeatingSetpointListener(listener: (newValue: number | null, oldValue: number | null) => void) {
    //     this.getClusterServer(ThermostatCluster)?.subscribeOccupiedHeatingSetpointAttribute(listener);
    // }     
}


/**
 * Device class for an Fan Control Device
 */
export class FanControlDevice extends FanControlBaseDevice {
    constructor(fanControlAttributeInitialValues?: AttributeInitialValues<typeof FanControlCluster.attributes>, endpointId?: number) {
        super(DeviceTypes.FAN, fanControlAttributeInitialValues, endpointId);
    }
}
