/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { GeneralDiagnostics } from "#clusters/general-diagnostics";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";
import { GeneralDiagnosticsInterface } from "./GeneralDiagnosticsInterface.js";

/**
 * GeneralDiagnosticsBehavior is the base class for objects that support interaction with
 * {@link GeneralDiagnostics.Cluster}.
 *
 * This class does not have optional features of GeneralDiagnostics.Cluster enabled. You can enable additional features
 * using GeneralDiagnosticsBehavior.with.
 */
export const GeneralDiagnosticsBehavior = ClusterBehavior
    .withInterface<GeneralDiagnosticsInterface>()
    .for(GeneralDiagnostics.Cluster);

type GeneralDiagnosticsBehaviorType = InstanceType<typeof GeneralDiagnosticsBehavior>;
export interface GeneralDiagnosticsBehavior extends GeneralDiagnosticsBehaviorType {}
type StateType = InstanceType<typeof GeneralDiagnosticsBehavior.State>;
export namespace GeneralDiagnosticsBehavior { export interface State extends StateType {} }
