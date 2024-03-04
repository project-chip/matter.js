/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { PartsBehavior } from "../../../behavior/system/parts/PartsBehavior.js";
import { IndexBehavior } from "../../../behavior/system/index/IndexBehavior.js";
import {
    BridgedDeviceBasicInformationServer as BaseBridgedDeviceBasicInformationServer
} from "../../../behavior/definitions/bridged-device-basic-information/BridgedDeviceBasicInformationServer.js";
import {
    PowerSourceConfigurationServer as BasePowerSourceConfigurationServer
} from "../../../behavior/definitions/power-source-configuration/PowerSourceConfigurationServer.js";
import {
    PowerSourceServer as BasePowerSourceServer
} from "../../../behavior/definitions/power-source/PowerSourceServer.js";
import { MutableEndpoint } from "../../type/MutableEndpoint.js";
import { SupportedBehaviors } from "../../properties/SupportedBehaviors.js";
import { Identity } from "../../../util/Type.js";
import { MatterDeviceLibrarySpecificationV1_1 } from "../../../spec/Specifications.js";

/**
 * This defines conformance for a Bridged Node root endpoint. This endpoint is akin to a "read me first" endpoint that
 * describes itself and any other endpoints that make up the Bridged Node. A Bridged Node endpoint represents a device
 * on a foreign network, but is not the root endpoint of the bridge itself.
 *
 * @see {@link MatterDeviceLibrarySpecificationV1_1} § 2.6
 */
export interface BridgedNodeEndpoint extends Identity<typeof BridgedNodeEndpointDefinition> {}

export namespace BridgedNodeRequirements {
    /**
     * The {@link BridgedDeviceBasicInformation} cluster is required by the Matter specification
     *
     * We provide this alias for convenience.
     */
    export const BridgedDeviceBasicInformationServer = BaseBridgedDeviceBasicInformationServer;

    /**
     * The {@link PowerSourceConfiguration} cluster is optional per the Matter specification
     *
     * We provide this alias for convenience.
     */
    export const PowerSourceConfigurationServer = BasePowerSourceConfigurationServer;

    /**
     * The {@link PowerSource} cluster is optional per the Matter specification
     *
     * We provide this alias for convenience.
     */
    export const PowerSourceServer = BasePowerSourceServer;

    /**
     * An implementation for each server cluster supported by the endpoint per the Matter specification.
     */
    export const server = {
        mandatory: {
            Parts: PartsBehavior,
            Index: IndexBehavior,
            BridgedDeviceBasicInformation: BridgedDeviceBasicInformationServer
        },
        optional: { PowerSourceConfiguration: PowerSourceConfigurationServer, PowerSource: PowerSourceServer }
    };
}

export const BridgedNodeEndpointDefinition = MutableEndpoint({
    name: "BridgedNode",
    deviceType: 0x13,
    deviceRevision: 1,
    requirements: BridgedNodeRequirements,
    behaviors: SupportedBehaviors(
        BridgedNodeRequirements.server.mandatory.Parts,
        BridgedNodeRequirements.server.mandatory.Index,
        BridgedNodeRequirements.server.mandatory.BridgedDeviceBasicInformation
    )
});

export const BridgedNodeEndpoint: BridgedNodeEndpoint = BridgedNodeEndpointDefinition;
