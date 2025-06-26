/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { GeneralDiagnostics } from "#clusters/general-diagnostics";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";
import { Identity } from "#general";

export const GeneralDiagnosticsClientConstructor = ClusterBehavior.for(GeneralDiagnostics.Complete);
export interface GeneralDiagnosticsClient extends InstanceType<typeof GeneralDiagnosticsClientConstructor> {}
export interface GeneralDiagnosticsClientConstructor extends Identity<typeof GeneralDiagnosticsClientConstructor> {}
export const GeneralDiagnosticsClient: GeneralDiagnosticsClientConstructor = GeneralDiagnosticsClientConstructor;
