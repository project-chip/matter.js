/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { OperationalState } from "#clusters/operational-state";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";
import { OperationalStateInterface } from "./OperationalStateInterface.js";

/**
 * OperationalStateBehavior is the base class for objects that support interaction with
 * {@link OperationalState.Cluster}.
 */
export const OperationalStateBehavior = ClusterBehavior
    .withInterface<OperationalStateInterface>()
    .for(OperationalState.Cluster);

type OperationalStateBehaviorType = InstanceType<typeof OperationalStateBehavior>;
export interface OperationalStateBehavior extends OperationalStateBehaviorType {}
type StateType = InstanceType<typeof OperationalStateBehavior.State>;
export namespace OperationalStateBehavior { export interface State extends StateType {} }
