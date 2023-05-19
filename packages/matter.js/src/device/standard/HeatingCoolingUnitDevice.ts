/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { DeviceTypes } from "../DeviceTypes.js";
import { AutoDevice } from "../AutoDevice.js";
import { Identify, OnOff, OnOffLighting, LevelControl } from "../../cluster/interface/index.js";

const HeatingCoolingUnitOptions = {
    OnOffLighting,
    LevelControl
}

type HeatingCoolingUnitOption = typeof HeatingCoolingUnitOptions[keyof typeof HeatingCoolingUnitOptions]

export class HeatingCoolingUnit extends AutoDevice.implement(DeviceTypes.HEATING_COOLING_UNIT, Identify, OnOff) {
    readonly options = HeatingCoolingUnitOptions;

    static with<Options extends HeatingCoolingUnitOption[]>(...options: Options) {
        return AutoDevice.extend(this, ...options);
    }
}
