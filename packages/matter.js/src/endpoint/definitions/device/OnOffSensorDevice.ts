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
import {
    LevelControlBehavior as BaseLevelControlBehavior
} from "../../../behavior/definitions/level-control/LevelControlBehavior.js";
import {
    ColorControlBehavior as BaseColorControlBehavior
} from "../../../behavior/definitions/color-control/ColorControlBehavior.js";
import { MutableEndpoint } from "../../type/MutableEndpoint.js";
import { SupportedBehaviors } from "../../properties/SupportedBehaviors.js";
import { Identity } from "../../../util/Type.js";
import { MatterDeviceLibrarySpecificationV1_1 } from "../../../spec/Specifications.js";

/**
 * An On/Off Sensor is a measurement and sensing device that, when bound to a lighting device such as a Dimmable Light,
 * is capable of being used to switch the device on or off.
 *
 * @see {@link MatterDeviceLibrarySpecificationV1_1} § 7.8
 */
export interface OnOffSensorDevice extends Identity<typeof OnOffSensorDeviceDefinition> {}

export namespace OnOffSensorRequirements {
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
     * The {@link LevelControl} cluster is optional per the Matter specification
     *
     * We provide this alias for convenience.
     */
    export const LevelControlBehavior = BaseLevelControlBehavior;

    /**
     * The {@link ColorControl} cluster is optional per the Matter specification
     *
     * We provide this alias for convenience.
     */
    export const ColorControlBehavior = BaseColorControlBehavior;

    /**
     * An implementation for each server cluster supported by the endpoint per the Matter specification.
     */
    export const server = { mandatory: { Identify: IdentifyServer } };

    /**
     * A definition for each client cluster supported by the endpoint per the Matter specification.
     */
    export const client = {
        mandatory: { Identify: IdentifyBehavior, OnOff: OnOffBehavior },

        optional: {
            Groups: GroupsBehavior,
            Scenes: ScenesBehavior,
            LevelControl: LevelControlBehavior,
            ColorControl: ColorControlBehavior
        }
    };
}

export const OnOffSensorDeviceDefinition = MutableEndpoint({
    name: "OnOffSensor",
    deviceType: 0x850,
    deviceRevision: 2,
    requirements: OnOffSensorRequirements,
    behaviors: SupportedBehaviors(OnOffSensorRequirements.server.mandatory.Identify)
});

export const OnOffSensorDevice: OnOffSensorDevice = OnOffSensorDeviceDefinition;
