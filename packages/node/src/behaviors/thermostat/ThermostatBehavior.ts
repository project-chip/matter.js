/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Thermostat } from "#clusters/thermostat";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";
import { ThermostatInterface } from "./ThermostatInterface.js";
import { ClusterType } from "#types";

/**
 * ThermostatBehavior is the base class for objects that support interaction with {@link Thermostat.Cluster}.
 *
 * Thermostat.Cluster requires you to enable one or more optional features. You can do so using
 * {@link ThermostatBehavior.with}.
 */
export const ThermostatBehavior = ClusterBehavior
    .withInterface<ThermostatInterface>()
    .for(ClusterType(Thermostat.Base));

type ThermostatBehaviorType = InstanceType<typeof ThermostatBehavior>;
export interface ThermostatBehavior extends ThermostatBehaviorType {}
type StateType = InstanceType<typeof ThermostatBehavior.State>;
export namespace ThermostatBehavior { export interface State extends StateType {} }
