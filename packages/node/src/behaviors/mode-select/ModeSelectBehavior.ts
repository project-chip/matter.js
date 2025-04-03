/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ModeSelect } from "#clusters/mode-select";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";
import { ModeSelectInterface } from "./ModeSelectInterface.js";

/**
 * ModeSelectBehavior is the base class for objects that support interaction with {@link ModeSelect.Cluster}.
 *
 * This class does not have optional features of ModeSelect.Cluster enabled. You can enable additional features using
 * ModeSelectBehavior.with.
 */
export const ModeSelectBehavior = ClusterBehavior
    .withInterface<ModeSelectInterface>()
    .for(ModeSelect.Cluster);

type ModeSelectBehaviorType = InstanceType<typeof ModeSelectBehavior>;
export interface ModeSelectBehavior extends ModeSelectBehaviorType {}
type StateType = InstanceType<typeof ModeSelectBehavior.State>;
export namespace ModeSelectBehavior { export interface State extends StateType {} }
