/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Cluster as CreateCluster, FixedAttribute, Attribute } from "../../cluster/Cluster.js";
import { MatterCoreSpecificationV1_1 } from "../../spec/Specifications.js";
import { TlvArray } from "../../tlv/TlvArray.js";
import { TlvObject, TlvField } from "../../tlv/TlvObject.js";
import { TlvDeviceTypeId } from "../../datatype/DeviceTypeId.js";
import { TlvUInt16 } from "../../tlv/TlvNumber.js";
import { TlvClusterId } from "../../datatype/ClusterId.js";
import { TlvEndpointNumber } from "../../datatype/EndpointNumber.js";

export namespace Descriptor {
    /**
     * The device type and revision define endpoint conformance to a release of a device type definition. See the Data
     * Model specification for more information.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 9.5.4.1
     */
    export const TlvDeviceTypeStruct = TlvObject({
        /**
         * This shall indicate the device type definition. The endpoint shall conform to the device type definition and
         * cluster specifications required by the device type.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 9.5.4.1.1
         */
        deviceType: TlvField(0, TlvDeviceTypeId),

        /**
         * This is the implemented revision of the device type definition. The endpoint shall conform to this revision
         * of the device type.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 9.5.4.1.2
         */
        revision: TlvField(1, TlvUInt16.bound({ min: 1 }))
    });

    /**
     * Descriptor
     *
     * NOTE The Descriptor cluster is meant to replace the support from the Zigbee Device Object (ZDO) for describing a
     * node, its endpoints and clusters.
     *
     * This cluster describes an endpoint instance on the node, independently from other endpoints, but also allows
     * composition of endpoints to conform to complex device type patterns.
     *
     * This cluster supports a list of one or more device type identifiers that represent conformance to device type
     * specifications.
     *
     * The cluster supports a PartsList attribute that is a list of zero or more endpoints to support a composed device
     * type.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 9.5
     */
    export const Cluster = CreateCluster({
        id: 0x1d,
        name: "Descriptor",
        revision: 1,

        attributes: {
            /**
             * This is a list of device types and corresponding revisions declaring endpoint conformance (see
             * DeviceTypeStruct). At least one device type entry shall be present.
             *
             * An endpoint shall conform to all device types listed in the DeviceTypeList. A cluster instance that is
             * in common for more than one device type in the DeviceTypeList shall be supported as a shared cluster
             * instance on the endpoint.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 9.5.5.1
             */
            deviceTypeList: FixedAttribute(0x0, TlvArray(TlvDeviceTypeStruct, { minLength: 1 })),

            /**
             * This attribute shall list each cluster ID for the server clusters present on the endpoint instance.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 9.5.5.2
             */
            serverList: FixedAttribute(0x1, TlvArray(TlvClusterId), { default: [] }),

            /**
             * This attribute shall list each cluster ID for the client clusters present on the endpoint instance.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 9.5.5.3
             */
            clientList: FixedAttribute(0x2, TlvArray(TlvClusterId), { default: [] }),

            /**
             * This attribute indicates composition of the device type instance. Device type instance composition shall
             * include the endpoints in this list. See Endpoint Composition for more information which endpoints to
             * include in this list.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 9.5.5.4
             */
            partsList: Attribute(0x3, TlvArray(TlvEndpointNumber), { default: [] })
        }
    });
}

export type DescriptorCluster = typeof Descriptor.Cluster;
export const DescriptorCluster = Descriptor.Cluster;
