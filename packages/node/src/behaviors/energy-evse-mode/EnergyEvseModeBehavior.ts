/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { EnergyEvseMode } from "#clusters/energy-evse-mode";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";

/**
 * EnergyEvseModeBehavior is the base class for objects that support interaction with {@link EnergyEvseMode.Cluster}.
 *
 * This class does not have optional features of EnergyEvseMode.Cluster enabled. You can enable additional features
 * using EnergyEvseModeBehavior.with.
 */
export const EnergyEvseModeBehavior = ClusterBehavior.for(EnergyEvseMode.Cluster);

type EnergyEvseModeBehaviorType = InstanceType<typeof EnergyEvseModeBehavior>;
export interface EnergyEvseModeBehavior extends EnergyEvseModeBehaviorType {}
type StateType = InstanceType<typeof EnergyEvseModeBehavior.State>;
export namespace EnergyEvseModeBehavior { export interface State extends StateType {} }
