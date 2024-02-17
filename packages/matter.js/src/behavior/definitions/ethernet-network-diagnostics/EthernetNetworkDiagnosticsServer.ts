/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE WILL BE REGENERATED IF YOU DO NOT REMOVE THIS MESSAGE ***/

import { EthernetNetworkDiagnosticsBehavior } from "./EthernetNetworkDiagnosticsBehavior.js";

const Base = EthernetNetworkDiagnosticsBehavior.with("PacketCounts", "ErrorCounts");

/**
 * This is the default server implementation of EthernetNetworkDiagnosticsBehavior.
 *
 * This implementation includes all features of EthernetNetworkDiagnostics.Cluster. You should use
 * EthernetNetworkDiagnosticsServer.with to specialize the class for the features your implementation supports.
 */
export class EthernetNetworkDiagnosticsServer extends Base {
}
