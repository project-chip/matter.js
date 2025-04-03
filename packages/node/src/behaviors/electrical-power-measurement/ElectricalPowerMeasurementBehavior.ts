/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ElectricalPowerMeasurement } from "#clusters/electrical-power-measurement";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";
import { ClusterType } from "#types";

/**
 * ElectricalPowerMeasurementBehavior is the base class for objects that support interaction with
 * {@link ElectricalPowerMeasurement.Cluster}.
 *
 * ElectricalPowerMeasurement.Cluster requires you to enable one or more optional features. You can do so using
 * {@link ElectricalPowerMeasurementBehavior.with}.
 */
export const ElectricalPowerMeasurementBehavior = ClusterBehavior.for(ClusterType(ElectricalPowerMeasurement.Base));

type ElectricalPowerMeasurementBehaviorType = InstanceType<typeof ElectricalPowerMeasurementBehavior>;
export interface ElectricalPowerMeasurementBehavior extends ElectricalPowerMeasurementBehaviorType {}
type StateType = InstanceType<typeof ElectricalPowerMeasurementBehavior.State>;
export namespace ElectricalPowerMeasurementBehavior { export interface State extends StateType {} }
