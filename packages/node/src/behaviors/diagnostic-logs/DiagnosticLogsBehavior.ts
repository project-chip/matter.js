/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { DiagnosticLogs } from "#clusters/diagnostic-logs";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";
import { DiagnosticLogsInterface } from "./DiagnosticLogsInterface.js";

/**
 * DiagnosticLogsBehavior is the base class for objects that support interaction with {@link DiagnosticLogs.Cluster}.
 */
export const DiagnosticLogsBehavior = ClusterBehavior
    .withInterface<DiagnosticLogsInterface>()
    .for(DiagnosticLogs.Cluster);

type DiagnosticLogsBehaviorType = InstanceType<typeof DiagnosticLogsBehavior>;
export interface DiagnosticLogsBehavior extends DiagnosticLogsBehaviorType {}
type StateType = InstanceType<typeof DiagnosticLogsBehavior.State>;
export namespace DiagnosticLogsBehavior { export interface State extends StateType {} }
