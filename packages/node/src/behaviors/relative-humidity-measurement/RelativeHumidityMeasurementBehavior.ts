/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { RelativeHumidityMeasurement } from "#clusters/relative-humidity-measurement";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";

/**
 * RelativeHumidityMeasurementBehavior is the base class for objects that support interaction with
 * {@link RelativeHumidityMeasurement.Cluster}.
 */
export const RelativeHumidityMeasurementBehavior = ClusterBehavior.for(RelativeHumidityMeasurement.Cluster);

type RelativeHumidityMeasurementBehaviorType = InstanceType<typeof RelativeHumidityMeasurementBehavior>;
export interface RelativeHumidityMeasurementBehavior extends RelativeHumidityMeasurementBehaviorType {}
type StateType = InstanceType<typeof RelativeHumidityMeasurementBehavior.State>;
export namespace RelativeHumidityMeasurementBehavior { export interface State extends StateType {} }
