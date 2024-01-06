/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import {
    OtaSoftwareUpdateProviderServer
} from "../../../behavior/definitions/ota-software-update-provider/OtaSoftwareUpdateProviderServer.js";
import {
    OtaSoftwareUpdateRequestorBehavior
} from "../../../behavior/definitions/ota-software-update-requestor/OtaSoftwareUpdateRequestorBehavior.js";
import { MutableEndpoint } from "../../type/MutableEndpoint.js";
import { DeviceClasses } from "../../../device/DeviceTypes.js";
import { SupportedBehaviors } from "../../part/SupportedBehaviors.js";
import { Identity } from "../../../util/Type.js";
import { MatterDeviceLibrarySpecificationV1_1 } from "../../../spec/Specifications.js";

export const OtaProviderRequirements = {
    /**
     * An implementation for each server cluster supported by the endpoint per the Matter specification.
     */
    server: { mandatory: { OtaSoftwareUpdateProvider: OtaSoftwareUpdateProviderServer } },

    /**
     * A definition for each client cluster supported by the endpoint per the Matter specification.
     */
    client: { optional: { OtaSoftwareUpdateRequestor: OtaSoftwareUpdateRequestorBehavior } }
};

export const OtaProviderEndpointDefinition = MutableEndpoint({
    name: "OtaProvider",
    deviceType: 0x14,
    deviceRevision: 1,
    deviceClass: DeviceClasses.Utility,
    requirements: OtaProviderRequirements,
    behaviors: SupportedBehaviors(OtaProviderRequirements.server.mandatory.OtaSoftwareUpdateProvider)
});

/**
 * An OTA Provider is a node that is capable of providing an OTA software update to other nodes on the same fabric.
 *
 * @see {@link MatterDeviceLibrarySpecificationV1_1} § 2.4
 */
export interface OtaProviderEndpoint extends Identity<typeof OtaProviderEndpointDefinition> {}

export const OtaProviderEndpoint: OtaProviderEndpoint = OtaProviderEndpointDefinition;
