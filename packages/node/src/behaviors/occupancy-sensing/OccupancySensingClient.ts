/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { OccupancySensing } from "#clusters/occupancy-sensing";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";
import { Identity } from "#general";

export const OccupancySensingClientConstructor = ClusterBehavior.for(OccupancySensing.Complete);
export interface OccupancySensingClient extends InstanceType<typeof OccupancySensingClientConstructor> {}
export interface OccupancySensingClientConstructor extends Identity<typeof OccupancySensingClientConstructor> {}
export const OccupancySensingClient: OccupancySensingClientConstructor = OccupancySensingClientConstructor;
