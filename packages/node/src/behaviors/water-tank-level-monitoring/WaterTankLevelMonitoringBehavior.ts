/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { WaterTankLevelMonitoring } from "#clusters/water-tank-level-monitoring";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";
import { ResourceMonitoringInterface } from "../resource-monitoring/ResourceMonitoringInterface.js";

/**
 * WaterTankLevelMonitoringBehavior is the base class for objects that support interaction with
 * {@link WaterTankLevelMonitoring.Cluster}.
 *
 * This class does not have optional features of WaterTankLevelMonitoring.Cluster enabled. You can enable additional
 * features using WaterTankLevelMonitoringBehavior.with.
 */
export const WaterTankLevelMonitoringBehavior = ClusterBehavior
    .withInterface<ResourceMonitoringInterface>()
    .for(WaterTankLevelMonitoring.Cluster);

type WaterTankLevelMonitoringBehaviorType = InstanceType<typeof WaterTankLevelMonitoringBehavior>;
export interface WaterTankLevelMonitoringBehavior extends WaterTankLevelMonitoringBehaviorType {}
type StateType = InstanceType<typeof WaterTankLevelMonitoringBehavior.State>;
export namespace WaterTankLevelMonitoringBehavior { export interface State extends StateType {} }
