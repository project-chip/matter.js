/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Device } from "../Device.js";
import { DeviceTypes } from "../DeviceTypes.js";
import { FlowMeasurement, Identify } from "../../cluster/interface/index.js";
import { ServesClusters } from "../ServesClusters.js"

export class FlowSensor extends
    ServesClusters(Device,
        FlowMeasurement,
        Identify)
{
    constructor(endpointId?: number) {
        super(DeviceTypes.FLOW_SENSOR, [], endpointId);
    }
}
