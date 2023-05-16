/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Device } from "../Device.js";
import { DeviceTypes } from "../DeviceTypes.js";
import { TemperatureMeasurementServerImpl, IdentifyServerImpl } from "../../cluster/interface/index.js";

export class TemperatureSensorDevice extends
    IdentifyServerImpl(TemperatureMeasurementServerImpl(Device))
{
    constructor(endpointId?: number) {
        super(DeviceTypes.TEMPERATURE_SENSOR, [], endpointId);
    }
}
