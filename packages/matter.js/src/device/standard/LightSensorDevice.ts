/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { DeviceTypes } from "../DeviceTypes.js";
import { AutoDevice } from "../AutoDevice.js";
import { Identify, IlluminanceMeasurement } from "../../cluster/interface/index.js";

export class LightSensor extends AutoDevice.implement(DeviceTypes.LIGHT_SENSOR, Identify, IlluminanceMeasurement) {
    readonly options = LightSensorOptions;

}
