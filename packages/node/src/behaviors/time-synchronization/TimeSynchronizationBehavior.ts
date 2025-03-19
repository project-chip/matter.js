/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { TimeSynchronization } from "#clusters/time-synchronization";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";
import { TimeSynchronizationInterface } from "./TimeSynchronizationInterface.js";

/**
 * TimeSynchronizationBehavior is the base class for objects that support interaction with
 * {@link TimeSynchronization.Cluster}.
 *
 * This class does not have optional features of TimeSynchronization.Cluster enabled. You can enable additional features
 * using TimeSynchronizationBehavior.with.
 */
export const TimeSynchronizationBehavior = ClusterBehavior
    .withInterface<TimeSynchronizationInterface>()
    .for(TimeSynchronization.Cluster);

type TimeSynchronizationBehaviorType = InstanceType<typeof TimeSynchronizationBehavior>;
export interface TimeSynchronizationBehavior extends TimeSynchronizationBehaviorType {}
type StateType = InstanceType<typeof TimeSynchronizationBehavior.State>;
export namespace TimeSynchronizationBehavior { export interface State extends StateType {} }
