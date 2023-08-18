/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Cluster as CreateCluster, WritableAttribute, AccessLevel } from "../../cluster/Cluster.js";
import { MatterCoreSpecificationV1_1 } from "../../spec/Specifications.js";
import { TlvArray } from "../../tlv/TlvArray.js";
import { Label } from "../../cluster/definitions/LabelCluster.js";

export namespace UserLabel {
    /**
     * User Label
     *
     * This cluster provides a feature to tag an endpoint with zero or more labels.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 9.9
     */
    export const Cluster = CreateCluster({
        id: 0x41,
        name: "UserLabel",
        revision: 1,

        attributes: {
            /**
             * An implementation shall support at least 4 list entries per node for all User Label cluster instances on
             * the node.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 9.9.4.1
             */
            labelList: WritableAttribute(
                0x0,
                TlvArray(Label.TlvLabelStruct, { minLength: 0 }),
                { persistent: true, default: [], writeAcl: AccessLevel.Manage }
            )
        }
    })
}

export type UserLabelCluster = typeof UserLabel.Cluster;
export const UserLabelCluster = UserLabel.Cluster;
