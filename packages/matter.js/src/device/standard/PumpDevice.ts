/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Device } from "../Device.js";
import { DeviceTypes } from "../DeviceTypes.js";
import { OnOffLighting, Identify, LevelControl, Scenes, Groups, TemperatureMeasurement, PressureMeasurement, FlowMeasurement } from "../../cluster/interface/index.js";
import { ServesClusters } from "../ServesClusters.js"

export class PumpDevice extends
    ServesClusters(Device,
        OnOffLighting,
        Identify)
{
    constructor(endpointId?: number) {
        super(DeviceTypes.PUMP, [], endpointId);
    }
    static readonly options = [
        LevelControl,
        Scenes,
        Groups,
        TemperatureMeasurement,
        PressureMeasurement,
        FlowMeasurement
    ];

    with(...clusters: typeof PumpDevice.options[number][]) {
        return ServesClusters(PumpDevice, ...clusters);
    }

}
