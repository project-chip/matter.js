/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Device } from "../Device.js";
import { DeviceTypes } from "../DeviceTypes.js";
import { BridgedDeviceBasicInformation, PowerSourceConfiguration, PowerSource } from "../../cluster/interface/index.js";
import { ServesClusters } from "../ServesClusters.js"

export class BridgedDeviceWithPowersourceInfo extends
    ServesClusters(Device, BridgedDeviceBasicInformation, PowerSourceConfiguration, PowerSource)
{
    constructor(endpointId?: number) {
        super(DeviceTypes.BRIDGED_DEVICE_WITH_POWERSOURCE_INFO, [], endpointId);
    }
}
