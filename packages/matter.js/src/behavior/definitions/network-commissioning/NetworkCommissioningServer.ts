/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE WILL BE REGENERATED IF YOU DO NOT REMOVE THIS MESSAGE ***/

import { NetworkCommissioningBehavior } from "./NetworkCommissioningBehavior.js";
import { NetworkCommissioning } from "../../../cluster/definitions/NetworkCommissioningCluster.js";

const Base = NetworkCommissioningBehavior.for(NetworkCommissioning.Complete);

/**
 * This is the default server implementation of NetworkCommissioningBehavior.
 *
 * This implementation includes all features of NetworkCommissioning.Cluster. You should use
 * NetworkCommissioningServer.with to specialize the class for the features your implementation supports.
 */
export class NetworkCommissioningServer extends Base {
}
