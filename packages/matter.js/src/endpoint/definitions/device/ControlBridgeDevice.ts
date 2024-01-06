/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { IdentifyBehavior } from "../../../behavior/definitions/identify/IdentifyBehavior.js";
import { GroupsBehavior } from "../../../behavior/definitions/groups/GroupsBehavior.js";
import { ScenesBehavior } from "../../../behavior/definitions/scenes/ScenesBehavior.js";
import { OnOffBehavior } from "../../../behavior/definitions/on-off/OnOffBehavior.js";
import { LevelControlBehavior } from "../../../behavior/definitions/level-control/LevelControlBehavior.js";
import { ColorControlBehavior } from "../../../behavior/definitions/color-control/ColorControlBehavior.js";
import {
    IlluminanceMeasurementBehavior
} from "../../../behavior/definitions/illuminance-measurement/IlluminanceMeasurementBehavior.js";
import { OccupancySensingBehavior } from "../../../behavior/definitions/occupancy-sensing/OccupancySensingBehavior.js";
import { MutableEndpoint } from "../../type/MutableEndpoint.js";
import { SupportedBehaviors } from "../../part/SupportedBehaviors.js";
import { Identity } from "../../../util/Type.js";
import { MatterDeviceLibrarySpecificationV1_1 } from "../../../spec/Specifications.js";

export const ControlBridgeRequirements = {
    /**
     * A definition for each client cluster supported by the endpoint per the Matter specification.
     */
    client: {
        mandatory: {
            Identify: IdentifyBehavior,
            Groups: GroupsBehavior,
            Scenes: ScenesBehavior,
            OnOff: OnOffBehavior,
            LevelControl: LevelControlBehavior,
            ColorControl: ColorControlBehavior
        },

        optional: {
            IlluminanceMeasurement: IlluminanceMeasurementBehavior,
            OccupancySensing: OccupancySensingBehavior
        }
    }
};

export const ControlBridgeDeviceDefinition = MutableEndpoint({
    name: "ControlBridge",
    deviceType: 0x840,
    deviceRevision: 2,
    requirements: ControlBridgeRequirements,
    behaviors: SupportedBehaviors()
});

/**
 * A Control Bridge is a controller device that, when bound to a lighting device such as an Extended Color Light, is
 * capable of being used to switch the device on or off, adjust the intensity of the light being emitted and adjust the
 * color of the light being emitted. In addition, a Control Bridge device is capable of being used for setting scenes.
 *
 * @see {@link MatterDeviceLibrarySpecificationV1_1} § 6.4
 */
export interface ControlBridgeDevice extends Identity<typeof ControlBridgeDeviceDefinition> {}

export const ControlBridgeDevice: ControlBridgeDevice = ControlBridgeDeviceDefinition;
