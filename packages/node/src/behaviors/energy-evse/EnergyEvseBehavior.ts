/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { EnergyEvse } from "#clusters/energy-evse";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";
import { EnergyEvseInterface } from "./EnergyEvseInterface.js";

/**
 * EnergyEvseBehavior is the base class for objects that support interaction with {@link EnergyEvse.Cluster}.
 *
 * This class does not have optional features of EnergyEvse.Cluster enabled. You can enable additional features using
 * EnergyEvseBehavior.with.
 */
export const EnergyEvseBehavior = ClusterBehavior
    .withInterface<EnergyEvseInterface>()
    .for(EnergyEvse.Cluster);

type EnergyEvseBehaviorType = InstanceType<typeof EnergyEvseBehavior>;
export interface EnergyEvseBehavior extends EnergyEvseBehaviorType {}
type StateType = InstanceType<typeof EnergyEvseBehavior.State>;
export namespace EnergyEvseBehavior { export interface State extends StateType {} }
