/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MutableCluster } from "../cluster/mutation/MutableCluster.js";
import {
    OptionalFixedAttribute,
    OptionalWritableAttribute,
    Attribute,
    OptionalEvent,
    EventPriority,
    Event
} from "../cluster/Cluster.js";
import { TlvString } from "../tlv/TlvString.js";
import { TlvVendorId } from "../datatype/VendorId.js";
import { AccessLevel } from "#model";
import { TlvUInt16, TlvUInt32 } from "../tlv/TlvNumber.js";
import { TlvBoolean } from "../tlv/TlvBoolean.js";
import { BasicInformation } from "./basic-information.js";
import { TlvField, TlvObject } from "../tlv/TlvObject.js";
import { TypeFromSchema } from "../tlv/TlvSchema.js";
import { TlvNoArguments } from "../tlv/TlvNoArguments.js";
import { Identity } from "#general";
import { ClusterRegistry } from "../cluster/ClusterRegistry.js";

export namespace BridgedDeviceBasicInformation {
    /**
     * Body of the BridgedDeviceBasicInformation startUp event
     *
     * @see {@link MatterSpecification.v13.Core} § 9.13.5
     */
    export const TlvStartUpEvent = TlvObject({
        /**
         * This field shall be set to the same value as the one available in the SoftwareVersion attribute.
         *
         * @see {@link MatterSpecification.v13.Core} § 11.1.6.1.1
         */
        softwareVersion: TlvField(0, TlvUInt32)
    });

    /**
     * Body of the BridgedDeviceBasicInformation startUp event
     *
     * @see {@link MatterSpecification.v13.Core} § 9.13.5
     */
    export interface StartUpEvent extends TypeFromSchema<typeof TlvStartUpEvent> {}

    /**
     * Body of the BridgedDeviceBasicInformation reachableChanged event
     *
     * @see {@link MatterSpecification.v13.Core} § 9.13.5.2
     */
    export const TlvReachableChangedEvent = TlvObject({
        /**
         * This field shall indicate the value of the Reachable attribute after it was changed.
         *
         * @see {@link MatterSpecification.v13.Core} § 11.1.6.4.1
         */
        reachableNewValue: TlvField(0, TlvBoolean)
    });

    /**
     * Body of the BridgedDeviceBasicInformation reachableChanged event
     *
     * @see {@link MatterSpecification.v13.Core} § 9.13.5.2
     */
    export interface ReachableChangedEvent extends TypeFromSchema<typeof TlvReachableChangedEvent> {}

    /**
     * @see {@link Cluster}
     */
    export const ClusterInstance = MutableCluster({
        id: 0x39,
        name: "BridgedDeviceBasicInformation",
        revision: 3,

        attributes: {
            /**
             * @see {@link MatterSpecification.v13.Core} § 9.13.4
             */
            vendorName: OptionalFixedAttribute(0x1, TlvString.bound({ maxLength: 32 })),

            /**
             * @see {@link MatterSpecification.v13.Core} § 9.13.4
             */
            vendorId: OptionalFixedAttribute(0x2, TlvVendorId),

            /**
             * @see {@link MatterSpecification.v13.Core} § 9.13.4
             */
            productName: OptionalFixedAttribute(0x3, TlvString.bound({ maxLength: 32 })),

            /**
             * @see {@link MatterSpecification.v13.Core} § 9.13.4
             */
            nodeLabel: OptionalWritableAttribute(
                0x5,
                TlvString.bound({ maxLength: 32 }),
                { persistent: true, writeAcl: AccessLevel.Manage }
            ),

            /**
             * @see {@link MatterSpecification.v13.Core} § 9.13.4
             */
            hardwareVersion: OptionalFixedAttribute(0x7, TlvUInt16),

            /**
             * @see {@link MatterSpecification.v13.Core} § 9.13.4
             */
            hardwareVersionString: OptionalFixedAttribute(0x8, TlvString.bound({ minLength: 1, maxLength: 64 })),

            /**
             * @see {@link MatterSpecification.v13.Core} § 9.13.4
             */
            softwareVersion: OptionalFixedAttribute(0x9, TlvUInt32),

            /**
             * @see {@link MatterSpecification.v13.Core} § 9.13.4
             */
            softwareVersionString: OptionalFixedAttribute(0xa, TlvString.bound({ minLength: 1, maxLength: 64 })),

            /**
             * @see {@link MatterSpecification.v13.Core} § 9.13.4
             */
            manufacturingDate: OptionalFixedAttribute(0xb, TlvString.bound({ minLength: 8, maxLength: 16 })),

            /**
             * @see {@link MatterSpecification.v13.Core} § 9.13.4
             */
            partNumber: OptionalFixedAttribute(0xc, TlvString.bound({ maxLength: 32 })),

            /**
             * @see {@link MatterSpecification.v13.Core} § 9.13.4
             */
            productUrl: OptionalFixedAttribute(0xd, TlvString.bound({ maxLength: 256 })),

            /**
             * @see {@link MatterSpecification.v13.Core} § 9.13.4
             */
            productLabel: OptionalFixedAttribute(0xe, TlvString.bound({ maxLength: 64 })),

            /**
             * @see {@link MatterSpecification.v13.Core} § 9.13.4
             */
            serialNumber: OptionalFixedAttribute(0xf, TlvString.bound({ maxLength: 32 })),

            /**
             * @see {@link MatterSpecification.v13.Core} § 9.13.4
             */
            reachable: Attribute(0x11, TlvBoolean),

            /**
             * @see {@link MatterSpecification.v13.Core} § 9.13.4
             */
            uniqueId: OptionalFixedAttribute(0x12, TlvString.bound({ maxLength: 32 })),

            /**
             * @see {@link MatterSpecification.v13.Core} § 9.13.4
             */
            productAppearance: OptionalFixedAttribute(0x14, BasicInformation.TlvProductAppearance)
        },

        events: {
            /**
             * @see {@link MatterSpecification.v13.Core} § 9.13.5
             */
            startUp: OptionalEvent(0x0, EventPriority.Critical, TlvStartUpEvent),

            /**
             * @see {@link MatterSpecification.v13.Core} § 9.13.5
             */
            shutDown: OptionalEvent(0x1, EventPriority.Critical, TlvNoArguments),

            /**
             * The Leave event SHOULD be generated by the bridge when it detects that the associated device has left
             * the non-Matter network.
             *
             * NOTE
             *
             * The FabricIndex field has the X conformance, indicating it shall NOT be present. This event, in the
             * context of Bridged Device Basic Information cluster, has no usable fields, but the original Basic
             * Information cluster’s field definition is kept for completeness.
             *
             * @see {@link MatterSpecification.v13.Core} § 9.13.5.1
             */
            leave: OptionalEvent(0x2, EventPriority.Critical, TlvNoArguments),

            /**
             * This event shall be generated when there is a change in the Reachable attribute. Its purpose is to
             * provide an indication towards interested parties that the reachability of a bridged device (over the
             * non-Matter network) has changed, so they may take appropriate action.
             *
             * After (re)start of a bridge this event may be generated.
             *
             * @see {@link MatterSpecification.v13.Core} § 9.13.5.2
             */
            reachableChanged: Event(0x3, EventPriority.Critical, TlvReachableChangedEvent)
        }
    });

    /**
     * This Cluster serves two purposes towards a Node communicating with a Bridge:
     *
     *   • Indicate that the functionality on the Endpoint where it is placed (and its Parts) is bridged from a
     *     non-Matter technology, and
     *
     *   • Provide a centralized collection of attributes that the Node may collect to aid in conveying information
     *     regarding the Bridged Device to a user, such as the vendor name, the model name, or user-assigned name.
     *
     * This cluster shall be exposed by a Bridge on the Endpoint representing each Bridged Device. When the
     * functionality of a Bridged Device is represented using a set of Endpoints, this cluster shall only be exposed on
     * the Endpoint which is at the top of the hierarchy for the functionality of that Bridged Device.
     *
     * This cluster shall NOT be used on an endpoint that is not in the Descriptor cluster PartsList of an endpoint
     * with an Aggregator device type.
     *
     * This cluster has been derived from the Basic Information Cluster, and provides generic information about the
     * Bridged Device. Not all of the attributes in the Basic Information Cluster are relevant for a Bridged Device
     * (e.g. ProductID since it is not a Matter device). For other attributes, the information which is listed as
     * Mandatory for the Basic Information Cluster, may not be available when the Bridged Device does not provide it to
     * the Bridge, and the Bridge has no other means to determine it. For such cases where the information for a
     * particular attribute is not available, the Bridge SHOULD NOT include the attribute in the cluster for this
     * Bridged Device. See below for Conformance details.
     *
     * @see {@link MatterSpecification.v13.Core} § 9.13
     */
    export interface Cluster extends Identity<typeof ClusterInstance> {}

    export const Cluster: Cluster = ClusterInstance;
    export const Complete = Cluster;
}

export type BridgedDeviceBasicInformationCluster = BridgedDeviceBasicInformation.Cluster;
export const BridgedDeviceBasicInformationCluster = BridgedDeviceBasicInformation.Cluster;
ClusterRegistry.register(BridgedDeviceBasicInformation.Complete);
