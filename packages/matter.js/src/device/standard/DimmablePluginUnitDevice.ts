/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { DeviceTypes } from "../DeviceTypes.js";
import { AutoDevice } from "../AutoDevice.js";
import { Identify, OnOff, LevelControl, OnOffLighting } from "../../cluster/interface/index.js";

const DimmablePluginUnitOptions = {
    OnOffLighting
}

type DimmablePluginUnitOption = typeof DimmablePluginUnitOptions[keyof typeof DimmablePluginUnitOptions]

export class DimmablePluginUnit extends AutoDevice.implement(DeviceTypes.DIMMABLE_PLUGIN_UNIT, Identify, OnOff, LevelControl) {
    readonly options = DimmablePluginUnitOptions;

    static with<Options extends DimmablePluginUnitOption[]>(...options: Options) {
        return AutoDevice.extend(this, ...options);
    }
}
