/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { WaterHeaterMode } from "#clusters/water-heater-mode";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";
import { WaterHeaterModeInterface } from "./WaterHeaterModeInterface.js";

/**
 * WaterHeaterModeBehavior is the base class for objects that support interaction with {@link WaterHeaterMode.Cluster}.
 */
export const WaterHeaterModeBehavior = ClusterBehavior
    .withInterface<WaterHeaterModeInterface>()
    .for(WaterHeaterMode.Cluster);

type WaterHeaterModeBehaviorType = InstanceType<typeof WaterHeaterModeBehavior>;
export interface WaterHeaterModeBehavior extends WaterHeaterModeBehaviorType {}
type StateType = InstanceType<typeof WaterHeaterModeBehavior.State>;
export namespace WaterHeaterModeBehavior { export interface State extends StateType {} }
