/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ServiceArea } from "#clusters/service-area";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";
import { ServiceAreaInterface } from "./ServiceAreaInterface.js";

/**
 * ServiceAreaBehavior is the base class for objects that support interaction with {@link ServiceArea.Cluster}.
 *
 * This class does not have optional features of ServiceArea.Cluster enabled. You can enable additional features using
 * ServiceAreaBehavior.with.
 */
export const ServiceAreaBehavior = ClusterBehavior
    .withInterface<ServiceAreaInterface>()
    .for(ServiceArea.Cluster);

type ServiceAreaBehaviorType = InstanceType<typeof ServiceAreaBehavior>;
export interface ServiceAreaBehavior extends ServiceAreaBehaviorType {}
type StateType = InstanceType<typeof ServiceAreaBehavior.State>;
export namespace ServiceAreaBehavior { export interface State extends StateType {} }
