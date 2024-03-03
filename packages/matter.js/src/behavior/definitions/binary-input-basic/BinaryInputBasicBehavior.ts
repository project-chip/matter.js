/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { BinaryInputBasic } from "../../../cluster/definitions/BinaryInputBasicCluster.js";
import { ClusterBehavior } from "../../cluster/ClusterBehavior.js";

/**
 * BinaryInputBasicBehavior is the base class for objects that support interaction with {@link
 * BinaryInputBasic.Cluster}.
 */
export const BinaryInputBasicBehavior = ClusterBehavior.for(BinaryInputBasic.Cluster);

type BinaryInputBasicBehaviorType = InstanceType<typeof BinaryInputBasicBehavior>;
export interface BinaryInputBasicBehavior extends BinaryInputBasicBehaviorType {}
type StateType = InstanceType<typeof BinaryInputBasicBehavior.State>;
export namespace BinaryInputBasicBehavior { export interface State extends StateType {} }
