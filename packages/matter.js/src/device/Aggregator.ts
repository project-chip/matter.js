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

export class Aggregator extends ComposedDevice {
    constructor(devices: Device[] = [], endpointId?: number) {
        // Aggregator is a Composed device with an DeviceTypes.AGGREGATOR device type
        super([DeviceTypes.AGGREGATOR], devices, endpointId);
    }

    override addDevice(): void {
        throw new Error("Aggregator does not support addDevice. Use addBridgedDevice instead.");
    }

    addBridgedDevice(device: Device, bridgedBasicInformation?: AttributeInitialValues<typeof BridgedDeviceBasicInformationCluster.attributes>): void {
        // Add DeviceTypes.BRIDGED_DEVICE device type to the device exposed via Aggregator
        const deviceTypes = device.getDeviceTypes();
        if (!deviceTypes.includes(DeviceTypes.BRIDGED_NODE)) {
            deviceTypes.push(DeviceTypes.BRIDGED_NODE);
            device.setDeviceTypes(deviceTypes);
        }
        if (bridgedBasicInformation !== undefined) {
            device.addClusterServer(ClusterServer(BridgedDeviceBasicInformationCluster, {}, bridgedBasicInformation, {}));
        } else {
            if (device.getClusterServer(BridgedDeviceBasicInformationCluster) === undefined) {
                throw new Error("BridgedDeviceBasicInformationCluster is required for bridged devices. Please add yourself or provide as second parameter");
            }
        }
        super.addDevice(device);
    }

    addBridgedDeviceWithPowerSourceInfo(device: Device, bridgedBasicInformation?: AttributeInitialValues<typeof BridgedDeviceBasicInformationCluster.attributes>): void {
        // Add DeviceTypes.BRIDGED_DEVICE device type to the device exposed via Aggregator
        const deviceTypes = device.getDeviceTypes();
        if (!deviceTypes.includes(DeviceTypes.BRIDGED_DEVICE_WITH_POWER_SOURCE_INFORMATION)) {
            deviceTypes.push(DeviceTypes.BRIDGED_DEVICE_WITH_POWER_SOURCE_INFORMATION);
            device.setDeviceTypes(deviceTypes);
        }
        if (bridgedBasicInformation !== undefined) {
            device.addClusterServer(ClusterServer(BridgedDeviceBasicInformationCluster, {}, bridgedBasicInformation, {}));
        } else {
            if (device.getClusterServer(BridgedDeviceBasicInformationCluster) === undefined) {
                throw new Error("BridgedDeviceBasicInformationCluster is required for bridged devices. Please add yourself or provide as second parameter");
            }
        }
        super.addDevice(device);
    }
}
