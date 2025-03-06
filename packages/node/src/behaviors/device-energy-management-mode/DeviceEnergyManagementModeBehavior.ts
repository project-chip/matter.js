/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { DeviceEnergyManagementMode } from "#clusters/device-energy-management-mode";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";

/**
 * DeviceEnergyManagementModeBehavior is the base class for objects that support interaction with {@link
 * DeviceEnergyManagementMode.Cluster}.
 */
export const DeviceEnergyManagementModeBehavior = ClusterBehavior.for(DeviceEnergyManagementMode.Cluster);

type DeviceEnergyManagementModeBehaviorType = InstanceType<typeof DeviceEnergyManagementModeBehavior>;
export interface DeviceEnergyManagementModeBehavior extends DeviceEnergyManagementModeBehaviorType {}
type StateType = InstanceType<typeof DeviceEnergyManagementModeBehavior.State>;
export namespace DeviceEnergyManagementModeBehavior { export interface State extends StateType {} }
