/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Device } from "../Device.js";
import { DeviceTypes } from "../DeviceTypes.js";
import { Identify, Groups, OnOffLighting, Scenes, LevelControl } from "../../cluster/interface/index.js";
import { ServesClusters } from "../ServesClusters.js"

export class HeatingCoolingUnitDevice extends
    ServesClusters(Device,
        Identify,
        Groups,
        OnOffLighting)
{
    constructor(endpointId?: number) {
        super(DeviceTypes.HEATING_COOLING_UNIT, [], endpointId);
    }
    static readonly options = [
        Scenes,
        LevelControl
    ];

    with(...clusters: typeof HeatingCoolingUnitDevice.options[number][]) {
        return ServesClusters(HeatingCoolingUnitDevice, ...clusters);
    }

}
