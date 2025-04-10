/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import {
    RefrigeratorAndTemperatureControlledCabinetMode
} from "#clusters/refrigerator-and-temperature-controlled-cabinet-mode";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";
import {
    RefrigeratorAndTemperatureControlledCabinetModeInterface
} from "./RefrigeratorAndTemperatureControlledCabinetModeInterface.js";

/**
 * RefrigeratorAndTemperatureControlledCabinetModeBehavior is the base class for objects that support interaction with
 * {@link RefrigeratorAndTemperatureControlledCabinetMode.Cluster}.
 */
export const RefrigeratorAndTemperatureControlledCabinetModeBehavior = ClusterBehavior
    .withInterface<RefrigeratorAndTemperatureControlledCabinetModeInterface>()
    .for(RefrigeratorAndTemperatureControlledCabinetMode.Cluster);

type RefrigeratorAndTemperatureControlledCabinetModeBehaviorType = InstanceType<typeof RefrigeratorAndTemperatureControlledCabinetModeBehavior>;
export interface RefrigeratorAndTemperatureControlledCabinetModeBehavior extends RefrigeratorAndTemperatureControlledCabinetModeBehaviorType {}
type StateType = InstanceType<typeof RefrigeratorAndTemperatureControlledCabinetModeBehavior.State>;
export namespace RefrigeratorAndTemperatureControlledCabinetModeBehavior { export interface State extends StateType {} }
