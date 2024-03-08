/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { IdentifyServer as BaseIdentifyServer } from "../../../behavior/definitions/identify/IdentifyServer.js";
import { SwitchServer as BaseSwitchServer } from "../../../behavior/definitions/switch/SwitchServer.js";
import { FixedLabelServer as BaseFixedLabelServer } from "../../../behavior/definitions/fixed-label/FixedLabelServer.js";
import { MutableEndpoint } from "../../type/MutableEndpoint.js";
import { SupportedBehaviors } from "../../properties/SupportedBehaviors.js";
import { Identity } from "../../../util/Type.js";
import { MatterDeviceLibrarySpecificationV1_1 } from "../../../spec/Specifications.js";

/**
 * This defines conformance for the Generic Switch device type.
 *
 * GenericSwitchDevice requires Switch cluster but Switch is not added by default because you must select the features
 * your device supports. You can add manually using GenericSwitchDevice.with().
 *
 * @see {@link MatterDeviceLibrarySpecificationV1_1} § 6.6
 */
export interface GenericSwitchDevice extends Identity<typeof GenericSwitchDeviceDefinition> {}

export namespace GenericSwitchRequirements {
    /**
     * The {@link Identify} cluster is required by the Matter specification
     *
     * We provide this alias for convenience.
     */
    export const IdentifyServer = BaseIdentifyServer;

    /**
     * The {@link Switch} cluster is required by the Matter specification
     *
     * We provide this alias for convenience.
     */
    export const SwitchServer = BaseSwitchServer;

    /**
     * The {@link FixedLabel} cluster is optional per the Matter specification
     *
     * We provide this alias for convenience.
     */
    export const FixedLabelServer = BaseFixedLabelServer;

    /**
     * An implementation for each server cluster supported by the endpoint per the Matter specification.
     */
    export const server = {
        mandatory: { Identify: IdentifyServer, Switch: SwitchServer },
        optional: { FixedLabel: FixedLabelServer }
    };
}

export const GenericSwitchDeviceDefinition = MutableEndpoint({
    name: "GenericSwitch",
    deviceType: 0xf,
    deviceRevision: 1,
    requirements: GenericSwitchRequirements,
    behaviors: SupportedBehaviors(GenericSwitchRequirements.server.mandatory.Identify)
});

export const GenericSwitchDevice: GenericSwitchDevice = GenericSwitchDeviceDefinition;
