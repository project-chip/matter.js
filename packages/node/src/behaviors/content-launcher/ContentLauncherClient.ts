/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ContentLauncher } from "#clusters/content-launcher";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";
import { Identity } from "#general";

export const ContentLauncherClientConstructor = ClusterBehavior.for(ContentLauncher.Complete);
export interface ContentLauncherClient extends InstanceType<typeof ContentLauncherClientConstructor> {}
export interface ContentLauncherClientConstructor extends Identity<typeof ContentLauncherClientConstructor> {}
export const ContentLauncherClient: ContentLauncherClientConstructor = ContentLauncherClientConstructor;
