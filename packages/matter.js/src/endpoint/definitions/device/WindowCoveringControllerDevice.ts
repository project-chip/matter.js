/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { WindowCoveringBehavior } from "../../../behavior/definitions/window-covering/WindowCoveringBehavior.js";
import { IdentifyBehavior } from "../../../behavior/definitions/identify/IdentifyBehavior.js";
import { GroupsBehavior } from "../../../behavior/definitions/groups/GroupsBehavior.js";
import { ScenesBehavior } from "../../../behavior/definitions/scenes/ScenesBehavior.js";
import { MutableEndpoint } from "../../type/MutableEndpoint.js";
import { SupportedBehaviors } from "../../part/SupportedBehaviors.js";
import { Identity } from "../../../util/Type.js";
import { MatterDeviceLibrarySpecificationV1_1 } from "../../../spec/Specifications.js";

export const WindowCoveringControllerRequirements = {
    /**
     * A definition for each client cluster supported by the endpoint per the Matter specification.
     */
    client: {
        mandatory: { WindowCovering: WindowCoveringBehavior },
        optional: { Identify: IdentifyBehavior, Groups: GroupsBehavior, Scenes: ScenesBehavior }
    }
};

export const WindowCoveringControllerDeviceDefinition = MutableEndpoint({
    name: "WindowCoveringController",
    deviceType: 0x203,
    deviceRevision: 2,
    requirements: WindowCoveringControllerRequirements,
    behaviors: SupportedBehaviors()
});

/**
 * A Window Covering Controller is a device that controls an automatic window covering.
 *
 * @see {@link MatterDeviceLibrarySpecificationV1_1} § 8.4
 */
export interface WindowCoveringControllerDevice extends Identity<typeof WindowCoveringControllerDeviceDefinition> {}

export const WindowCoveringControllerDevice: WindowCoveringControllerDevice = WindowCoveringControllerDeviceDefinition;
