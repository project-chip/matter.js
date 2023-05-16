/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { BindingCluster, ClusterInterface } from "../index.js";
import { TypeFromSchema } from "../../tlv/TlvSchema.js";

type BindingList = TypeFromSchema<typeof BindingCluster.attributes.bindingList.schema>;

export interface BindingInterface {
    bindingList: BindingList[];
    setBindingList(value: BindingList[]): Promise<void>;
    addBindingListListener(listener: (newValue: BindingList[], oldValue: BindingList[]) => void): void;
    removeBindingListListener(listener: (newValue: BindingList[], oldValue: BindingList[]) => void): void;
}

export const Binding:
    ClusterInterface<BindingInterface> =
{
    definition: BindingCluster
};
