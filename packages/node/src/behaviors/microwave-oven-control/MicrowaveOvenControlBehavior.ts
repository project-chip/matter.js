/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MicrowaveOvenControl } from "#clusters/microwave-oven-control";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";
import { MicrowaveOvenControlInterface } from "./MicrowaveOvenControlInterface.js";
import { ClusterType } from "#types";

/**
 * MicrowaveOvenControlBehavior is the base class for objects that support interaction with
 * {@link MicrowaveOvenControl.Cluster}.
 *
 * MicrowaveOvenControl.Cluster requires you to enable one or more optional features. You can do so using
 * {@link MicrowaveOvenControlBehavior.with}.
 */
export const MicrowaveOvenControlBehavior = ClusterBehavior
    .withInterface<MicrowaveOvenControlInterface>()
    .for(ClusterType(MicrowaveOvenControl.Base));

type MicrowaveOvenControlBehaviorType = InstanceType<typeof MicrowaveOvenControlBehavior>;
export interface MicrowaveOvenControlBehavior extends MicrowaveOvenControlBehaviorType {}
type StateType = InstanceType<typeof MicrowaveOvenControlBehavior.State>;
export namespace MicrowaveOvenControlBehavior { export interface State extends StateType {} }
