/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE WILL BE REGENERATED IF YOU DO NOT REMOVE THIS MESSAGE ***/

import { PressureMeasurementBehavior } from "./PressureMeasurementBehavior.js";
import { PressureMeasurement } from "../../../cluster/definitions/PressureMeasurementCluster.js";

const Base = PressureMeasurementBehavior.for(PressureMeasurement.Complete);

/**
 * This is the default server implementation of PressureMeasurementBehavior.
 *
 * This implementation includes all features of PressureMeasurement.Cluster. You should use
 * PressureMeasurementServer.with to specialize the class for the features your implementation supports.
 */
export class PressureMeasurementServer extends Base {
}
