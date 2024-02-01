/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Cluster } from "../cluster/Cluster.js";
import { EndpointNumber } from "../datatype/EndpointNumber.js";
import { Fabric } from "../fabric/Fabric.js";
import { TypeFromSchema } from "../tlv/TlvSchema.js";

/**
 * This interface acts as an adapter between lower-level components and higher-level endpoint APIs.
 * 
 * This abstraction may be unnecessary once APIs settle down.
 */
export interface EndpointStructuralAdapter {
    number: EndpointNumber;
    children: Iterable<EndpointStructuralAdapter>;

    getCluster<C extends Cluster<any, any, any, any, any>>(cluster: C): undefined | ClusterStructuralAdapter<C>;
}

export interface ClusterStructuralAdapter<C extends Cluster<any, any, any, any, any>> {
    trigger<E extends keyof C["events"]>(event: E, payload: TypeFromSchema<C["events"][E]["schema"]>): void;
    set<A extends keyof C["attributes"]>(attribute: A, value: TypeFromSchema<C["attributes"][A]["schema"]>): Promise<void>;
    get<A extends keyof C["attributes"]>(attribute: A): TypeFromSchema<C["attributes"][A]["schema"]>;
    refresh<A extends keyof C["attributes"]>(attribute: A, fabric?: Fabric): void;
}
