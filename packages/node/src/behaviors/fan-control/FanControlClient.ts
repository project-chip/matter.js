/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { FanControl } from "#clusters/fan-control";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";
import { Identity } from "#general";

export const FanControlClientConstructor = ClusterBehavior.for(FanControl.Complete);
export interface FanControlClient extends InstanceType<typeof FanControlClientConstructor> {}
export interface FanControlClientConstructor extends Identity<typeof FanControlClientConstructor> {}
export const FanControlClient: FanControlClientConstructor = FanControlClientConstructor;
