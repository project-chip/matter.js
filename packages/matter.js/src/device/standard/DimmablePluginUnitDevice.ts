/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { DeviceTypes } from "../DeviceTypes.js";
import { ClusterInterface } from "../../cluster/ClusterInterface.js";
import { AutoDevice } from "../AutoDevice.js";
import { Identify, Groups, Scenes, OnOff, LevelControl, OnOffLighting } from "../../cluster/interface/index.js";

export class DimmablePluginUnit extends AutoDevice.implement(DeviceTypes.DIMMABLE_PLUGIN_UNIT, Identify, Groups, Scenes, OnOff, LevelControl) {
    readonly DimmablePluginUnitOptions = {
        OnOffLighting,
    }

    static with<Options extends ClusterInterface<any, any, any>[]>(...options: Options) {
        return AutoDevice.extend(this, ...options);
    }
}
