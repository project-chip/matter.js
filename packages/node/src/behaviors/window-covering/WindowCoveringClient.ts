/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { WindowCovering } from "#clusters/window-covering";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";
import { Identity } from "#general";

export const WindowCoveringClientConstructor = ClusterBehavior.for(WindowCovering.Complete);
export interface WindowCoveringClient extends InstanceType<typeof WindowCoveringClientConstructor> {}
export interface WindowCoveringClientConstructor extends Identity<typeof WindowCoveringClientConstructor> {}
export const WindowCoveringClient: WindowCoveringClientConstructor = WindowCoveringClientConstructor;
