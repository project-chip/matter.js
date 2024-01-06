/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { IdentifyServer } from "../../../behavior/definitions/identify/IdentifyServer.js";
import { OccupancySensingServer } from "../../../behavior/definitions/occupancy-sensing/OccupancySensingServer.js";
import { GroupsBehavior } from "../../../behavior/definitions/groups/GroupsBehavior.js";
import { MutableEndpoint } from "../../type/MutableEndpoint.js";
import { SupportedBehaviors } from "../../part/SupportedBehaviors.js";
import { Identity } from "../../../util/Type.js";
import { MatterDeviceLibrarySpecificationV1_1 } from "../../../spec/Specifications.js";

export const OccupancySensorRequirements = {
    /**
     * An implementation for each server cluster supported by the endpoint per the Matter specification.
     */
    server: { mandatory: { Identify: IdentifyServer, OccupancySensing: OccupancySensingServer } },

    /**
     * A definition for each client cluster supported by the endpoint per the Matter specification.
     */
    client: { optional: { Groups: GroupsBehavior } }
};

export const OccupancySensorDeviceDefinition = MutableEndpoint({
    name: "OccupancySensor",
    deviceType: 0x107,
    deviceRevision: 2,
    requirements: OccupancySensorRequirements,
    behaviors: SupportedBehaviors(
        OccupancySensorRequirements.server.mandatory.Identify,
        OccupancySensorRequirements.server.mandatory.OccupancySensing
    )
});

/**
 * An Occupancy Sensor is a measurement and sensing device that is capable of measuring and reporting the occupancy
 * state in a designated area.
 *
 * @see {@link MatterDeviceLibrarySpecificationV1_1} § 7.3
 */
export interface OccupancySensorDevice extends Identity<typeof OccupancySensorDeviceDefinition> {}

export const OccupancySensorDevice: OccupancySensorDevice = OccupancySensorDeviceDefinition;
