/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { PowerSourceServer } from "../../../behavior/definitions/power-source/PowerSourceServer.js";
import { MutableEndpoint } from "../../type/MutableEndpoint.js";
import { DeviceClasses } from "../../../device/DeviceTypes.js";
import { SupportedBehaviors } from "../../part/SupportedBehaviors.js";
import { Identity } from "../../../util/Type.js";
import { MatterDeviceLibrarySpecificationV1_1 } from "../../../spec/Specifications.js";

export const PowerSourceRequirements = {
    /**
     * An implementation for each server cluster supported by the endpoint per the Matter specification.
     */
    server: { mandatory: { PowerSource: PowerSourceServer } }
};

export const PowerSourceEndpointDefinition = MutableEndpoint({
    name: "PowerSource",
    deviceType: 0x11,
    deviceRevision: 1,
    deviceClass: DeviceClasses.Utility,
    requirements: PowerSourceRequirements,
    behaviors: SupportedBehaviors(PowerSourceRequirements.server.mandatory.PowerSource)
});

/**
 * @see {@link MatterDeviceLibrarySpecificationV1_1} § 2.2
 */
export interface PowerSourceEndpoint extends Identity<typeof PowerSourceEndpointDefinition> {}

export const PowerSourceEndpoint: PowerSourceEndpoint = PowerSourceEndpointDefinition;
