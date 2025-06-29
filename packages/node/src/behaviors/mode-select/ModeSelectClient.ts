/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ModeSelect } from "#clusters/mode-select";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";
import { Identity } from "#general";

export const ModeSelectClientConstructor = ClusterBehavior.for(ModeSelect.Complete);
export interface ModeSelectClient extends InstanceType<typeof ModeSelectClientConstructor> {}
export interface ModeSelectClientConstructor extends Identity<typeof ModeSelectClientConstructor> {}
export const ModeSelectClient: ModeSelectClientConstructor = ModeSelectClientConstructor;
