/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterCoreSpecificationV1_1 } from "../../spec/Specifications.js";
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
import { WritableAttribute, AccessLevel, Cluster as CreateCluster } from "../../cluster/Cluster.js";
import { TlvEnum } from "../../tlv/TlvNumber.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";

export namespace UnitLocalization {
    /**
     * @see {@link MatterCoreSpecificationV1_1} § 11.5.5.1
     */
    export const enum TempUnit {
        /**
         * Temperature conveyed in Fahrenheit
         */
        Fahrenheit = 0,

        /**
         * Temperature conveyed in Celsius
         */
        Celsius = 1,

        /**
         * Temperature conveyed in Kelvin
         */
        Kelvin = 2
    }

    /**
     * These are optional features supported by UnitLocalizationCluster.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.5.4
     */
    export enum Feature {
        /**
         * TemperatureUnit
         *
         * The Node can be configured to use different units of temperature when conveying values to a user.
         */
        TemperatureUnit = "TemperatureUnit"
    }

    /**
     * These elements and properties are present in all UnitLocalization clusters.
     */
    export const Base = BaseClusterComponent({
        id: 0x2d,
        name: "UnitLocalization",
        revision: 1,

        features: {
            /**
             * TemperatureUnit
             *
             * The Node can be configured to use different units of temperature when conveying values to a user.
             */
            temperatureUnit: BitFlag(0)
        }
    });

    /**
     * A UnitLocalizationCluster supports these elements if it supports feature TemperatureUnit.
     */
    export const TemperatureUnitComponent = ClusterComponent({
        attributes: {
            /**
             * The TemperatureUnit attribute shall indicate the unit for the Node to use only when conveying
             * temperature in communication to the user. If provided, this value shall take priority over any unit
             * implied through the ActiveLocale Attribute.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.5.6.1
             */
            temperatureUnit: WritableAttribute(
                0x0,
                TlvNullable(TlvEnum<TempUnit>()),
                { persistent: true, default: null, writeAcl: AccessLevel.Manage }
            )
        }
    });

    /**
     * Unit Localization
     *
     * Nodes should be expected to be deployed to any and all regions of the world. These global regions may have
     * differing preferences for the units in which values are conveyed in communication to a user. As such, Nodes that
     * visually or audibly convey measurable values to the user need a mechanism by which they can be configured to use
     * a user’s preferred unit.
     *
     * This cluster supports an interface to a Node. It provides attributes for determining and configuring the units
     * that a Node shall utilize when conveying values in communication to a user.
     *
     * UnitLocalizationCluster supports optional features that you can enable with the UnitLocalizationCluster.with()
     * factory method.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.5
     */
    export const Cluster = ExtensibleCluster({
        ...Base,

        /**
         * Use this factory method to create an UnitLocalization cluster with support for optional features. Include
         * each {@link Feature} you wish to support.
         *
         * @param features the optional features to support
         * @returns an UnitLocalization cluster with specified features enabled
         * @throws {IllegalClusterError} if the feature combination is disallowed by the Matter specification
         */
        factory: <T extends `${Feature}`[]>(...features: [...T]) => {
            validateFeatureSelection(features, Feature);
            const cluster = CreateCluster({ ...Base, supportedFeatures: BitFlags(Base.features, ...features) });
            extendCluster(cluster, TemperatureUnitComponent, { temperatureUnit: true });
            return cluster as unknown as Extension<BitFlags<typeof Base.features, T>>;
        }
    });

    export type Extension<SF extends TypeFromPartialBitSchema<typeof Base.features>> =
        ClusterForBaseCluster<typeof Base, SF>
        & { supportedFeatures: SF }
        & (SF extends { temperatureUnit: true } ? typeof TemperatureUnitComponent : {});
    const TEMP = { temperatureUnit: true };

    /**
     * This cluster supports all UnitLocalization features. It may support illegal feature combinations.
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
            temperatureUnit: AsConditional(
                TemperatureUnitComponent.attributes.temperatureUnit,
                { mandatoryIf: [TEMP] }
            )
        }
    });
}

export type UnitLocalizationCluster = typeof UnitLocalization.Cluster;
export const UnitLocalizationCluster = UnitLocalization.Cluster;
