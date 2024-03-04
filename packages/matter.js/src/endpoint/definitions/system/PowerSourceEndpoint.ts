/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import {
    PowerSourceServer as BasePowerSourceServer
} from "../../../behavior/definitions/power-source/PowerSourceServer.js";
import { MutableEndpoint } from "../../type/MutableEndpoint.js";
import { DeviceClasses } from "../../../device/DeviceTypes.js";
import { SupportedBehaviors } from "../../properties/SupportedBehaviors.js";
import { Identity } from "../../../util/Type.js";
import { MatterDeviceLibrarySpecificationV1_1 } from "../../../spec/Specifications.js";

/**
 * @see {@link MatterDeviceLibrarySpecificationV1_1} § 2.2
 */
export interface PowerSourceEndpoint extends Identity<typeof PowerSourceEndpointDefinition> {}

export namespace PowerSourceRequirements {
    /**
     * The {@link PowerSource} cluster is required by the Matter specification
     *
     * We provide this alias for convenience.
     */
    export const PowerSourceServer = BasePowerSourceServer;

    /**
     * An implementation for each server cluster supported by the endpoint per the Matter specification.
     */
    export const server = { mandatory: { PowerSource: PowerSourceServer } };
}

export const PowerSourceEndpointDefinition = MutableEndpoint({
    name: "PowerSource",
    deviceType: 0x11,
    deviceRevision: 1,
    deviceClass: DeviceClasses.Utility,
    requirements: PowerSourceRequirements,
    behaviors: SupportedBehaviors(PowerSourceRequirements.server.mandatory.PowerSource)
});

export const PowerSourceEndpoint: PowerSourceEndpoint = PowerSourceEndpointDefinition;
