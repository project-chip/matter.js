/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Device } from "../Device.js";
import { DeviceTypes } from "../DeviceTypes.js";
import { Identify, Groups, Scenes, OnOffLighting, LevelControl } from "../../cluster/interface/index.js";
import { ServesClusters } from "../ServesClusters.js"

export class OnOffLightDevice extends
    ServesClusters(Device,
        Identify,
        Groups,
        Scenes,
        OnOffLighting)
{
    constructor(endpointId?: number) {
        super(DeviceTypes.ON_OFF_LIGHT, [], endpointId);
    }
    static readonly options = [
        LevelControl
    ];

    extend(...clusters: typeof OnOffLightDevice.options[number][]) {
        return ServesClusters(OnOffLightDevice, ...clusters);
    }

}
