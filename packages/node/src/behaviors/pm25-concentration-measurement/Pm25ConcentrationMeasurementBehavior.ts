/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Pm25ConcentrationMeasurement } from "#clusters/pm25-concentration-measurement";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";
import { ClusterType } from "#types";

/**
 * Pm25ConcentrationMeasurementBehavior is the base class for objects that support interaction with
 * {@link Pm25ConcentrationMeasurement.Cluster}.
 *
 * Pm25ConcentrationMeasurement.Cluster requires you to enable one or more optional features. You can do so using
 * {@link Pm25ConcentrationMeasurementBehavior.with}.
 */
export const Pm25ConcentrationMeasurementBehavior = ClusterBehavior.for(ClusterType(Pm25ConcentrationMeasurement.Base));

type Pm25ConcentrationMeasurementBehaviorType = InstanceType<typeof Pm25ConcentrationMeasurementBehavior>;
export interface Pm25ConcentrationMeasurementBehavior extends Pm25ConcentrationMeasurementBehaviorType {}
type StateType = InstanceType<typeof Pm25ConcentrationMeasurementBehavior.State>;
export namespace Pm25ConcentrationMeasurementBehavior { export interface State extends StateType {} }
