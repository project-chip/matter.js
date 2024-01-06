/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { IdentifyBehavior } from "../../../behavior/definitions/identify/IdentifyBehavior.js";
import { OnOffBehavior } from "../../../behavior/definitions/on-off/OnOffBehavior.js";
import { LevelControlBehavior } from "../../../behavior/definitions/level-control/LevelControlBehavior.js";
import { GroupsBehavior } from "../../../behavior/definitions/groups/GroupsBehavior.js";
import { ScenesBehavior } from "../../../behavior/definitions/scenes/ScenesBehavior.js";
import { MutableEndpoint } from "../../type/MutableEndpoint.js";
import { SupportedBehaviors } from "../../part/SupportedBehaviors.js";
import { Identity } from "../../../util/Type.js";
import { MatterDeviceLibrarySpecificationV1_1 } from "../../../spec/Specifications.js";

export const DimmerSwitchRequirements = {
    /**
     * A definition for each client cluster supported by the endpoint per the Matter specification.
     */
    client: {
        mandatory: { Identify: IdentifyBehavior, OnOff: OnOffBehavior, LevelControl: LevelControlBehavior },
        optional: { Groups: GroupsBehavior, Scenes: ScenesBehavior }
    }
};

export const DimmerSwitchDeviceDefinition = MutableEndpoint({
    name: "DimmerSwitch",
    deviceType: 0x104,
    deviceRevision: 2,
    requirements: DimmerSwitchRequirements,
    behaviors: SupportedBehaviors()
});

/**
 * A Dimmer Switch is a controller device that, when bound to a lighting device such as a Dimmable Light, is capable of
 * being used to switch the device on or off and adjust the intensity of the light being emitted.
 *
 * @see {@link MatterDeviceLibrarySpecificationV1_1} § 6.2
 */
export interface DimmerSwitchDevice extends Identity<typeof DimmerSwitchDeviceDefinition> {}

export const DimmerSwitchDevice: DimmerSwitchDevice = DimmerSwitchDeviceDefinition;
