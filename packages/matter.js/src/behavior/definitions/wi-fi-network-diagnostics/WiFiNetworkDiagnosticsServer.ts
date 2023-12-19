/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE WILL BE REGENERATED IF YOU DO NOT REMOVE THIS MESSAGE ***/

import { WiFiNetworkDiagnosticsBehavior } from "./WiFiNetworkDiagnosticsBehavior.js";
import { WiFiNetworkDiagnostics } from "../../../cluster/definitions/WiFiNetworkDiagnosticsCluster.js";

const Base = WiFiNetworkDiagnosticsBehavior.for(WiFiNetworkDiagnostics.Complete);

/**
 * This is the default server implementation of WiFiNetworkDiagnosticsBehavior.
 *
 * This implementation includes all features of WiFiNetworkDiagnostics.Cluster. You should use
 * WiFiNetworkDiagnosticsServer.with to specialize the class for the features your implementation supports.
 */
export class WiFiNetworkDiagnosticsServer extends Base {
}
