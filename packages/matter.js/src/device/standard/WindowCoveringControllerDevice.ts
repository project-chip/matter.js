/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { DeviceTypes } from "../DeviceTypes.js";
import { AutoDevice } from "../AutoDevice.js";
import { Identify } from "../../cluster/interface/index.js";

const WindowCoveringControllerOptions = {
    Identify
}

type WindowCoveringControllerOption = typeof WindowCoveringControllerOptions[keyof typeof WindowCoveringControllerOptions]

export class WindowCoveringController extends AutoDevice.implement(DeviceTypes.WINDOW_COVERING_CONTROLLER) {
    readonly options = WindowCoveringControllerOptions;

    static with<Options extends WindowCoveringControllerOption[]>(...options: Options) {
        return AutoDevice.extend(this, ...options);
    }
}
