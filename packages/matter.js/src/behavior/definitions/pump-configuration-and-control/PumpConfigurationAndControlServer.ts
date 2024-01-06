/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE WILL BE REGENERATED IF YOU DO NOT REMOVE THIS MESSAGE ***/

import { PumpConfigurationAndControlBehavior } from "./PumpConfigurationAndControlBehavior.js";
import { PumpConfigurationAndControl } from "../../../cluster/definitions/PumpConfigurationAndControlCluster.js";

const Base = PumpConfigurationAndControlBehavior.for(PumpConfigurationAndControl.Complete);

/**
 * This is the default server implementation of PumpConfigurationAndControlBehavior.
 *
 * This implementation includes all features of PumpConfigurationAndControl.Cluster. You should use
 * PumpConfigurationAndControlServer.with to specialize the class for the features your implementation supports.
 */
export class PumpConfigurationAndControlServer extends Base {
}
