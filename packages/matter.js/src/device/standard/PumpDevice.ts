/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { DeviceTypes } from "../DeviceTypes.js";
import { AutoDevice } from "../AutoDevice.js";
import { OnOffLighting, Identify, LevelControl, TemperatureMeasurement, PressureMeasurement, FlowMeasurement } from "../../cluster/interface/index.js";

export class Pump extends AutoDevice.with(DeviceTypes.PUMP, OnOffLighting, Identify) {
    static readonly options = {
        LevelControl,
        TemperatureMeasurement,
        PressureMeasurement,
        FlowMeasurement
    }

    static with(...clusters: Array<typeof this.options[keyof typeof this.options]>) {
        return AutoDevice.extendDevice(this, ...clusters);
    }
}
