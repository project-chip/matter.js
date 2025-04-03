/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { PressureMeasurement } from "#clusters/pressure-measurement";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";

/**
 * PressureMeasurementBehavior is the base class for objects that support interaction with
 * {@link PressureMeasurement.Cluster}.
 *
 * This class does not have optional features of PressureMeasurement.Cluster enabled. You can enable additional features
 * using PressureMeasurementBehavior.with.
 */
export const PressureMeasurementBehavior = ClusterBehavior.for(PressureMeasurement.Cluster);

type PressureMeasurementBehaviorType = InstanceType<typeof PressureMeasurementBehavior>;
export interface PressureMeasurementBehavior extends PressureMeasurementBehaviorType {}
type StateType = InstanceType<typeof PressureMeasurementBehavior.State>;
export namespace PressureMeasurementBehavior { export interface State extends StateType {} }
