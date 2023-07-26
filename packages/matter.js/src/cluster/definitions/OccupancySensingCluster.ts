/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Cluster as CreateCluster, Attribute, OptionalWritableAttribute, AccessLevel } from "../../cluster/Cluster.js";
import { MatterApplicationClusterSpecificationV1_1 } from "../../spec/Specifications.js";
import { BitFlag } from "../../schema/BitmapSchema.js";
import { TlvUInt8, TlvBitmap, TlvEnum, TlvUInt16 } from "../../tlv/TlvNumber.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";

export namespace OccupancySensing {
    /**
     * All other bits are reserved.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.7.5.1
     */
    export const OccupancyBitmap = {
        /**
         * Indicates the sensed occupancy state; 1 = occupied, 0 = unoccupied.
         */
        occupied: BitFlag(0)
    };

    /**
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.7.5.2
     */
    export const enum OccupancySensorType {
        /**
         * Indicates a passive infrared sensor.
         */
        Pir = 0,

        /**
         * Indicates a ultrasonic sensor.
         */
        Ultrasonic = 1,

        /**
         * Indicates a passive infrared and ultrasonic sensor.
         */
        PirAndUltrasonic = 2,

        /**
         * Indicates a physical contact sensor.
         */
        PhysicalContact = 3
    }

    /**
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.7.5.3
     */
    export const OccupancySensorTypeBitmap = {
        /**
         * Indicates a passive infrared sensor.
         */
        pir: BitFlag(0),

        /**
         * Indicates a ultrasonic sensor.
         */
        ultrasonic: BitFlag(1),

        /**
         * Indicates a physical contact sensor.
         */
        physicalContact: BitFlag(2)
    };

    /**
     * Occupancy Sensing
     *
     * Attributes and commands for configuring occupancy sensing, and reporting occupancy status.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.7
     */
    export const Cluster = CreateCluster({
        id: 0x406,
        name: "OccupancySensing",
        revision: 3,

        attributes: {
            /**
             * The Occupancy attribute indicates the status of occupancy.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.7.6.1
             */
            occupancy: Attribute(0x0, TlvBitmap(TlvUInt8, OccupancyBitmap)),

            /**
             * The OccupancySensorType attribute specifies the type of the occupancy sensor.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.7.6.2
             */
            occupancySensorType: Attribute(0x1, TlvEnum<OccupancySensorType>()),

            /**
             * The OccupancySensorTypeBitmap attribute specifies the types of the occupancy sensor. A ‘1’ in each bit
             * position indicates the capability is implemented.
             *
             * The value of the OccupancySensorTypeBitmap attribute and the OccupancySensorType attribute shall be
             * aligned as defined below.
             *
             * Table 32. Mapping between OccupancySensorTypeBitmap and OccupancySensorType Attributes
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.7.6.3
             */
            occupancySensorTypeBitmap: Attribute(0x2, TlvBitmap(TlvUInt8, OccupancySensorTypeBitmap)),

            /**
             * The PIROccupiedToUnoccupiedDelay attribute specifies the time delay, in seconds, before the PIR sensor
             * changes to its unoccupied state after the last detection of movement in the sensed area.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.7.7.1
             */
            pirOccupiedToUnoccupiedDelay: OptionalWritableAttribute(
                0x10,
                TlvUInt16,
                { default: 0, writeAcl: AccessLevel.Manage }
            ),

            /**
             * The PIRUnoccupiedToOccupiedDelay attribute specifies the time delay, in seconds, before the PIR sensor
             * changes to its occupied state after the detection of movement in the sensed area. This attribute is
             * mandatory if the PIRUnoccupiedToOccupiedThreshold attribute is implemented.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.7.7.2
             */
            pirUnoccupiedToOccupiedDelay: OptionalWritableAttribute(
                0x11,
                TlvUInt16,
                { default: 0, writeAcl: AccessLevel.Manage }
            ),

            /**
             * The PIRUnoccupiedToOccupiedThreshold attribute specifies the number of movement detection events that
             * must occur in the period PIRUnoccupiedToOccupiedDelay, before the PIR sensor changes to its occupied
             * state. This attribute is mandatory if the PIRUnoccupiedToOccupiedDelay attribute is implemented.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.7.7.3
             */
            pirUnoccupiedToOccupiedThreshold: OptionalWritableAttribute(
                0x12,
                TlvUInt8.bound({ min: 1, max: 254 }),
                { default: 1, writeAcl: AccessLevel.Manage }
            ),

            /**
             * The UltrasonicOccupiedToUnoccupiedDelay attribute and specifies the time delay, in seconds, before the
             * Ultrasonic sensor changes to its unoccupied state after the last detection of movement in the sensed
             * area.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.7.8.1
             */
            ultrasonicOccupiedToUnoccupiedDelay: OptionalWritableAttribute(
                0x20,
                TlvUInt16,
                { default: 0, writeAcl: AccessLevel.Manage }
            ),

            /**
             * The UltrasonicUnoccupiedToOccupiedDelay attribute and specifies the time delay, in seconds, before the
             * Ultrasonic sensor changes to its occupied state after the detection of movement in the sensed area. This
             * attribute is mandatory if the UltrasonicUnoccupiedToOccupiedThreshold attribute is implemented.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.7.8.2
             */
            ultrasonicUnoccupiedToOccupiedDelay: OptionalWritableAttribute(
                0x21,
                TlvUInt16,
                { default: 0, writeAcl: AccessLevel.Manage }
            ),

            /**
             * The UltrasonicUnoccupiedToOccupiedThreshold attribute specifies the number of movement detection events
             * that must occur in the period UltrasonicUnoccupiedToOccupiedDelay, before the Ultrasonic sensor changes
             * to its occupied state. This attribute is mandatory if the UltrasonicUnoccupiedToOccupiedDelay attribute
             * is implemented.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.7.8.3
             */
            ultrasonicUnoccupiedToOccupiedThreshold: OptionalWritableAttribute(
                0x22,
                TlvUInt8.bound({ min: 1, max: 254 }),
                { default: 1, writeAcl: AccessLevel.Manage }
            ),

            /**
             * The PhysicalContactOccupiedToUnoccupiedDelay attribute specifies the time delay, in seconds, before the
             * physical contact occupancy sensor changes to its unoccupied state after detecting the unoccupied event.
             * The null value indicates that the sensor does not report occupied to unoccupied transition.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.7.9.1
             */
            physicalContactOccupiedToUnoccupiedDelay: OptionalWritableAttribute(
                0x30,
                TlvNullable(TlvUInt16),
                { default: 0, writeAcl: AccessLevel.Manage }
            ),

            /**
             * The PhysicalContactUnoccupiedToOccupiedDelay attribute specifies the time delay, in seconds, before the
             * physical contact sensor changes to its occupied state after the detection of the occupied event.
             *
             * The null value indicates that the sensor does not report unoccupied to occupied transition.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.7.9.2
             */
            physicalContactUnoccupiedToOccupiedDelay: OptionalWritableAttribute(
                0x31,
                TlvNullable(TlvUInt16),
                { default: 0, writeAcl: AccessLevel.Manage }
            ),

            /**
             * The PhysicalContactUnoccupiedToOccupiedThreshold attribute specifies the number of movement detection
             * events that must occur in the period PhysicalContactUnoccupiedToOccupiedDelay, before the PIR sensor
             * changes to its occupied state. This attribute is mandatory if the
             * PhysicalContactUnoccupiedToOccupiedDelay attribute is implemented.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.7.9.3
             */
            physicalContactUnoccupiedToOccupiedThreshold: OptionalWritableAttribute(
                0x32,
                TlvUInt8.bound({ min: 1, max: 254 }),
                { default: 1, writeAcl: AccessLevel.Manage }
            )
        }
    });
}

export type OccupancySensingCluster = typeof OccupancySensing.Cluster;
export const OccupancySensingCluster = OccupancySensing.Cluster;
