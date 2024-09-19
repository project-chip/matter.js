/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MutableCluster } from "../cluster/mutation/MutableCluster.js";
import { Attribute, OptionalWritableAttribute } from "../cluster/Cluster.js";
import { BitFlag } from "../schema/BitmapSchema.js";
import { TlvUInt8, TlvBitmap, TlvEnum, TlvUInt16 } from "../tlv/TlvNumber.js";
import { AccessLevel } from "#model";
import { Identity } from "#general";
import { ClusterRegistry } from "../cluster/ClusterRegistry.js";

export namespace OccupancySensing {
    /**
     * @see {@link MatterSpecification.v13.Cluster} § 2.7.4.1
     */
    export const Occupancy = {
        /**
         * Indicates the sensed occupancy state
         *
         * If this bit is set, it shall indicate the occupied state else if the bit if not set, it shall indicate the
         * unoccupied state.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 2.7.4.1.1
         */
        occupied: BitFlag(0)
    };

    /**
     * @see {@link MatterSpecification.v13.Cluster} § 2.7.4.3
     */
    export enum OccupancySensorType {
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
     * @see {@link MatterSpecification.v13.Cluster} § 2.7.4.2
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
     * @see {@link Cluster}
     */
    export const ClusterInstance = MutableCluster({
        id: 0x406,
        name: "OccupancySensing",
        revision: 4,

        attributes: {
            /**
             * This attribute indicates the sensed (processed) status of occupancy.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 2.7.5.1
             */
            occupancy: Attribute(0x0, TlvBitmap(TlvUInt8, Occupancy)),

            /**
             * This attribute specifies the type of the occupancy sensor.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 2.7.5.2
             */
            occupancySensorType: Attribute(0x1, TlvEnum<OccupancySensorType>()),

            /**
             * This attribute specifies the types of the occupancy sensor. Each bit position, if set, indicates the
             * corresponding sensing capability is implemented.
             *
             * The value of the OccupancySensorType shall be aligned to the value of the OccupancySensorTypeBitmap
             * attribute as defined below.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 2.7.5.3
             */
            occupancySensorTypeBitmap: Attribute(0x2, TlvBitmap(TlvUInt8, OccupancySensorTypeBitmap)),

            /**
             * This attribute specifies the time delay, in seconds, before the PIR sensor changes to its unoccupied
             * state after the last detection of movement in the sensed area.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 2.7.5.4
             */
            pirOccupiedToUnoccupiedDelay: OptionalWritableAttribute(
                0x10,
                TlvUInt16,
                { default: 0, writeAcl: AccessLevel.Manage }
            ),

            /**
             * This attribute specifies the time delay, in seconds, before the PIR sensor changes to its occupied state
             * after the detection of movement in the sensed area.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 2.7.5.5
             */
            pirUnoccupiedToOccupiedDelay: OptionalWritableAttribute(
                0x11,
                TlvUInt16,
                { default: 0, writeAcl: AccessLevel.Manage }
            ),

            /**
             * This attribute specifies the number of movement detection events that must occur in the period
             * PIRUnoccupiedToOccupiedDelay, before the PIR sensor changes to its occupied state.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 2.7.5.6
             */
            pirUnoccupiedToOccupiedThreshold: OptionalWritableAttribute(
                0x12,
                TlvUInt8.bound({ min: 1, max: 254 }),
                { default: 1, writeAcl: AccessLevel.Manage }
            ),

            /**
             * This attribute specifies the time delay, in seconds, before the Ultrasonic sensor changes to its
             * unoccupied state after the last detection of movement in the sensed area.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 2.7.5.7
             */
            ultrasonicOccupiedToUnoccupiedDelay: OptionalWritableAttribute(
                0x20,
                TlvUInt16,
                { default: 0, writeAcl: AccessLevel.Manage }
            ),

            /**
             * This attribute specifies the time delay, in seconds, before the Ultrasonic sensor changes to its
             * occupied state after the detection of movement in the sensed area.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 2.7.5.8
             */
            ultrasonicUnoccupiedToOccupiedDelay: OptionalWritableAttribute(
                0x21,
                TlvUInt16,
                { default: 0, writeAcl: AccessLevel.Manage }
            ),

            /**
             * This attribute specifies the number of movement detection events that must occur in the period
             * UltrasonicUnoccupiedToOccupiedDelay, before the Ultrasonic sensor changes to its occupied state.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 2.7.5.9
             */
            ultrasonicUnoccupiedToOccupiedThreshold: OptionalWritableAttribute(
                0x22,
                TlvUInt8.bound({ min: 1, max: 254 }),
                { default: 1, writeAcl: AccessLevel.Manage }
            ),

            /**
             * This attribute specifies the time delay, in seconds, before the physical contact occupancy sensor
             * changes to its unoccupied state after detecting the unoccupied event.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 2.7.5.10
             */
            physicalContactOccupiedToUnoccupiedDelay: OptionalWritableAttribute(
                0x30,
                TlvUInt16,
                { default: 0, writeAcl: AccessLevel.Manage }
            ),

            /**
             * This attribute specifies the time delay, in seconds, before the physical contact sensor changes to its
             * occupied state after the detection of the occupied event.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 2.7.5.11
             */
            physicalContactUnoccupiedToOccupiedDelay: OptionalWritableAttribute(
                0x31,
                TlvUInt16,
                { default: 0, writeAcl: AccessLevel.Manage }
            ),

            /**
             * This attribute specifies the number of movement detection events that must occur in the period
             * PhysicalContactUnoccupiedToOccupiedDelay, before the PhysicalContact sensor changes to its occupied
             * state.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 2.7.5.12
             */
            physicalContactUnoccupiedToOccupiedThreshold: OptionalWritableAttribute(
                0x32,
                TlvUInt8.bound({ min: 1, max: 254 }),
                { default: 1, writeAcl: AccessLevel.Manage }
            )
        }
    });

    /**
     * The server cluster provides an interface to occupancy sensing functionality, including configuration and
     * provision of notifications of occupancy status.
     *
     * @see {@link MatterSpecification.v13.Cluster} § 2.7
     */
    export interface Cluster extends Identity<typeof ClusterInstance> {}

    export const Cluster: Cluster = ClusterInstance;
    export const Complete = Cluster;
}

export type OccupancySensingCluster = OccupancySensing.Cluster;
export const OccupancySensingCluster = OccupancySensing.Cluster;
ClusterRegistry.register(OccupancySensing.Complete);
