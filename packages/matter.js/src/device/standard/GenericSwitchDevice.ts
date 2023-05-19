/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { DeviceTypes } from "../DeviceTypes.js";
import { AutoDevice } from "../AutoDevice.js";
import { Identify, FixedLabel } from "../../cluster/interface/index.js";

const GenericSwitchOptions = {
    FixedLabel
}

type GenericSwitchOption = typeof GenericSwitchOptions[keyof typeof GenericSwitchOptions]

export class GenericSwitch extends AutoDevice.implement(DeviceTypes.GENERIC_SWITCH, Identify) {
    readonly options = GenericSwitchOptions;

    static with<Options extends GenericSwitchOption[]>(...options: Options) {
        return AutoDevice.extend(this, ...options);
    }
}
