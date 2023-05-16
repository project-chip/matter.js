/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { DescriptorCluster, ClusterInterface } from "../index.js";
import { TypeFromSchema } from "../../tlv/TlvSchema.js";

type DeviceTypeList = TypeFromSchema<typeof DescriptorCluster.attributes.deviceTypeList.schema>;

export interface DescriptorInterface {
    deviceTypeList: DeviceTypeList[];
    addDeviceTypeListListener(listener: (newValue: DeviceTypeList[], oldValue: DeviceTypeList[]) => void): void;
    removeDeviceTypeListListener(listener: (newValue: DeviceTypeList[], oldValue: DeviceTypeList[]) => void): void;

    serverList: number[];
    addServerListListener(listener: (newValue: number[], oldValue: number[]) => void): void;
    removeServerListListener(listener: (newValue: number[], oldValue: number[]) => void): void;

    clientList: number[];
    addClientListListener(listener: (newValue: number[], oldValue: number[]) => void): void;
    removeClientListListener(listener: (newValue: number[], oldValue: number[]) => void): void;

    partsList: number[];
    addPartsListListener(listener: (newValue: number[], oldValue: number[]) => void): void;
    removePartsListListener(listener: (newValue: number[], oldValue: number[]) => void): void;
}

export const Descriptor:
    ClusterInterface<DescriptorInterface> =
{
    definition: DescriptorCluster
};
