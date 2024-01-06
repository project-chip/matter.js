/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE WILL BE REGENERATED IF YOU DO NOT REMOVE THIS MESSAGE ***/

import { PulseWidthModulationBehavior } from "./PulseWidthModulationBehavior.js";
import { PulseWidthModulation } from "../../../cluster/definitions/PulseWidthModulationCluster.js";

const Base = PulseWidthModulationBehavior.for(PulseWidthModulation.Complete);

/**
 * This is the default server implementation of PulseWidthModulationBehavior.
 *
 * This implementation includes all features of PulseWidthModulation.Cluster. You should use
 * PulseWidthModulationServer.with to specialize the class for the features your implementation supports.
 */
export class PulseWidthModulationServer extends Base {
}
