/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { DeviceTypes } from "../DeviceTypes.js";
import { AutoDevice } from "../AutoDevice.js";
import { OnOff, OnOffLighting } from "../../cluster/interface/index.js";

const CastingVideoPlayerOptions = {
    OnOffLighting
}

type CastingVideoPlayerOption = typeof CastingVideoPlayerOptions[keyof typeof CastingVideoPlayerOptions]

export class CastingVideoPlayer extends AutoDevice.implement(DeviceTypes.CASTING_VIDEO_PLAYER, OnOff) {
    readonly options = CastingVideoPlayerOptions;

    static with<Options extends CastingVideoPlayerOption[]>(...options: Options) {
        return AutoDevice.extend(this, ...options);
    }
}
