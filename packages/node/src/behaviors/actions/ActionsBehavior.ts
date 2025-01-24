/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Actions } from "#clusters/actions";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";
import { ActionsInterface } from "./ActionsInterface.js";

/**
 * ActionsBehavior is the base class for objects that support interaction with {@link Actions.Cluster}.
 */
export const ActionsBehavior = ClusterBehavior
    .withInterface<ActionsInterface>()
    .for(Actions.Cluster);

type ActionsBehaviorType = InstanceType<typeof ActionsBehavior>;
export interface ActionsBehavior extends ActionsBehaviorType {}
type StateType = InstanceType<typeof ActionsBehavior.State>;
export namespace ActionsBehavior { export interface State extends StateType {} }
