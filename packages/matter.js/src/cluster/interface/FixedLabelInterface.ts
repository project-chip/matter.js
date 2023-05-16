/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ClientIfaceImpl, ServerIfaceImpl } from "./ClusterIfaceImpl.js";
import { FixedLabelCluster } from "../index.js";
import { TypeFromSchema } from "../../tlv/TlvSchema.js";

type LabelList = TypeFromSchema<typeof FixedLabelCluster.attributes.labelList.schema>;

export interface FixedLabelInterface {
    labelList: LabelList[];
    addLabelListListener(listener: (newValue: LabelList[], oldValue: LabelList[]) => void): void;
    removeLabelListListener(listener: (newValue: LabelList[], oldValue: LabelList[]) => void): void;
}

export const FixedLabelClientImpl = ClientIfaceImpl<FixedLabelInterface>(FixedLabelCluster);
export const FixedLabelServerImpl = ServerIfaceImpl<FixedLabelInterface>(FixedLabelCluster);
