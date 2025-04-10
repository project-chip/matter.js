/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { LaundryWasherMode } from "#clusters/laundry-washer-mode";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";
import { LaundryWasherModeInterface } from "./LaundryWasherModeInterface.js";

/**
 * LaundryWasherModeBehavior is the base class for objects that support interaction with
 * {@link LaundryWasherMode.Cluster}.
 */
export const LaundryWasherModeBehavior = ClusterBehavior
    .withInterface<LaundryWasherModeInterface>()
    .for(LaundryWasherMode.Cluster);

type LaundryWasherModeBehaviorType = InstanceType<typeof LaundryWasherModeBehavior>;
export interface LaundryWasherModeBehavior extends LaundryWasherModeBehaviorType {}
type StateType = InstanceType<typeof LaundryWasherModeBehavior.State>;
export namespace LaundryWasherModeBehavior { export interface State extends StateType {} }
