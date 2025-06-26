/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { BridgedDeviceBasicInformation } from "#clusters/bridged-device-basic-information";
import { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";
import { Identity } from "#general";

export const BridgedDeviceBasicInformationClientConstructor = ClusterBehavior
    .for(BridgedDeviceBasicInformation.Complete);
export interface BridgedDeviceBasicInformationClient extends InstanceType<typeof BridgedDeviceBasicInformationClientConstructor> {}
export interface BridgedDeviceBasicInformationClientConstructor extends Identity<typeof BridgedDeviceBasicInformationClientConstructor> {}
export const BridgedDeviceBasicInformationClient: BridgedDeviceBasicInformationClientConstructor = BridgedDeviceBasicInformationClientConstructor;
