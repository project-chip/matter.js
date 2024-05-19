/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MutableCluster } from "../../cluster/mutation/MutableCluster.js";
import { WritableAttribute, AccessLevel } from "../../cluster/Cluster.js";
import { TlvArray } from "../../tlv/TlvArray.js";
import { Label } from "../../cluster/definitions/LabelCluster.js";
import { Identity } from "../../util/Type.js";
import { ClusterRegistry } from "../../cluster/ClusterRegistry.js";

export namespace UserLabel {
    /**
     * @see {@link Cluster}
     */
    export const ClusterInstance = MutableCluster({
        id: 0x41,
        name: "UserLabel",
        revision: 1,

        attributes: {
            /**
             * An implementation shall support at least 4 list entries per node for all User Label cluster instances on
             * the node.
             *
             * @see {@link MatterSpecification.v13.Core} § 9.9.4.1
             */
            labelList: WritableAttribute(
                0x0,
                TlvArray(Label.TlvLabelStruct, { minLength: 0 }),
                { persistent: true, default: [], writeAcl: AccessLevel.Manage }
            )
        }
    })

    /**
     * This cluster provides a feature to tag an endpoint with zero or more labels.
     *
     * @see {@link MatterSpecification.v13.Core} § 9.9
     */
    export interface Cluster extends Identity<typeof ClusterInstance> {}

    export const Cluster: Cluster = ClusterInstance;

    export const Complete = Cluster;
}

export type UserLabelCluster = UserLabel.Cluster;
export const UserLabelCluster = UserLabel.Cluster;
ClusterRegistry.register(UserLabel.Complete);
