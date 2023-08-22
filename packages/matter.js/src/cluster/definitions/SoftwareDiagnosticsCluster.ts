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
import {
    OptionalAttribute,
    OptionalEvent,
    EventPriority,
    Attribute,
    Command,
    TlvNoResponse,
    AccessLevel,
    Cluster as CreateCluster
} from "../../cluster/Cluster.js";
import { TlvArray } from "../../tlv/TlvArray.js";
import { TlvObject, TlvField, TlvOptionalField } from "../../tlv/TlvObject.js";
import { TlvUInt64, TlvUInt32 } from "../../tlv/TlvNumber.js";
import { TlvString, TlvByteString } from "../../tlv/TlvString.js";
import { TlvNoArguments } from "../../tlv/TlvNoArguments.js";

export namespace SoftwareDiagnostics {
    /**
     * @see {@link MatterCoreSpecificationV1_1} § 11.12.5.1
     */
    export const TlvThreadMetricsStruct = TlvObject({
        /**
         * The Id field shall be a server-assigned per-thread unique ID that is constant for the duration of the
         * thread. Efforts SHOULD be made to avoid reusing ID values when possible.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.12.5.1.1
         */
        id: TlvField(0, TlvUInt64),

        /**
         * The Name field shall be set to a vendor defined name or prefix of the software thread that is static for the
         * duration of the thread.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.12.5.1.2
         */
        name: TlvOptionalField(1, TlvString.bound({ maxLength: 8 })),

        /**
         * The StackFreeCurrent field shall indicate the current amount of stack memory, in bytes, that are not being
         * utilized on the respective thread.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.12.5.1.3
         */
        stackFreeCurrent: TlvOptionalField(2, TlvUInt32),

        /**
         * The StackFreeMinimum field shall indicate the minimum amount of stack memory, in bytes, that has been
         * available at any point between the current time and this attribute being reset or initialized on the
         * respective thread. This value shall only be reset upon a Node reboot or upon receiving of the
         * ResetWatermarks command.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.12.5.1.4
         */
        stackFreeMinimum: TlvOptionalField(3, TlvUInt32),

        /**
         * The StackSize field shall indicate the amount of stack memory, in bytes, that has been allocated
         *
         * for use by the respective thread.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.12.5.1.5
         */
        stackSize: TlvOptionalField(4, TlvUInt32)
    });

    /**
     * Body of the SoftwareDiagnostics softwareFault event
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.12.8.1
     */
    export const TlvSoftwareFaultEvent = TlvObject({
        id: TlvField(0, TlvUInt64),
        name: TlvOptionalField(1, TlvString.bound({ maxLength: 8 })),

        /**
         * The FaultRecording field shall be a manufacturer-specified payload intended to convey information to assist
         * in further diagnosing or debugging a software fault. The FaultRecording field may be used to convey
         * information such as, but not limited to, thread backtraces or register contents.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.12.8.1.1
         */
        faultRecording: TlvOptionalField(2, TlvByteString.bound({ maxLength: 1024 }))
    });

    /**
     * These are optional features supported by SoftwareDiagnosticsCluster.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.12.4
     */
    export enum Feature {
        /**
         * Watermarks
         *
         * Node makes available the metrics for high watermark related to memory consumption.
         */
        Watermarks = "Watermarks"
    }

    /**
     * These elements and properties are present in all SoftwareDiagnostics clusters.
     */
    export const Base = BaseClusterComponent({
        id: 0x34,
        name: "SoftwareDiagnostics",
        revision: 1,

        features: {
            /**
             * Watermarks
             *
             * Node makes available the metrics for high watermark related to memory consumption.
             */
            watermarks: BitFlag(0)
        },

        attributes: {
            /**
             * The ThreadMetrics attribute shall be a list of ThreadMetricsStruct structs. Each active thread on the
             * Node shall be represented by a single entry within the ThreadMetrics attribute.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.12.6.1
             */
            threadMetrics: OptionalAttribute(0x0, TlvArray(TlvThreadMetricsStruct, { maxLength: 64 }), { default: [] }),

            /**
             * The CurrentHeapFree attribute shall indicate the current amount of heap memory, in bytes, that are free
             * for allocation. The effective amount may be smaller due to heap fragmentation or other reasons.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.12.6.2
             */
            currentHeapFree: OptionalAttribute(0x1, TlvUInt64, { default: 0 }),

            /**
             * The CurrentHeapUsed attribute shall indicate the current amount of heap memory, in bytes, that is being
             * used.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.12.6.3
             */
            currentHeapUsed: OptionalAttribute(0x2, TlvUInt64, { default: 0 })
        },

        events: {
            /**
             * The SoftwareFault Event shall be generated when a software fault takes place on the Node.
             *
             * The ID field shall be set to the ID of the software thread in which the last software fault occurred.
             *
             * The Name field shall be set to a manufacturer-specified name or prefix of the software thread in which
             * the last software fault occurred.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.12.8.1
             */
            softwareFault: OptionalEvent(0x0, EventPriority.Info, TlvSoftwareFaultEvent)
        }
    });

    /**
     * A SoftwareDiagnosticsCluster supports these elements if it supports feature Watermarks.
     */
    export const WatermarksComponent = ClusterComponent({
        attributes: {
            /**
             * The CurrentHeapHighWatermark attribute shall indicate the maximum amount of heap memory, in bytes, that
             * has been used by the Node. This value shall only be reset upon a Node reboot or upon receiving of the
             * ResetWatermarks command.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.12.6.4
             */
            currentHeapHighWatermark: Attribute(0x3, TlvUInt64, { default: 0 })
        },

        commands: {
            /**
             * Receipt of this command shall reset the following values which track high and lower watermarks:
             *
             *   • The StackFreeMinimum field of the ThreadMetrics attribute
             *
             *   • The CurrentHeapHighWatermark attribute This command has no payload.
             *
             * Effect on Receipt
             *
             * On receipt of this command, the Node shall make the following modifications to attributes it supports:
             *
             * If implemented, the server shall set the value of the CurrentHeapHighWatermark attribute to the value of
             * the CurrentHeapUsed attribute.
             *
             * If implemented, the server shall set the value of the StackFreeMinimum field for every thread to the
             * value of the corresponding thread’s StackFreeCurrent field.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.12.7.1
             */
            resetWatermarks: Command(0x0, TlvNoArguments, 0x0, TlvNoResponse, { invokeAcl: AccessLevel.Manage })
        }
    });

    /**
     * Software Diagnostics
     *
     * The Software Diagnostics Cluster provides a means to acquire standardized diagnostics metrics that may be used
     * by a Node to assist a user or Administrator in diagnosing potential problems. The Software Diagnostics Cluster
     * attempts to centralize all metrics that are relevant to the software that may be running on a Node.
     *
     * SoftwareDiagnosticsCluster supports optional features that you can enable with the
     * SoftwareDiagnosticsCluster.with() factory method.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.12
     */
    export const Cluster = ExtensibleCluster({
        ...Base,

        /**
         * Use this factory method to create a SoftwareDiagnostics cluster with support for optional features. Include
         * each {@link Feature} you wish to support.
         *
         * @param features the optional features to support
         * @returns a SoftwareDiagnostics cluster with specified features enabled
         * @throws {IllegalClusterError} if the feature combination is disallowed by the Matter specification
         */
        factory: <T extends `${Feature}`[]>(...features: [...T]) => {
            validateFeatureSelection(features, Feature);
            const cluster = CreateCluster({ ...Base, supportedFeatures: BitFlags(Base.features, ...features) });
            extendCluster(cluster, WatermarksComponent, { watermarks: true });
            return cluster as unknown as Extension<BitFlags<typeof Base.features, T>>;
        }
    });

    export type Extension<SF extends TypeFromPartialBitSchema<typeof Base.features>> =
        ClusterForBaseCluster<typeof Base, SF>
        & { supportedFeatures: SF }
        & (SF extends { watermarks: true } ? typeof WatermarksComponent : {});
    const WTRMRK = { watermarks: true };

    /**
     * This cluster supports all SoftwareDiagnostics features. It may support illegal feature combinations.
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
            currentHeapHighWatermark: AsConditional(
                WatermarksComponent.attributes.currentHeapHighWatermark,
                { mandatoryIf: [WTRMRK] }
            )
        },

        commands: {
            resetWatermarks: AsConditional(WatermarksComponent.commands.resetWatermarks, { mandatoryIf: [WTRMRK] })
        },
        events: Cluster.events
    });
}

export type SoftwareDiagnosticsCluster = typeof SoftwareDiagnostics.Cluster;
export const SoftwareDiagnosticsCluster = SoftwareDiagnostics.Cluster;
