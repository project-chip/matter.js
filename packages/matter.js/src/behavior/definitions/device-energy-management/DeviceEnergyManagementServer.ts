/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DescriptorServer } from "../descriptor/DescriptorServer.js";
import { DeviceEnergyManagementBehavior } from "./DeviceEnergyManagementBehavior.js";

/**
 * This is the default server implementation of {@link DeviceEnergyManagementBehavior}.
 *
 * The Matter specification requires the DeviceEnergyManagement cluster to support features we do not enable by
 * default. You should use {@link DeviceEnergyManagementServer.with} to specialize the class for the features your
 * implementation supports.
 */
export class DeviceEnergyManagementServer extends DeviceEnergyManagementBehavior {
    override initialize() {
        // Technically ElectricalSensor also requires Device EnergyManagementMode (as of Matter 1.3) but no other device
        // type requires DeviceEnergyManagement
        this.agent.get(DescriptorServer).addDeviceTypes("ElectricalSensor");
    }
}
