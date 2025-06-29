/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { RadonConcentrationMeasurement } from "#clusters/radon-concentration-measurement";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";
import { Identity } from "#general";

export const RadonConcentrationMeasurementClientConstructor = ClusterBehavior
    .for(RadonConcentrationMeasurement.Complete);
export interface RadonConcentrationMeasurementClient extends InstanceType<typeof RadonConcentrationMeasurementClientConstructor> {}
export interface RadonConcentrationMeasurementClientConstructor extends Identity<typeof RadonConcentrationMeasurementClientConstructor> {}
export const RadonConcentrationMeasurementClient: RadonConcentrationMeasurementClientConstructor = RadonConcentrationMeasurementClientConstructor;
