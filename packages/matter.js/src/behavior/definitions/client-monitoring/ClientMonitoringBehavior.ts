/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ClientMonitoring } from "../../../cluster/definitions/ClientMonitoringCluster.js";
import { ClusterBehavior } from "../../cluster/ClusterBehavior.js";
import { ClientMonitoringInterface } from "./ClientMonitoringInterface.js";

/**
 * ClientMonitoringBehavior is the base class for objects that support interaction with {@link
 * ClientMonitoring.Cluster}.
 */
export const ClientMonitoringBehavior = ClusterBehavior
    .withInterface<ClientMonitoringInterface>()
    .for(ClientMonitoring.Cluster);

type ClientMonitoringBehaviorType = InstanceType<typeof ClientMonitoringBehavior>;
export interface ClientMonitoringBehavior extends ClientMonitoringBehaviorType {}
type StateType = InstanceType<typeof ClientMonitoringBehavior.State>;
export namespace ClientMonitoringBehavior { export interface State extends StateType {} }
