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
import { MutableEndpoint } from "../../type/MutableEndpoint.js";
import { SupportedBehaviors } from "../../part/SupportedBehaviors.js";
import { Identity } from "../../../util/Type.js";
import { MatterDeviceLibrarySpecificationV1_1 } from "../../../spec/Specifications.js";

export const OnOffLightSwitchRequirements = {
    /**
     * A definition for each client cluster supported by the endpoint per the Matter specification.
     */
    client: {
        mandatory: { Identify: IdentifyBehavior, OnOff: OnOffBehavior },
        optional: { Groups: GroupsBehavior, Scenes: ScenesBehavior }
    }
};

export const OnOffLightSwitchDeviceDefinition = MutableEndpoint({
    name: "OnOffLightSwitch",
    deviceType: 0x103,
    deviceRevision: 2,
    requirements: OnOffLightSwitchRequirements,
    behaviors: SupportedBehaviors()
});

/**
 * An On/Off Light Switch is a controller device that, when bound to a lighting device such as an On/Off Light, is
 * capable of being used to switch the device on or off.
 *
 * @see {@link MatterDeviceLibrarySpecificationV1_1} § 6.1
 */
export interface OnOffLightSwitchDevice extends Identity<typeof OnOffLightSwitchDeviceDefinition> {}

export const OnOffLightSwitchDevice: OnOffLightSwitchDevice = OnOffLightSwitchDeviceDefinition;
