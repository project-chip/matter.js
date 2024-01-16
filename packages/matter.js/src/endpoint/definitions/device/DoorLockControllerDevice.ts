/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { TimeSyncServer as BaseTimeSyncServer } from "../../../behavior/definitions/time-sync/TimeSyncServer.js";
import { DoorLockBehavior as BaseDoorLockBehavior } from "../../../behavior/definitions/door-lock/DoorLockBehavior.js";
import { IdentifyBehavior as BaseIdentifyBehavior } from "../../../behavior/definitions/identify/IdentifyBehavior.js";
import { GroupsBehavior as BaseGroupsBehavior } from "../../../behavior/definitions/groups/GroupsBehavior.js";
import { ScenesBehavior as BaseScenesBehavior } from "../../../behavior/definitions/scenes/ScenesBehavior.js";
import { MutableEndpoint } from "../../type/MutableEndpoint.js";
import { SupportedBehaviors } from "../../part/SupportedBehaviors.js";
import { Identity } from "../../../util/Type.js";
import { MatterDeviceLibrarySpecificationV1_1 } from "../../../spec/Specifications.js";

export namespace DoorLockControllerRequirements {
    /**
     * The {@link TimeSync} cluster is optional per the Matter specification
     *
     * We provide this alias for convenience.
     */
    export const TimeSyncServer = BaseTimeSyncServer;

    /**
     * The {@link DoorLock} cluster is required by the Matter specification
     *
     * We provide this alias for convenience.
     */
    export const DoorLockBehavior = BaseDoorLockBehavior;

    /**
     * The {@link Identify} cluster is optional per the Matter specification
     *
     * We provide this alias for convenience.
     */
    export const IdentifyBehavior = BaseIdentifyBehavior;

    /**
     * The {@link Groups} cluster is optional per the Matter specification
     *
     * We provide this alias for convenience.
     */
    export const GroupsBehavior = BaseGroupsBehavior;

    /**
     * The {@link Scenes} cluster is optional per the Matter specification
     *
     * We provide this alias for convenience.
     */
    export const ScenesBehavior = BaseScenesBehavior;

    /**
     * An implementation for each server cluster supported by the endpoint per the Matter specification.
     */
    export const server = { optional: { TimeSync: TimeSyncServer }, mandatory: {} };

    /**
     * A definition for each client cluster supported by the endpoint per the Matter specification.
     */
    export const client = {
        mandatory: { DoorLock: DoorLockBehavior },
        optional: { Identify: IdentifyBehavior, Groups: GroupsBehavior, Scenes: ScenesBehavior }
    };
}

export const DoorLockControllerDeviceDefinition = MutableEndpoint({
    name: "DoorLockController",
    deviceType: 0xb,
    deviceRevision: 2,
    requirements: DoorLockControllerRequirements,
    behaviors: SupportedBehaviors()
});

/**
 * A Door Lock Controller is a device capable of controlling a door lock.
 *
 * @see {@link MatterDeviceLibrarySpecificationV1_1} § 8.2
 */
export interface DoorLockControllerDevice extends Identity<typeof DoorLockControllerDeviceDefinition> {}

export const DoorLockControllerDevice: DoorLockControllerDevice = DoorLockControllerDeviceDefinition;
