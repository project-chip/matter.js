/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MutableCluster } from "../mutation/MutableCluster.js";
import { FixedAttribute, Attribute, WritableAttribute } from "../Cluster.js";
import { TlvArray } from "../../tlv/TlvArray.js";
import { ModeBase } from "./ModeBaseCluster.js";
import { TlvUInt8 } from "../../tlv/TlvNumber.js";
import { Identity } from "../../util/Type.js";
import { ClusterRegistry } from "../ClusterRegistry.js";

export namespace RefrigeratorAndTemperatureControlledCabinetMode {
    export enum ModeTag {
        /**
         * This mode reduces the temperature rapidly, typically above freezing grade.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 8.7.6.1.1
         */
        RapidCool = 16384,

        /**
         * This mode reduces the temperature rapidly, below freezing grade.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 8.7.6.1.2
         */
        RapidFreeze = 16385
    }

    /**
     * @see {@link Cluster}
     */
    export const ClusterInstance = MutableCluster({
        id: 0x52,
        name: "RefrigeratorAndTemperatureControlledCabinetMode",
        revision: 2,

        attributes: {
            /**
             * @see {@link MatterSpecification.v13.Cluster} § 8.7.5
             */
            supportedModes: FixedAttribute(
                0x0,
                TlvArray(ModeBase.TlvModeOption, { minLength: 2, maxLength: 255 }),
                { default: [] }
            ),

            /**
             * @see {@link MatterSpecification.v13.Cluster} § 8.7.5
             */
            currentMode: Attribute(0x1, TlvUInt8, { scene: true, persistent: true }),

            /**
             * @see {@link MatterSpecification.v13.Cluster} § 8.7.5
             */
            startUpMode: WritableAttribute(0x2, TlvUInt8, { persistent: true }),

            /**
             * @see {@link MatterSpecification.v13.Cluster} § 8.7.5
             */
            onMode: WritableAttribute(0x3, TlvUInt8, { persistent: true })
        }
    });

    /**
     * This cluster is derived from the Mode Base cluster, defining additional mode tags and namespaced enumerated
     * values for refrigerator and temperature controlled cabinet devices.
     *
     * @see {@link MatterSpecification.v13.Cluster} § 8.7
     */
    export interface Cluster extends Identity<typeof ClusterInstance> {}

    export const Cluster: Cluster = ClusterInstance;
    export const Complete = Cluster;
}

export type RefrigeratorAndTemperatureControlledCabinetModeCluster = RefrigeratorAndTemperatureControlledCabinetMode.Cluster;
export const RefrigeratorAndTemperatureControlledCabinetModeCluster = RefrigeratorAndTemperatureControlledCabinetMode.Cluster;
ClusterRegistry.register(RefrigeratorAndTemperatureControlledCabinetMode.Complete);
