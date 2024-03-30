/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { IdentifyServer as BaseIdentifyServer } from "../../../behavior/definitions/identify/IdentifyServer.js";
import { TimeSyncServer as BaseTimeSyncServer } from "../../../behavior/definitions/time-sync/TimeSyncServer.js";
import { DoorLockBehavior as BaseDoorLockBehavior } from "../../../behavior/definitions/door-lock/DoorLockBehavior.js";
import { IdentifyBehavior as BaseIdentifyBehavior } from "../../../behavior/definitions/identify/IdentifyBehavior.js";
import { GroupsBehavior as BaseGroupsBehavior } from "../../../behavior/definitions/groups/GroupsBehavior.js";
import { ScenesBehavior as BaseScenesBehavior } from "../../../behavior/definitions/scenes/ScenesBehavior.js";
import { MutableEndpoint } from "../../type/MutableEndpoint.js";
import { SupportedBehaviors } from "../../properties/SupportedBehaviors.js";
import { Identity } from "../../../util/Type.js";

/**
 * A Door Lock Controller is a device capable of controlling a door lock.
 *
 * @see {@link MatterSpecification.v11.Device} § 8.2
 */
export interface DoorLockControllerDevice extends Identity<typeof DoorLockControllerDeviceDefinition> {}

export namespace DoorLockControllerRequirements {
    /**
     * The Identify cluster is optional per the Matter specification
     *
     * We provide this alias to the default implementation {@link IdentifyServer} for convenience.
     */
    export const IdentifyServer = BaseIdentifyServer;

    /**
     * The TimeSync cluster is optional per the Matter specification
     *
     * We provide this alias to the default implementation {@link TimeSyncServer} for convenience.
     */
    export const TimeSyncServer = BaseTimeSyncServer;

    /**
     * The DoorLock cluster is required by the Matter specification
     *
     * We provide this alias to the default implementation {@link DoorLockBehavior} for convenience.
     */
    export const DoorLockBehavior = BaseDoorLockBehavior;

    /**
     * The Identify cluster is optional per the Matter specification
     *
     * We provide this alias to the default implementation {@link IdentifyBehavior} for convenience.
     */
    export const IdentifyBehavior = BaseIdentifyBehavior;

    /**
     * The Groups cluster is optional per the Matter specification
     *
     * We provide this alias to the default implementation {@link GroupsBehavior} for convenience.
     */
    export const GroupsBehavior = BaseGroupsBehavior;

    /**
     * The Scenes cluster is optional per the Matter specification
     *
     * We provide this alias to the default implementation {@link ScenesBehavior} for convenience.
     */
    export const ScenesBehavior = BaseScenesBehavior;

    /**
     * An implementation for each server cluster supported by the endpoint per the Matter specification.
     */
    export const server = { optional: { Identify: IdentifyServer, TimeSync: TimeSyncServer }, mandatory: {} };

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

export const DoorLockControllerDevice: DoorLockControllerDevice = DoorLockControllerDeviceDefinition;
