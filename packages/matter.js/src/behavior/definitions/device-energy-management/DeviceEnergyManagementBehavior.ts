/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { DeviceEnergyManagement } from "../../../cluster/definitions/DeviceEnergyManagementCluster.js";
import { ClusterBehavior } from "../../cluster/ClusterBehavior.js";
import { DeviceEnergyManagementInterface } from "./DeviceEnergyManagementInterface.js";
import { ClusterType } from "../../../cluster/ClusterType.js";

/**
 * DeviceEnergyManagementBehavior is the base class for objects that support interaction with {@link
 * DeviceEnergyManagement.Cluster}.
 *
 * DeviceEnergyManagement.Cluster requires you to enable one or more optional features. You can do so using {@link
 * DeviceEnergyManagementBehavior.with}.
 */
export const DeviceEnergyManagementBehavior = ClusterBehavior
    .withInterface<DeviceEnergyManagementInterface>()
    .for(ClusterType(DeviceEnergyManagement.Base));

type DeviceEnergyManagementBehaviorType = InstanceType<typeof DeviceEnergyManagementBehavior>;
export interface DeviceEnergyManagementBehavior extends DeviceEnergyManagementBehaviorType {}
type StateType = InstanceType<typeof DeviceEnergyManagementBehavior.State>;
export namespace DeviceEnergyManagementBehavior { export interface State extends StateType {} }
