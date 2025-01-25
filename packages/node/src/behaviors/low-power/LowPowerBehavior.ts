/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { LowPower } from "#clusters/low-power";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";
import { LowPowerInterface } from "./LowPowerInterface.js";

/**
 * LowPowerBehavior is the base class for objects that support interaction with {@link LowPower.Cluster}.
 */
export const LowPowerBehavior = ClusterBehavior
    .withInterface<LowPowerInterface>()
    .for(LowPower.Cluster);

type LowPowerBehaviorType = InstanceType<typeof LowPowerBehavior>;
export interface LowPowerBehavior extends LowPowerBehaviorType {}
type StateType = InstanceType<typeof LowPowerBehavior.State>;
export namespace LowPowerBehavior { export interface State extends StateType {} }
