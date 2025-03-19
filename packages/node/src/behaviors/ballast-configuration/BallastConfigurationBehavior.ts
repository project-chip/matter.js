/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { BallastConfiguration } from "#clusters/ballast-configuration";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";

/**
 * BallastConfigurationBehavior is the base class for objects that support interaction with
 * {@link BallastConfiguration.Cluster}.
 */
export const BallastConfigurationBehavior = ClusterBehavior.for(BallastConfiguration.Cluster);

type BallastConfigurationBehaviorType = InstanceType<typeof BallastConfigurationBehavior>;
export interface BallastConfigurationBehavior extends BallastConfigurationBehaviorType {}
type StateType = InstanceType<typeof BallastConfigurationBehavior.State>;
export namespace BallastConfigurationBehavior { export interface State extends StateType {} }
