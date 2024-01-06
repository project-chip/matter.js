/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE WILL BE REGENERATED IF YOU DO NOT REMOVE THIS MESSAGE ***/

import { EthernetNetworkDiagnosticsBehavior } from "./EthernetNetworkDiagnosticsBehavior.js";
import { EthernetNetworkDiagnostics } from "../../../cluster/definitions/EthernetNetworkDiagnosticsCluster.js";

const Base = EthernetNetworkDiagnosticsBehavior.for(EthernetNetworkDiagnostics.Complete);

/**
 * This is the default server implementation of EthernetNetworkDiagnosticsBehavior.
 *
 * This implementation includes all features of EthernetNetworkDiagnostics.Cluster. You should use
 * EthernetNetworkDiagnosticsServer.with to specialize the class for the features your implementation supports.
 */
export class EthernetNetworkDiagnosticsServer extends Base {
}
