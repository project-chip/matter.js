/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE WILL BE REGENERATED IF YOU DO NOT REMOVE THIS MESSAGE ***/

import { ThermostatBehavior } from "./ThermostatBehavior.js";
import { Thermostat } from "../../../cluster/definitions/ThermostatCluster.js";

const Base = ThermostatBehavior.for(Thermostat.Complete);

/**
 * This is the default server implementation of ThermostatBehavior.
 *
 * This implementation includes all features of Thermostat.Cluster. You should use ThermostatServer.with to specialize
 * the class for the features your implementation supports.
 */
export class ThermostatServer extends Base {
}
