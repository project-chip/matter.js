/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { GeneralCommissioning } from "#clusters/general-commissioning";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";
import { GeneralCommissioningInterface } from "./GeneralCommissioningInterface.js";

/**
 * GeneralCommissioningBehavior is the base class for objects that support interaction with
 * {@link GeneralCommissioning.Cluster}.
 *
 * This class does not have optional features of GeneralCommissioning.Cluster enabled. You can enable additional
 * features using GeneralCommissioningBehavior.with.
 */
export const GeneralCommissioningBehavior = ClusterBehavior
    .withInterface<GeneralCommissioningInterface>()
    .for(GeneralCommissioning.Cluster);

type GeneralCommissioningBehaviorType = InstanceType<typeof GeneralCommissioningBehavior>;
export interface GeneralCommissioningBehavior extends GeneralCommissioningBehaviorType {}
type StateType = InstanceType<typeof GeneralCommissioningBehavior.State>;
export namespace GeneralCommissioningBehavior { export interface State extends StateType {} }
