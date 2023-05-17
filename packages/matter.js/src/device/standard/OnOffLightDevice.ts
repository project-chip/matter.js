/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { DeviceTypes } from "../DeviceTypes.js";
import { ClusterInterface } from "../../cluster/Cluster.js";
import { Identify, OnOffLighting, LevelControl } from "../../cluster/interface/index.js";
import { AutoDevice } from "../AutoDevice.js"

export class OnOffLight extends
    AutoDevice.with(Identify, OnOffLighting)
{
    constructor(endpointId?: number) {
        super(DeviceTypes.ON_OFF_LIGHT, [], endpointId);
    }

    static readonly options = {
        LevelControl
    };

    static with(...clusters: ClusterInterface<any>[]) {
        return AutoDevice.extendDevice(this, ...clusters);
    }
}
