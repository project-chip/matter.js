/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { OccupancySensing } from "#clusters/occupancy-sensing";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";

/**
 * OccupancySensingBehavior is the base class for objects that support interaction with {@link
 * OccupancySensing.Cluster}.
 */
export const OccupancySensingBehavior = ClusterBehavior.for(OccupancySensing.Cluster);

type OccupancySensingBehaviorType = InstanceType<typeof OccupancySensingBehavior>;
export interface OccupancySensingBehavior extends OccupancySensingBehaviorType {}
type StateType = InstanceType<typeof OccupancySensingBehavior.State>;
export namespace OccupancySensingBehavior { export interface State extends StateType {} }
