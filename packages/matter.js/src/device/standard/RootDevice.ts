/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Device } from "../Device.js";
import { DeviceTypes } from "../DeviceTypes.js";
import { BasicInformationServerImpl, AccessControlServerImpl, GroupKeyManagementServerImpl, GeneralCommissioningServerImpl, BasicAdminCommissioningServerImpl, OperationalCredentialsServerImpl, GeneralDiagnosticsServerImpl } from "../../cluster/interface/index.js";

export class RootDevice extends
    GeneralDiagnosticsServerImpl(OperationalCredentialsServerImpl(BasicAdminCommissioningServerImpl(GeneralCommissioningServerImpl(GroupKeyManagementServerImpl(AccessControlServerImpl(BasicInformationServerImpl(Device)))))))
{
    constructor(endpointId?: number) {
        super(DeviceTypes.ROOT, [], endpointId);
    }
}
