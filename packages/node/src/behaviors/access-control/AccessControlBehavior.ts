/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { AccessControl } from "#clusters/access-control";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";

/**
 * AccessControlBehavior is the base class for objects that support interaction with {@link AccessControl.Cluster}.
 */
export const AccessControlBehavior = ClusterBehavior.for(AccessControl.Cluster);

type AccessControlBehaviorType = InstanceType<typeof AccessControlBehavior>;
export interface AccessControlBehavior extends AccessControlBehaviorType {}
type StateType = InstanceType<typeof AccessControlBehavior.State>;
export namespace AccessControlBehavior { export interface State extends StateType {} }
