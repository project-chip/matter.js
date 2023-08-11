/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import {
    Cluster as CreateCluster,
    FixedAttribute,
    WritableAttribute,
    AccessLevel,
    OptionalFixedAttribute,
    OptionalWritableAttribute,
    OptionalAttribute,
    Event,
    EventPriority,
    OptionalEvent
} from "../../cluster/Cluster.js";
import { MatterCoreSpecificationV1_1 } from "../../spec/Specifications.js";
import { TlvUInt16, TlvUInt32, TlvEnum } from "../../tlv/TlvNumber.js";
import { TlvString } from "../../tlv/TlvString.js";
import { TlvVendorId } from "../../datatype/VendorId.js";
import { TlvBoolean } from "../../tlv/TlvBoolean.js";
import { TlvObject, TlvField } from "../../tlv/TlvObject.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";
import { TlvNoArguments } from "../../tlv/TlvNoArguments.js";
import { TlvFabricIndex } from "../../datatype/FabricIndex.js";

export namespace BasicInformation {
    /**
     * This structure provides constant values related to overall global capabilities of this Node, that are not
     * cluster-specific.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.1.4.1
     */
    export const TlvCapabilityMinimaStruct = TlvObject({
        /**
         * This field shall indicate the actual minimum number of concurrent CASE sessions that are supported per
         * fabric.
         *
         * This value shall NOT be smaller than the required minimum indicated in Section 4.13.2.8, “Minimal Number of
         * CASE Sessions”.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.1.4.1.1
         */
        caseSessionsPerFabric: TlvField(0, TlvUInt16.bound({ min: 3 })),

        /**
         * This field shall indicate the actual minimum number of concurrent subscriptions supported per fabric.
         *
         * This value shall NOT be smaller than the required minimum indicated in Section 8.5.1, “Subscribe
         * Transaction”.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.1.4.1.2
         */
        subscriptionsPerFabric: TlvField(1, TlvUInt16.bound({ min: 3 }))
    });

    export const enum ProductFinish {
        Other = 0,
        Matte = 1,
        Satin = 2,
        Polished = 3,
        Rugged = 4,
        Fabric = 5
    }

    export const enum Color {
        Black = 0,
        Navy = 1,
        Green = 2,
        Teal = 3,
        Maroon = 4,
        Purple = 5,
        Olive = 6,
        Gray = 7,
        Blue = 8,
        Lime = 9,
        Aqua = 10,
        Red = 11,
        Fuchsia = 12,
        Yellow = 13,
        White = 14,
        Nickel = 15,
        Chrome = 16,
        Brass = 17,
        Copper = 18,
        Silver = 19,
        Gold = 20
    }

    export const TlvProductAppearanceStruct = TlvObject({
        finish: TlvField(0, TlvEnum<ProductFinish>()),
        primaryColor: TlvField(1, TlvNullable(TlvEnum<Color>()))
    });

    /**
     * Body of the BasicInformation startUp event
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.1.6.1
     */
    export const TlvStartUpEvent = TlvObject({
        /**
         * This field shall be set to the same value as the one available in the Software Version attribute of the
         * Basic Information Cluster.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.1.6.1.1
         */
        softwareVersion: TlvField(0, TlvUInt32)
    });

    /**
     * Body of the BasicInformation leave event
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.1.6.3
     */
    export const TlvLeaveEvent = TlvObject({
        /**
         * This field shall contain the local Fabric Index of the fabric which the node is about to leave.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.1.6.3.1
         */
        fabricIndex: TlvField(0, TlvFabricIndex)
    });

    /**
     * Body of the BasicInformation reachableChanged event
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.1.6.4
     */
    export const TlvReachableChangedEvent = TlvObject({
        /**
         * This field shall indicate the value of the Reachable attribute after it was changed.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.1.6.4.1
         */
        reachableNewValue: TlvField(0, TlvBoolean)
    });

    /**
     * Basic Information
     *
     * This cluster provides attributes and events for determining basic information about Nodes, which supports both
     * Commissioning and operational determination of Node characteristics, such as Vendor ID, Product ID and serial
     * number, which apply to the whole Node.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.1
     */
    export const Cluster = CreateCluster({
        id: 0x28,
        name: "BasicInformation",
        revision: 2,

        attributes: {
            /**
             * This attribute shall be set to the revision number of the Data Model against which the Node is certified.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.1.5.1
             */
            dataModelRevision: FixedAttribute(0x0, TlvUInt16),

            /**
             * This attribute shall specify a human readable (displayable) name of the vendor for the Node.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.1.5.2
             */
            vendorName: FixedAttribute(0x1, TlvString.bound({ maxLength: 32 })),

            /**
             * This attribute shall specify the Vendor ID.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.1.5.3
             */
            vendorId: FixedAttribute(0x2, TlvVendorId),

            /**
             * This attribute shall specify a human readable (displayable) name of the model for the Node such as the
             * model number (or other identifier) assigned by the vendor.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.1.5.4
             */
            productName: FixedAttribute(0x3, TlvString.bound({ maxLength: 32 })),

            /**
             * This attribute shall specify the Product ID assigned by the vendor that is unique to the specific
             * product of the Node.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.1.5.5
             */
            productId: FixedAttribute(0x4, TlvUInt16),

            /**
             * This attribute shall represent a user defined name for the Node. This attribute SHOULD be set during
             * initial commissioning and may be updated by further reconfigurations.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.1.5.6
             */
            nodeLabel: WritableAttribute(
                0x5,
                TlvString.bound({ maxLength: 32 }),
                { persistent: true, default: "", writeAcl: AccessLevel.Manage }
            ),

            /**
             * This attribute shall be an ISO 3166-1 alpha-2 code to represent the country, dependent territory, or
             * special area of geographic interest in which the Node is located at the time of the attribute being set.
             * This attribute shall be set during initial commissioning (unless already set) and may be updated by
             * further reconfigurations. This attribute may affect some regulatory aspects of the Node’s operation,
             * such as radio transmission power levels in given spectrum allocation bands if technologies where this is
             * applicable are used. The Location’s region code shall be interpreted in a case-insensitive manner. If
             * the Node cannot understand the location code with which it was configured, or the location code has not
             * yet been configured, it shall configure itself in a region- agnostic manner as determined by the vendor,
             * avoiding region-specific assumptions as much as is practical. The special value XX shall indicate that
             * region-agnostic mode is used.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.1.5.7
             */
            location: WritableAttribute(
                0x6,
                TlvString.bound({ length: 2 }),
                { persistent: true, default: "XX", writeAcl: AccessLevel.Administer }
            ),

            /**
             * This attribute shall specify the version number of the hardware of the Node. The meaning of its value,
             * and the versioning scheme, are vendor defined.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.1.5.8
             */
            hardwareVersion: FixedAttribute(0x7, TlvUInt16, { default: 0 }),

            /**
             * This attribute shall specify the version number of the hardware of the Node. The meaning of its value,
             * and the versioning scheme, are vendor defined. The HardwareVersionString attribute shall be used to
             * provide a more user-friendly value than that represented by the HardwareVersion attribute.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.1.5.9
             */
            hardwareVersionString: FixedAttribute(0x8, TlvString.bound({ minLength: 1, maxLength: 64 })),

            /**
             * This attribute shall contain the current version number for the software running on this Node. The
             * version number can be compared using a total ordering to determine if a version is logically newer than
             * another one. A larger value of SoftwareVersion is newer than a lower value, from the perspective of
             * software updates (see Section 11.19.3.3, “Availability of Software Images”). Nodes may query this field
             * to determine the currently running version of software on another given Node.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.1.5.10
             */
            softwareVersion: FixedAttribute(0x9, TlvUInt32, { default: 0 }),

            /**
             * This attribute shall contain a current human-readable representation for the software running on the
             * Node. This version information may be conveyed to users. The maximum length of the SoftwareVersionString
             * attribute is 64 bytes of UTF-8 characters. The contents SHOULD only use simple 7-bit ASCII alphanumeric
             * and punctuation characters, so as to simplify the conveyance of the value to a variety of cultures.
             *
             * Examples of version strings include "1.0", "1.2.3456", "1.2-2", "1.0b123", "1.2_3".
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.1.5.11
             */
            softwareVersionString: FixedAttribute(0xa, TlvString.bound({ minLength: 1, maxLength: 64 })),

            /**
             * This attribute shall specify the date that the Node was manufactured. The first 8 characters shall
             * specify the date of manufacture of the Node in international date notation according to ISO 8601, i.e.,
             * YYYYMMDD, e.g., 20060814. The final 8 characters may include country, factory, line, shift or other
             * related information at the option of the vendor. The format of this information is vendor
             *
             * defined.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.1.5.12
             */
            manufacturingDate: OptionalFixedAttribute(0xb, TlvString.bound({ minLength: 8, maxLength: 16 })),

            /**
             * This attribute shall specify a human-readable (displayable) vendor assigned part number for the Node
             * whose meaning and numbering scheme is vendor defined.
             *
             * Multiple products (and hence PartNumbers) can share a ProductID. For instance, there may be different
             * packaging (with different PartNumbers) for different regions; also different colors of a product might
             * share the ProductID but may have a different PartNumber.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.1.5.13
             */
            partNumber: OptionalFixedAttribute(0xc, TlvString.bound({ maxLength: 32 })),

            /**
             * This attribute shall specify a link to a product specific web page. The syntax of the ProductURL
             * attribute shall follow the syntax as specified in RFC 3986 [https://tools.ietf.org/html/rfc3986]. The
             * specified URL SHOULD resolve to a maintained web page available for the lifetime of the product. The
             * maximum length of the ProductUrl attribute is 256 ASCII characters.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.1.5.14
             */
            productUrl: OptionalFixedAttribute(0xd, TlvString.bound({ maxLength: 256 })),

            /**
             * This attribute shall specify a vendor specific human readable (displayable) product label. The
             * ProductLabel attribute may be used to provide a more user-friendly value than that represented by the
             * ProductName attribute. The ProductLabel attribute SHOULD NOT include the name of the vendor as defined
             * within the VendorName attribute.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.1.5.15
             */
            productLabel: OptionalFixedAttribute(0xe, TlvString.bound({ maxLength: 64 })),

            /**
             * This attributes shall specify a human readable (displayable) serial number.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.1.5.16
             */
            serialNumber: OptionalFixedAttribute(0xf, TlvString.bound({ maxLength: 32 })),

            /**
             * This attribute shall allow a local Node configuration to be disabled. When this attribute is set to True
             * the Node shall disable the ability to configure the Node through an on-Node user interface. The value of
             * the LocalConfigDisabled attribute shall NOT in any way modify, disable, or otherwise affect the user’s
             * ability to trigger a factory reset on the Node.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.1.5.17
             */
            localConfigDisabled: OptionalWritableAttribute(
                0x10,
                TlvBoolean,
                { persistent: true, default: true, writeAcl: AccessLevel.Manage }
            ),

            /**
             * This attribute (when used) shall indicate whether the Node can be reached. For a native Node this is
             * implicitly True (and its use is optional).
             *
             * Its main use case is in the derived Bridged Device Basic Information cluster where it is used to
             * indicate whether the bridged device is reachable by the bridge over the non-native network.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.1.5.18
             */
            reachable: OptionalAttribute(0x11, TlvBoolean, { default: true }),

            /**
             * This attribute (when used) shall indicate a unique identifier for the device, which is constructed in a
             * manufacturer specific manner.
             *
             * It may be constructed using a permanent device identifier (such as device MAC address) as basis. In
             * order to prevent tracking,
             *
             *   • it SHOULD NOT be identical to (or easily derived from) such permanent device identifier
             *
             *   • it SHOULD be updated when the device is factory reset
             *
             *   • it shall not be identical to the SerialNumber attribute
             *
             *   • it shall not be printed on the product or delivered with the product The value does not need to be
             *     human readable.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.1.5.19
             */
            uniqueId: OptionalFixedAttribute(0x12, TlvString.bound({ maxLength: 32 })),

            /**
             * This attribute shall provide the minimum guaranteed value for some system-wide resource capabilities
             * that are not otherwise cluster-specific and do not appear elsewhere. This attribute may be used by
             * clients to optimize communication with Nodes by allowing them to use more than the strict minimum values
             * required by this specification, wherever available.
             *
             * The values supported by the server in reality may be larger than the values provided in this attribute,
             * such as if a server is not resource-constrained at all. However, clients SHOULD only rely on the amounts
             * provided in this attribute.
             *
             * Note that since the fixed values within this attribute may change over time, both increasing and
             * decreasing, as software versions change for a given Node, clients SHOULD take care not to assume forever
             * unchanging values and SHOULD NOT cache this value permanently at Commissioning time.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.1.5.20
             */
            capabilityMinima: FixedAttribute(
                0x13,
                TlvCapabilityMinimaStruct,
                { default: { caseSessionsPerFabric: 3, subscriptionsPerFabric: 3 } }
            ),

            productAppearance: OptionalAttribute(0x14, TlvProductAppearanceStruct)
        },

        events: {
            /**
             * The StartUp event shall be generated by a Node as soon as reasonable after completing a boot or reboot
             * process. The StartUp event SHOULD be the first Data Model event recorded by the Node after it completes
             * a boot or reboot process.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.1.6.1
             */
            startUp: Event(0x0, EventPriority.Critical, TlvStartUpEvent),

            /**
             * The ShutDown event SHOULD be generated by a Node prior to any orderly shutdown sequence on a best-effort
             * basis. When a ShutDown event is generated, it SHOULD be the last Data Model event recorded by the Node.
             * This event SHOULD be delivered urgently to current subscribers on a best- effort basis. Any subsequent
             * incoming interactions to the Node may be dropped until the completion of a future boot or reboot process.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.1.6.2
             */
            shutDown: OptionalEvent(0x1, EventPriority.Critical, TlvNoArguments),

            /**
             * The Leave event SHOULD be generated by a Node prior to permanently leaving a given Fabric, such as when
             * the RemoveFabric command is invoked for a given fabric, or triggered by factory reset or some other
             * manufacturer specific action to disable or reset the operational data in the Node. When a Leave event is
             * generated, it SHOULD be assumed that the fabric recorded in the event is no longer usable, and
             * subsequent interactions targeting that fabric will most likely fail.
             *
             * Upon receipt of Leave Event on a subscription, the receiving Node may update other nodes in the fabric
             * by removing related bindings, access control list entries and other data referencing the leaving Node.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.1.6.3
             */
            leave: OptionalEvent(0x2, EventPriority.Info, TlvLeaveEvent),

            /**
             * This event shall be supported if and only if the Reachable attribute is supported.
             *
             * This event (when supported) shall be generated when there is a change in the Reachable attribute.
             *
             * Its main use case is in the derived Bridged Device Basic Information cluster.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.1.6.4
             */
            reachableChanged: OptionalEvent(0x3, EventPriority.Info, TlvReachableChangedEvent)
        }
    });
}

export type BasicInformationCluster = typeof BasicInformation.Cluster;
export const BasicInformationCluster = BasicInformation.Cluster;
