/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { FlowMeasurement } from "#clusters/flow-measurement";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";

/**
 * FlowMeasurementBehavior is the base class for objects that support interaction with {@link FlowMeasurement.Cluster}.
 */
export const FlowMeasurementBehavior = ClusterBehavior.for(FlowMeasurement.Cluster);

type FlowMeasurementBehaviorType = InstanceType<typeof FlowMeasurementBehavior>;
export interface FlowMeasurementBehavior extends FlowMeasurementBehaviorType {}
type StateType = InstanceType<typeof FlowMeasurementBehavior.State>;
export namespace FlowMeasurementBehavior { export interface State extends StateType {} }
