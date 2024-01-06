/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import {
    OtaSoftwareUpdateRequestorServer
} from "../../../behavior/definitions/ota-software-update-requestor/OtaSoftwareUpdateRequestorServer.js";
import {
    OtaSoftwareUpdateProviderBehavior
} from "../../../behavior/definitions/ota-software-update-provider/OtaSoftwareUpdateProviderBehavior.js";
import { MutableEndpoint } from "../../type/MutableEndpoint.js";
import { DeviceClasses } from "../../../device/DeviceTypes.js";
import { SupportedBehaviors } from "../../part/SupportedBehaviors.js";
import { Identity } from "../../../util/Type.js";
import { MatterDeviceLibrarySpecificationV1_1 } from "../../../spec/Specifications.js";

export const OtaRequestorRequirements = {
    /**
     * An implementation for each server cluster supported by the endpoint per the Matter specification.
     */
    server: { mandatory: { OtaSoftwareUpdateRequestor: OtaSoftwareUpdateRequestorServer } },

    /**
     * A definition for each client cluster supported by the endpoint per the Matter specification.
     */
    client: { mandatory: { OtaSoftwareUpdateProvider: OtaSoftwareUpdateProviderBehavior } }
};

export const OtaRequestorEndpointDefinition = MutableEndpoint({
    name: "OtaRequestor",
    deviceType: 0x12,
    deviceRevision: 1,
    deviceClass: DeviceClasses.Utility,
    requirements: OtaRequestorRequirements,
    behaviors: SupportedBehaviors(OtaRequestorRequirements.server.mandatory.OtaSoftwareUpdateRequestor)
});

/**
 * An OTA Requestor is a device that is capable of receiving an OTA software update.
 *
 * @see {@link MatterDeviceLibrarySpecificationV1_1} § 2.3
 */
export interface OtaRequestorEndpoint extends Identity<typeof OtaRequestorEndpointDefinition> {}

export const OtaRequestorEndpoint: OtaRequestorEndpoint = OtaRequestorEndpointDefinition;
