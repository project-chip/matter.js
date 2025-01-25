/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ContentLauncher } from "#clusters/content-launcher";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";
import { ContentLauncherInterface } from "./ContentLauncherInterface.js";

/**
 * ContentLauncherBehavior is the base class for objects that support interaction with {@link ContentLauncher.Cluster}.
 *
 * This class does not have optional features of ContentLauncher.Cluster enabled. You can enable additional features
 * using ContentLauncherBehavior.with.
 */
export const ContentLauncherBehavior = ClusterBehavior
    .withInterface<ContentLauncherInterface>()
    .for(ContentLauncher.Cluster);

type ContentLauncherBehaviorType = InstanceType<typeof ContentLauncherBehavior>;
export interface ContentLauncherBehavior extends ContentLauncherBehaviorType {}
type StateType = InstanceType<typeof ContentLauncherBehavior.State>;
export namespace ContentLauncherBehavior { export interface State extends StateType {} }
