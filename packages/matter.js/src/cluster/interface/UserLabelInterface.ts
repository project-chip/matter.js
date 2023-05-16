/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { UserLabelCluster, ClusterInterface } from "../index.js";
import { TypeFromSchema } from "../../tlv/TlvSchema.js";

type LabelList = TypeFromSchema<typeof UserLabelCluster.attributes.labelList.schema>;

export interface UserLabelInterface {
    labelList: LabelList[];
    setLabelList(value: LabelList[]): Promise<void>;
    addLabelListListener(listener: (newValue: LabelList[], oldValue: LabelList[]) => void): void;
    removeLabelListListener(listener: (newValue: LabelList[], oldValue: LabelList[]) => void): void;
}

export const UserLabel:
    ClusterInterface<UserLabelInterface> =
{
    definition: UserLabelCluster
};
