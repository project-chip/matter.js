/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { GeneralCommissioning } from "#clusters/general-commissioning";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";
import { Identity } from "#general";

export const GeneralCommissioningClientConstructor = ClusterBehavior.for(GeneralCommissioning.Complete);
export interface GeneralCommissioningClient extends InstanceType<typeof GeneralCommissioningClientConstructor> {}
export interface GeneralCommissioningClientConstructor extends Identity<typeof GeneralCommissioningClientConstructor> {}
export const GeneralCommissioningClient: GeneralCommissioningClientConstructor = GeneralCommissioningClientConstructor;
