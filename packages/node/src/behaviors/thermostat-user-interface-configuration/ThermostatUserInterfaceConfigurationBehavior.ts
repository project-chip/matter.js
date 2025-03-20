/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ThermostatUserInterfaceConfiguration } from "#clusters/thermostat-user-interface-configuration";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";

/**
 * ThermostatUserInterfaceConfigurationBehavior is the base class for objects that support interaction with
 * {@link ThermostatUserInterfaceConfiguration.Cluster}.
 */
export const ThermostatUserInterfaceConfigurationBehavior = ClusterBehavior
    .for(ThermostatUserInterfaceConfiguration.Cluster);

type ThermostatUserInterfaceConfigurationBehaviorType = InstanceType<typeof ThermostatUserInterfaceConfigurationBehavior>;
export interface ThermostatUserInterfaceConfigurationBehavior extends ThermostatUserInterfaceConfigurationBehaviorType {}
type StateType = InstanceType<typeof ThermostatUserInterfaceConfigurationBehavior.State>;
export namespace ThermostatUserInterfaceConfigurationBehavior { export interface State extends StateType {} }
