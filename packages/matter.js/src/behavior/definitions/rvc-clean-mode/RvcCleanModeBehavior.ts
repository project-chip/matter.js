/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { RvcCleanMode } from "../../../cluster/definitions/RvcCleanModeCluster.js";
import { ClusterBehavior } from "../../cluster/ClusterBehavior.js";

/**
 * RvcCleanModeBehavior is the base class for objects that support interaction with {@link RvcCleanMode.Cluster}.
 */
export const RvcCleanModeBehavior = ClusterBehavior.for(RvcCleanMode.Cluster);

type RvcCleanModeBehaviorType = InstanceType<typeof RvcCleanModeBehavior>;
export interface RvcCleanModeBehavior extends RvcCleanModeBehaviorType {}
type StateType = InstanceType<typeof RvcCleanModeBehavior.State>;
export namespace RvcCleanModeBehavior { export interface State extends StateType {} }
