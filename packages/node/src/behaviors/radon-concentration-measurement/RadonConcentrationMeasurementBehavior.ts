/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { RadonConcentrationMeasurement } from "#clusters/radon-concentration-measurement";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";
import { ClusterType } from "#types";

/**
 * RadonConcentrationMeasurementBehavior is the base class for objects that support interaction with
 * {@link RadonConcentrationMeasurement.Cluster}.
 *
 * RadonConcentrationMeasurement.Cluster requires you to enable one or more optional features. You can do so using
 * {@link RadonConcentrationMeasurementBehavior.with}.
 */
export const RadonConcentrationMeasurementBehavior = ClusterBehavior
    .for(ClusterType(RadonConcentrationMeasurement.Base));

type RadonConcentrationMeasurementBehaviorType = InstanceType<typeof RadonConcentrationMeasurementBehavior>;
export interface RadonConcentrationMeasurementBehavior extends RadonConcentrationMeasurementBehaviorType {}
type StateType = InstanceType<typeof RadonConcentrationMeasurementBehavior.State>;
export namespace RadonConcentrationMeasurementBehavior { export interface State extends StateType {} }
