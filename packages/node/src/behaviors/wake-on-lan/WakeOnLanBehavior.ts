/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { WakeOnLan } from "#clusters/wake-on-lan";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";

/**
 * WakeOnLanBehavior is the base class for objects that support interaction with {@link WakeOnLan.Cluster}.
 */
export const WakeOnLanBehavior = ClusterBehavior.for(WakeOnLan.Cluster);

type WakeOnLanBehaviorType = InstanceType<typeof WakeOnLanBehavior>;
export interface WakeOnLanBehavior extends WakeOnLanBehaviorType {}
type StateType = InstanceType<typeof WakeOnLanBehavior.State>;
export namespace WakeOnLanBehavior { export interface State extends StateType {} }
