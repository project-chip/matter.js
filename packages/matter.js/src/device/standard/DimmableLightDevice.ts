/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Device } from "../Device.js";
import { DeviceTypes } from "../DeviceTypes.js";
import { IdentifyServerImpl, GroupsServerImpl, ScenesServerImpl, OnOffLightingServerImpl, LevelControlServerImpl } from "../../cluster/interface/index.js";

export class DimmableLightDevice extends
    LevelControlServerImpl(OnOffLightingServerImpl(ScenesServerImpl(GroupsServerImpl(IdentifyServerImpl(Device)))))
{
    constructor(endpointId?: number) {
        super(DeviceTypes.DIMMABLE_LIGHT, [], endpointId);
    }
}
