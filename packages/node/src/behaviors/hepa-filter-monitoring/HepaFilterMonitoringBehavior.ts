/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { HepaFilterMonitoring } from "#clusters/hepa-filter-monitoring";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";
import { ResourceMonitoringInterface } from "../resource-monitoring/ResourceMonitoringInterface.js";

/**
 * HepaFilterMonitoringBehavior is the base class for objects that support interaction with
 * {@link HepaFilterMonitoring.Cluster}.
 *
 * This class does not have optional features of HepaFilterMonitoring.Cluster enabled. You can enable additional
 * features using HepaFilterMonitoringBehavior.with.
 */
export const HepaFilterMonitoringBehavior = ClusterBehavior
    .withInterface<ResourceMonitoringInterface>()
    .for(HepaFilterMonitoring.Cluster);

type HepaFilterMonitoringBehaviorType = InstanceType<typeof HepaFilterMonitoringBehavior>;
export interface HepaFilterMonitoringBehavior extends HepaFilterMonitoringBehaviorType {}
type StateType = InstanceType<typeof HepaFilterMonitoringBehavior.State>;
export namespace HepaFilterMonitoringBehavior { export interface State extends StateType {} }
