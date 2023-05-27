/**
 * @license
 * Copyright 2022 The matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { Device } from "./Device.js";
import { DeviceTypes } from "./DeviceTypes.js";
import { ComposedDevice } from "./ComposedDevice.js";
import { AttributeInitialValues } from "../cluster/server/ClusterServer.js";
import { BridgedDeviceBasicInformationCluster } from "../cluster/BridgedDeviceBasicInformationCluster.js";
import { ClusterServer } from "../protocol/interaction/InteractionServer.js";

/**
 * An Aggregator is a special endpoint that exposes multiple devices as a "bridge" into the matter ecosystem.
 * Use the `addBridgedDevice` or `addBridgedDeviceWithPowerSourceInfo` method to add the devices and provide the details
 * for the "Bridged Device Basic Information Cluster". The BridgedDeviceBasicInformationCluster is then added automatically.
 * If Power source information should be provided you need to also add the needed clusters (PowerSourceConfigurationCluster
 * and PowerSourceCluster) to the device!
 */
export class Aggregator extends ComposedDevice {
    /**
     * Create a new Aggregator instance and optionally directly add devices to it. If this is used the devices must
     * already have the BridgedDeviceBasicInformationCluster added!
     * @param devices Array of devices to add
     * @param endpointId Optional endpoint ID to use. If not provided will automatically be assigned
     */
    constructor(devices: Device[] = [], endpointId?: number) {
        // Aggregator is a Composed device with an DeviceTypes.AGGREGATOR device type
        super([DeviceTypes.AGGREGATOR], [], endpointId);
        devices.forEach(device => this.addBridgedDevice(device));
    }

    /**
     * @deprecated Use addBridgedDevice or addBridgedDeviceWithPowerSourceInfo instead
     */
    override addDevice(): void {
        throw new Error("Aggregator does not support addDevice. Use addBridgedDevice instead.");
    }

    /**
     * Add a bridged device to the Aggregator. If provided the bridgedBasicInformation is used to automatically add the
     * BridgedDeviceBasicInformationCluster to the device. If not provided the BridgedDeviceBasicInformationCluster must
     * be already existing on the device!
     *
     * @param device Device instance to add
     * @param bridgedBasicInformation Optional BridgedDeviceBasicInformationCluster attribute values to
     */
    addBridgedDevice(device: Device, bridgedBasicInformation?: AttributeInitialValues<typeof BridgedDeviceBasicInformationCluster.attributes>): void {
        // Add DeviceTypes.BRIDGED_DEVICE device type to the device exposed via Aggregator
        const deviceTypes = device.getDeviceTypes();
        if (!deviceTypes.includes(DeviceTypes.BRIDGED_NODE)) {
            deviceTypes.push(DeviceTypes.BRIDGED_NODE);
            device.setDeviceTypes(deviceTypes);
        }
        if (bridgedBasicInformation !== undefined) {
            device.addClusterServer(ClusterServer(
                BridgedDeviceBasicInformationCluster,
                bridgedBasicInformation,
                {},
                {
                    reachableChanged: true
                }
            ));
        } else {
            if (!device.hasClusterServer(BridgedDeviceBasicInformationCluster)) {
                throw new Error("BridgedDeviceBasicInformationCluster is required for bridged devices. Please add yourself or provide as second parameter");
            }
        }
        super.addDevice(device);
    }

    /**
     * Add a bridged device with power source information to the Aggregator. If provided the bridgedBasicInformation is
     * used to automatically add the BridgedDeviceBasicInformationCluster to the device. If not provided the
     * BridgedDeviceBasicInformationCluster must be already existing on the device!
     * The required clusters PowerSourceConfigurationCluster and PowerSourceCluster needs to be added manually to the device!
     *
     * @param device Device instance to add
     * @param bridgedBasicInformation Optional BridgedDeviceBasicInformationCluster attribute values to
     */
    addBridgedDeviceWithPowerSourceInfo(device: Device, bridgedBasicInformation?: AttributeInitialValues<typeof BridgedDeviceBasicInformationCluster.attributes>): void {
        // Add DeviceTypes.BRIDGED_DEVICE_WITH_POWER_SOURCE_INFORMATION device type to the device exposed via Aggregator
        const deviceTypes = device.getDeviceTypes();
        if (!deviceTypes.includes(DeviceTypes.BRIDGED_DEVICE_WITH_POWER_SOURCE_INFORMATION)) {
            deviceTypes.push(DeviceTypes.BRIDGED_DEVICE_WITH_POWER_SOURCE_INFORMATION);
            device.setDeviceTypes(deviceTypes);
        }
        if (bridgedBasicInformation !== undefined) {
            device.addClusterServer(ClusterServer(BridgedDeviceBasicInformationCluster, bridgedBasicInformation, {}));
        } else {
            if (!device.hasClusterServer(BridgedDeviceBasicInformationCluster)) {
                throw new Error("BridgedDeviceBasicInformationCluster is required for bridged devices. Please add yourself or provide as second parameter");
            }
        }
        super.addDevice(device);
    }

    /**
     * Returns all bridged devices added to the Aggregator
     *
     * @returns Array of bridged devices
     */
    getBridgedDevices() {
        return super.getDevices();
    }
}
