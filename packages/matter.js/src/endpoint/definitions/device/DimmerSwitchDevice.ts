/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { IdentifyServer as BaseIdentifyServer } from "../../../behavior/definitions/identify/IdentifyServer.js";
import { IdentifyBehavior as BaseIdentifyBehavior } from "../../../behavior/definitions/identify/IdentifyBehavior.js";
import { OnOffBehavior as BaseOnOffBehavior } from "../../../behavior/definitions/on-off/OnOffBehavior.js";
import {
    LevelControlBehavior as BaseLevelControlBehavior
} from "../../../behavior/definitions/level-control/LevelControlBehavior.js";
import { GroupsBehavior as BaseGroupsBehavior } from "../../../behavior/definitions/groups/GroupsBehavior.js";
import { ScenesBehavior as BaseScenesBehavior } from "../../../behavior/definitions/scenes/ScenesBehavior.js";
import { MutableEndpoint } from "../../type/MutableEndpoint.js";
import { SupportedBehaviors } from "../../properties/SupportedBehaviors.js";
import { Identity } from "../../../util/Type.js";
import { MatterDeviceLibrarySpecificationV1_1 } from "../../../spec/Specifications.js";

/**
 * A Dimmer Switch is a controller device that, when bound to a lighting device such as a Dimmable Light, is capable of
 * being used to switch the device on or off and adjust the intensity of the light being emitted.
 *
 * @see {@link MatterDeviceLibrarySpecificationV1_1} § 6.2
 */
export interface DimmerSwitchDevice extends Identity<typeof DimmerSwitchDeviceDefinition> {}

export namespace DimmerSwitchRequirements {
    /**
     * The {@link Identify} cluster is required by the Matter specification
     *
     * We provide this alias for convenience.
     */
    export const IdentifyServer = BaseIdentifyServer;

    /**
     * The {@link Identify} cluster is required by the Matter specification
     *
     * We provide this alias for convenience.
     */
    export const IdentifyBehavior = BaseIdentifyBehavior;

    /**
     * The {@link OnOff} cluster is required by the Matter specification
     *
     * We provide this alias for convenience.
     */
    export const OnOffBehavior = BaseOnOffBehavior;

    /**
     * The {@link LevelControl} cluster is required by the Matter specification
     *
     * We provide this alias for convenience.
     */
    export const LevelControlBehavior = BaseLevelControlBehavior;

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
    export const server = { mandatory: { Identify: IdentifyServer } };

    /**
     * A definition for each client cluster supported by the endpoint per the Matter specification.
     */
    export const client = {
        mandatory: { Identify: IdentifyBehavior, OnOff: OnOffBehavior, LevelControl: LevelControlBehavior },
        optional: { Groups: GroupsBehavior, Scenes: ScenesBehavior }
    };
}

export const DimmerSwitchDeviceDefinition = MutableEndpoint({
    name: "DimmerSwitch",
    deviceType: 0x104,
    deviceRevision: 2,
    requirements: DimmerSwitchRequirements,
    behaviors: SupportedBehaviors(DimmerSwitchRequirements.server.mandatory.Identify)
});

export const DimmerSwitchDevice: DimmerSwitchDevice = DimmerSwitchDeviceDefinition;
