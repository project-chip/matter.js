/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { DeviceTypes } from "../DeviceTypes.js";
import { AutoDevice } from "../AutoDevice.js";
import { OnOff, LevelControl, OnOffLighting } from "../../cluster/interface/index.js";

const SpeakerOptions = {
    OnOffLighting
}

type SpeakerOption = typeof SpeakerOptions[keyof typeof SpeakerOptions]

export class Speaker extends AutoDevice.implement(DeviceTypes.SPEAKER, OnOff, LevelControl) {
    readonly options = SpeakerOptions;

    static with<Options extends SpeakerOption[]>(...options: Options) {
        return AutoDevice.extend(this, ...options);
    }
}
