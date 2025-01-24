/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { DoorLock } from "#clusters/door-lock";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";
import { DoorLockInterface } from "./DoorLockInterface.js";

/**
 * DoorLockBehavior is the base class for objects that support interaction with {@link DoorLock.Cluster}.
 *
 * This class does not have optional features of DoorLock.Cluster enabled. You can enable additional features using
 * DoorLockBehavior.with.
 */
export const DoorLockBehavior = ClusterBehavior
    .withInterface<DoorLockInterface>()
    .for(DoorLock.Cluster);

type DoorLockBehaviorType = InstanceType<typeof DoorLockBehavior>;
export interface DoorLockBehavior extends DoorLockBehaviorType {}
type StateType = InstanceType<typeof DoorLockBehavior.State>;
export namespace DoorLockBehavior { export interface State extends StateType {} }
