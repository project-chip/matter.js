/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { DeviceTypes } from "../DeviceTypes.js";
import { ClusterInterface } from "../../cluster/Cluster.js"

export class Aggregator extends AutoDevice {
    constructor(endpointId?: number) {
        super(DeviceTypes.AGGREGATOR, [], endpointId);
    }
}
