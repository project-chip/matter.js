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
import { Attribute, OptionalAttribute, Cluster as CreateCluster } from "../../cluster/Cluster.js";
import { TlvInt16, TlvUInt16, TlvInt8 } from "../../tlv/TlvNumber.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";

export namespace PressureMeasurement {
    /**
     * These are optional features supported by PressureMeasurementCluster.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.4.4
     */
    export enum Feature {
        /**
         * Extended
         *
         * The cluster is capable of extended range and resolution
         */
        Extended = "Extended"
    }

    /**
     * These elements and properties are present in all PressureMeasurement clusters.
     */
    export const Base = BaseClusterComponent({
        id: 0x403,
        name: "PressureMeasurement",
        revision: 3,

        features: {
            /**
             * Extended
             *
             * The cluster is capable of extended range and resolution
             */
            extended: BitFlag(0)
        },

        attributes: {
            /**
             * This attribute represents the pressure in kPa as follows:
             *
             * MeasuredValue = 10 x Pressure [kPa]
             *
             * The null value indicates that the value is not available.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.4.5.1
             */
            measuredValue: Attribute(0x0, TlvNullable(TlvInt16.bound({ min: -32767 }))),

            /**
             * This attribute indicates the minimum value of MeasuredValue that can be measured. See Measured Value for
             * more details.
             *
             * The null value indicates that the value is not available.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.4.5.2
             */
            minMeasuredValue: Attribute(0x1, TlvNullable(TlvInt16.bound({ min: -32767 }))),

            /**
             * This attribute indicates the maximum value of MeasuredValue that can be measured. See Measured Value for
             * more details.
             *
             * The null value indicates that the value is not available.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.4.5.3
             */
            maxMeasuredValue: Attribute(0x2, TlvNullable(TlvInt16)),

            /**
             * This attribute indicates the magnitude of the possible error that is associated with ScaledValue.
             *
             * See Measured Value.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.4.5.4
             */
            tolerance: OptionalAttribute(0x3, TlvUInt16.bound({ max: 2048 }), { default: 0 })
        }
    });

    /**
     * A PressureMeasurementCluster supports these elements if it supports feature Extended.
     */
    export const ExtendedComponent = ClusterComponent({
        attributes: {
            /**
             * ScaledValue represents the pressure in Pascals as follows:
             *
             * ScaledValue = 10Scale x Pressure [Pa]
             *
             * The null value indicates that the value is not available.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.4.5.5
             */
            scaledValue: Attribute(0x10, TlvNullable(TlvInt16.bound({ min: -32767 })), { default: 0 }),

            /**
             * The MinScaledValue attribute indicates the minimum value of ScaledValue that can be measured. The null
             * value indicates that the value is not available.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.4.5.6
             */
            minScaledValue: Attribute(0x11, TlvNullable(TlvInt16.bound({ min: -32767 })), { default: 0 }),

            /**
             * This attribute indicates the maximum value of ScaledValue that can be measured. MaxScaledValue shall be
             * greater than MinScaledValue.
             *
             * The null value indicates that the value is not available.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.4.5.7
             */
            maxScaledValue: Attribute(0x12, TlvNullable(TlvInt16), { default: 0 }),

            /**
             * This attribute indicates the magnitude of the possible error that is associated with ScaledValue. The
             * true value is located in the range
             *
             * (ScaledValue – ScaledTolerance) to (ScaledValue + ScaledTolerance).
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.4.5.8
             */
            scaledTolerance: OptionalAttribute(0x13, TlvUInt16.bound({ max: 2048 }), { default: 0 }),

            /**
             * This attribute indicates the base 10 exponent used to obtain ScaledValue (see ScaledValue Attribute).
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.4.5.9
             */
            scale: Attribute(0x14, TlvInt8.bound({ min: -127 }), { default: 0 })
        }
    });

    /**
     * Pressure Measurement
     *
     * This cluster provides an interface to pressure measurement functionality, including configuration and provision
     * of notifications of pressure measurements.
     *
     * PressureMeasurementCluster supports optional features that you can enable with the
     * PressureMeasurementCluster.with() factory method.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.4
     */
    export const Cluster = ExtensibleCluster({
        ...Base,

        /**
         * Use this factory method to create a PressureMeasurement cluster with support for optional features. Include
         * each {@link Feature} you wish to support.
         *
         * @param features the optional features to support
         * @returns a PressureMeasurement cluster with specified features enabled
         * @throws {IllegalClusterError} if the feature combination is disallowed by the Matter specification
         */
        factory: <T extends `${Feature}`[]>(...features: [...T]) => {
            validateFeatureSelection(features, Feature);
            const cluster = CreateCluster({ ...Base, supportedFeatures: BitFlags(Base.features, ...features) });
            extendCluster(cluster, ExtendedComponent, { extended: true });
            return cluster as unknown as Extension<BitFlags<typeof Base.features, T>>;
        }
    });

    export type Extension<SF extends TypeFromPartialBitSchema<typeof Base.features>> =
        ClusterForBaseCluster<typeof Base, SF>
        & { supportedFeatures: SF }
        & (SF extends { extended: true } ? typeof ExtendedComponent : {});

    const EXT = { extended: true };

    /**
     * This cluster supports all PressureMeasurement features. It may support illegal feature combinations.
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
            scaledValue: AsConditional(ExtendedComponent.attributes.scaledValue, { mandatoryIf: [EXT] }),
            minScaledValue: AsConditional(ExtendedComponent.attributes.minScaledValue, { mandatoryIf: [EXT] }),
            maxScaledValue: AsConditional(ExtendedComponent.attributes.maxScaledValue, { mandatoryIf: [EXT] }),
            scaledTolerance: AsConditional(ExtendedComponent.attributes.scaledTolerance, { optionalIf: [EXT] }),
            scale: AsConditional(ExtendedComponent.attributes.scale, { mandatoryIf: [EXT] })
        }
    });
}

export type PressureMeasurementCluster = typeof PressureMeasurement.Cluster;
export const PressureMeasurementCluster = PressureMeasurement.Cluster;
