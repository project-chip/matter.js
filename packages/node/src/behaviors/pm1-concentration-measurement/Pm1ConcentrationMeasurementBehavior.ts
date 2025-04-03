/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Pm1ConcentrationMeasurement } from "#clusters/pm1-concentration-measurement";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";
import { ClusterType } from "#types";

/**
 * Pm1ConcentrationMeasurementBehavior is the base class for objects that support interaction with
 * {@link Pm1ConcentrationMeasurement.Cluster}.
 *
 * Pm1ConcentrationMeasurement.Cluster requires you to enable one or more optional features. You can do so using
 * {@link Pm1ConcentrationMeasurementBehavior.with}.
 */
export const Pm1ConcentrationMeasurementBehavior = ClusterBehavior.for(ClusterType(Pm1ConcentrationMeasurement.Base));

type Pm1ConcentrationMeasurementBehaviorType = InstanceType<typeof Pm1ConcentrationMeasurementBehavior>;
export interface Pm1ConcentrationMeasurementBehavior extends Pm1ConcentrationMeasurementBehaviorType {}
type StateType = InstanceType<typeof Pm1ConcentrationMeasurementBehavior.State>;
export namespace Pm1ConcentrationMeasurementBehavior { export interface State extends StateType {} }
