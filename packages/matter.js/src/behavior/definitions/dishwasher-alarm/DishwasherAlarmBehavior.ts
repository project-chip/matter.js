/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { DishwasherAlarm } from "../../../cluster/definitions/DishwasherAlarmCluster.js";
import { ClusterBehavior } from "../../cluster/ClusterBehavior.js";

/**
 * DishwasherAlarmBehavior is the base class for objects that support interaction with {@link DishwasherAlarm.Cluster}.
 */
export const DishwasherAlarmBehavior = ClusterBehavior.for(DishwasherAlarm.Cluster);

type DishwasherAlarmBehaviorType = InstanceType<typeof DishwasherAlarmBehavior>;
export interface DishwasherAlarmBehavior extends DishwasherAlarmBehaviorType {}
type StateType = InstanceType<typeof DishwasherAlarmBehavior.State>;
export namespace DishwasherAlarmBehavior { export interface State extends StateType {} }
