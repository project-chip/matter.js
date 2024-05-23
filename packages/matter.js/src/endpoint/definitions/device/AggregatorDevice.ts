/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ActionsServer as BaseActionsServer } from "../../../behavior/definitions/actions/ActionsServer.js";
import { IdentifyServer as BaseIdentifyServer } from "../../../behavior/definitions/identify/IdentifyServer.js";
import { MutableEndpoint } from "../../type/MutableEndpoint.js";
import { SupportedBehaviors } from "../../properties/SupportedBehaviors.js";
import { Identity } from "../../../util/Type.js";

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
 * @see {@link MatterSpecification.v13.Device} § 11.2
 */
export interface AggregatorDevice extends Identity<typeof AggregatorDeviceDefinition> {}

export namespace AggregatorRequirements {
    /**
     * The Actions cluster is optional per the Matter specification
     *
     * We provide this alias to the default implementation {@link ActionsServer} for convenience.
     */
    export const ActionsServer = BaseActionsServer;

    /**
     * The Identify cluster is optional per the Matter specification
     *
     * We provide this alias to the default implementation {@link IdentifyServer} for convenience.
     */
    export const IdentifyServer = BaseIdentifyServer;

    /**
     * An implementation for each server cluster supported by the endpoint per the Matter specification.
     */
    export const server = { optional: { Actions: ActionsServer, Identify: IdentifyServer }, mandatory: {} };
}

export const AggregatorDeviceDefinition = MutableEndpoint({
    name: "Aggregator",
    deviceType: 0xe,
    deviceRevision: 1,
    requirements: AggregatorRequirements,
    behaviors: SupportedBehaviors()
});

export const AggregatorDevice: AggregatorDevice = AggregatorDeviceDefinition;
