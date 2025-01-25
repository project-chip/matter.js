/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE WILL BE REGENERATED IF YOU DO NOT REMOVE THIS MESSAGE ***/

import { ThermostatBehavior } from "./ThermostatBehavior.js";

/**
 * This is the default server implementation of {@link ThermostatBehavior}.
 *
 * The Matter specification requires the Thermostat cluster to support features we do not enable by default. You should
 * use {@link ThermostatServer.with} to specialize the class for the features your implementation supports.
 */
export class ThermostatServer extends ThermostatBehavior {}
