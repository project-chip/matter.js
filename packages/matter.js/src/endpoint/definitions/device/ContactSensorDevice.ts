/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { IdentifyServer as BaseIdentifyServer } from "../../../behavior/definitions/identify/IdentifyServer.js";
import {
    BooleanStateServer as BaseBooleanStateServer
} from "../../../behavior/definitions/boolean-state/BooleanStateServer.js";
import { MutableEndpoint } from "../../type/MutableEndpoint.js";
import { SupportedBehaviors } from "../../properties/SupportedBehaviors.js";
import { Identity } from "../../../util/Type.js";

/**
 * This defines conformance to the Contact Sensor device type.
 *
 * @see {@link MatterSpecification.v11.Device} § 7.1
 */
export interface ContactSensorDevice extends Identity<typeof ContactSensorDeviceDefinition> {}

export namespace ContactSensorRequirements {
    /**
     * The Identify cluster is required by the Matter specification
     *
     * We provide this alias to the default implementation {@link IdentifyServer} for convenience.
     */
    export const IdentifyServer = BaseIdentifyServer;

    /**
     * The BooleanState cluster is required by the Matter specification
     *
     * We provide this alias to the default implementation {@link BooleanStateServer} for convenience.
     */
    export const BooleanStateServer = BaseBooleanStateServer;

    /**
     * An implementation for each server cluster supported by the endpoint per the Matter specification.
     */
    export const server = { mandatory: { Identify: IdentifyServer, BooleanState: BooleanStateServer } };
}

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

export const ContactSensorDevice: ContactSensorDevice = ContactSensorDeviceDefinition;
