/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE WILL BE REGENERATED IF YOU DO NOT REMOVE THIS MESSAGE ***/

import { ContentLauncherBehavior } from "./ContentLauncherBehavior.js";
import { ContentLauncher } from "../../../cluster/definitions/ContentLauncherCluster.js";

const Base = ContentLauncherBehavior.for(ContentLauncher.Complete);

/**
 * This is the default server implementation of ContentLauncherBehavior.
 *
 * This implementation includes all features of ContentLauncher.Cluster. You should use ContentLauncherServer.with to
 * specialize the class for the features your implementation supports.
 */
export class ContentLauncherServer extends Base {
}
