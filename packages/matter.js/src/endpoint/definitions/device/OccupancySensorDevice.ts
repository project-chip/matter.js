/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { IdentifyServer as BaseIdentifyServer } from "../../../behavior/definitions/identify/IdentifyServer.js";
import {
    OccupancySensingServer as BaseOccupancySensingServer
} from "../../../behavior/definitions/occupancy-sensing/OccupancySensingServer.js";
import { GroupsBehavior as BaseGroupsBehavior } from "../../../behavior/definitions/groups/GroupsBehavior.js";
import { MutableEndpoint } from "../../type/MutableEndpoint.js";
import { SupportedBehaviors } from "../../properties/SupportedBehaviors.js";
import { Identity } from "../../../util/Type.js";
import { MatterDeviceLibrarySpecificationV1_1 } from "../../../spec/Specifications.js";

/**
 * An Occupancy Sensor is a measurement and sensing device that is capable of measuring and reporting the occupancy
 * state in a designated area.
 *
 * @see {@link MatterDeviceLibrarySpecificationV1_1} § 7.3
 */
export interface OccupancySensorDevice extends Identity<typeof OccupancySensorDeviceDefinition> {}

export namespace OccupancySensorRequirements {
    /**
     * The {@link Identify} cluster is required by the Matter specification
     *
     * We provide this alias for convenience.
     */
    export const IdentifyServer = BaseIdentifyServer;

    /**
     * The {@link OccupancySensing} cluster is required by the Matter specification
     *
     * We provide this alias for convenience.
     */
    export const OccupancySensingServer = BaseOccupancySensingServer;

    /**
     * The {@link Groups} cluster is optional per the Matter specification
     *
     * We provide this alias for convenience.
     */
    export const GroupsBehavior = BaseGroupsBehavior;

    /**
     * An implementation for each server cluster supported by the endpoint per the Matter specification.
     */
    export const server = { mandatory: { Identify: IdentifyServer, OccupancySensing: OccupancySensingServer } };

    /**
     * A definition for each client cluster supported by the endpoint per the Matter specification.
     */
    export const client = { optional: { Groups: GroupsBehavior }, mandatory: {} };
}

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

export const OccupancySensorDevice: OccupancySensorDevice = OccupancySensorDeviceDefinition;
