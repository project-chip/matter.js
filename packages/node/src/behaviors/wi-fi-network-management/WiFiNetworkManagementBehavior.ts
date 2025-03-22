/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { WiFiNetworkManagement } from "#clusters/wi-fi-network-management";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";
import { WiFiNetworkManagementInterface } from "./WiFiNetworkManagementInterface.js";

/**
 * WiFiNetworkManagementBehavior is the base class for objects that support interaction with
 * {@link WiFiNetworkManagement.Cluster}.
 */
export const WiFiNetworkManagementBehavior = ClusterBehavior
    .withInterface<WiFiNetworkManagementInterface>()
    .for(WiFiNetworkManagement.Cluster);

type WiFiNetworkManagementBehaviorType = InstanceType<typeof WiFiNetworkManagementBehavior>;
export interface WiFiNetworkManagementBehavior extends WiFiNetworkManagementBehaviorType {}
type StateType = InstanceType<typeof WiFiNetworkManagementBehavior.State>;
export namespace WiFiNetworkManagementBehavior { export interface State extends StateType {} }
