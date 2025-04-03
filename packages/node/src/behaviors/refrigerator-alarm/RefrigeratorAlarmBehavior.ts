/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { RefrigeratorAlarm } from "#clusters/refrigerator-alarm";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";
import { RefrigeratorAlarmInterface } from "./RefrigeratorAlarmInterface.js";

/**
 * RefrigeratorAlarmBehavior is the base class for objects that support interaction with
 * {@link RefrigeratorAlarm.Cluster}.
 *
 * This class does not have optional features of RefrigeratorAlarm.Cluster enabled. You can enable additional features
 * using RefrigeratorAlarmBehavior.with.
 */
export const RefrigeratorAlarmBehavior = ClusterBehavior
    .withInterface<RefrigeratorAlarmInterface>()
    .for(RefrigeratorAlarm.Cluster);

type RefrigeratorAlarmBehaviorType = InstanceType<typeof RefrigeratorAlarmBehavior>;
export interface RefrigeratorAlarmBehavior extends RefrigeratorAlarmBehaviorType {}
type StateType = InstanceType<typeof RefrigeratorAlarmBehavior.State>;
export namespace RefrigeratorAlarmBehavior { export interface State extends StateType {} }
