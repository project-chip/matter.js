/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { DeviceTypes } from "../DeviceTypes.js";
import { ClusterInterface } from "../../cluster/Cluster.js";
import { Identify, FixedLabel } from "../../cluster/interface/index.js";
import { AutoDevice } from "../AutoDevice.js"

export class GenericSwitch extends
    AutoDevice.with(Identify)
{
    constructor(endpointId?: number) {
        super(DeviceTypes.GENERIC_SWITCH, [], endpointId);
    }

    static readonly options = {
        FixedLabel
    };

    static with(...clusters: ClusterInterface<any>[]) {
        return AutoDevice.extendDevice(this, ...clusters);
    }
}
