/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Device } from "../Device.js";
import { DeviceTypes } from "../DeviceTypes.js";
import { Identify, FixedLabel } from "../../cluster/interface/index.js";
import { ServesClusters } from "../ServesClusters.js"

export class GenericSwitchDevice extends
    ServesClusters(Device,
        Identify)
{
    constructor(endpointId?: number) {
        super(DeviceTypes.GENERIC_SWITCH, [], endpointId);
    }
    static readonly options = [
        FixedLabel
    ];

    with(...clusters: typeof GenericSwitchDevice.options[number][]) {
        return ServesClusters(GenericSwitchDevice, ...clusters);
    }

}
