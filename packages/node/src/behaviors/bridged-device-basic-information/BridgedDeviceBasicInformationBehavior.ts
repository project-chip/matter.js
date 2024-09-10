/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { BridgedDeviceBasicInformation } from "#clusters/bridged-device-basic-information";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";

/**
 * BridgedDeviceBasicInformationBehavior is the base class for objects that support interaction with {@link
 * BridgedDeviceBasicInformation.Cluster}.
 */
export const BridgedDeviceBasicInformationBehavior = ClusterBehavior.for(BridgedDeviceBasicInformation.Cluster);

type BridgedDeviceBasicInformationBehaviorType = InstanceType<typeof BridgedDeviceBasicInformationBehavior>;
export interface BridgedDeviceBasicInformationBehavior extends BridgedDeviceBasicInformationBehaviorType {}
type StateType = InstanceType<typeof BridgedDeviceBasicInformationBehavior.State>;
export namespace BridgedDeviceBasicInformationBehavior { export interface State extends StateType {} }
