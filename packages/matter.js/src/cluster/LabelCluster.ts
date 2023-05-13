/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { AccessLevel, Attribute, Cluster, WritableAttribute } from "./Cluster.js";
import { TlvField, TlvObject } from "../tlv/TlvObject.js";
import { TlvString } from "../tlv/TlvString.js";
import { TlvArray } from "../tlv/TlvArray.js";
import { MatterCoreSpecificationV1_0 } from "../spec/Specifications.js";

/**
 * This is a string tuple with strings that are user defined.
 *
 * @see {@link MatterCoreSpecificationV1_0} § 9.7.5.1
 */
const TlvLabel = TlvObject({
    /** Contains a string as label without a further defined semantic in this base cluster. */
    label: TlvField(0, TlvString.bound({ maxLength: 16 })), /* default: "" */

    /** Contains a string as value without a further defined semantic in this base cluster. */
    value: TlvField(1, TlvString.bound({ maxLength: 16 })), /* default: "" */
});

/**
 * This cluster provides a feature to tag an endpoint with zero or more labels.
 * Derived from LabelCluster ({@link MatterCoreSpecificationV1_0} § 9.7)
 *
 * @see {@link MatterCoreSpecificationV1_0} § 9.9
 */
export const UserLabelCluster = Cluster({
    id: 0x41,
    name: "User Label",
    revision: 1,

    /** @see {@link MatterCoreSpecificationV1_0} § 9.9.4 */
    attributes: {
        /** An implementation SHALL support at least 4 list entries per node for all User Label cluster instances on the node. */
        labelList: WritableAttribute(0, TlvArray(TlvLabel), { persistent: true, default: [], writeAcl: AccessLevel.Manage }),
    },
});

/**
 * This cluster provides a feature for the device to tag an endpoint with zero or more read only labels.
 * Derived from LabelCluster ({@link MatterCoreSpecificationV1_0} § 9.7)
 *
 * @see {@link MatterCoreSpecificationV1_0} § 9.8
 */
export const FixedLabelCluster = Cluster({
    id: 0x40,
    name: "Fixed Label",
    revision: 1,

    /** @see {@link MatterCoreSpecificationV1_0} § 9.8.4 */
    attributes: {
        /** List of fixed labels. */
        labelList: Attribute(0, TlvArray(TlvLabel), { persistent: true, default: [] }),
    },
});
