/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ProxyDiscovery } from "#clusters/proxy-discovery";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";
import { ProxyDiscoveryInterface } from "./ProxyDiscoveryInterface.js";
import { Identity } from "#general";

/**
 * ProxyDiscoveryBehavior is the base class for objects that support interaction with {@link ProxyDiscovery.Cluster}.
 */
export const ProxyDiscoveryBehaviorConstructor = ClusterBehavior
    .withInterface<ProxyDiscoveryInterface>()
    .for(ProxyDiscovery.Cluster);

export interface ProxyDiscoveryBehaviorConstructor extends Identity<typeof ProxyDiscoveryBehaviorConstructor> {}
export const ProxyDiscoveryBehavior: ProxyDiscoveryBehaviorConstructor = ProxyDiscoveryBehaviorConstructor;
export interface ProxyDiscoveryBehavior extends InstanceType<ProxyDiscoveryBehaviorConstructor> {}
export namespace ProxyDiscoveryBehavior {
    export interface State extends InstanceType<typeof ProxyDiscoveryBehavior.State> {}
}
