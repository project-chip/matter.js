/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ServiceArea } from "#clusters/service-area";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";
import { Identity } from "#general";

export const ServiceAreaClientConstructor = ClusterBehavior.for(ServiceArea.Complete);
export interface ServiceAreaClient extends InstanceType<typeof ServiceAreaClientConstructor> {}
export interface ServiceAreaClientConstructor extends Identity<typeof ServiceAreaClientConstructor> {}
export const ServiceAreaClient: ServiceAreaClientConstructor = ServiceAreaClientConstructor;
