/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { FixedLabelCluster, ClusterInterface } from "../index.js";
import { TypeFromSchema } from "../../tlv/TlvSchema.js";

type LabelList = TypeFromSchema<typeof FixedLabelCluster.attributes.labelList.schema>;

export module FixedLabel {
    export type State = {
        labelList: LabelList[];
    }

    export interface Client {
    }

    export interface Server {
    }
}

export const FixedLabel: ClusterInterface<FixedLabel.State, FixedLabel.Client, FixedLabel.Server> = {
    definition: FixedLabelCluster
}
