/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { PowerSourceConfiguration } from "#clusters/power-source-configuration";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";

/**
 * PowerSourceConfigurationBehavior is the base class for objects that support interaction with
 * {@link PowerSourceConfiguration.Cluster}.
 */
export const PowerSourceConfigurationBehavior = ClusterBehavior.for(PowerSourceConfiguration.Cluster);

type PowerSourceConfigurationBehaviorType = InstanceType<typeof PowerSourceConfigurationBehavior>;
export interface PowerSourceConfigurationBehavior extends PowerSourceConfigurationBehaviorType {}
type StateType = InstanceType<typeof PowerSourceConfigurationBehavior.State>;
export namespace PowerSourceConfigurationBehavior { export interface State extends StateType {} }
