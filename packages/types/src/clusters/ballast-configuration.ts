/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MutableCluster } from "../cluster/mutation/MutableCluster.js";
import { Attribute, OptionalAttribute, WritableAttribute, OptionalWritableAttribute } from "../cluster/Cluster.js";
import { TlvUInt8, TlvBitmap, TlvUInt24 } from "../tlv/TlvNumber.js";
import { BitFlag } from "../schema/BitmapSchema.js";
import { AccessLevel } from "#model";
import { TlvNullable } from "../tlv/TlvNullable.js";
import { TlvString } from "../tlv/TlvString.js";
import { Identity } from "#general";
import { ClusterRegistry } from "../cluster/ClusterRegistry.js";

export namespace BallastConfiguration {
    /**
     * @see {@link MatterSpecification.v141.Cluster} § 3.3.5.1
     */
    export const BallastStatus = {
        /**
         * Operational state of the ballast.
         *
         * This bit shall indicate whether the ballast is operational.
         *
         *   • 0 = The ballast is fully operational
         *
         *   • 1 = The ballast is not fully operational
         *
         * @see {@link MatterSpecification.v141.Cluster} § 3.3.5.1.1
         */
        ballastNonOperational: BitFlag(0),

        /**
         * Operational state of the lamps.
         *
         * This bit shall indicate whether all lamps is operational.
         *
         *   • 0 = All lamps are operational
         *
         *   • 1 = One or more lamp is not in its socket or is faulty
         *
         * @see {@link MatterSpecification.v141.Cluster} § 3.3.5.1.2
         */
        lampFailure: BitFlag(1)
    };

    /**
     * @see {@link MatterSpecification.v141.Cluster} § 3.3.5.2
     */
    export const LampAlarmMode = {
        /**
         * State of LampBurnHours alarm generation
         *
         * This bit shall indicate that the LampBurnHours attribute may generate an alarm.
         *
         * @see {@link MatterSpecification.v141.Cluster} § 3.3.5.2.1
         */
        lampBurnHours: BitFlag(0)
    };

    /**
     * @see {@link Cluster}
     */
    export const ClusterInstance = MutableCluster({
        id: 0x301,
        name: "BallastConfiguration",
        revision: 4,

        attributes: {
            /**
             * This attribute shall specify the minimum light output the ballast can achieve according to the dimming
             * light curve (see Dimming Curve).
             *
             * @see {@link MatterSpecification.v141.Cluster} § 3.3.6.1
             */
            physicalMinLevel: Attribute(0x0, TlvUInt8.bound({ min: 1, max: 254 }), { default: 1 }),

            /**
             * This attribute shall specify the maximum light output the ballast can achieve according to the dimming
             * light curve (see Dimming Curve).
             *
             * @see {@link MatterSpecification.v141.Cluster} § 3.3.6.2
             */
            physicalMaxLevel: Attribute(0x1, TlvUInt8.bound({ min: 1, max: 254 }), { default: 254 }),

            /**
             * This attribute shall specify the status of various aspects of the ballast or the connected lights, see
             * BallastStatusBitmap.
             *
             * @see {@link MatterSpecification.v141.Cluster} § 3.3.6.3
             */
            ballastStatus: OptionalAttribute(0x2, TlvBitmap(TlvUInt8, BallastStatus)),

            /**
             * This attribute shall specify the light output of the ballast according to the dimming light curve (see
             * Dimming Curve) when the Level Control Cluster’s CurrentLevel attribute equals to 1 (and the On/Off
             * Cluster’s OnOff attribute equals to TRUE).
             *
             * The value of this attribute shall be both greater than or equal to PhysicalMinLevel and less than or
             * equal to MaxLevel. If an attempt is made to set this attribute to a level where these conditions are not
             * met, a response shall be returned with status code set to CONSTRAINT_ERROR, and the level shall NOT be
             * set.
             *
             * @see {@link MatterSpecification.v141.Cluster} § 3.3.6.4
             */
            minLevel: WritableAttribute(0x10, TlvUInt8, { writeAcl: AccessLevel.Manage }),

            /**
             * This attribute shall specify the light output of the ballast according to the dimming light curve (see
             * Dimming Curve) when the Level Control Cluster’s CurrentLevel attribute equals to 254 (and the On/Off
             * Cluster’s OnOff attribute equals to TRUE).
             *
             * The value of this attribute shall be both less than or equal to PhysicalMaxLevel and greater than or
             * equal to MinLevel. If an attempt is made to set this attribute to a level where these conditions are not
             * met, a response shall be returned with status code set to CONSTRAINT_ERROR, and the level shall NOT be
             * set.
             *
             * @see {@link MatterSpecification.v141.Cluster} § 3.3.6.5
             */
            maxLevel: WritableAttribute(0x11, TlvUInt8, { writeAcl: AccessLevel.Manage }),

            /**
             * This attribute shall specify the ballast factor, as a percentage, of the ballast/lamp combination, prior
             * to any adjustment.
             *
             * A value of null indicates in invalid value.
             *
             * @see {@link MatterSpecification.v141.Cluster} § 3.3.6.6
             */
            intrinsicBallastFactor: OptionalWritableAttribute(
                0x14,
                TlvNullable(TlvUInt8),
                { writeAcl: AccessLevel.Manage }
            ),

            /**
             * This attribute shall specify the multiplication factor, as a percentage, to be applied to the configured
             * light output of the lamps. A typical use for this attribute is to compensate for reduction in efficiency
             * over the lifetime of a lamp.
             *
             * ### The light output is given by
             *
             * actual light output = configured light output x BallastFactorAdjustment / 100%
             *
             * The range for this attribute is manufacturer dependent. If an attempt is made to set this attribute to a
             * level that cannot be supported, a response shall be returned with status code set to CONSTRAINT_ERROR,
             * and the level shall NOT be changed. The value of null indicates that ballast factor scaling is not in
             * use.
             *
             * @see {@link MatterSpecification.v141.Cluster} § 3.3.6.7
             */
            ballastFactorAdjustment: OptionalWritableAttribute(
                0x15,
                TlvNullable(TlvUInt8.bound({ min: 100 })),
                { default: null, writeAcl: AccessLevel.Manage }
            ),

            /**
             * This attribute shall specify the number of lamps connected to this ballast. (Note 1: this number does not
             * take into account whether lamps are actually in their sockets or not).
             *
             * @see {@link MatterSpecification.v141.Cluster} § 3.3.6.8
             */
            lampQuantity: Attribute(0x20, TlvUInt8),

            /**
             * This attribute shall specify the type of lamps (including their wattage) connected to the ballast.
             *
             * @see {@link MatterSpecification.v141.Cluster} § 3.3.6.9
             */
            lampType: OptionalWritableAttribute(
                0x30,
                TlvString.bound({ maxLength: 16 }),
                { writeAcl: AccessLevel.Manage }
            ),

            /**
             * This attribute shall specify the name of the manufacturer of the currently connected lamps.
             *
             * @see {@link MatterSpecification.v141.Cluster} § 3.3.6.10
             */
            lampManufacturer: OptionalWritableAttribute(
                0x31,
                TlvString.bound({ maxLength: 16 }),
                { writeAcl: AccessLevel.Manage }
            ),

            /**
             * This attribute shall specify the number of hours of use the lamps are rated for by the manufacturer.
             *
             * A value of null indicates an invalid or unknown time.
             *
             * @see {@link MatterSpecification.v141.Cluster} § 3.3.6.11
             */
            lampRatedHours: OptionalWritableAttribute(
                0x32,
                TlvNullable(TlvUInt24),
                { default: null, writeAcl: AccessLevel.Manage }
            ),

            /**
             * This attribute shall specify the length of time, in hours, the currently connected lamps have been
             * operated, cumulative since the last re-lamping. Burn hours shall NOT be accumulated if the lamps are off.
             *
             * This attribute SHOULD be reset to zero (e.g., remotely) when the lamps are changed. If partially used
             * lamps are connected, LampBurnHours SHOULD be updated to reflect the burn hours of the lamps.
             *
             * A value of null indicates an invalid or unknown time.
             *
             * @see {@link MatterSpecification.v141.Cluster} § 3.3.6.12
             */
            lampBurnHours: OptionalWritableAttribute(
                0x33,
                TlvNullable(TlvUInt24),
                { default: 0, writeAcl: AccessLevel.Manage }
            ),

            /**
             * This attribute shall specify which attributes may cause an alarm notification to be generated. Ain each
             * bit position means that its associated attribute is able to generate an alarm.
             *
             * @see {@link MatterSpecification.v141.Cluster} § 3.3.6.13
             */
            lampAlarmMode: OptionalWritableAttribute(
                0x34,
                TlvBitmap(TlvUInt8, LampAlarmMode),
                { writeAcl: AccessLevel.Manage }
            ),

            /**
             * This attribute shall specify the number of hours the LampBurnHours attribute may reach before an alarm is
             * generated.
             *
             * If the Alarms cluster is not present on the same device this attribute is not used and thus may be
             * omitted (see Dependencies).
             *
             * The Alarm Code field included in the generated alarm shall be 0x01.
             *
             * If this attribute has the value of null, then this alarm shall NOT be generated.
             *
             * @see {@link MatterSpecification.v141.Cluster} § 3.3.6.14
             */
            lampBurnHoursTripPoint: OptionalWritableAttribute(
                0x35,
                TlvNullable(TlvUInt24),
                { default: null, writeAcl: AccessLevel.Manage }
            )
        }
    });

    /**
     * This cluster is used for configuring a lighting ballast.
     *
     * @see {@link MatterSpecification.v141.Cluster} § 3.3
     */
    export interface Cluster extends Identity<typeof ClusterInstance> {}

    export const Cluster: Cluster = ClusterInstance;
    export const Complete = Cluster;
}

export type BallastConfigurationCluster = BallastConfiguration.Cluster;
export const BallastConfigurationCluster = BallastConfiguration.Cluster;
ClusterRegistry.register(BallastConfiguration.Complete);
