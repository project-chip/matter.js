/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { EnergyEvse } from "#clusters/energy-evse";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";
import { Identity } from "#general";

export const EnergyEvseClientConstructor = ClusterBehavior.for(EnergyEvse.Complete);
export interface EnergyEvseClient extends InstanceType<typeof EnergyEvseClientConstructor> {}
export interface EnergyEvseClientConstructor extends Identity<typeof EnergyEvseClientConstructor> {}
export const EnergyEvseClient: EnergyEvseClientConstructor = EnergyEvseClientConstructor;
