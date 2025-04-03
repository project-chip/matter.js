/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { LaundryDryerControls } from "#clusters/laundry-dryer-controls";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";

/**
 * LaundryDryerControlsBehavior is the base class for objects that support interaction with
 * {@link LaundryDryerControls.Cluster}.
 */
export const LaundryDryerControlsBehavior = ClusterBehavior.for(LaundryDryerControls.Cluster);

type LaundryDryerControlsBehaviorType = InstanceType<typeof LaundryDryerControlsBehavior>;
export interface LaundryDryerControlsBehavior extends LaundryDryerControlsBehaviorType {}
type StateType = InstanceType<typeof LaundryDryerControlsBehavior.State>;
export namespace LaundryDryerControlsBehavior { export interface State extends StateType {} }
