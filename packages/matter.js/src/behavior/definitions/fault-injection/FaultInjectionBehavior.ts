/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { FaultInjection } from "../../../cluster/definitions/FaultInjectionCluster.js";
import { ClusterBehavior } from "../../cluster/ClusterBehavior.js";
import { FaultInjectionInterface } from "./FaultInjectionInterface.js";

/**
 * FaultInjectionBehavior is the base class for objects that support interaction with {@link FaultInjection.Cluster}.
 */
export const FaultInjectionBehavior = ClusterBehavior
    .withInterface<FaultInjectionInterface>()
    .for(FaultInjection.Cluster);

type FaultInjectionBehaviorType = InstanceType<typeof FaultInjectionBehavior>;
export interface FaultInjectionBehavior extends FaultInjectionBehaviorType {}
type StateType = InstanceType<typeof FaultInjectionBehavior.State>;
export namespace FaultInjectionBehavior { export interface State extends StateType {} }
