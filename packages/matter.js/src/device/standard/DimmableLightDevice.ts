/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { DeviceTypes } from "../DeviceTypes.js";
import { AutoDevice } from "../AutoDevice.js";
import { Identify, OnOff, LevelControl, OnOffLighting } from "../../cluster/interface/index.js";

const DimmableLightOptions = {
    OnOffLighting
}

type DimmableLightOption = typeof DimmableLightOptions[keyof typeof DimmableLightOptions]

export class DimmableLight extends AutoDevice.implement(DeviceTypes.DIMMABLE_LIGHT, Identify, OnOff, LevelControl) {
    readonly options = DimmableLightOptions;

    static with<Options extends DimmableLightOption[]>(...options: Options) {
        return AutoDevice.extend(this, ...options);
    }
}
