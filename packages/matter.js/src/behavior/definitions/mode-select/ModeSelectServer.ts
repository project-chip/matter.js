/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE WILL BE REGENERATED IF YOU DO NOT REMOVE THIS MESSAGE ***/

import { ModeSelectBehavior } from "./ModeSelectBehavior.js";
import { ModeSelect } from "../../../cluster/definitions/ModeSelectCluster.js";

const Base = ModeSelectBehavior.for(ModeSelect.Complete);

/**
 * This is the default server implementation of ModeSelectBehavior.
 *
 * This implementation includes all features of ModeSelect.Cluster. You should use ModeSelectServer.with to specialize
 * the class for the features your implementation supports.
 */
export class ModeSelectServer extends Base {
}
