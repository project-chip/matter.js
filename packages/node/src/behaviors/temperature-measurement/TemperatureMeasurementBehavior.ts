/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { TemperatureMeasurement } from "#clusters/temperature-measurement";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";

/**
 * TemperatureMeasurementBehavior is the base class for objects that support interaction with
 * {@link TemperatureMeasurement.Cluster}.
 */
export const TemperatureMeasurementBehavior = ClusterBehavior.for(TemperatureMeasurement.Cluster);

type TemperatureMeasurementBehaviorType = InstanceType<typeof TemperatureMeasurementBehavior>;
export interface TemperatureMeasurementBehavior extends TemperatureMeasurementBehaviorType {}
type StateType = InstanceType<typeof TemperatureMeasurementBehavior.State>;
export namespace TemperatureMeasurementBehavior { export interface State extends StateType {} }
