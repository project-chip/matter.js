/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { IdentifyServer as BaseIdentifyServer } from "../../../behavior/definitions/identify/IdentifyServer.js";
import { IdentifyBehavior as BaseIdentifyBehavior } from "../../../behavior/definitions/identify/IdentifyBehavior.js";
import { OnOffBehavior as BaseOnOffBehavior } from "../../../behavior/definitions/on-off/OnOffBehavior.js";
import { GroupsBehavior as BaseGroupsBehavior } from "../../../behavior/definitions/groups/GroupsBehavior.js";
import { ScenesBehavior as BaseScenesBehavior } from "../../../behavior/definitions/scenes/ScenesBehavior.js";
import { MutableEndpoint } from "../../type/MutableEndpoint.js";
import { SupportedBehaviors } from "../../properties/SupportedBehaviors.js";
import { Identity } from "../../../util/Type.js";

/**
 * An On/Off Light Switch is a controller device that, when bound to a lighting device such as an On/Off Light, is
 * capable of being used to switch the device on or off.
 *
 * @see {@link MatterSpecification.v11.Device} § 6.1
 */
export interface OnOffLightSwitchDevice extends Identity<typeof OnOffLightSwitchDeviceDefinition> {}

export namespace OnOffLightSwitchRequirements {
    /**
     * The Identify cluster is required by the Matter specification
     *
     * We provide this alias to the default implementation {@link IdentifyServer} for convenience.
     */
    export const IdentifyServer = BaseIdentifyServer;

    /**
     * The Identify cluster is required by the Matter specification
     *
     * We provide this alias to the default implementation {@link IdentifyBehavior} for convenience.
     */
    export const IdentifyBehavior = BaseIdentifyBehavior;

    /**
     * The OnOff cluster is required by the Matter specification
     *
     * We provide this alias to the default implementation {@link OnOffBehavior} for convenience.
     */
    export const OnOffBehavior = BaseOnOffBehavior;

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
    export const server = { mandatory: { Identify: IdentifyServer } };

    /**
     * A definition for each client cluster supported by the endpoint per the Matter specification.
     */
    export const client = {
        mandatory: { Identify: IdentifyBehavior, OnOff: OnOffBehavior },
        optional: { Groups: GroupsBehavior, Scenes: ScenesBehavior }
    };
}

export const OnOffLightSwitchDeviceDefinition = MutableEndpoint({
    name: "OnOffLightSwitch",
    deviceType: 0x103,
    deviceRevision: 2,
    requirements: OnOffLightSwitchRequirements,
    behaviors: SupportedBehaviors(OnOffLightSwitchRequirements.server.mandatory.Identify)
});

export const OnOffLightSwitchDevice: OnOffLightSwitchDevice = OnOffLightSwitchDeviceDefinition;
