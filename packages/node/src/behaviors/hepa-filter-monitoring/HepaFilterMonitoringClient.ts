/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { HepaFilterMonitoring } from "#clusters/hepa-filter-monitoring";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";
import { Identity } from "#general";

export const HepaFilterMonitoringClientConstructor = ClusterBehavior.for(HepaFilterMonitoring.Complete);
export interface HepaFilterMonitoringClient extends InstanceType<typeof HepaFilterMonitoringClientConstructor> {}
export interface HepaFilterMonitoringClientConstructor extends Identity<typeof HepaFilterMonitoringClientConstructor> {}
export const HepaFilterMonitoringClient: HepaFilterMonitoringClientConstructor = HepaFilterMonitoringClientConstructor;
