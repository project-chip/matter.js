/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE WILL BE REGENERATED IF YOU DO NOT REMOVE THIS MESSAGE ***/

import { FanControlBehavior } from "./FanControlBehavior.js";
import { FanControl } from "../../../cluster/definitions/FanControlCluster.js";

const Base = FanControlBehavior.for(FanControl.Complete);

/**
 * This is the default server implementation of FanControlBehavior.
 *
 * This implementation includes all features of FanControl.Cluster. You should use FanControlServer.with to specialize
 * the class for the features your implementation supports.
 */
export class FanControlServer extends Base {
}
