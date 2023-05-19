/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { DeviceTypes } from "../DeviceTypes.js";
import { AutoDevice } from "../AutoDevice.js";
import { PressureMeasurement, Identify } from "../../cluster/interface/index.js";

export class PressureSensor extends AutoDevice.implement(DeviceTypes.PRESSURE_SENSOR, PressureMeasurement, Identify) {
    readonly options = PressureSensorOptions;

}
