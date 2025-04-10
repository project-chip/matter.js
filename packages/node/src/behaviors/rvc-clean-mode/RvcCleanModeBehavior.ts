/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { RvcCleanMode } from "#clusters/rvc-clean-mode";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";
import { RvcCleanModeInterface } from "./RvcCleanModeInterface.js";

/**
 * RvcCleanModeBehavior is the base class for objects that support interaction with {@link RvcCleanMode.Cluster}.
 */
export const RvcCleanModeBehavior = ClusterBehavior
    .withInterface<RvcCleanModeInterface>()
    .for(RvcCleanMode.Cluster);

type RvcCleanModeBehaviorType = InstanceType<typeof RvcCleanModeBehavior>;
export interface RvcCleanModeBehavior extends RvcCleanModeBehaviorType {}
type StateType = InstanceType<typeof RvcCleanModeBehavior.State>;
export namespace RvcCleanModeBehavior { export interface State extends StateType {} }
