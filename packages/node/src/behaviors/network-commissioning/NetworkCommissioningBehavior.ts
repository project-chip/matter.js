/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { NetworkCommissioning } from "#clusters/network-commissioning";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";
import { NetworkCommissioningInterface } from "./NetworkCommissioningInterface.js";
import { ClusterType } from "#types";

/**
 * NetworkCommissioningBehavior is the base class for objects that support interaction with
 * {@link NetworkCommissioning.Cluster}.
 *
 * NetworkCommissioning.Cluster requires you to enable one or more optional features. You can do so using
 * {@link NetworkCommissioningBehavior.with}.
 */
export const NetworkCommissioningBehavior = ClusterBehavior
    .withInterface<NetworkCommissioningInterface>()
    .for(ClusterType(NetworkCommissioning.Base));

type NetworkCommissioningBehaviorType = InstanceType<typeof NetworkCommissioningBehavior>;
export interface NetworkCommissioningBehavior extends NetworkCommissioningBehaviorType {}
type StateType = InstanceType<typeof NetworkCommissioningBehavior.State>;
export namespace NetworkCommissioningBehavior { export interface State extends StateType {} }
