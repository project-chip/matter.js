/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { LevelControl } from "#clusters/level-control";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";
import { LevelControlInterface } from "./LevelControlInterface.js";

/**
 * LevelControlBehavior is the base class for objects that support interaction with {@link LevelControl.Cluster}.
 *
 * This class does not have optional features of LevelControl.Cluster enabled. You can enable additional features using
 * LevelControlBehavior.with.
 */
export const LevelControlBehavior = ClusterBehavior
    .withInterface<LevelControlInterface>()
    .for(LevelControl.Cluster);

type LevelControlBehaviorType = InstanceType<typeof LevelControlBehavior>;
export interface LevelControlBehavior extends LevelControlBehaviorType {}
type StateType = InstanceType<typeof LevelControlBehavior.State>;
export namespace LevelControlBehavior { export interface State extends StateType {} }
