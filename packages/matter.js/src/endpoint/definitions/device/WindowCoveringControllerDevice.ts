/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { IdentifyServer as BaseIdentifyServer } from "../../../behavior/definitions/identify/IdentifyServer.js";
import {
    WindowCoveringBehavior as BaseWindowCoveringBehavior
} from "../../../behavior/definitions/window-covering/WindowCoveringBehavior.js";
import { IdentifyBehavior as BaseIdentifyBehavior } from "../../../behavior/definitions/identify/IdentifyBehavior.js";
import { GroupsBehavior as BaseGroupsBehavior } from "../../../behavior/definitions/groups/GroupsBehavior.js";
import { ScenesBehavior as BaseScenesBehavior } from "../../../behavior/definitions/scenes/ScenesBehavior.js";
import { MutableEndpoint } from "../../type/MutableEndpoint.js";
import { SupportedBehaviors } from "../../properties/SupportedBehaviors.js";
import { Identity } from "../../../util/Type.js";
import { MatterDeviceLibrarySpecificationV1_1 } from "../../../spec/Specifications.js";

/**
 * A Window Covering Controller is a device that controls an automatic window covering.
 *
 * @see {@link MatterDeviceLibrarySpecificationV1_1} § 8.4
 */
export interface WindowCoveringControllerDevice extends Identity<typeof WindowCoveringControllerDeviceDefinition> {}

export namespace WindowCoveringControllerRequirements {
    /**
     * The {@link Identify} cluster is optional per the Matter specification
     *
     * We provide this alias for convenience.
     */
    export const IdentifyServer = BaseIdentifyServer;

    /**
     * The {@link WindowCovering} cluster is required by the Matter specification
     *
     * We provide this alias for convenience.
     */
    export const WindowCoveringBehavior = BaseWindowCoveringBehavior;

    /**
     * The {@link Identify} cluster is optional per the Matter specification
     *
     * We provide this alias for convenience.
     */
    export const IdentifyBehavior = BaseIdentifyBehavior;

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
    export const server = { optional: { Identify: IdentifyServer }, mandatory: {} };

    /**
     * A definition for each client cluster supported by the endpoint per the Matter specification.
     */
    export const client = {
        mandatory: { WindowCovering: WindowCoveringBehavior },
        optional: { Identify: IdentifyBehavior, Groups: GroupsBehavior, Scenes: ScenesBehavior }
    };
}

export const WindowCoveringControllerDeviceDefinition = MutableEndpoint({
    name: "WindowCoveringController",
    deviceType: 0x203,
    deviceRevision: 2,
    requirements: WindowCoveringControllerRequirements,
    behaviors: SupportedBehaviors()
});

export const WindowCoveringControllerDevice: WindowCoveringControllerDevice = WindowCoveringControllerDeviceDefinition;
