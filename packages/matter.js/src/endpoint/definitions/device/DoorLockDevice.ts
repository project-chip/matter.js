/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { IdentifyServer as BaseIdentifyServer } from "../../../behavior/definitions/identify/IdentifyServer.js";
import { DoorLockServer as BaseDoorLockServer } from "../../../behavior/definitions/door-lock/DoorLockServer.js";
import { TimeSyncBehavior as BaseTimeSyncBehavior } from "../../../behavior/definitions/time-sync/TimeSyncBehavior.js";
import { MutableEndpoint } from "../../type/MutableEndpoint.js";
import { SupportedBehaviors } from "../../properties/SupportedBehaviors.js";
import { Identity } from "../../../util/Type.js";
import { MatterDeviceLibrarySpecificationV1_1 } from "../../../spec/Specifications.js";

/**
 * A Door Lock is a device used to secure a door. It is possible to actuate a door lock either by means of a manual or
 * a remote method.
 *
 * @see {@link MatterDeviceLibrarySpecificationV1_1} § 8.1
 */
export interface DoorLockDevice extends Identity<typeof DoorLockDeviceDefinition> {}

export namespace DoorLockRequirements {
    /**
     * The {@link Identify} cluster is required by the Matter specification
     *
     * We provide this alias for convenience.
     */
    export const IdentifyServer = BaseIdentifyServer;

    /**
     * The {@link DoorLock} cluster is required by the Matter specification
     *
     * We provide this alias for convenience.
     */
    export const DoorLockServer = BaseDoorLockServer;

    /**
     * The {@link TimeSync} cluster is optional per the Matter specification
     *
     * We provide this alias for convenience.
     */
    export const TimeSyncBehavior = BaseTimeSyncBehavior;

    /**
     * An implementation for each server cluster supported by the endpoint per the Matter specification.
     */
    export const server = { mandatory: { Identify: IdentifyServer, DoorLock: DoorLockServer } };

    /**
     * A definition for each client cluster supported by the endpoint per the Matter specification.
     */
    export const client = { optional: { TimeSync: TimeSyncBehavior }, mandatory: {} };
}

export const DoorLockDeviceDefinition = MutableEndpoint({
    name: "DoorLock",
    deviceType: 0xa,
    deviceRevision: 2,
    requirements: DoorLockRequirements,
    behaviors: SupportedBehaviors(
        DoorLockRequirements.server.mandatory.Identify,
        DoorLockRequirements.server.mandatory.DoorLock
    )
});

export const DoorLockDevice: DoorLockDevice = DoorLockDeviceDefinition;
