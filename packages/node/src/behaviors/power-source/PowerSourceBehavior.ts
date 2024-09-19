/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { PowerSource } from "#clusters/power-source";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";

/**
 * PowerSourceBehavior is the base class for objects that support interaction with {@link PowerSource.Cluster}.
 *
 * This class does not have optional features of PowerSource.Cluster enabled. You can enable additional features using
 * PowerSourceBehavior.with.
 */
export const PowerSourceBehavior = ClusterBehavior.for(PowerSource.Cluster);

type PowerSourceBehaviorType = InstanceType<typeof PowerSourceBehavior>;
export interface PowerSourceBehavior extends PowerSourceBehaviorType {}
type StateType = InstanceType<typeof PowerSourceBehavior.State>;
export namespace PowerSourceBehavior { export interface State extends StateType {} }
