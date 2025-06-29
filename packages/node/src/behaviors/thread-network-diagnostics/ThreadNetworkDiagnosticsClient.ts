/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ThreadNetworkDiagnostics } from "#clusters/thread-network-diagnostics";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";
import { Identity } from "#general";

export const ThreadNetworkDiagnosticsClientConstructor = ClusterBehavior.for(ThreadNetworkDiagnostics.Complete);
export interface ThreadNetworkDiagnosticsClient extends InstanceType<typeof ThreadNetworkDiagnosticsClientConstructor> {}
export interface ThreadNetworkDiagnosticsClientConstructor extends Identity<typeof ThreadNetworkDiagnosticsClientConstructor> {}
export const ThreadNetworkDiagnosticsClient: ThreadNetworkDiagnosticsClientConstructor = ThreadNetworkDiagnosticsClientConstructor;
