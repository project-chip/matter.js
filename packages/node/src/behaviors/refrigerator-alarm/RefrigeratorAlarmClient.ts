/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { RefrigeratorAlarm } from "#clusters/refrigerator-alarm";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";
import { Identity } from "#general";

export const RefrigeratorAlarmClientConstructor = ClusterBehavior.for(RefrigeratorAlarm.Complete);
export interface RefrigeratorAlarmClient extends InstanceType<typeof RefrigeratorAlarmClientConstructor> {}
export interface RefrigeratorAlarmClientConstructor extends Identity<typeof RefrigeratorAlarmClientConstructor> {}
export const RefrigeratorAlarmClient: RefrigeratorAlarmClientConstructor = RefrigeratorAlarmClientConstructor;
