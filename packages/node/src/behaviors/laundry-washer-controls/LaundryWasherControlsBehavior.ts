/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { LaundryWasherControls } from "#clusters/laundry-washer-controls";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";

/**
 * LaundryWasherControlsBehavior is the base class for objects that support interaction with {@link
 * LaundryWasherControls.Cluster}.
 *
 * This class does not have optional features of LaundryWasherControls.Cluster enabled. You can enable additional
 * features using LaundryWasherControlsBehavior.with.
 */
export const LaundryWasherControlsBehavior = ClusterBehavior.for(LaundryWasherControls.Cluster);

type LaundryWasherControlsBehaviorType = InstanceType<typeof LaundryWasherControlsBehavior>;
export interface LaundryWasherControlsBehavior extends LaundryWasherControlsBehaviorType {}
type StateType = InstanceType<typeof LaundryWasherControlsBehavior.State>;
export namespace LaundryWasherControlsBehavior { export interface State extends StateType {} }
