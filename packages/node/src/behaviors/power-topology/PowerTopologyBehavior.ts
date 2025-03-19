/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { PowerTopology } from "#clusters/power-topology";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";
import { ClusterType } from "#types";

/**
 * PowerTopologyBehavior is the base class for objects that support interaction with {@link PowerTopology.Cluster}.
 *
 * PowerTopology.Cluster requires you to enable one or more optional features. You can do so using
 * {@link PowerTopologyBehavior.with}.
 */
export const PowerTopologyBehavior = ClusterBehavior.for(ClusterType(PowerTopology.Base));

type PowerTopologyBehaviorType = InstanceType<typeof PowerTopologyBehavior>;
export interface PowerTopologyBehavior extends PowerTopologyBehaviorType {}
type StateType = InstanceType<typeof PowerTopologyBehavior.State>;
export namespace PowerTopologyBehavior { export interface State extends StateType {} }
