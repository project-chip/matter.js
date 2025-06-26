/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ProxyConfiguration } from "#clusters/proxy-configuration";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";
import { Identity } from "#general";

/**
 * ProxyConfigurationBehavior is the base class for objects that support interaction with
 * {@link ProxyConfiguration.Cluster}.
 */
export const ProxyConfigurationBehaviorConstructor = ClusterBehavior.for(ProxyConfiguration.Cluster);

export interface ProxyConfigurationBehaviorConstructor extends Identity<typeof ProxyConfigurationBehaviorConstructor> {}
export const ProxyConfigurationBehavior: ProxyConfigurationBehaviorConstructor = ProxyConfigurationBehaviorConstructor;
export interface ProxyConfigurationBehavior extends InstanceType<ProxyConfigurationBehaviorConstructor> {}
export namespace ProxyConfigurationBehavior {
    export interface State extends InstanceType<typeof ProxyConfigurationBehavior.State> {}
}
