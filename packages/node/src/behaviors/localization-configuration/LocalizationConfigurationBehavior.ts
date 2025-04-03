/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { LocalizationConfiguration } from "#clusters/localization-configuration";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";

/**
 * LocalizationConfigurationBehavior is the base class for objects that support interaction with
 * {@link LocalizationConfiguration.Cluster}.
 */
export const LocalizationConfigurationBehavior = ClusterBehavior.for(LocalizationConfiguration.Cluster);

type LocalizationConfigurationBehaviorType = InstanceType<typeof LocalizationConfigurationBehavior>;
export interface LocalizationConfigurationBehavior extends LocalizationConfigurationBehaviorType {}
type StateType = InstanceType<typeof LocalizationConfigurationBehavior.State>;
export namespace LocalizationConfigurationBehavior { export interface State extends StateType {} }
