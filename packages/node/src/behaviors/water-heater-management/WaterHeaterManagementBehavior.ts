/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { WaterHeaterManagement } from "#clusters/water-heater-management";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";
import { WaterHeaterManagementInterface } from "./WaterHeaterManagementInterface.js";

/**
 * WaterHeaterManagementBehavior is the base class for objects that support interaction with
 * {@link WaterHeaterManagement.Cluster}.
 *
 * This class does not have optional features of WaterHeaterManagement.Cluster enabled. You can enable additional
 * features using WaterHeaterManagementBehavior.with.
 */
export const WaterHeaterManagementBehavior = ClusterBehavior
    .withInterface<WaterHeaterManagementInterface>()
    .for(WaterHeaterManagement.Cluster);

type WaterHeaterManagementBehaviorType = InstanceType<typeof WaterHeaterManagementBehavior>;
export interface WaterHeaterManagementBehavior extends WaterHeaterManagementBehaviorType {}
type StateType = InstanceType<typeof WaterHeaterManagementBehavior.State>;
export namespace WaterHeaterManagementBehavior { export interface State extends StateType {} }
