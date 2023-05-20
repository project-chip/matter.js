/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { DeviceTypes } from "../DeviceTypes.js";
import { ClusterInterface } from "../../cluster/ClusterInterface.js";
import { AutoDevice } from "../AutoDevice.js";
import { OnOff, OnOffLighting } from "../../cluster/interface/index.js";

export class BasicVideoPlayer extends AutoDevice.implement(DeviceTypes.BASIC_VIDEO_PLAYER, OnOff) {
    static readonly options = {
        OnOffLighting,
    }

    static with<Options extends ClusterInterface<any, any, any>[]>(...options: Options) {
        return AutoDevice.extend(this, ...options);
    }
}
