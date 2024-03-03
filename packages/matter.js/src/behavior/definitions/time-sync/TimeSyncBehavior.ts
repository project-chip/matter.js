/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { TimeSync } from "../../../cluster/definitions/TimeSyncCluster.js";
import { ClusterBehavior } from "../../cluster/ClusterBehavior.js";
import { TimeSyncInterface } from "./TimeSyncInterface.js";

/**
 * TimeSyncBehavior is the base class for objects that support interaction with {@link TimeSync.Cluster}.
 *
 * This class does not have optional features of TimeSync.Cluster enabled. You can enable additional features using
 * TimeSyncBehavior.with.
 */
export const TimeSyncBehavior = ClusterBehavior
    .withInterface<TimeSyncInterface>()
    .for(TimeSync.Cluster);

type TimeSyncBehaviorType = InstanceType<typeof TimeSyncBehavior>;
export interface TimeSyncBehavior extends TimeSyncBehaviorType {}
type StateType = InstanceType<typeof TimeSyncBehavior.State>;
export namespace TimeSyncBehavior { export interface State extends StateType {} }
