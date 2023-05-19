/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { DeviceTypes } from "../DeviceTypes.js";
import { AutoDevice } from "../AutoDevice.js";
import { Identify, OnOff, OnOffLighting, LevelControl } from "../../cluster/interface/index.js";

const OnOffPluginUnitOptions = {
    OnOffLighting,
    LevelControl
}

type OnOffPluginUnitOption = typeof OnOffPluginUnitOptions[keyof typeof OnOffPluginUnitOptions]

export class OnOffPluginUnit extends AutoDevice.implement(DeviceTypes.ON_OFF_PLUGIN_UNIT, Identify, OnOff) {
    readonly options = OnOffPluginUnitOptions;

    static with<Options extends OnOffPluginUnitOption[]>(...options: Options) {
        return AutoDevice.extend(this, ...options);
    }
}
