/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ProxyConfiguration } from "#clusters/proxy-configuration";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";

/**
 * ProxyConfigurationBehavior is the base class for objects that support interaction with
 * {@link ProxyConfiguration.Cluster}.
 */
export const ProxyConfigurationBehavior = ClusterBehavior.for(ProxyConfiguration.Cluster);

type ProxyConfigurationBehaviorType = InstanceType<typeof ProxyConfigurationBehavior>;
export interface ProxyConfigurationBehavior extends ProxyConfigurationBehaviorType {}
type StateType = InstanceType<typeof ProxyConfigurationBehavior.State>;
export namespace ProxyConfigurationBehavior { export interface State extends StateType {} }
