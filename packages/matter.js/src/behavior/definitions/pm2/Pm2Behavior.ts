/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Pm2 } from "../../../cluster/definitions/Pm2Cluster.js";
import { ClusterBehavior } from "../../cluster/ClusterBehavior.js";
import { ClusterType } from "../../../cluster/ClusterType.js";

/**
 * Pm2Behavior is the base class for objects that support interaction with {@link Pm2.Cluster}.
 *
 * Pm2.Cluster requires you to enable one or more optional features. You can do so using {@link Pm2Behavior.with}.
 */
export const Pm2Behavior = ClusterBehavior.for(ClusterType(Pm2.Base));

type Pm2BehaviorType = InstanceType<typeof Pm2Behavior>;
export interface Pm2Behavior extends Pm2BehaviorType {}
type StateType = InstanceType<typeof Pm2Behavior.State>;
export namespace Pm2Behavior { export interface State extends StateType {} }
