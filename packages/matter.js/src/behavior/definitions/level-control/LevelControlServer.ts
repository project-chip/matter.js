/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE WILL BE REGENERATED IF YOU DO NOT REMOVE THIS MESSAGE ***/

import { LevelControlBehavior } from "./LevelControlBehavior.js";

const Base = LevelControlBehavior.with("OnOff", "Lighting", "Frequency");

/**
 * This is the default server implementation of LevelControlBehavior.
 *
 * This implementation includes all features of LevelControl.Cluster. You should use LevelControlServer.with to
 * specialize the class for the features your implementation supports.
 */
export class LevelControlServer extends Base {
}
