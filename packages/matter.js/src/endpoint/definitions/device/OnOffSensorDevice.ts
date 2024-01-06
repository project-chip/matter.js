/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { IdentifyBehavior } from "../../../behavior/definitions/identify/IdentifyBehavior.js";
import { OnOffBehavior } from "../../../behavior/definitions/on-off/OnOffBehavior.js";
import { GroupsBehavior } from "../../../behavior/definitions/groups/GroupsBehavior.js";
import { ScenesBehavior } from "../../../behavior/definitions/scenes/ScenesBehavior.js";
import { LevelControlBehavior } from "../../../behavior/definitions/level-control/LevelControlBehavior.js";
import { ColorControlBehavior } from "../../../behavior/definitions/color-control/ColorControlBehavior.js";
import { MutableEndpoint } from "../../type/MutableEndpoint.js";
import { SupportedBehaviors } from "../../part/SupportedBehaviors.js";
import { Identity } from "../../../util/Type.js";
import { MatterDeviceLibrarySpecificationV1_1 } from "../../../spec/Specifications.js";

export const OnOffSensorRequirements = {
    /**
     * A definition for each client cluster supported by the endpoint per the Matter specification.
     */
    client: {
        mandatory: { Identify: IdentifyBehavior, OnOff: OnOffBehavior },

        optional: {
            Groups: GroupsBehavior,
            Scenes: ScenesBehavior,
            LevelControl: LevelControlBehavior,
            ColorControl: ColorControlBehavior
        }
    }
};

export const OnOffSensorDeviceDefinition = MutableEndpoint({
    name: "OnOffSensor",
    deviceType: 0x850,
    deviceRevision: 2,
    requirements: OnOffSensorRequirements,
    behaviors: SupportedBehaviors()
});

/**
 * An On/Off Sensor is a measurement and sensing device that, when bound to a lighting device such as a Dimmable Light,
 * is capable of being used to switch the device on or off.
 *
 * @see {@link MatterDeviceLibrarySpecificationV1_1} § 7.8
 */
export interface OnOffSensorDevice extends Identity<typeof OnOffSensorDeviceDefinition> {}

export const OnOffSensorDevice: OnOffSensorDevice = OnOffSensorDeviceDefinition;
