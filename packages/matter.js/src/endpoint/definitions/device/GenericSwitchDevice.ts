/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { IdentifyServer } from "../../../behavior/definitions/identify/IdentifyServer.js";
import { SwitchServer } from "../../../behavior/definitions/switch/SwitchServer.js";
import { FixedLabelServer } from "../../../behavior/definitions/fixed-label/FixedLabelServer.js";
import { MutableEndpoint } from "../../type/MutableEndpoint.js";
import { SupportedBehaviors } from "../../part/SupportedBehaviors.js";
import { Identity } from "../../../util/Type.js";
import { MatterDeviceLibrarySpecificationV1_1 } from "../../../spec/Specifications.js";

export const GenericSwitchRequirements = {
    /**
     * An implementation for each server cluster supported by the endpoint per the Matter specification.
     */
    server: {
        mandatory: { Identify: IdentifyServer, Switch: SwitchServer },
        optional: { FixedLabel: FixedLabelServer }
    }
};

export const GenericSwitchDeviceDefinition = MutableEndpoint({
    name: "GenericSwitch",
    deviceType: 0xf,
    deviceRevision: 1,
    requirements: GenericSwitchRequirements,
    behaviors: SupportedBehaviors(GenericSwitchRequirements.server.mandatory.Identify)
});

/**
 * This defines conformance for the Generic Switch device type.
 *
 * GenericSwitchDevice requires Switch cluster but Switch is not added by default because you must select the features
 * your device supports. You can add manually using GenericSwitchDevice.with().
 *
 * @see {@link MatterDeviceLibrarySpecificationV1_1} § 6.6
 */
export interface GenericSwitchDevice extends Identity<typeof GenericSwitchDeviceDefinition> {}

export const GenericSwitchDevice: GenericSwitchDevice = GenericSwitchDeviceDefinition;
