/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Switch } from "@project-chip/matter.js-types";
import { ClusterBehavior } from "../../cluster/ClusterBehavior.js";
import { ClusterType } from "@project-chip/matter.js-types";

/**
 * SwitchBehavior is the base class for objects that support interaction with {@link Switch.Cluster}.
 *
 * Switch.Cluster requires you to enable one or more optional features. You can do so using {@link SwitchBehavior.with}.
 */
export const SwitchBehavior = ClusterBehavior.for(ClusterType(Switch.Base));

type SwitchBehaviorType = InstanceType<typeof SwitchBehavior>;
export interface SwitchBehavior extends SwitchBehaviorType {}
type StateType = InstanceType<typeof SwitchBehavior.State>;
export namespace SwitchBehavior { export interface State extends StateType {} }
