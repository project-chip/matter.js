/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ElectricalEnergyMeasurement } from "#clusters/electrical-energy-measurement";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";
import { ClusterType } from "#types";

/**
 * ElectricalEnergyMeasurementBehavior is the base class for objects that support interaction with
 * {@link ElectricalEnergyMeasurement.Cluster}.
 *
 * ElectricalEnergyMeasurement.Cluster requires you to enable one or more optional features. You can do so using
 * {@link ElectricalEnergyMeasurementBehavior.with}.
 */
export const ElectricalEnergyMeasurementBehavior = ClusterBehavior.for(ClusterType(ElectricalEnergyMeasurement.Base));

type ElectricalEnergyMeasurementBehaviorType = InstanceType<typeof ElectricalEnergyMeasurementBehavior>;
export interface ElectricalEnergyMeasurementBehavior extends ElectricalEnergyMeasurementBehaviorType {}
type StateType = InstanceType<typeof ElectricalEnergyMeasurementBehavior.State>;
export namespace ElectricalEnergyMeasurementBehavior { export interface State extends StateType {} }
