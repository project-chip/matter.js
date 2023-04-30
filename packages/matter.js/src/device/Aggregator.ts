/**
 * @license
 * Copyright 2022 The matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { Device } from "./Device.js";
import { DEVICE } from "../common/DeviceTypes.js";
import { ComposedDevice } from "./ComposedDevice.js";
import { AttributeInitialValues } from "../cluster/server/ClusterServer.js";
import { BridgedDeviceBasicInformationCluster } from "../cluster/BridgedDeviceBasicInformationCluster.js";
import { ClusterServer } from "../protocol/interaction/InteractionServer.js";

export class Aggregator extends ComposedDevice {
    constructor(devices: Device[] = [], endpointId?: number) {
        // Aggregator is a Composed device with an DEVICE.AGGREGATOR device type
        super([DEVICE.AGGREGATOR], devices, endpointId);
    }

    override addDevice(): void {
        throw new Error("Aggregator does not support addDevice. Use addBridgedDevice instead.");
    }

    addBridgedDevice(device: Device, bridgedBasicInformation?: AttributeInitialValues<typeof BridgedDeviceBasicInformationCluster.attributes>): void {
        // Add DEVICE.BRIDGED_DEVICE device type to the device exposed via Aggregator
        const deviceTypes = device.getDeviceTypes();
        if (!deviceTypes.includes(DEVICE.BRIDGED_NODE)) {
            deviceTypes.push(DEVICE.BRIDGED_NODE);
            device.setDeviceTypes(deviceTypes);
        }
        if (bridgedBasicInformation !== undefined) {
            device.addClusterServer(new ClusterServer(BridgedDeviceBasicInformationCluster, {}, bridgedBasicInformation, {}));
        }
        super.addDevice(device);
    }

    addBridgedDeviceWithPowerSourceInfo(device: Device, bridgedBasicInformation?: AttributeInitialValues<typeof BridgedDeviceBasicInformationCluster.attributes>): void {
        // Add DEVICE.BRIDGED_DEVICE device type to the device exposed via Aggregator
        const deviceTypes = device.getDeviceTypes();
        if (!deviceTypes.includes(DEVICE.BRIDGED_DEVICE_WITH_POWER_SOURCE_INFORMATION)) {
            deviceTypes.push(DEVICE.BRIDGED_DEVICE_WITH_POWER_SOURCE_INFORMATION);
            device.setDeviceTypes(deviceTypes);
        }
        if (bridgedBasicInformation !== undefined) {
            device.addClusterServer(new ClusterServer(BridgedDeviceBasicInformationCluster, {}, bridgedBasicInformation, {}));
        }
        super.addDevice(device);
    }
}
