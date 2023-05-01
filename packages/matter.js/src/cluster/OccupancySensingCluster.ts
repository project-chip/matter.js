/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Attribute, OptionalWritableAttribute, Cluster } from "./Cluster.js";
import { BitFlag } from "../schema/BitmapSchema.js";
import { MatterApplicationClusterSpecificationV1_0 } from "../spec/Specifications.js";
import { TlvBitmap, TlvEnum, TlvUInt16, TlvUInt8 } from "../tlv/TlvNumber.js";
import { TlvNullable } from "../tlv/TlvNullable.js";

/** @see {@link MatterApplicationClusterSpecificationV1_0} § 2.7.5.1 */
export const OccupancyBitmap = TlvBitmap(TlvUInt8, {
    occupied: BitFlag(0),
});

/** @see {@link MatterApplicationClusterSpecificationV1_0} § 2.7.5.2 */
export const enum OccupancySensorType {
    PIR = 0,
    Ultrasonic = 1,
    PIRAndUltrasonic = 2,
    PhysicalContact = 3,
}

/** @see {@link MatterApplicationClusterSpecificationV1_0} § 2.7.5.3 */
export const OccupancySensorTypeBitmap = TlvBitmap(TlvUInt8, {
    PIR: BitFlag(0),
    ultrasonic: BitFlag(1),
    physicalContact: BitFlag(2)
});

/**
 * Attributes and commands for Occupancy Detection.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_0} § 2.7
 */
export const OccupancySensingCluster = Cluster({
    id: 0x0406,
    name: "OccupancySensing",
    revision: 3,

    /** @see {@link MatterApplicationClusterSpecificationV1_0} § 2.7.5 */
    attributes: {
        /** Bitmap, with only Bit 0 used.  1 = occupied, 0 = unoccupied. */
        occupancy: Attribute(0x0000, OccupancyBitmap),

        /**  specifies the type of the occupancy sensor  */
        occupancySensorType: Attribute(0x0001, TlvEnum<OccupancySensorType>()),

        /** bitmap allowing for specification of combination of sensor types */
        occupancySensorTypeBitmap: Attribute(0x0002, OccupancySensorTypeBitmap),

        // @see {@link MatterApplicationClusterSpecificationV1_0} § 2.7.6

        /** delay in seconds before the sensor changes back to unoccupied state. */
        pirOccupiedToUnoccupiedDelay: OptionalWritableAttribute(0x0010, TlvUInt16, { default: 0 }),
        /** delay in seconds before the sensor changes to its occupied state after detection */
        pirUnoccupiedToOccupiedDelay: OptionalWritableAttribute(0x0011, TlvUInt16, { default: 0 }),
        /** number of events in the period pirUnoccupiedToOccupiedDelay before the sensor changes to occupied */
        pirUnoccupiedToOccupiedThreshold: OptionalWritableAttribute(0x0012, TlvUInt8.bound({ min: 1, max: 254 }), { default: 1 }),

        // @see {@link MatterApplicationClusterSpecificationV1_0} § 2.7.7

        /** delay, in seconds, before the sensor changes back to unoccupied state. */
        ultrasonicOccupiedToUnoccupiedDelay: OptionalWritableAttribute(0x0020, TlvUInt16, { default: 0 }),
        /** delay in seconds before the sensor changes to its occupied state after detection */
        ultrasonicUnoccupiedToOccupiedDelay: OptionalWritableAttribute(0x0021, TlvUInt16, { default: 0 }),
        /** number of events in the period ultrasonicOnoccupiedToOccupiedDelay before the sensor changes to occupied */
        ultrasonicUnoccupiedToOccupiedThreshold: OptionalWritableAttribute(0x0022, TlvUInt8.bound({ min: 1, max: 254 }), { default: 1 }),

        // @see {@link MatterApplicationClusterSpecificationV1_0} § 2.7.8

        /** delay in seconds before the sensor changes back to unoccupied state. */
        physicalContactOccupiedToUnoccupiedDelay: OptionalWritableAttribute(0x0030, TlvNullable(TlvUInt16), { default: 0 }),
        /** delay in seconds before the sensor changes to its occupied state after detection */
        physicalContactUnoccupiedToOccupiedDelay: OptionalWritableAttribute(0x0031, TlvNullable(TlvUInt16), { default: 0 }),
        /** number of events in the period physicalContactToOccupiedDelay before the sensor changes to occupied */
        physicalContactUnoccupiedToOccupiedThreshold: OptionalWritableAttribute(0x0032, TlvUInt8.bound({ min: 1, max: 254 }), { default: 1 }),
    },
});
