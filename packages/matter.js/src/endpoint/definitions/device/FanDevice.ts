/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { IdentifyServer } from "../../../behavior/definitions/identify/IdentifyServer.js";
import { GroupsServer } from "../../../behavior/definitions/groups/GroupsServer.js";
import { FanControlServer } from "../../../behavior/definitions/fan-control/FanControlServer.js";
import { MutableEndpoint } from "../../type/MutableEndpoint.js";
import { SupportedBehaviors } from "../../part/SupportedBehaviors.js";
import { Identity } from "../../../util/Type.js";
import { MatterDeviceLibrarySpecificationV1_1 } from "../../../spec/Specifications.js";

export const FanRequirements = {
    /**
     * An implementation for each server cluster supported by the endpoint per the Matter specification.
     */
    server: { mandatory: { Identify: IdentifyServer, Groups: GroupsServer, FanControl: FanControlServer } }
};

export const FanDeviceDefinition = MutableEndpoint({
    name: "Fan",
    deviceType: 0x2b,
    deviceRevision: 1,
    requirements: FanRequirements,
    behaviors: SupportedBehaviors(
        FanRequirements.server.mandatory.Identify,
        FanRequirements.server.mandatory.Groups,
        FanRequirements.server.mandatory.FanControl
    )
});

/**
 * This defines conformance to the Fan device type.
 *
 * NOTE Support for Fan device type is provisional.
 *
 * @see {@link MatterDeviceLibrarySpecificationV1_1} § 9.3
 */
export interface FanDevice extends Identity<typeof FanDeviceDefinition> {}

export const FanDevice: FanDevice = FanDeviceDefinition;
