/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Device } from "../Device.js";
import { DeviceTypes } from "../DeviceTypes.js";

export class DoorLockControllerDevice extends Device {
    constructor(endpointId?: number) {
        super(DeviceTypes.DOOR_LOCK_CONTROLLER, [], endpointId);
    }
}
