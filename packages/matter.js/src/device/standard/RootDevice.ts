/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Device } from "../Device.js";
import { DeviceTypes } from "../DeviceTypes.js";
import { BasicInformation, AccessControl, GroupKeyManagement, GeneralCommissioning, BasicAdminCommissioning, OperationalCredentials, GeneralDiagnostics, PowerSourceConfiguration, WifiNetworkCommissioning } from "../../cluster/interface/index.js";
import { ServesClusters } from "../ServesClusters.js"

export class RootDevice extends
    ServesClusters(Device,
        BasicInformation,
        AccessControl,
        GroupKeyManagement,
        GeneralCommissioning,
        BasicAdminCommissioning,
        OperationalCredentials,
        GeneralDiagnostics)
{
    constructor(endpointId?: number) {
        super(DeviceTypes.ROOT, [], endpointId);
    }
    static readonly options = [
        PowerSourceConfiguration,
        WifiNetworkCommissioning
    ];

    with(...clusters: typeof RootDevice.options[number][]) {
        return ServesClusters(RootDevice, ...clusters);
    }

}
