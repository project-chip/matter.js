/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Device } from "../Device.js";
import { DeviceTypes } from "../DeviceTypes.js";
import { Identify, OccupancySensing } from "../../cluster/interface/index.js";
import { ServesClusters } from "../ServesClusters.js"

export class OccupancySensor extends
    ServesClusters(Device,
        Identify,
        OccupancySensing)
{
    constructor(endpointId?: number) {
        super(DeviceTypes.OCCUPANCY_SENSOR, [], endpointId);
    }
}
