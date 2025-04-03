/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { CarbonMonoxideConcentrationMeasurement } from "#clusters/carbon-monoxide-concentration-measurement";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";
import { ClusterType } from "#types";

/**
 * CarbonMonoxideConcentrationMeasurementBehavior is the base class for objects that support interaction with
 * {@link CarbonMonoxideConcentrationMeasurement.Cluster}.
 *
 * CarbonMonoxideConcentrationMeasurement.Cluster requires you to enable one or more optional features. You can do so
 * using {@link CarbonMonoxideConcentrationMeasurementBehavior.with}.
 */
export const CarbonMonoxideConcentrationMeasurementBehavior = ClusterBehavior
    .for(ClusterType(CarbonMonoxideConcentrationMeasurement.Base));

type CarbonMonoxideConcentrationMeasurementBehaviorType = InstanceType<typeof CarbonMonoxideConcentrationMeasurementBehavior>;
export interface CarbonMonoxideConcentrationMeasurementBehavior extends CarbonMonoxideConcentrationMeasurementBehaviorType {}
type StateType = InstanceType<typeof CarbonMonoxideConcentrationMeasurementBehavior.State>;
export namespace CarbonMonoxideConcentrationMeasurementBehavior { export interface State extends StateType {} }
