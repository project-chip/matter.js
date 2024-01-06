/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE WILL BE REGENERATED IF YOU DO NOT REMOVE THIS MESSAGE ***/

import { SwitchBehavior } from "./SwitchBehavior.js";
import { Switch } from "../../../cluster/definitions/SwitchCluster.js";

const Base = SwitchBehavior.for(Switch.Complete);

/**
 * This is the default server implementation of SwitchBehavior.
 *
 * This implementation includes all features of Switch.Cluster. You should use SwitchServer.with to specialize the
 * class for the features your implementation supports.
 */
export class SwitchServer extends Base {
}
