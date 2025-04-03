/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { BooleanStateConfiguration } from "#clusters/boolean-state-configuration";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";
import { BooleanStateConfigurationInterface } from "./BooleanStateConfigurationInterface.js";

/**
 * BooleanStateConfigurationBehavior is the base class for objects that support interaction with
 * {@link BooleanStateConfiguration.Cluster}.
 *
 * This class does not have optional features of BooleanStateConfiguration.Cluster enabled. You can enable additional
 * features using BooleanStateConfigurationBehavior.with.
 */
export const BooleanStateConfigurationBehavior = ClusterBehavior
    .withInterface<BooleanStateConfigurationInterface>()
    .for(BooleanStateConfiguration.Cluster);

type BooleanStateConfigurationBehaviorType = InstanceType<typeof BooleanStateConfigurationBehavior>;
export interface BooleanStateConfigurationBehavior extends BooleanStateConfigurationBehaviorType {}
type StateType = InstanceType<typeof BooleanStateConfigurationBehavior.State>;
export namespace BooleanStateConfigurationBehavior { export interface State extends StateType {} }
