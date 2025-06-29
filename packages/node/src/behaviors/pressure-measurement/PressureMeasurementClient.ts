/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { PressureMeasurement } from "#clusters/pressure-measurement";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";
import { Identity } from "#general";

export const PressureMeasurementClientConstructor = ClusterBehavior.for(PressureMeasurement.Complete);
export interface PressureMeasurementClient extends InstanceType<typeof PressureMeasurementClientConstructor> {}
export interface PressureMeasurementClientConstructor extends Identity<typeof PressureMeasurementClientConstructor> {}
export const PressureMeasurementClient: PressureMeasurementClientConstructor = PressureMeasurementClientConstructor;
