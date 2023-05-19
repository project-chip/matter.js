/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { DeviceTypes } from "../DeviceTypes.js";
import { AutoDevice } from "../AutoDevice.js";
import { Identify } from "../../cluster/interface/index.js";

const DoorLockControllerOptions = {
    Identify
}

type DoorLockControllerOption = typeof DoorLockControllerOptions[keyof typeof DoorLockControllerOptions]

export class DoorLockController extends AutoDevice.implement(DeviceTypes.DOOR_LOCK_CONTROLLER) {
    readonly options = DoorLockControllerOptions;

    static with<Options extends DoorLockControllerOption[]>(...options: Options) {
        return AutoDevice.extend(this, ...options);
    }
}
