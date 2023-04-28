/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Attribute, Cluster } from "./Cluster.js";
import { TlvField, TlvObject } from "../tlv/TlvObject.js";
import { TlvDeviceTypeId } from "../datatype/DeviceTypeId.js";
import { TlvUInt16 } from "../tlv/TlvNumber.js";
import { TlvArray } from "../tlv/TlvArray.js";
import { TlvClusterId } from "../datatype/ClusterId.js";
import { TlvEndpointNumber } from "../datatype/EndpointNumber.js";
import { MatterCoreSpecificationV1_0 } from "../spec/Specifications.js";

/**
 * Provides information about endpoint conformance to a release of a device type definition.
 *
 * @see {@link MatterCoreSpecificationV1_0} § 9.5.5.1
 */
const TlvDeviceType = TlvObject({
    /** Indicates the device type definition */
    deviceType: TlvField(0, TlvDeviceTypeId),

    /** Indicates the implemented revision of the device type definition */
    revision: TlvField(1, TlvUInt16.bound({ min: 1 })),
});

/**
 * This cluster describes an endpoint instance on the node, independently of other endpoints, but also
 * allows composition of endpoints to conform to complex device type patterns.
 * This Cluster is also meant to replace the support from the Zigbee Device Object (ZDO) for describing a node,
 * its endpoints and clusters.
 *
 * @see {@link MatterCoreSpecificationV1_0} § 9.5
 */
export const DescriptorCluster = Cluster({
    id: 0x1d,
    name: "Descriptor",
    revision: 1,

    /** @see {@link MatterCoreSpecificationV1_0} § 9.5.4 */
    attributes: {
        /** List of device types and corresponding revisions declaring endpoint conformance. */
        deviceTypeList: Attribute(0, TlvArray(TlvDeviceType, { minLength: 1 })),

        /** List containing each cluster ID for the server clusters present on the endpoint instance. */
        serverList: Attribute(1, TlvArray(TlvClusterId), { default: [] }),

        /** List containing each cluster ID for the client clusters present on the endpoint instance. */
        clientList: Attribute(2, TlvArray(TlvClusterId), { default: [] }),

        /**
         * This indicates composition of the device type instance. Device type instance composition SHALL
         * include the endpoints in this list.
         */
        partsList: Attribute(3, TlvArray(TlvEndpointNumber), { default: [] }),
    },
});
