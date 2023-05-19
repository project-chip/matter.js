/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { DeviceTypes } from "../DeviceTypes.js";
import { AutoDevice } from "../AutoDevice.js";
import { OnOff, OnOffLighting } from "../../cluster/interface/index.js";

const BasicVideoPlayerOptions = {
    OnOffLighting
}

type BasicVideoPlayerOption = typeof BasicVideoPlayerOptions[keyof typeof BasicVideoPlayerOptions]

export class BasicVideoPlayer extends AutoDevice.implement(DeviceTypes.BASIC_VIDEO_PLAYER, OnOff) {
    readonly options = BasicVideoPlayerOptions;

    static with<Options extends BasicVideoPlayerOption[]>(...options: Options) {
        return AutoDevice.extend(this, ...options);
    }
}
