/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Cluster, WritableAttribute, AccessLevel } from "../../cluster/Cluster.js";
import { MatterCoreSpecificationV1_1 } from "../../spec/Specifications.js";
import { TlvArray } from "../../tlv/TlvArray.js";
import { TlvLabelStruct } from "../../cluster/definitions/LabelCluster.js";

/**
 * User Label
 *
 * This cluster provides a feature to tag an endpoint with zero or more labels.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 9.9
 */
export const UserLabelCluster = Cluster({
    id: 0x41,
    name: "UserLabel",
    revision: 1,

    attributes: {
        /**
         * An implementation shall support at least 4 list entries per node for all User Label cluster instances on the
         * node.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 9.9.4.1
         */
        labelList: WritableAttribute(
            0x0,
            TlvArray(TlvLabelStruct, { minLength: 4 }),
            { persistent: true, default: [], writeAcl: AccessLevel.Manage }
        )
    }
})
