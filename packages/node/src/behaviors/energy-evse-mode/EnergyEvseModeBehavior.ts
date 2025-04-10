/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { EnergyEvseMode } from "#clusters/energy-evse-mode";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";
import { EnergyEvseModeInterface } from "./EnergyEvseModeInterface.js";

/**
 * EnergyEvseModeBehavior is the base class for objects that support interaction with {@link EnergyEvseMode.Cluster}.
 */
export const EnergyEvseModeBehavior = ClusterBehavior
    .withInterface<EnergyEvseModeInterface>()
    .for(EnergyEvseMode.Cluster);

type EnergyEvseModeBehaviorType = InstanceType<typeof EnergyEvseModeBehavior>;
export interface EnergyEvseModeBehavior extends EnergyEvseModeBehaviorType {}
type StateType = InstanceType<typeof EnergyEvseModeBehavior.State>;
export namespace EnergyEvseModeBehavior { export interface State extends StateType {} }
