/**
 * @license
 * Copyright 2022 The matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DeviceClasses, DeviceTypeDefinition } from "../common/DeviceTypes.js";
import { ClusterServer } from "../protocol/interaction/InteractionServer.js";
import { Endpoint } from "./Endpoint.js";
import { ClusterClient } from "../protocol/interaction/InteractionClient.js";
import { AtLeastOne } from "../util/Array.js";

// TODO: prevent adding clusters because definition is automatically generated from what the node supports
export class PairedDevice extends Endpoint {
    constructor(
        definition: AtLeastOne<DeviceTypeDefinition>,
        clusters: (ClusterServer<any, any, any, any> | ClusterClient<any, any>)[] = [],
        endpointId: number
    ) {
        super(definition, clusters, endpointId);
    }
}

export class RootEndpoint extends Endpoint {
    constructor(
        definition: DeviceTypeDefinition,
        clusters: (ClusterServer<any, any, any, any> | ClusterClient<any, any>)[] = [],
        endpointId?: number
    ) {
        super([definition], clusters, endpointId);
    }
}

// TODO Add checks that only allowed clusters are added
// TODO add "get adds dummy instance" when optional and not existing
// TODO add typing support to know which clusters are available based on required clusters from device type def to be used by getClusterServer/Client

export class Device extends RootEndpoint {
    constructor(
        definition: DeviceTypeDefinition,
        clusters: (ClusterServer<any, any, any, any> | ClusterClient<any, any>)[] = [],
        endpointId?: number
    ) {
        if (definition.deviceClass === DeviceClasses.Node) {
            throw new Error("MatterNode devices are not supported");
        }
        super(definition, clusters, endpointId);
    }
}
