/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MediaInput } from "#clusters/media-input";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";
import { MediaInputInterface } from "./MediaInputInterface.js";

/**
 * MediaInputBehavior is the base class for objects that support interaction with {@link MediaInput.Cluster}.
 *
 * This class does not have optional features of MediaInput.Cluster enabled. You can enable additional features using
 * MediaInputBehavior.with.
 */
export const MediaInputBehavior = ClusterBehavior
    .withInterface<MediaInputInterface>()
    .for(MediaInput.Cluster);

type MediaInputBehaviorType = InstanceType<typeof MediaInputBehavior>;
export interface MediaInputBehavior extends MediaInputBehaviorType {}
type StateType = InstanceType<typeof MediaInputBehavior.State>;
export namespace MediaInputBehavior { export interface State extends StateType {} }
