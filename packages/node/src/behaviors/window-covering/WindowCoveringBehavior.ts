/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { WindowCovering } from "#clusters/window-covering";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";
import { WindowCoveringInterface } from "./WindowCoveringInterface.js";
import { ClusterType } from "#types";

/**
 * WindowCoveringBehavior is the base class for objects that support interaction with {@link WindowCovering.Cluster}.
 *
 * WindowCovering.Cluster requires you to enable one or more optional features. You can do so using
 * {@link WindowCoveringBehavior.with}.
 */
export const WindowCoveringBehavior = ClusterBehavior
    .withInterface<WindowCoveringInterface>()
    .for(ClusterType(WindowCovering.Base));

type WindowCoveringBehaviorType = InstanceType<typeof WindowCoveringBehavior>;
export interface WindowCoveringBehavior extends WindowCoveringBehaviorType {}
type StateType = InstanceType<typeof WindowCoveringBehavior.State>;
export namespace WindowCoveringBehavior { export interface State extends StateType {} }
