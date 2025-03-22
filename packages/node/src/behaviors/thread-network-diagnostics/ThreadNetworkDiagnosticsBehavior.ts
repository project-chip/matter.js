/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ThreadNetworkDiagnostics } from "#clusters/thread-network-diagnostics";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";
import { ThreadNetworkDiagnosticsInterface } from "./ThreadNetworkDiagnosticsInterface.js";

/**
 * ThreadNetworkDiagnosticsBehavior is the base class for objects that support interaction with
 * {@link ThreadNetworkDiagnostics.Cluster}.
 *
 * This class does not have optional features of ThreadNetworkDiagnostics.Cluster enabled. You can enable additional
 * features using ThreadNetworkDiagnosticsBehavior.with.
 */
export const ThreadNetworkDiagnosticsBehavior = ClusterBehavior
    .withInterface<ThreadNetworkDiagnosticsInterface>()
    .for(ThreadNetworkDiagnostics.Cluster);

type ThreadNetworkDiagnosticsBehaviorType = InstanceType<typeof ThreadNetworkDiagnosticsBehavior>;
export interface ThreadNetworkDiagnosticsBehavior extends ThreadNetworkDiagnosticsBehaviorType {}
type StateType = InstanceType<typeof ThreadNetworkDiagnosticsBehavior.State>;
export namespace ThreadNetworkDiagnosticsBehavior { export interface State extends StateType {} }
