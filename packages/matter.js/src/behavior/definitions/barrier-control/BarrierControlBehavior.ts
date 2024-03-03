/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { BarrierControl } from "../../../cluster/definitions/BarrierControlCluster.js";
import { ClusterBehavior } from "../../cluster/ClusterBehavior.js";
import { BarrierControlInterface } from "./BarrierControlInterface.js";

/**
 * BarrierControlBehavior is the base class for objects that support interaction with {@link BarrierControl.Cluster}.
 */
export const BarrierControlBehavior = ClusterBehavior
    .withInterface<BarrierControlInterface>()
    .for(BarrierControl.Cluster);

type BarrierControlBehaviorType = InstanceType<typeof BarrierControlBehavior>;
export interface BarrierControlBehavior extends BarrierControlBehaviorType {}
type StateType = InstanceType<typeof BarrierControlBehavior.State>;
export namespace BarrierControlBehavior { export interface State extends StateType {} }
