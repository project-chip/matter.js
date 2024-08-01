/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { IdentifyServer as BaseIdentifyServer } from "../../../behavior/definitions/identify/IdentifyServer.js";
import { DoorLockServer as BaseDoorLockServer } from "../../../behavior/definitions/door-lock/DoorLockServer.js";
import { GroupsServer as BaseGroupsServer } from "../../../behavior/definitions/groups/GroupsServer.js";
import {
    ScenesManagementServer as BaseScenesManagementServer
} from "../../../behavior/definitions/scenes-management/ScenesManagementServer.js";
import { MutableEndpoint } from "../../type/MutableEndpoint.js";
import { SupportedBehaviors } from "../../properties/SupportedBehaviors.js";
import { Identity } from "../../../util/Type.js";

/**
 * A Door Lock is a device used to secure a door. It is possible to actuate a door lock either by means of a manual or
 * a remote method.
 *
 * @see {@link MatterSpecification.v13.Device} § 8.1
 */
export interface DoorLockDevice extends Identity<typeof DoorLockDeviceDefinition> {}

export namespace DoorLockRequirements {
    /**
     * The Identify cluster is required by the Matter specification.
     *
     * We provide this alias to the default implementation {@link IdentifyServer} for convenience.
     */
    export const IdentifyServer = BaseIdentifyServer;

    /**
     * The DoorLock cluster is required by the Matter specification.
     *
     * We provide this alias to the default implementation {@link DoorLockServer} for convenience.
     */
    export const DoorLockServer = BaseDoorLockServer;

    /**
     * The Groups cluster is optional per the Matter specification.
     *
     * We provide this alias to the default implementation {@link GroupsServer} for convenience.
     */
    export const GroupsServer = BaseGroupsServer;

    /**
     * The ScenesManagement cluster is optional per the Matter specification.
     *
     * We provide this alias to the default implementation {@link ScenesManagementServer} for convenience.
     */
    export const ScenesManagementServer = BaseScenesManagementServer;

    /**
     * An implementation for each server cluster supported by the endpoint per the Matter specification.
     */
    export const server = {
        mandatory: { Identify: IdentifyServer, DoorLock: DoorLockServer },
        optional: { Groups: GroupsServer, ScenesManagement: ScenesManagementServer }
    };
}

export const DoorLockDeviceDefinition = MutableEndpoint({
    name: "DoorLock",
    deviceType: 0xa,
    deviceRevision: 3,
    requirements: DoorLockRequirements,
    behaviors: SupportedBehaviors(
        DoorLockRequirements.server.mandatory.Identify,
        DoorLockRequirements.server.mandatory.DoorLock
    )
});

export const DoorLockDevice: DoorLockDevice = DoorLockDeviceDefinition;
