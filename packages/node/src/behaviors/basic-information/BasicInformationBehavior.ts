/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { BasicInformation } from "#clusters/basic-information";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";

/**
 * BasicInformationBehavior is the base class for objects that support interaction with
 * {@link BasicInformation.Cluster}.
 */
export const BasicInformationBehavior = ClusterBehavior.for(BasicInformation.Cluster);

type BasicInformationBehaviorType = InstanceType<typeof BasicInformationBehavior>;
export interface BasicInformationBehavior extends BasicInformationBehaviorType {}
type StateType = InstanceType<typeof BasicInformationBehavior.State>;
export namespace BasicInformationBehavior { export interface State extends StateType {} }
