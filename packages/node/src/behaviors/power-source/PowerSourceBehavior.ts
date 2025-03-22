/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { PowerSource } from "#clusters/power-source";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";
import { ClusterType } from "#types";

/**
 * PowerSourceBehavior is the base class for objects that support interaction with {@link PowerSource.Cluster}.
 *
 * PowerSource.Cluster requires you to enable one or more optional features. You can do so using
 * {@link PowerSourceBehavior.with}.
 */
export const PowerSourceBehavior = ClusterBehavior.for(ClusterType(PowerSource.Base));

type PowerSourceBehaviorType = InstanceType<typeof PowerSourceBehavior>;
export interface PowerSourceBehavior extends PowerSourceBehaviorType {}
type StateType = InstanceType<typeof PowerSourceBehavior.State>;
export namespace PowerSourceBehavior { export interface State extends StateType {} }
