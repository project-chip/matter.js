/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { IdentifyServer } from "../../../behavior/definitions/identify/IdentifyServer.js";
import { BooleanStateServer } from "../../../behavior/definitions/boolean-state/BooleanStateServer.js";
import { MutableEndpoint } from "../../type/MutableEndpoint.js";
import { SupportedBehaviors } from "../../part/SupportedBehaviors.js";
import { Identity } from "../../../util/Type.js";
import { MatterDeviceLibrarySpecificationV1_1 } from "../../../spec/Specifications.js";

export const ContactSensorRequirements = {
    /**
     * An implementation for each server cluster supported by the endpoint per the Matter specification.
     */
    server: { mandatory: { Identify: IdentifyServer, BooleanState: BooleanStateServer } }
};

export const ContactSensorDeviceDefinition = MutableEndpoint({
    name: "ContactSensor",
    deviceType: 0x15,
    deviceRevision: 1,
    requirements: ContactSensorRequirements,
    behaviors: SupportedBehaviors(
        ContactSensorRequirements.server.mandatory.Identify,
        ContactSensorRequirements.server.mandatory.BooleanState
    )
});

/**
 * This defines conformance to the Contact Sensor device type.
 *
 * @see {@link MatterDeviceLibrarySpecificationV1_1} § 7.1
 */
export interface ContactSensorDevice extends Identity<typeof ContactSensorDeviceDefinition> {}

export const ContactSensorDevice: ContactSensorDevice = ContactSensorDeviceDefinition;
