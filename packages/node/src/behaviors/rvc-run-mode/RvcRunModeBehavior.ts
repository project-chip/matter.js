/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { RvcRunMode } from "#clusters/rvc-run-mode";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";

/**
 * RvcRunModeBehavior is the base class for objects that support interaction with {@link RvcRunMode.Cluster}.
 */
export const RvcRunModeBehavior = ClusterBehavior.for(RvcRunMode.Cluster);

type RvcRunModeBehaviorType = InstanceType<typeof RvcRunModeBehavior>;
export interface RvcRunModeBehavior extends RvcRunModeBehaviorType {}
type StateType = InstanceType<typeof RvcRunModeBehavior.State>;
export namespace RvcRunModeBehavior { export interface State extends StateType {} }
