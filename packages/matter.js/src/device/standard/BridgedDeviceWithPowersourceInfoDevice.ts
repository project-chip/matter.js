/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { DeviceTypes } from "../DeviceTypes.js";
import { AutoDevice } from "../AutoDevice.js";
import { BridgedDeviceBasicInformation, PowerSourceConfiguration, PowerSource } from "../../cluster/interface/index.js";

export class BridgedDeviceWithPowersourceInfo extends AutoDevice.implement(DeviceTypes.BRIDGED_DEVICE_WITH_POWERSOURCE_INFO, BridgedDeviceBasicInformation, PowerSourceConfiguration, PowerSource) {
}
