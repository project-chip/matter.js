/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { BridgedDeviceBasicInformation } from "#clusters/bridged-device-basic-information";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";
import { BridgedDeviceBasicInformationInterface } from "./BridgedDeviceBasicInformationInterface.js";

/**
 * BridgedDeviceBasicInformationBehavior is the base class for objects that support interaction with
 * {@link BridgedDeviceBasicInformation.Cluster}.
 *
 * This class does not have optional features of BridgedDeviceBasicInformation.Cluster enabled. You can enable
 * additional features using BridgedDeviceBasicInformationBehavior.with.
 */
export const BridgedDeviceBasicInformationBehavior = ClusterBehavior
    .withInterface<BridgedDeviceBasicInformationInterface>()
    .for(BridgedDeviceBasicInformation.Cluster);

type BridgedDeviceBasicInformationBehaviorType = InstanceType<typeof BridgedDeviceBasicInformationBehavior>;
export interface BridgedDeviceBasicInformationBehavior extends BridgedDeviceBasicInformationBehaviorType {}
type StateType = InstanceType<typeof BridgedDeviceBasicInformationBehavior.State>;
export namespace BridgedDeviceBasicInformationBehavior { export interface State extends StateType {} }
