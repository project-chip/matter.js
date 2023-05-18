/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { FixedLabelCluster, ClusterInterface } from "../index.js";
import { TypeFromSchema } from "../../tlv/TlvSchema.js";

type LabelList = TypeFromSchema<typeof FixedLabelCluster.attributes.labelList.schema>;

export interface Common {
    readonly labelList: LabelList[];
}

export const FixedLabel: ClusterInterface<Common, Common> = {
    definition: FixedLabelCluster
}
