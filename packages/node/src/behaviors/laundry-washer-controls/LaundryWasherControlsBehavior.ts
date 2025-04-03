/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { LaundryWasherControls } from "#clusters/laundry-washer-controls";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";
import { ClusterType } from "#types";

/**
 * LaundryWasherControlsBehavior is the base class for objects that support interaction with
 * {@link LaundryWasherControls.Cluster}.
 *
 * LaundryWasherControls.Cluster requires you to enable one or more optional features. You can do so using
 * {@link LaundryWasherControlsBehavior.with}.
 */
export const LaundryWasherControlsBehavior = ClusterBehavior.for(ClusterType(LaundryWasherControls.Base));

type LaundryWasherControlsBehaviorType = InstanceType<typeof LaundryWasherControlsBehavior>;
export interface LaundryWasherControlsBehavior extends LaundryWasherControlsBehaviorType {}
type StateType = InstanceType<typeof LaundryWasherControlsBehavior.State>;
export namespace LaundryWasherControlsBehavior { export interface State extends StateType {} }
