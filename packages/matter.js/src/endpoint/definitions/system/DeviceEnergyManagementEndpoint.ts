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
 * DeviceEnergyManagementEndpoint requires DeviceEnergyManagement cluster but DeviceEnergyManagement is not added by
 * default because you must select the features your device supports. You can add manually using
 * DeviceEnergyManagementEndpoint.with().
 *
 * @see {@link MatterSpecification.v13.Device} § 2.7
 */
export interface DeviceEnergyManagementEndpoint extends Identity<typeof DeviceEnergyManagementEndpointDefinition> {}

export namespace DeviceEnergyManagementRequirements {
    /**
     * The DeviceEnergyManagement cluster is required by the Matter specification
     *
     * We provide this alias to the default implementation {@link DeviceEnergyManagementServer} for convenience.
     */
    export const DeviceEnergyManagementServer = BaseDeviceEnergyManagementServer;

    /**
     * The DeviceEnergyManagementMode cluster is required by the Matter specification
     *
     * We provide this alias to the default implementation {@link DeviceEnergyManagementModeServer} for convenience.
     */
    export const DeviceEnergyManagementModeServer = BaseDeviceEnergyManagementModeServer;

    /**
     * An implementation for each server cluster supported by the endpoint per the Matter specification.
     */
    export const server = {
        mandatory: {
            DeviceEnergyManagement: DeviceEnergyManagementServer,
            DeviceEnergyManagementMode: DeviceEnergyManagementModeServer
        }
    };
}

export const DeviceEnergyManagementEndpointDefinition = MutableEndpoint({
    name: "DeviceEnergyManagement",
    deviceType: 0x50d,
    deviceRevision: 1,
    deviceClass: DeviceClasses.Utility,
    requirements: DeviceEnergyManagementRequirements,
    behaviors: SupportedBehaviors(DeviceEnergyManagementRequirements.server.mandatory.DeviceEnergyManagementMode)
});

export const DeviceEnergyManagementEndpoint: DeviceEnergyManagementEndpoint = DeviceEnergyManagementEndpointDefinition;
