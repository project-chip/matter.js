/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { OccupancySensing } from "#clusters/occupancy-sensing";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";
import { ClusterType } from "#types";

/**
 * OccupancySensingBehavior is the base class for objects that support interaction with
 * {@link OccupancySensing.Cluster}.
 *
 * OccupancySensing.Cluster requires you to enable one or more optional features. You can do so using
 * {@link OccupancySensingBehavior.with}.
 */
export const OccupancySensingBehavior = ClusterBehavior.for(ClusterType(OccupancySensing.Base));

type OccupancySensingBehaviorType = InstanceType<typeof OccupancySensingBehavior>;
export interface OccupancySensingBehavior extends OccupancySensingBehaviorType {}
type StateType = InstanceType<typeof OccupancySensingBehavior.State>;
export namespace OccupancySensingBehavior { export interface State extends StateType {} }
