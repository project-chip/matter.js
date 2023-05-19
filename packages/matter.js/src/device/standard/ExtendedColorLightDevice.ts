/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { DeviceTypes } from "../DeviceTypes.js";
import { AutoDevice } from "../AutoDevice.js";
import { Identify, OnOff, LevelControl, OnOffLighting } from "../../cluster/interface/index.js";

const ExtendedColorLightOptions = {
    OnOffLighting
}

type ExtendedColorLightOption = typeof ExtendedColorLightOptions[keyof typeof ExtendedColorLightOptions]

export class ExtendedColorLight extends AutoDevice.implement(DeviceTypes.EXTENDED_COLOR_LIGHT, Identify, OnOff, LevelControl) {
    readonly options = ExtendedColorLightOptions;

    static with<Options extends ExtendedColorLightOption[]>(...options: Options) {
        return AutoDevice.extend(this, ...options);
    }
}
