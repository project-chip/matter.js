/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { OvenMode } from "#clusters/oven-mode";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";
import { OvenModeInterface } from "./OvenModeInterface.js";

/**
 * OvenModeBehavior is the base class for objects that support interaction with {@link OvenMode.Cluster}.
 */
export const OvenModeBehavior = ClusterBehavior
    .withInterface<OvenModeInterface>()
    .for(OvenMode.Cluster);

type OvenModeBehaviorType = InstanceType<typeof OvenModeBehavior>;
export interface OvenModeBehavior extends OvenModeBehaviorType {}
type StateType = InstanceType<typeof OvenModeBehavior.State>;
export namespace OvenModeBehavior { export interface State extends StateType {} }
