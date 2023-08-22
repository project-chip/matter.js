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
    Attribute,
    Command,
    TlvNoResponse,
    AccessLevel,
    Cluster as CreateCluster
} from "../../cluster/Cluster.js";
import { TlvEnum, TlvUInt64 } from "../../tlv/TlvNumber.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";
import { TlvBoolean } from "../../tlv/TlvBoolean.js";
import { TlvNoArguments } from "../../tlv/TlvNoArguments.js";

export namespace EthernetNetworkDiagnostics {
    /**
     * @see {@link MatterCoreSpecificationV1_1} § 11.15.5.1
     */
    export const enum PHYRate {
        /**
         * PHY rate is 10Mbps
         */
        Rate10M = 0,

        /**
         * PHY rate is 100Mbps
         */
        Rate100M = 1,

        /**
         * PHY rate is 1Gbps
         */
        Rate1G = 2,

        /**
         * PHY rate is 2.5Gbps
         */
        Rate25G = 3,

        /**
         * PHY rate is 5Gbps
         */
        Rate5G = 4,

        /**
         * PHY rate is 10Gbps
         */
        Rate10G = 5,

        /**
         * PHY rate is 40Gbps
         */
        Rate40G = 6,

        /**
         * PHY rate is 100Gbps
         */
        Rate100G = 7,

        /**
         * PHY rate is 200Gbps
         */
        Rate200G = 8,

        /**
         * PHY rate is 400Gbps
         */
        Rate400G = 9
    }

    /**
     * These are optional features supported by EthernetNetworkDiagnosticsCluster.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.15.4
     */
    export enum Feature {
        /**
         * PacketCounts
         *
         * Node makes available the counts for the number of received and transmitted packets on the ethernet interface.
         */
        PacketCounts = "PacketCounts",

        /**
         * ErrorCounts
         *
         * Node makes available the counts for the number of errors that have occurred during the reception and
         * transmission of packets on the ethernet interface.
         */
        ErrorCounts = "ErrorCounts"
    }

    /**
     * These elements and properties are present in all EthernetNetworkDiagnostics clusters.
     */
    export const Base = BaseClusterComponent({
        id: 0x37,
        name: "EthernetNetworkDiagnostics",
        revision: 1,

        features: {
            /**
             * PacketCounts
             *
             * Node makes available the counts for the number of received and transmitted packets on the ethernet
             * interface.
             */
            packetCounts: BitFlag(0),

            /**
             * ErrorCounts
             *
             * Node makes available the counts for the number of errors that have occurred during the reception and
             * transmission of packets on the ethernet interface.
             */
            errorCounts: BitFlag(1)
        },

        attributes: {
            /**
             * The PHYRate attribute shall indicate the current nominal, usable speed at the top of the physical layer
             * of the Node. A value of null shall indicate that the interface is not currently configured or
             * operational.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.15.6.1
             */
            phyRate: OptionalAttribute(0x0, TlvNullable(TlvEnum<PHYRate>()), { default: null }),

            /**
             * The FullDuplex attribute shall indicate if the Node is currently utilizing the full-duplex operating
             * mode. A value of null shall indicate that the interface is not currently configured or operational.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.15.6.2
             */
            fullDuplex: OptionalAttribute(0x1, TlvNullable(TlvBoolean), { default: null }),

            /**
             * The CarrierDetect attribute shall indicate the value of the Carrier Detect control signal present on the
             * ethernet network interface. A value of null shall indicate that the interface is not currently
             * configured or operational.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.15.6.8
             */
            carrierDetect: OptionalAttribute(0x7, TlvNullable(TlvBoolean), { omitChanges: true, default: null }),

            /**
             * @see {@link MatterCoreSpecificationV1_1} § 11.15.6
             */
            timeSinceReset: OptionalAttribute(0x8, TlvUInt64, { omitChanges: true, default: 0 })
        }
    });

    /**
     * A EthernetNetworkDiagnosticsCluster supports these elements if it supports feature PacketCounts.
     */
    export const PacketCountsComponent = ClusterComponent({
        attributes: {
            /**
             * The PacketRxCount attribute shall indicate the number of packets that have been received on the ethernet
             * network interface. The PacketRxCount attribute shall be reset to 0 upon a reboot of the Node.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.15.6.3
             */
            packetRxCount: Attribute(0x2, TlvUInt64, { default: 0 }),

            /**
             * The PacketTxCount attribute shall indicate the number of packets that have been successfully transferred
             * on the ethernet network interface. The PacketTxCount attribute shall be reset to 0 upon a reboot of the
             * Node.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.15.6.4
             */
            packetTxCount: Attribute(0x3, TlvUInt64, { omitChanges: true, default: 0 })
        }
    });

    /**
     * A EthernetNetworkDiagnosticsCluster supports these elements if it supports feature ErrorCounts.
     */
    export const ErrorCountsComponent = ClusterComponent({
        attributes: {
            /**
             * The TxErrCount attribute shall indicate the number of failed packet transmissions that have occurred on
             * the ethernet network interface. The TxErrCount attribute shall be reset to 0 upon a reboot of the Node.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.15.6.5
             */
            txErrCount: Attribute(0x4, TlvUInt64, { omitChanges: true, default: 0 }),

            /**
             * The CollisionCount attribute shall indicate the number of collisions that have occurred while attempting
             * to transmit a packet on the ethernet network interface. The CollisionCount attribute shall be reset to 0
             * upon a reboot of the Node.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.15.6.6
             */
            collisionCount: Attribute(0x5, TlvUInt64, { omitChanges: true, default: 0 }),

            /**
             * The OverrunCount attribute shall indicate the number of packets dropped either at ingress or egress, due
             * to lack of buffer memory to retain all packets on the ethernet network interface. The OverrunCount
             * attribute shall be reset to 0 upon a reboot of the Node.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.15.6.7
             */
            overrunCount: Attribute(0x6, TlvUInt64, { omitChanges: true, default: 0 })
        }
    });

    /**
     * A EthernetNetworkDiagnosticsCluster supports these elements if it supports features PacketCounts or ErrorCounts.
     */
    export const PacketCountsOrErrorCountsComponent = ClusterComponent({
        commands: {
            /**
             * Reception of this command shall reset the following attributes to 0:
             *
             *   • PacketRxCount
             *
             *   • PacketTxCount
             *
             *   • TxErrCount
             *
             *   • CollisionCount
             *
             *   • OverrunCount
             *
             * This command has no associated data.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.15.7.1
             */
            resetCounts: Command(0x0, TlvNoArguments, 0x0, TlvNoResponse, { invokeAcl: AccessLevel.Manage })
        }
    });

    /**
     * Ethernet Network Diagnostics
     *
     * The Ethernet Network Diagnostics Cluster provides a means to acquire standardized diagnostics metrics that may
     * be used by a Node to assist a user or Administrator in diagnosing potential problems. The Ethernet Network
     * Diagnostics Cluster attempts to centralize all metrics that are relevant to a potential Ethernet connection to a
     * Node.
     *
     * EthernetNetworkDiagnosticsCluster supports optional features that you can enable with the
     * EthernetNetworkDiagnosticsCluster.with() factory method.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.15
     */
    export const Cluster = ExtensibleCluster({
        ...Base,

        /**
         * Use this factory method to create an EthernetNetworkDiagnostics cluster with support for optional features.
         * Include each {@link Feature} you wish to support.
         *
         * @param features the optional features to support
         * @returns an EthernetNetworkDiagnostics cluster with specified features enabled
         * @throws {IllegalClusterError} if the feature combination is disallowed by the Matter specification
         */
        factory: <T extends `${Feature}`[]>(...features: [...T]) => {
            validateFeatureSelection(features, Feature);
            const cluster = CreateCluster({ ...Base, supportedFeatures: BitFlags(Base.features, ...features) });
            extendCluster(cluster, PacketCountsComponent, { packetCounts: true });
            extendCluster(cluster, ErrorCountsComponent, { errorCounts: true });
            extendCluster(cluster, PacketCountsOrErrorCountsComponent, { packetCounts: true }, { errorCounts: true });
            return cluster as unknown as Extension<BitFlags<typeof Base.features, T>>;
        }
    });

    export type Extension<SF extends TypeFromPartialBitSchema<typeof Base.features>> =
        ClusterForBaseCluster<typeof Base, SF>
        & { supportedFeatures: SF }
        & (SF extends { packetCounts: true } ? typeof PacketCountsComponent : {})
        & (SF extends { errorCounts: true } ? typeof ErrorCountsComponent : {})
        & (SF extends { packetCounts: true } | { errorCounts: true } ? typeof PacketCountsOrErrorCountsComponent : {});

    const PKTCNT = { packetCounts: true };
    const ERRCNT = { errorCounts: true };

    /**
     * This cluster supports all EthernetNetworkDiagnostics features. It may support illegal feature combinations.
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
            packetRxCount: AsConditional(PacketCountsComponent.attributes.packetRxCount, { mandatoryIf: [PKTCNT] }),
            packetTxCount: AsConditional(PacketCountsComponent.attributes.packetTxCount, { mandatoryIf: [PKTCNT] }),
            txErrCount: AsConditional(ErrorCountsComponent.attributes.txErrCount, { mandatoryIf: [ERRCNT] }),
            collisionCount: AsConditional(ErrorCountsComponent.attributes.collisionCount, { mandatoryIf: [ERRCNT] }),
            overrunCount: AsConditional(ErrorCountsComponent.attributes.overrunCount, { mandatoryIf: [ERRCNT] })
        },

        commands: {
            resetCounts: AsConditional(
                PacketCountsOrErrorCountsComponent.commands.resetCounts,
                { mandatoryIf: [PKTCNT, ERRCNT] }
            )
        }
    });
}

export type EthernetNetworkDiagnosticsCluster = typeof EthernetNetworkDiagnostics.Cluster;
export const EthernetNetworkDiagnosticsCluster = EthernetNetworkDiagnostics.Cluster;
