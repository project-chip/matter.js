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
    ClusterForBaseCluster,
    AsConditional
} from "../../cluster/ClusterFactory.js";
import { BitFlag, BitFlags, TypeFromPartialBitSchema } from "../../schema/BitmapSchema.js";
import { WritableAttribute, AccessLevel, Cluster } from "../../cluster/Cluster.js";
import { TlvEnum } from "../../tlv/TlvNumber.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";

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
export enum UnitLocalizationFeature {
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
export const UnitLocalizationBase = BaseClusterComponent({
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
         * The TemperatureUnit attribute shall indicate the unit for the Node to use only when conveying temperature in
         * communication to the user. If provided, this value shall take priority over any unit implied through the
         * ActiveLocale Attribute.
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
 * Nodes should be expected to be deployed to any and all regions of the world. These global regions may have differing
 * preferences for the units in which values are conveyed in communication to a user. As such, Nodes that visually or
 * audibly convey measurable values to the user need a mechanism by which they can be configured to use a user’s
 * preferred unit.
 *
 * This cluster supports an interface to a Node. It provides attributes for determining and configuring the units that
 * a Node shall utilize when conveying values in communication to a user.
 *
 * UnitLocalizationCluster supports optional features that you can enable with the UnitLocalizationCluster.with()
 * factory method.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.5
 */
export const UnitLocalizationCluster = ExtensibleCluster({
    ...UnitLocalizationBase,

    /**
     * Use this factory method to create an UnitLocalization cluster with support for optional features. Include each
     * {@link UnitLocalizationFeature} you wish to support.
     *
     * @param features the optional features to support
     * @returns an UnitLocalization cluster with specified features enabled
     * @throws {IllegalClusterError} if the feature combination is disallowed by the Matter specification
     */
    factory: <T extends `${UnitLocalizationFeature}`[]>(...features: [...T]) => {
        validateFeatureSelection(features, UnitLocalizationFeature);
        const cluster = Cluster({
            ...UnitLocalizationBase,
            supportedFeatures: BitFlags(UnitLocalizationBase.features, ...features)
        });
        return cluster as unknown as UnitLocalizationExtension<BitFlags<typeof UnitLocalizationBase.features, T>>;
    }
});

export type UnitLocalizationExtension<SF extends TypeFromPartialBitSchema<typeof UnitLocalizationBase.features>> =
    ClusterForBaseCluster<typeof UnitLocalizationBase, SF>
    & { supportedFeatures: SF }
    & (SF extends { temperatureUnit: true } ? typeof TemperatureUnitComponent : {});
const TEMP = { temperatureUnit: true };

/**
 * This cluster supports all UnitLocalization features. It may support illegal feature combinations.
 *
 * If you use this cluster you must manually specify which features are active and ensure the set of active features is
 * legal per the Matter specification.
 */
export const UnitLocalizationComplete = Cluster({
    id: UnitLocalizationCluster.id,
    name: UnitLocalizationCluster.name,
    revision: UnitLocalizationCluster.revision,
    features: UnitLocalizationCluster.features,
    attributes: {
        temperatureUnit: AsConditional(TemperatureUnitComponent.attributes.temperatureUnit, { mandatoryIf: [TEMP] })
    }
});
