/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { DishwasherMode } from "#clusters/dishwasher-mode";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";
import { DishwasherModeInterface } from "./DishwasherModeInterface.js";

/**
 * DishwasherModeBehavior is the base class for objects that support interaction with {@link DishwasherMode.Cluster}.
 */
export const DishwasherModeBehavior = ClusterBehavior
    .withInterface<DishwasherModeInterface>()
    .for(DishwasherMode.Cluster);

type DishwasherModeBehaviorType = InstanceType<typeof DishwasherModeBehavior>;
export interface DishwasherModeBehavior extends DishwasherModeBehaviorType {}
type StateType = InstanceType<typeof DishwasherModeBehavior.State>;
export namespace DishwasherModeBehavior { export interface State extends StateType {} }
