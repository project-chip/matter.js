/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE WILL BE REGENERATED IF YOU DO NOT REMOVE THIS MESSAGE ***/

import { ApplicationLauncherBehavior } from "./ApplicationLauncherBehavior.js";
import { ApplicationLauncher } from "../../../cluster/definitions/ApplicationLauncherCluster.js";

const Base = ApplicationLauncherBehavior.for(ApplicationLauncher.Complete);

/**
 * This is the default server implementation of ApplicationLauncherBehavior.
 *
 * This implementation includes all features of ApplicationLauncher.Cluster. You should use
 * ApplicationLauncherServer.with to specialize the class for the features your implementation supports.
 */
export class ApplicationLauncherServer extends Base {
}
