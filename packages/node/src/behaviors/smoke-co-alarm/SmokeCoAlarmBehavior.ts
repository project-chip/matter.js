/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { SmokeCoAlarm } from "#clusters/smoke-co-alarm";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";
import { SmokeCoAlarmInterface } from "./SmokeCoAlarmInterface.js";
import { ClusterType } from "#types";

/**
 * SmokeCoAlarmBehavior is the base class for objects that support interaction with {@link SmokeCoAlarm.Cluster}.
 *
 * SmokeCoAlarm.Cluster requires you to enable one or more optional features. You can do so using
 * {@link SmokeCoAlarmBehavior.with}.
 */
export const SmokeCoAlarmBehavior = ClusterBehavior
    .withInterface<SmokeCoAlarmInterface>()
    .for(ClusterType(SmokeCoAlarm.Base));

type SmokeCoAlarmBehaviorType = InstanceType<typeof SmokeCoAlarmBehavior>;
export interface SmokeCoAlarmBehavior extends SmokeCoAlarmBehaviorType {}
type StateType = InstanceType<typeof SmokeCoAlarmBehavior.State>;
export namespace SmokeCoAlarmBehavior { export interface State extends StateType {} }
