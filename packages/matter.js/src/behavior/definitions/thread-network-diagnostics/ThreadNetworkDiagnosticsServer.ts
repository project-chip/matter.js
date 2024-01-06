/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE WILL BE REGENERATED IF YOU DO NOT REMOVE THIS MESSAGE ***/

import { ThreadNetworkDiagnosticsBehavior } from "./ThreadNetworkDiagnosticsBehavior.js";
import { ThreadNetworkDiagnostics } from "../../../cluster/definitions/ThreadNetworkDiagnosticsCluster.js";

const Base = ThreadNetworkDiagnosticsBehavior.for(ThreadNetworkDiagnostics.Complete);

/**
 * This is the default server implementation of ThreadNetworkDiagnosticsBehavior.
 *
 * This implementation includes all features of ThreadNetworkDiagnostics.Cluster. You should use
 * ThreadNetworkDiagnosticsServer.with to specialize the class for the features your implementation supports.
 */
export class ThreadNetworkDiagnosticsServer extends Base {
}
