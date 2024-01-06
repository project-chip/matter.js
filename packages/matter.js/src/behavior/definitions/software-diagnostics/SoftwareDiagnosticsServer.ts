/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE WILL BE REGENERATED IF YOU DO NOT REMOVE THIS MESSAGE ***/

import { SoftwareDiagnosticsBehavior } from "./SoftwareDiagnosticsBehavior.js";
import { SoftwareDiagnostics } from "../../../cluster/definitions/SoftwareDiagnosticsCluster.js";

const Base = SoftwareDiagnosticsBehavior.for(SoftwareDiagnostics.Complete);

/**
 * This is the default server implementation of SoftwareDiagnosticsBehavior.
 *
 * This implementation includes all features of SoftwareDiagnostics.Cluster. You should use
 * SoftwareDiagnosticsServer.with to specialize the class for the features your implementation supports.
 */
export class SoftwareDiagnosticsServer extends Base {
}
