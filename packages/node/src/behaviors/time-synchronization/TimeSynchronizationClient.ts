/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { TimeSynchronization } from "#clusters/time-synchronization";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";
import { Identity } from "#general";

export const TimeSynchronizationClientConstructor = ClusterBehavior.for(TimeSynchronization.Complete);
export interface TimeSynchronizationClient extends InstanceType<typeof TimeSynchronizationClientConstructor> {}
export interface TimeSynchronizationClientConstructor extends Identity<typeof TimeSynchronizationClientConstructor> {}
export const TimeSynchronizationClient: TimeSynchronizationClientConstructor = TimeSynchronizationClientConstructor;
