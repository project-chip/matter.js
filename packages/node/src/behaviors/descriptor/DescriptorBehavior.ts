/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Descriptor } from "#clusters/descriptor";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";

/**
 * DescriptorBehavior is the base class for objects that support interaction with {@link Descriptor.Cluster}.
 *
 * This class does not have optional features of Descriptor.Cluster enabled. You can enable additional features using
 * DescriptorBehavior.with.
 */
export const DescriptorBehavior = ClusterBehavior.for(Descriptor.Cluster);

type DescriptorBehaviorType = InstanceType<typeof DescriptorBehavior>;
export interface DescriptorBehavior extends DescriptorBehaviorType {}
type StateType = InstanceType<typeof DescriptorBehavior.State>;
export namespace DescriptorBehavior { export interface State extends StateType {} }
