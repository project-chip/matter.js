/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { TemperatureControl } from "#clusters/temperature-control";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";
import { Identity } from "#general";

export const TemperatureControlClientConstructor = ClusterBehavior.for(TemperatureControl.Complete);
export interface TemperatureControlClient extends InstanceType<typeof TemperatureControlClientConstructor> {}
export interface TemperatureControlClientConstructor extends Identity<typeof TemperatureControlClientConstructor> {}
export const TemperatureControlClient: TemperatureControlClientConstructor = TemperatureControlClientConstructor;
