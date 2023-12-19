/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { IdentifyServer } from "../../../behavior/definitions/identify/IdentifyServer.js";
import { DoorLockServer } from "../../../behavior/definitions/door-lock/DoorLockServer.js";
import { TimeSyncBehavior } from "../../../behavior/definitions/time-sync/TimeSyncBehavior.js";
import { MutableEndpoint } from "../../type/MutableEndpoint.js";
import { SupportedBehaviors } from "../../part/SupportedBehaviors.js";
import { Identity } from "../../../util/Type.js";
import { MatterDeviceLibrarySpecificationV1_1 } from "../../../spec/Specifications.js";

export const DoorLockRequirements = {
    /**
     * An implementation for each server cluster supported by the endpoint per the Matter specification.
     */
    server: { mandatory: { Identify: IdentifyServer, DoorLock: DoorLockServer } },

    /**
     * A definition for each client cluster supported by the endpoint per the Matter specification.
     */
    client: { optional: { TimeSync: TimeSyncBehavior } }
};

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

/**
 * A Door Lock is a device used to secure a door. It is possible to actuate a door lock either by means of a manual or
 * a remote method.
 *
 * @see {@link MatterDeviceLibrarySpecificationV1_1} § 8.1
 */
export interface DoorLockDevice extends Identity<typeof DoorLockDeviceDefinition> {}

export const DoorLockDevice: DoorLockDevice = DoorLockDeviceDefinition;
