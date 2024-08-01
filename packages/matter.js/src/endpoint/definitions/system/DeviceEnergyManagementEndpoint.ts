/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import {
    DeviceEnergyManagementServer as BaseDeviceEnergyManagementServer
} from "../../../behavior/definitions/device-energy-management/DeviceEnergyManagementServer.js";
import {
    DeviceEnergyManagementModeServer as BaseDeviceEnergyManagementModeServer
} from "../../../behavior/definitions/device-energy-management-mode/DeviceEnergyManagementModeServer.js";
import { MutableEndpoint } from "../../type/MutableEndpoint.js";
import { DeviceClasses } from "../../../device/DeviceTypes.js";
import { SupportedBehaviors } from "../../properties/SupportedBehaviors.js";
import { Identity } from "../../../util/Type.js";

/**
 * A Device Energy Management device provides reporting and optionally adjustment of the electrical power planned on
 * being consumed or produced by the device.
 *
 * @see {@link MatterSpecification.v13.Device} § 2.7
 */
export interface DeviceEnergyManagementEndpoint extends Identity<typeof DeviceEnergyManagementEndpointDefinition> {}

export namespace DeviceEnergyManagementRequirements {
    /**
     * The DeviceEnergyManagement cluster is optional per the Matter specification.
     *
     * We provide this alias to the default implementation {@link DeviceEnergyManagementServer} for convenience.
     */
    export const DeviceEnergyManagementServer = BaseDeviceEnergyManagementServer;

    /**
     * The DeviceEnergyManagementMode cluster is optional per the Matter specification.
     *
     * We provide this alias to the default implementation {@link DeviceEnergyManagementModeServer} for convenience.
     */
    export const DeviceEnergyManagementModeServer = BaseDeviceEnergyManagementModeServer;

    /**
     * An implementation for each server cluster supported by the endpoint per the Matter specification.
     */
    export const server = {
        optional: {
            DeviceEnergyManagement: DeviceEnergyManagementServer,
            DeviceEnergyManagementMode: DeviceEnergyManagementModeServer
        },
        mandatory: {}
    };
}

export const DeviceEnergyManagementEndpointDefinition = MutableEndpoint({
    name: "DeviceEnergyManagement",
    deviceType: 0x50d,
    deviceRevision: 1,
    deviceClass: DeviceClasses.Utility,
    requirements: DeviceEnergyManagementRequirements,
    behaviors: SupportedBehaviors()
});

export const DeviceEnergyManagementEndpoint: DeviceEnergyManagementEndpoint = DeviceEnergyManagementEndpointDefinition;
