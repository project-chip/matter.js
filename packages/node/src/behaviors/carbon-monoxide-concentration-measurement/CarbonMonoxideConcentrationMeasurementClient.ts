/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { CarbonMonoxideConcentrationMeasurement } from "#clusters/carbon-monoxide-concentration-measurement";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";
import { Identity } from "#general";

export const CarbonMonoxideConcentrationMeasurementClientConstructor = ClusterBehavior
    .for(CarbonMonoxideConcentrationMeasurement.Complete);
export interface CarbonMonoxideConcentrationMeasurementClient extends InstanceType<typeof CarbonMonoxideConcentrationMeasurementClientConstructor> {}
export interface CarbonMonoxideConcentrationMeasurementClientConstructor extends Identity<typeof CarbonMonoxideConcentrationMeasurementClientConstructor> {}
export const CarbonMonoxideConcentrationMeasurementClient: CarbonMonoxideConcentrationMeasurementClientConstructor = CarbonMonoxideConcentrationMeasurementClientConstructor;
