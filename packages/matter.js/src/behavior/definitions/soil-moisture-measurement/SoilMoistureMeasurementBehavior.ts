/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { SoilMoistureMeasurement } from "../../../cluster/definitions/SoilMoistureMeasurementCluster.js";
import { ClusterBehavior } from "../../cluster/ClusterBehavior.js";

/**
 * SoilMoistureMeasurementBehavior is the base class for objects that support interaction with {@link
 * SoilMoistureMeasurement.Cluster}.
 */
export const SoilMoistureMeasurementBehavior = ClusterBehavior.for(SoilMoistureMeasurement.Cluster);

type SoilMoistureMeasurementBehaviorType = InstanceType<typeof SoilMoistureMeasurementBehavior>;
export interface SoilMoistureMeasurementBehavior extends SoilMoistureMeasurementBehaviorType {}
type StateType = InstanceType<typeof SoilMoistureMeasurementBehavior.State>;
export namespace SoilMoistureMeasurementBehavior { export interface State extends StateType {} }
