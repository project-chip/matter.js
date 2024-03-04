/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { IdentifyServer as BaseIdentifyServer } from "../../../behavior/definitions/identify/IdentifyServer.js";
import { GroupsServer as BaseGroupsServer } from "../../../behavior/definitions/groups/GroupsServer.js";
import { ScenesServer as BaseScenesServer } from "../../../behavior/definitions/scenes/ScenesServer.js";
import { OnOffServer as BaseOnOffServer } from "../../../behavior/definitions/on-off/OnOffServer.js";
import {
    LevelControlServer as BaseLevelControlServer
} from "../../../behavior/definitions/level-control/LevelControlServer.js";
import { MutableEndpoint } from "../../type/MutableEndpoint.js";
import { SupportedBehaviors } from "../../properties/SupportedBehaviors.js";
import { Identity } from "../../../util/Type.js";
import { MatterDeviceLibrarySpecificationV1_1 } from "../../../spec/Specifications.js";

/**
 * An On/Off Plug-in Unit is a device that is capable of being switched on or off by means of a bound controller device
 * such as an On/Off Light Switch or a Dimmer Switch. The On/Off Plug-in Unit is typically used to control a
 * conventional non-communicating light by switching its mains connection. Other appliances can be controlled this way
 * as well.
 *
 * @see {@link MatterDeviceLibrarySpecificationV1_1} § 5.1
 */
export interface OnOffPlugInUnitDevice extends Identity<typeof OnOffPlugInUnitDeviceDefinition> {}

export namespace OnOffPlugInUnitRequirements {
    /**
     * The {@link Identify} cluster is required by the Matter specification
     *
     * We provide this alias for convenience.
     */
    export const IdentifyServer = BaseIdentifyServer;

    /**
     * The {@link Groups} cluster is required by the Matter specification
     *
     * We provide this alias for convenience.
     */
    export const GroupsServer = BaseGroupsServer;

    /**
     * The {@link Scenes} cluster is required by the Matter specification
     *
     * We provide this alias for convenience.
     */
    export const ScenesServer = BaseScenesServer;

    /**
     * The {@link OnOff} cluster is required by the Matter specification
     *
     * We provide this alias for convenience.
     */
    export const OnOffServer = BaseOnOffServer;

    /**
     * The {@link LevelControl} cluster is optional per the Matter specification
     *
     * We provide this alias for convenience.
     */
    export const LevelControlServer = BaseLevelControlServer;

    /**
     * An implementation for each server cluster supported by the endpoint per the Matter specification.
     */
    export const server = {
        mandatory: { Identify: IdentifyServer, Groups: GroupsServer, Scenes: ScenesServer, OnOff: OnOffServer },
        optional: { LevelControl: LevelControlServer }
    };
}

export const OnOffPlugInUnitDeviceDefinition = MutableEndpoint({
    name: "OnOffPlugInUnit",
    deviceType: 0x10a,
    deviceRevision: 2,
    requirements: OnOffPlugInUnitRequirements,

    behaviors: SupportedBehaviors(
        OnOffPlugInUnitRequirements.server.mandatory.Identify,
        OnOffPlugInUnitRequirements.server.mandatory.Groups,
        OnOffPlugInUnitRequirements.server.mandatory.Scenes,
        OnOffPlugInUnitRequirements.server.mandatory.OnOff
    )
});

export const OnOffPlugInUnitDevice: OnOffPlugInUnitDevice = OnOffPlugInUnitDeviceDefinition;
