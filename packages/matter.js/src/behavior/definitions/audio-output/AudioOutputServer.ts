/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE WILL BE REGENERATED IF YOU DO NOT REMOVE THIS MESSAGE ***/

import { AudioOutputBehavior } from "./AudioOutputBehavior.js";
import { AudioOutput } from "../../../cluster/definitions/AudioOutputCluster.js";

const Base = AudioOutputBehavior.for(AudioOutput.Complete);

/**
 * This is the default server implementation of AudioOutputBehavior.
 *
 * This implementation includes all features of AudioOutput.Cluster. You should use AudioOutputServer.with to
 * specialize the class for the features your implementation supports.
 */
export class AudioOutputServer extends Base {
}
