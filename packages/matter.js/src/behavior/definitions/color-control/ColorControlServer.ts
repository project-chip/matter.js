/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE WILL BE REGENERATED IF YOU DO NOT REMOVE THIS MESSAGE ***/

import { ColorControlBehavior } from "./ColorControlBehavior.js";
import { ColorControl } from "../../../cluster/definitions/ColorControlCluster.js";

const Base = ColorControlBehavior.for(ColorControl.Complete);

/**
 * This is the default server implementation of ColorControlBehavior.
 *
 * This implementation includes all features of ColorControl.Cluster. You should use ColorControlServer.with to
 * specialize the class for the features your implementation supports.
 */
export class ColorControlServer extends Base {
}
