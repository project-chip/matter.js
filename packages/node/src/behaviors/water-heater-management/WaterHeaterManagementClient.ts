/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { WaterHeaterManagement } from "#clusters/water-heater-management";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";
import { Identity } from "#general";

export const WaterHeaterManagementClientConstructor = ClusterBehavior.for(WaterHeaterManagement.Complete);
export interface WaterHeaterManagementClient extends InstanceType<typeof WaterHeaterManagementClientConstructor> {}
export interface WaterHeaterManagementClientConstructor extends Identity<typeof WaterHeaterManagementClientConstructor> {}
export const WaterHeaterManagementClient: WaterHeaterManagementClientConstructor = WaterHeaterManagementClientConstructor;
