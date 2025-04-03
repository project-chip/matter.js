/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { BooleanState } from "#clusters/boolean-state";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";

/**
 * BooleanStateBehavior is the base class for objects that support interaction with {@link BooleanState.Cluster}.
 */
export const BooleanStateBehavior = ClusterBehavior.for(BooleanState.Cluster);

type BooleanStateBehaviorType = InstanceType<typeof BooleanStateBehavior>;
export interface BooleanStateBehavior extends BooleanStateBehaviorType {}
type StateType = InstanceType<typeof BooleanStateBehavior.State>;
export namespace BooleanStateBehavior { export interface State extends StateType {} }
