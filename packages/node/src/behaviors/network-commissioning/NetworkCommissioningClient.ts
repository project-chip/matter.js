/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { NetworkCommissioning } from "#clusters/network-commissioning";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";
import { Identity } from "#general";

export const NetworkCommissioningClientConstructor = ClusterBehavior.for(NetworkCommissioning.Complete);
export interface NetworkCommissioningClient extends InstanceType<typeof NetworkCommissioningClientConstructor> {}
export interface NetworkCommissioningClientConstructor extends Identity<typeof NetworkCommissioningClientConstructor> {}
export const NetworkCommissioningClient: NetworkCommissioningClientConstructor = NetworkCommissioningClientConstructor;
