/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE WILL BE REGENERATED IF YOU DO NOT REMOVE THIS MESSAGE ***/

import { MediaPlaybackBehavior } from "./MediaPlaybackBehavior.js";
import { MediaPlayback } from "../../../cluster/definitions/MediaPlaybackCluster.js";

const Base = MediaPlaybackBehavior.for(MediaPlayback.Complete);

/**
 * This is the default server implementation of MediaPlaybackBehavior.
 *
 * This implementation includes all features of MediaPlayback.Cluster. You should use MediaPlaybackServer.with to
 * specialize the class for the features your implementation supports.
 */
export class MediaPlaybackServer extends Base {
}
