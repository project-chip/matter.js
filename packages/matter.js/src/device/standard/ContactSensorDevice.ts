/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { DeviceTypes } from "../DeviceTypes.js";
import { ClusterInterface } from "../../cluster/Cluster.js";
import { Identify, BooleanState } from "../../cluster/interface/index.js";
import { AutoDevice } from "../AutoDevice.js"

export class ContactSensor extends
    AutoDevice.with(Identify, BooleanState)
{
    constructor(endpointId?: number) {
        super(DeviceTypes.CONTACT_SENSOR, [], endpointId);
    }
}
