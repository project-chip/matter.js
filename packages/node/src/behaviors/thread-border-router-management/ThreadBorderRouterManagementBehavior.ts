/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ThreadBorderRouterManagement } from "#clusters/thread-border-router-management";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";
import { ThreadBorderRouterManagementInterface } from "./ThreadBorderRouterManagementInterface.js";

/**
 * ThreadBorderRouterManagementBehavior is the base class for objects that support interaction with
 * {@link ThreadBorderRouterManagement.Cluster}.
 *
 * This class does not have optional features of ThreadBorderRouterManagement.Cluster enabled. You can enable additional
 * features using ThreadBorderRouterManagementBehavior.with.
 */
export const ThreadBorderRouterManagementBehavior = ClusterBehavior
    .withInterface<ThreadBorderRouterManagementInterface>()
    .for(ThreadBorderRouterManagement.Cluster);

type ThreadBorderRouterManagementBehaviorType = InstanceType<typeof ThreadBorderRouterManagementBehavior>;
export interface ThreadBorderRouterManagementBehavior extends ThreadBorderRouterManagementBehaviorType {}
type StateType = InstanceType<typeof ThreadBorderRouterManagementBehavior.State>;
export namespace ThreadBorderRouterManagementBehavior { export interface State extends StateType {} }
