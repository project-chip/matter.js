/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { OvenCavityOperationalState } from "#clusters/oven-cavity-operational-state";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";
import { OvenCavityOperationalStateInterface } from "./OvenCavityOperationalStateInterface.js";

/**
 * OvenCavityOperationalStateBehavior is the base class for objects that support interaction with
 * {@link OvenCavityOperationalState.Cluster}.
 */
export const OvenCavityOperationalStateBehavior = ClusterBehavior
    .withInterface<OvenCavityOperationalStateInterface>()
    .for(OvenCavityOperationalState.Cluster);

type OvenCavityOperationalStateBehaviorType = InstanceType<typeof OvenCavityOperationalStateBehavior>;
export interface OvenCavityOperationalStateBehavior extends OvenCavityOperationalStateBehaviorType {}
type StateType = InstanceType<typeof OvenCavityOperationalStateBehavior.State>;
export namespace OvenCavityOperationalStateBehavior { export interface State extends StateType {} }
