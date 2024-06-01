/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ElectricalPowerMeasurement } from "../../../cluster/definitions/ElectricalPowerMeasurementCluster.js";
import { ClusterBehavior } from "../../cluster/ClusterBehavior.js";
import { ClusterType } from "../../../cluster/ClusterType.js";

/**
 * ElectricalPowerMeasurementBehavior is the base class for objects that support interaction with {@link
 * ElectricalPowerMeasurement.Cluster}.
 *
 * ElectricalPowerMeasurement.Cluster requires you to enable one or more optional features. You can do so using {@link
 * ElectricalPowerMeasurementBehavior.with}.
 */
export const ElectricalPowerMeasurementBehavior = ClusterBehavior.for(ClusterType(ElectricalPowerMeasurement.Base));

type ElectricalPowerMeasurementBehaviorType = InstanceType<typeof ElectricalPowerMeasurementBehavior>;
export interface ElectricalPowerMeasurementBehavior extends ElectricalPowerMeasurementBehaviorType {}
type StateType = InstanceType<typeof ElectricalPowerMeasurementBehavior.State>;
export namespace ElectricalPowerMeasurementBehavior { export interface State extends StateType {} }
