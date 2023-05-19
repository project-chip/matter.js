/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { DeviceTypes } from "../DeviceTypes.js";
import { AutoDevice } from "../AutoDevice.js";
import { Identify, OnOff, LevelControl, OnOffLighting } from "../../cluster/interface/index.js";

const ColorTemperatureLightOptions = {
    OnOffLighting
}

type ColorTemperatureLightOption = typeof ColorTemperatureLightOptions[keyof typeof ColorTemperatureLightOptions]

export class ColorTemperatureLight extends AutoDevice.implement(DeviceTypes.COLOR_TEMPERATURE_LIGHT, Identify, OnOff, LevelControl) {
    readonly options = ColorTemperatureLightOptions;

    static with<Options extends ColorTemperatureLightOption[]>(...options: Options) {
        return AutoDevice.extend(this, ...options);
    }
}
