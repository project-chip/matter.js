/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Thermostat } from "#clusters/thermostat";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";
import { Identity } from "#general";

export const ThermostatClientConstructor = ClusterBehavior.for(Thermostat.Complete);
export interface ThermostatClient extends InstanceType<typeof ThermostatClientConstructor> {}
export interface ThermostatClientConstructor extends Identity<typeof ThermostatClientConstructor> {}
export const ThermostatClient: ThermostatClientConstructor = ThermostatClientConstructor;
