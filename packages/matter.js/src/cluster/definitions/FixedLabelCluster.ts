/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Cluster as CreateCluster, Attribute } from "../../cluster/Cluster.js";
import { MatterCoreSpecificationV1_1 } from "../../spec/Specifications.js";
import { TlvArray } from "../../tlv/TlvArray.js";
import { Label } from "../../cluster/definitions/LabelCluster.js";

export namespace FixedLabel {
    /**
     * Fixed Label
     *
     * This cluster provides a feature for the device to tag an endpoint with zero or more read only labels. Examples:
     *
     *   • A bridge can use this to indicate grouping of bridged devices. For example: All bridged devices whose
     *     endpoints have an entry in their LabelList "room":"bedroom 2" are in the same (bed)room.
     *
     *   • A manufacturer can use this to identify a characteristic of an endpoint. For example to identify the
     *     endpoints of a luminaire, one pointing up, the other pointing down, one of the endpoints would have a
     *     LabelList entry "orientation":"up" while the other would have "orientation":"down". Using such indication,
     *     the user interface of a Node controlling this luminaire knows which of the endpoints is which of the lights.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 9.8
     */
    export const Cluster = CreateCluster({
        id: 0x40,
        name: "FixedLabel",
        revision: 1,

        attributes: {
            /**
             * @see {@link MatterCoreSpecificationV1_1} § 9.8.4
             */
            labelList: Attribute(0x0, TlvArray(Label.TlvLabelStruct), { persistent: true, default: [] })
        }
    })
}

export type FixedLabelCluster = typeof FixedLabel.Cluster;
export const FixedLabelCluster = FixedLabel.Cluster;
