/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Groups } from "#clusters/groups";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";
import { GroupsInterface } from "./GroupsInterface.js";

/**
 * GroupsBehavior is the base class for objects that support interaction with {@link Groups.Cluster}.
 */
export const GroupsBehavior = ClusterBehavior
    .withInterface<GroupsInterface>()
    .for(Groups.Cluster);

type GroupsBehaviorType = InstanceType<typeof GroupsBehavior>;
export interface GroupsBehavior extends GroupsBehaviorType {}
type StateType = InstanceType<typeof GroupsBehavior.State>;
export namespace GroupsBehavior { export interface State extends StateType {} }
