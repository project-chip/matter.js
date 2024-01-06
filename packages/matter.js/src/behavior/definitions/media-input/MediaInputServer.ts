/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE WILL BE REGENERATED IF YOU DO NOT REMOVE THIS MESSAGE ***/

import { MediaInputBehavior } from "./MediaInputBehavior.js";
import { MediaInput } from "../../../cluster/definitions/MediaInputCluster.js";

const Base = MediaInputBehavior.for(MediaInput.Complete);

/**
 * This is the default server implementation of MediaInputBehavior.
 *
 * This implementation includes all features of MediaInput.Cluster. You should use MediaInputServer.with to specialize
 * the class for the features your implementation supports.
 */
export class MediaInputServer extends Base {
}
