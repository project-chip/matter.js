/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MutableCluster } from "../../cluster/mutation/MutableCluster.js";
import { Attribute, OptionalEvent, EventPriority } from "../../cluster/Cluster.js";
import { TlvBoolean } from "../../tlv/TlvBoolean.js";
import { MatterApplicationClusterSpecificationV1_1 } from "../../spec/Specifications.js";
import { TlvObject, TlvField } from "../../tlv/TlvObject.js";
import { TypeFromSchema } from "../../tlv/TlvSchema.js";
import { Identity } from "../../util/Type.js";
import { ClusterRegistry } from "../../cluster/ClusterRegistry.js";

export namespace BooleanState {
    /**
     * Body of the BooleanState stateChange event
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.7.5.1
     */
    export const TlvStateChangeEvent = TlvObject({ stateValue: TlvField(0, TlvBoolean) });

    /**
     * Body of the BooleanState stateChange event
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.7.5.1
     */
    export interface StateChangeEvent extends TypeFromSchema<typeof TlvStateChangeEvent> {}

    /**
     * @see {@link Cluster}
     */
    export const ClusterInstance = MutableCluster({
        id: 0x45,
        name: "BooleanState",
        revision: 1,

        attributes: {
            /**
             * This represents a Boolean state.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.7.4.1
             */
            stateValue: Attribute(0x0, TlvBoolean)
        },

        events: {
            /**
             * This event shall be generated when the StateValue attribute changes.
             *
             * The StateValue field shall indicate the new value of the StateValue attribute.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.7.5.1
             */
            stateChange: OptionalEvent(0x0, EventPriority.Info, TlvStateChangeEvent)
        }
    });

    /**
     * Boolean State
     *
     * This cluster provides an interface to a boolean state called StateValue.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.7
     */
    export interface Cluster extends Identity<typeof ClusterInstance> {}

    export const Cluster: Cluster = ClusterInstance;
    export const Complete = Cluster;
}

export type BooleanStateCluster = BooleanState.Cluster;
export const BooleanStateCluster = BooleanState.Cluster;
ClusterRegistry.register(BooleanState.Complete);
