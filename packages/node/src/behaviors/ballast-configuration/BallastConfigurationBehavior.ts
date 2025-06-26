/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { BallastConfiguration } from "#clusters/ballast-configuration";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";
import { Identity } from "#general";

/**
 * BallastConfigurationBehavior is the base class for objects that support interaction with
 * {@link BallastConfiguration.Cluster}.
 */
export const BallastConfigurationBehaviorConstructor = ClusterBehavior.for(BallastConfiguration.Cluster);

export interface BallastConfigurationBehaviorConstructor extends Identity<typeof BallastConfigurationBehaviorConstructor> {}
export const BallastConfigurationBehavior: BallastConfigurationBehaviorConstructor = BallastConfigurationBehaviorConstructor;
export interface BallastConfigurationBehavior extends InstanceType<BallastConfigurationBehaviorConstructor> {}
export namespace BallastConfigurationBehavior {
    export interface State extends InstanceType<typeof BallastConfigurationBehavior.State> {}
}
