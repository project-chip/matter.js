/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE WILL BE REGENERATED IF YOU DO NOT REMOVE THIS MESSAGE ***/

import { WindowCoveringBehavior } from "./WindowCoveringBehavior.js";
import { WindowCovering } from "../../../cluster/definitions/WindowCoveringCluster.js";

const Base = WindowCoveringBehavior.for(WindowCovering.Complete);

/**
 * This is the default server implementation of WindowCoveringBehavior.
 *
 * This implementation includes all features of WindowCovering.Cluster. You should use WindowCoveringServer.with to
 * specialize the class for the features your implementation supports.
 */
export class WindowCoveringServer extends Base {
}
