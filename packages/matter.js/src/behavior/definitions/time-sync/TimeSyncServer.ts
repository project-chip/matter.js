/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE WILL BE REGENERATED IF YOU DO NOT REMOVE THIS MESSAGE ***/

import { TimeSyncBehavior } from "./TimeSyncBehavior.js";
import { TimeSync } from "../../../cluster/definitions/TimeSyncCluster.js";

const Base = TimeSyncBehavior.for(TimeSync.Complete);

/**
 * This is the default server implementation of TimeSyncBehavior.
 *
 * This implementation includes all features of TimeSync.Cluster. You should use TimeSyncServer.with to specialize the
 * class for the features your implementation supports.
 */
export class TimeSyncServer extends Base {
}
