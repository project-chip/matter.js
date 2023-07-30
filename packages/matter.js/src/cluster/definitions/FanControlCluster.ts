/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterApplicationClusterSpecificationV1_1 } from "../../spec/Specifications.js";
import {
    BaseClusterComponent,
    ClusterComponent,
    ExtensibleCluster,
    validateFeatureSelection,
    extendCluster,
    ClusterForBaseCluster,
    AsConditional
} from "../../cluster/ClusterFactory.js";
import { BitFlag, BitFlags, TypeFromPartialBitSchema } from "../../schema/BitmapSchema.js";
import { WritableAttribute, Attribute, FixedAttribute, Cluster as CreateCluster } from "../../cluster/Cluster.js";
import { TlvEnum, TlvUInt8, TlvBitmap } from "../../tlv/TlvNumber.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";

export namespace FanControl {
    /**
     * The value of the FanControl fanMode attribute
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.4.6.1
     */
    export const enum FanMode {
        /**
         * Setting the attribute value to Off shall set the values of these attributes to 0 (zero):
         *
         *   • PercentSetting
         *
         *   • PercentCurrent
         *
         *   • SpeedSetting (if present)
         *
         *   • SpeedCurrent (if present)
         *
         * 4.4.6.1.2. Low, Medium, High or Unsupported
         *
         * If the fan only supports 1 speed then:
         *
         *   • only the High attribute value shall be supported
         *
         *   • SpeedMax attribute, if present, shall be 1
         *
         * If the fan only supports 2 speeds then only the Low and High attribute values shall be supported.
         *
         * If a client attempts to write an unsupported value (such as On), the FanMode attribute shall be set to High.
         *
         * If the value is High, Medium, or Low the server shall set these percent speed attributes to a single value
         * in the corresponding range as defined in the percent rules:
         *
         *   • PercentSetting
         *
         *   • PercentCurrent
         *
         * If the value is High, Medium, or Low the server shall set these speed attributes to a single value in the
         * corresponding range as defined in Speed Rules>:
         *
         *   • SpeedSetting (if present)
         *
         *   • SpeedCurrent (if present)
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.4.6.1.1
         */
        Off = 0,

        Low = 1,
        Medium = 2,
        High = 3,
        On = 4,

        /**
         * Setting the attribute value to Auto shall set the values of these attributes to null:
         *
         *   • PercentSetting
         *
         *   • SpeedSetting (if present)
         *
         * These attributes shall indicate the current state of the fan while this attribute value is Auto:
         *
         *   • PercentCurrent
         *
         *   • SpeedCurrent (if present)
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.4.6.1.3
         */
        Auto = 5,

        Smart = 6
    }

    /**
     * The value of the FanControl fanModeSequence attribute
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.4.6.2
     */
    export const enum FanModeSequence {
        OffLowMedHigh = 0,
        OffLowHigh = 1,
        OffLowMedHighAuto = 2,
        OffLowHighAuto = 3,
        OffOnAuto = 4,
        OffOn = 5
    }

    /**
     * The value of the FanControl rockSupport attribute
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.4.6.8
     */
    export const RockSupport = { rockLeftRight: BitFlag(0), rockUpDown: BitFlag(1), rockRound: BitFlag(2) };

    /**
     * The value of the FanControl rockSetting attribute
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.4.6.9
     */
    export const RockSetting = { rockLeftRight: BitFlag(0), rockUpDown: BitFlag(1), rockRound: BitFlag(2) };

    /**
     * The value of the FanControl windSupport attribute
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.4.6.10
     */
    export const WindSupport = { sleepWind: BitFlag(0), naturalWind: BitFlag(1) };

    /**
     * The value of the FanControl windSetting attribute
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.4.6.11
     */
    export const WindSetting = { sleepWind: BitFlag(0), naturalWind: BitFlag(1) };

    /**
     * These are optional features supported by FanControlCluster.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.4.5
     */
    export enum Feature {
        /**
         * MultiSpeed
         *
         * 1-100 speeds
         */
        MultiSpeed = "MultiSpeed",

        /**
         * Auto
         *
         * Automatic mode supported for fan speed
         */
        Auto = "Auto",

        /**
         * Rocking
         *
         * Rocking movement supported
         */
        Rocking = "Rocking",

        /**
         * Wind
         *
         * Wind emulation supported
         */
        Wind = "Wind"
    }

    /**
     * These elements and properties are present in all FanControl clusters.
     */
    export const Base = BaseClusterComponent({
        id: 0x202,
        name: "FanControl",
        revision: 2,

        features: {
            /**
             * MultiSpeed
             *
             * 1-100 speeds
             */
            multiSpeed: BitFlag(0),

            /**
             * Auto
             *
             * Automatic mode supported for fan speed
             */
            auto: BitFlag(1),

            /**
             * Rocking
             *
             * Rocking movement supported
             */
            rocking: BitFlag(2),

            /**
             * Wind
             *
             * Wind emulation supported
             */
            wind: BitFlag(3)
        },

        attributes: {
            /**
             * This attribute shall indicate the current speed mode of the fan. This attribute may be written by the
             * client to indicate a new speed mode of the fan. This attribute shall be set to one of the values in the
             * table below.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.4.6.1
             */
            fanMode: WritableAttribute(0x0, TlvEnum<FanMode>(), { persistent: true, default: FanMode.Off }),

            /**
             * This indicates the fan speed ranges that shall be supported.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.4.6.2
             */
            fanModeSequence: WritableAttribute(
                0x1,
                TlvEnum<FanModeSequence>(),
                { persistent: true, default: FanModeSequence.OffLowMedHighAuto }
            ),

            /**
             * This attribute shall indicate the speed setting for the fan. This attribute may be written by the client
             * to indicate a new fan speed. If the client writes null to this attribute, the attribute value shall NOT
             * change. If this is set to 0, the server shall set the FanMode attribute value to Off.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.4.6.3
             */
            percentSetting: WritableAttribute(0x2, TlvNullable(TlvUInt8.bound({ max: 100 })), { default: 0 }),

            /**
             * This attribute shall indicate the actual currently operating fan speed, or zero to indicate that the fan
             * is off. See Section 4.4.6.3.1 for more details.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.4.6.4
             */
            percentCurrent: Attribute(0x3, TlvUInt8.bound({ max: 100 }), { default: 0 })
        }
    });

    /**
     * A FanControlCluster supports these elements if it supports feature MultiSpeed.
     */
    export const MultiSpeedComponent = ClusterComponent({
        attributes: {
            /**
             * This attribute shall indicate that the fan has one speed (value of 1) or the maximum speed, if the fan
             * is capable of multiple speeds.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.4.6.5
             */
            speedMax: FixedAttribute(0x4, TlvUInt8.bound({ min: 1, max: 100 }), { default: 1 }),

            /**
             * This attribute shall indicate the speed setting for the fan. This attribute may be written by the client
             * to indicate a new fan speed. If the client writes null to this attribute, the attribute value shall NOT
             * change. If this is set to 0, the server shall set the FanMode attribute value to Off. Please see the
             * Section 4.4.6.6.1 for details on other values.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.4.6.6
             */
            speedSetting: WritableAttribute(0x5, TlvNullable(TlvUInt8.bound({ max: 100 })), { default: 0 }),

            /**
             * This attribute shall indicate the actual currently operating fan speed, or zero to indicate that the fan
             * is off.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.4.6.7
             */
            speedCurrent: Attribute(0x6, TlvUInt8.bound({ max: 100 }), { default: 0 })
        }
    });

    /**
     * A FanControlCluster supports these elements if it supports feature Rocking.
     */
    export const RockingComponent = ClusterComponent({
        attributes: {
            /**
             * This attribute is a bitmap that indicates what rocking motions the server supports. The bitmap is shown
             * in the table below.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.4.6.8
             */
            rockSupport: FixedAttribute(0x7, TlvBitmap(TlvUInt8, RockSupport)),

            /**
             * This attribute is a bitmap that indicates the current active fan rocking motion settings. Each bit shall
             * only be set to 1, if the corresponding bit in the RockSupport attribute is set to 1, otherwise a status
             * code of CONSTRAINT_ERROR shall be returned.
             *
             * If a combination of supported bits is set by the client, and the server does not support the
             * combination, the lowest supported single bit in the combination shall be set and active, and all other
             * bits shall indicate zero.
             *
             * For example: If RockUpDown and RockRound are both set, but this combination is not possible, then only
             * RockUpDown becomes active.
             *
             * The bitmap is shown in the table below.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.4.6.9
             */
            rockSetting: WritableAttribute(0x8, TlvBitmap(TlvUInt8, RockSetting))
        }
    });

    /**
     * A FanControlCluster supports these elements if it supports feature Wind.
     */
    export const WindComponent = ClusterComponent({
        attributes: {
            /**
             * This attribute is a bitmap that indicates what wind modes the server supports. At least one wind mode
             * bit shall be set. The bitmap is shown in the table below.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.4.6.10
             */
            windSupport: FixedAttribute(0x9, TlvBitmap(TlvUInt8, WindSupport)),

            /**
             * This attribute is a bitmap that indicates the current active fan wind feature settings. Each bit shall
             * only be set to 1, if the corresponding bit in the WindSupport attribute is set to 1, otherwise a status
             * code of CONSTRAINT_ERROR shall be returned.
             *
             * If a combination of supported bits is set by the client, and the server does not support the
             * combination, the lowest supported single bit in the combination shall be set and active, and all other
             * bits shall indicate zero.
             *
             * For example: If Sleep Wind and Natural Wind are set, but this combination is not possible, then only
             * Sleep Wind becomes active.
             *
             * The bitmap is shown in the table below.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.4.6.11
             */
            windSetting: WritableAttribute(0xa, TlvBitmap(TlvUInt8, WindSetting))
        }
    });

    /**
     * Fan Control
     *
     * An interface for controlling a fan in a heating/cooling system.
     *
     * FanControlCluster supports optional features that you can enable with the FanControlCluster.with() factory
     * method.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.4
     */
    export const Cluster = ExtensibleCluster({
        ...Base,

        /**
         * Use this factory method to create a FanControl cluster with support for optional features. Include each
         * {@link Feature} you wish to support.
         *
         * @param features the optional features to support
         * @returns a FanControl cluster with specified features enabled
         * @throws {IllegalClusterError} if the feature combination is disallowed by the Matter specification
         */
        factory: <T extends `${Feature}`[]>(...features: [...T]) => {
            validateFeatureSelection(features, Feature);
            const cluster = CreateCluster({ ...Base, supportedFeatures: BitFlags(Base.features, ...features) });
            extendCluster(cluster, MultiSpeedComponent, { multiSpeed: true });
            extendCluster(cluster, RockingComponent, { rocking: true });
            extendCluster(cluster, WindComponent, { wind: true });
            return cluster as unknown as Extension<BitFlags<typeof Base.features, T>>;
        }
    });

    export type Extension<SF extends TypeFromPartialBitSchema<typeof Base.features>> =
        ClusterForBaseCluster<typeof Base, SF>
        & { supportedFeatures: SF }
        & (SF extends { multiSpeed: true } ? typeof MultiSpeedComponent : {})
        & (SF extends { rocking: true } ? typeof RockingComponent : {})
        & (SF extends { wind: true } ? typeof WindComponent : {});

    const SPD = { multiSpeed: true };
    const RCK = { rocking: true };
    const WND = { wind: true };

    /**
     * This cluster supports all FanControl features. It may support illegal feature combinations.
     *
     * If you use this cluster you must manually specify which features are active and ensure the set of active
     * features is legal per the Matter specification.
     */
    export const Complete = CreateCluster({
        id: Cluster.id,
        name: Cluster.name,
        revision: Cluster.revision,
        features: Cluster.features,

        attributes: {
            ...Cluster.attributes,
            speedMax: AsConditional(MultiSpeedComponent.attributes.speedMax, { mandatoryIf: [SPD] }),
            speedSetting: AsConditional(MultiSpeedComponent.attributes.speedSetting, { mandatoryIf: [SPD] }),
            speedCurrent: AsConditional(MultiSpeedComponent.attributes.speedCurrent, { mandatoryIf: [SPD] }),
            rockSupport: AsConditional(RockingComponent.attributes.rockSupport, { mandatoryIf: [RCK] }),
            rockSetting: AsConditional(RockingComponent.attributes.rockSetting, { mandatoryIf: [RCK] }),
            windSupport: AsConditional(WindComponent.attributes.windSupport, { mandatoryIf: [WND] }),
            windSetting: AsConditional(WindComponent.attributes.windSetting, { mandatoryIf: [WND] })
        }
    });
}

export type FanControlCluster = typeof FanControl.Cluster;
export const FanControlCluster = FanControl.Cluster;
