/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ScenesManagement } from "#clusters/scenes-management";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";
import { ScenesManagementInterface } from "./ScenesManagementInterface.js";

/**
 * ScenesManagementBehavior is the base class for objects that support interaction with
 * {@link ScenesManagement.Cluster}.
 */
export const ScenesManagementBehavior = ClusterBehavior
    .withInterface<ScenesManagementInterface>()
    .for(ScenesManagement.Cluster);

type ScenesManagementBehaviorType = InstanceType<typeof ScenesManagementBehavior>;
export interface ScenesManagementBehavior extends ScenesManagementBehaviorType {}
type StateType = InstanceType<typeof ScenesManagementBehavior.State>;
export namespace ScenesManagementBehavior { export interface State extends StateType {} }
