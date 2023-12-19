/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { PartsBehavior } from "../../../behavior/definitions/parts/PartsBehavior.js";
import { ActionsServer } from "../../../behavior/definitions/actions/ActionsServer.js";
import { MutableEndpoint } from "../../type/MutableEndpoint.js";
import { DeviceClasses } from "../../../device/DeviceTypes.js";
import { SupportedBehaviors } from "../../part/SupportedBehaviors.js";
import { Identity } from "../../../util/Type.js";
import { MatterDeviceLibrarySpecificationV1_1 } from "../../../spec/Specifications.js";

export const AggregatorRequirements = {
    /**
     * An implementation for each server cluster supported by the endpoint per the Matter specification.
     */
    server: { mandatory: { Parts: PartsBehavior }, optional: { Actions: ActionsServer } }
};

export const AggregatorEndpointDefinition = MutableEndpoint({
    name: "Aggregator",
    deviceType: 0xe,
    deviceRevision: 1,
    deviceClass: DeviceClasses.Dynamic,
    requirements: AggregatorRequirements,
    behaviors: SupportedBehaviors()
});

/**
 * This device type aggregates endpoints as a collection. Clusters on the endpoint indicating this device type provide
 * functionality for the collection of descendent endpoints present in the PartsList of the endpoint’s descriptor, for
 * example the Actions cluster.
 *
 * The purpose of this device type is to aggregate functionality for a collection of endpoints. The definition of the
 * collection or functionality is not defined here.
 *
 * When using this device type as a collection of bridged nodes, please see the "Bridge" section in the System Model
 * specification.
 *
 * @see {@link MatterDeviceLibrarySpecificationV1_1} § 2.5
 */
export interface AggregatorEndpoint extends Identity<typeof AggregatorEndpointDefinition> {}

export const AggregatorEndpoint: AggregatorEndpoint = AggregatorEndpointDefinition;
