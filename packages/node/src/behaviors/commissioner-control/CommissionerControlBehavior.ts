/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { CommissionerControl } from "#clusters/commissioner-control";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";
import { CommissionerControlInterface } from "./CommissionerControlInterface.js";

/**
 * CommissionerControlBehavior is the base class for objects that support interaction with
 * {@link CommissionerControl.Cluster}.
 */
export const CommissionerControlBehavior = ClusterBehavior
    .withInterface<CommissionerControlInterface>()
    .for(CommissionerControl.Cluster);

type CommissionerControlBehaviorType = InstanceType<typeof CommissionerControlBehavior>;
export interface CommissionerControlBehavior extends CommissionerControlBehaviorType {}
type StateType = InstanceType<typeof CommissionerControlBehavior.State>;
export namespace CommissionerControlBehavior { export interface State extends StateType {} }
