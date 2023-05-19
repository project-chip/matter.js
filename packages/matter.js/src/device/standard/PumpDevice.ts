/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { DeviceTypes } from "../DeviceTypes.js";
import { AutoDevice } from "../AutoDevice.js";
import { OnOff, Identify, OnOffLighting, LevelControl, TemperatureMeasurement, PressureMeasurement, FlowMeasurement } from "../../cluster/interface/index.js";

const PumpOptions = {
    OnOffLighting,
    LevelControl,
    TemperatureMeasurement,
    PressureMeasurement,
    FlowMeasurement
}

type PumpOption = typeof PumpOptions[keyof typeof PumpOptions]

export class Pump extends AutoDevice.implement(DeviceTypes.PUMP, OnOff, Identify) {
    readonly options = PumpOptions;

    static with<Options extends PumpOption[]>(...options: Options) {
        return AutoDevice.extend(this, ...options);
    }
}
