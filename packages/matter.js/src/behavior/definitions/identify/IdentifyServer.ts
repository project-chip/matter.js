/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE WILL BE REGENERATED IF YOU DO NOT REMOVE THIS MESSAGE ***/

import { IdentifyBehavior } from "./IdentifyBehavior.js";
import { Identify } from "../../../cluster/definitions/IdentifyCluster.js";

const Base = IdentifyBehavior.for(Identify.Complete);

/**
 * This is the default server implementation of IdentifyBehavior.
 *
 * This implementation includes all features of Identify.Cluster. You should use IdentifyServer.with to specialize the
 * class for the features your implementation supports.
 */
export class IdentifyServer extends Base {
}
