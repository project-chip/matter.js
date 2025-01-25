/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { FanControl } from "#clusters/fan-control";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";
import { FanControlInterface } from "./FanControlInterface.js";

/**
 * FanControlBehavior is the base class for objects that support interaction with {@link FanControl.Cluster}.
 *
 * This class does not have optional features of FanControl.Cluster enabled. You can enable additional features using
 * FanControlBehavior.with.
 */
export const FanControlBehavior = ClusterBehavior
    .withInterface<FanControlInterface>()
    .for(FanControl.Cluster);

type FanControlBehaviorType = InstanceType<typeof FanControlBehavior>;
export interface FanControlBehavior extends FanControlBehaviorType {}
type StateType = InstanceType<typeof FanControlBehavior.State>;
export namespace FanControlBehavior { export interface State extends StateType {} }
