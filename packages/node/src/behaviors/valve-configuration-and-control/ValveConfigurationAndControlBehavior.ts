/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ValveConfigurationAndControl } from "#clusters/valve-configuration-and-control";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";
import { ValveConfigurationAndControlInterface } from "./ValveConfigurationAndControlInterface.js";

/**
 * ValveConfigurationAndControlBehavior is the base class for objects that support interaction with
 * {@link ValveConfigurationAndControl.Cluster}.
 *
 * This class does not have optional features of ValveConfigurationAndControl.Cluster enabled. You can enable additional
 * features using ValveConfigurationAndControlBehavior.with.
 */
export const ValveConfigurationAndControlBehavior = ClusterBehavior
    .withInterface<ValveConfigurationAndControlInterface>()
    .for(ValveConfigurationAndControl.Cluster);

type ValveConfigurationAndControlBehaviorType = InstanceType<typeof ValveConfigurationAndControlBehavior>;
export interface ValveConfigurationAndControlBehavior extends ValveConfigurationAndControlBehaviorType {}
type StateType = InstanceType<typeof ValveConfigurationAndControlBehavior.State>;
export namespace ValveConfigurationAndControlBehavior { export interface State extends StateType {} }
