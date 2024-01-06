/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ProxyDiscovery } from "../../../cluster/definitions/ProxyDiscoveryCluster.js";
import { ClusterBehavior } from "../../cluster/ClusterBehavior.js";
import { ProxyDiscoveryInterface } from "./ProxyDiscoveryInterface.js";

/**
 * ProxyDiscoveryBehavior is the base class for objects that support interaction with {@link ProxyDiscovery.Cluster}.
 */
export const ProxyDiscoveryBehavior = ClusterBehavior
    .withInterface<ProxyDiscoveryInterface>()
    .for(ProxyDiscovery.Cluster);

type ProxyDiscoveryBehaviorType = InstanceType<typeof ProxyDiscoveryBehavior>;
export interface ProxyDiscoveryBehavior extends ProxyDiscoveryBehaviorType {}
type StateType = InstanceType<typeof ProxyDiscoveryBehavior.State>;
export namespace ProxyDiscoveryBehavior { export interface State extends StateType {} }
