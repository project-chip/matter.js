/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { GroupKeyManagement } from "#clusters/group-key-management";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";
import { GroupKeyManagementInterface } from "./GroupKeyManagementInterface.js";

/**
 * GroupKeyManagementBehavior is the base class for objects that support interaction with
 * {@link GroupKeyManagement.Cluster}.
 */
export const GroupKeyManagementBehavior = ClusterBehavior
    .withInterface<GroupKeyManagementInterface>()
    .for(GroupKeyManagement.Cluster);

type GroupKeyManagementBehaviorType = InstanceType<typeof GroupKeyManagementBehavior>;
export interface GroupKeyManagementBehavior extends GroupKeyManagementBehaviorType {}
type StateType = InstanceType<typeof GroupKeyManagementBehavior.State>;
export namespace GroupKeyManagementBehavior { export interface State extends StateType {} }
