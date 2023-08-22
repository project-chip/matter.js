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
    Attribute,
    OptionalAttribute,
    WritableAttribute,
    AccessLevel,
    Command,
    TlvNoResponse,
    FixedAttribute,
    Event,
    EventPriority,
    Cluster as CreateCluster
} from "../../cluster/Cluster.js";
import { TlvEpochUs, TlvEnum, TlvInt32, TlvUInt16 } from "../../tlv/TlvNumber.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";
import { TlvNodeId } from "../../datatype/NodeId.js";
import { TlvObject, TlvField, TlvOptionalField } from "../../tlv/TlvObject.js";
import { TlvString } from "../../tlv/TlvString.js";
import { TlvArray } from "../../tlv/TlvArray.js";
import { TlvBoolean } from "../../tlv/TlvBoolean.js";
import { TlvNoArguments } from "../../tlv/TlvNoArguments.js";

export namespace TimeSync {
    /**
     * @see {@link MatterCoreSpecificationV1_1} § 11.16.6.1
     */
    export const enum Granularity {
        /**
         * This indicates that the server is not currently synchronized with a UTC Time source and its clock is based
         * on the Last Known Good UTC Time only.
         */
        NoTimeGranularity = 0,

        /**
         * This indicates the server was synchronized to an upstream source in the past, but sufficient clock drift has
         * occurred such that the clock error is now > 5 seconds.
         */
        MinutesGranularity = 1,

        /**
         * This indicates the server is synchronized to an upstream source using a low resolution protocol. UTC Time is
         * accurate to ± 5 seconds.
         */
        SecondsGranularity = 2,

        /**
         * This indicates the server is synchronized to an upstream source using high resolution time-synchronization
         * protocol such as NTP, or has built-in GNSS with some amount of jitter applying its GNSS timestamp. UTC Time
         * is accurate to ± 50ms.
         */
        MillisecondsGranularity = 3,

        /**
         * This indicates the server is synchronized to an upstream source using a highly precise time-synchronization
         * protocol such as PTP, or has built-in GNSS. UTC time is accurate to ± 10 μs.
         */
        MicrosecondsGranularity = 4
    }

    /**
     * @see {@link MatterCoreSpecificationV1_1} § 11.16.6.2
     */
    export const enum TimeSource {
        /**
         * Server is not currently synchronized with a UTC Time source.
         */
        None = 0,

        /**
         * Server uses an unlisted time source.
         */
        Unknown = 1,

        /**
         * Server received time from the Section 11.16.9.1, “SetUtcTime Command”.
         */
        Admin = 2,

        /**
         * Synchronized time by querying the Time Cluster of another Node.
         */
        NodeTimeCluster = 3,

        /**
         * SNTP from a server not in the Fabric. NTS is not used.
         */
        NonFabricSntp = 4,

        /**
         * NTP from servers not in the Fabric. None of the servers used NTS.
         */
        NonFabricNtp = 5,

        /**
         * SNTP from a server within the Fabric. NTS is not used.
         */
        FabricSntp = 6,

        /**
         * NTP from a servers within the Fabric. None of the servers used NTS.
         */
        FabricNtp = 7,

        /**
         * NTP from multiple servers on Fabric and external. None of the servers used NTS.
         */
        MixedNtp = 8,

        /**
         * SNTP from a server not in the Fabric. NTS is used.
         */
        NonFabricSntpNts = 9,

        /**
         * NTP from servers not in the Fabric. NTS is used on at least one server.
         */
        NonFabricNtpNts = 10,

        /**
         * SNTP from a server within the Fabric. NTS is used.
         */
        FabricSntpNts = 11,

        /**
         * NTP from a server within the Fabric. NTS is used on at least one server.
         */
        FabricNtpNts = 12,

        /**
         * NTP from multiple servers on the Fabric and external. NTS is used on at least one server.
         */
        MixedNtpNts = 13,

        /**
         * Time synchronization comes from a vendor cloud-based source (e.g. "Date" header in authenticated HTTPS
         * connection).
         */
        CloudSource = 14,

        /**
         * Time synchronization comes from PTP.
         */
        Ptp = 15,

        /**
         * Time synchronization comes from a GNSS source.
         */
        Gnss = 16
    }

    /**
     * Input to the TimeSync setUtcTime command
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.16.9.1
     */
    export const TlvSetUtcTimeRequest = TlvObject({
        /**
         * This shall give the Client’s UTC Time.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.16.9.1.1
         */
        utcTime: TlvField(0, TlvEpochUs),

        /**
         * This shall give the Client’s Granularity, as described in Section 11.16.8.2, “Granularity Attribute”.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.16.9.1.2
         */
        granularity: TlvField(1, TlvEnum<Granularity>()),

        /**
         * This shall give the Client’s TimeSource, as described in Section 11.16.8.3, “TimeSource Attribute”.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.16.9.1.3
         */
        timeSource: TlvOptionalField(2, TlvEnum<TimeSource>())
    });

    /**
     * @see {@link MatterCoreSpecificationV1_1} § 11.16.6.3
     */
    export const TlvTimeZoneStruct = TlvObject({
        /**
         * The time zone offset from UTC in seconds.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.16.6.3.1
         */
        offset: TlvField(0, TlvInt32.bound({ min: -43200, max: 50400 })),

        /**
         * The UTC time when the offset shall be applied.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.16.6.3.2
         */
        validAt: TlvField(1, TlvEpochUs),

        /**
         * The time zone name SHOULD provide a human-readable time zone name and it SHOULD use the country/city format
         * specified by the IANA time zone database [https://www.iana.org/time-zones].
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.16.6.3.3
         */
        name: TlvOptionalField(2, TlvString.bound({ minLength: 0, maxLength: 64 }))
    });

    /**
     * The DST offset in seconds. Normally this is in the range of 0 to 3600 seconds (1 hour), but this field will
     * accept any values in the int32 range to accommodate potential future legislation that does not fit with these
     * assumptions.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.16.6.4
     */
    export const TlvDSTOffsetStruct = TlvObject({
        offset: TlvField(0, TlvInt32),

        /**
         * The UTC time when the offset shall be applied.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.16.6.4.1
         */
        validStarting: TlvField(1, TlvEpochUs),

        /**
         * The UTC time when the offset shall stop being applied. This value shall be larger than the ValidStarting
         * time.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.16.6.4.2
         */
        validUntil: TlvField(2, TlvEpochUs)
    });

    /**
     * Body of the TimeSync timeZoneStatus event
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.16.10.3
     */
    export const TlvTimeZoneStatusEvent = TlvObject({
        offset: TlvField(0, TlvInt32.bound({ min: -43200, max: 50400 })),
        name: TlvOptionalField(1, TlvString.bound({ minLength: 0, maxLength: 64 }))
    });

    /**
     * These are optional features supported by TimeSyncCluster.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.16.5
     */
    export enum Feature {
        /**
         * TimeZone
         *
         * Server supports time zone.
         */
        TimeZone = "TimeZone",

        /**
         * NtpClient
         *
         * Server supports an NTP or SNTP client.
         */
        NtpClient = "NtpClient",

        /**
         * NtpServer
         *
         * Server supports an NTP server role.
         */
        NtpServer = "NtpServer"
    }

    /**
     * These elements and properties are present in all TimeSync clusters.
     */
    export const Base = BaseClusterComponent({
        id: 0x38,
        name: "TimeSync",
        revision: 1,

        features: {
            /**
             * TimeZone
             *
             * Server supports time zone.
             */
            timeZone: BitFlag(0),

            /**
             * NtpClient
             *
             * Server supports an NTP or SNTP client.
             */
            ntpClient: BitFlag(1),

            /**
             * NtpServer
             *
             * Server supports an NTP server role.
             */
            ntpServer: BitFlag(2)
        },

        attributes: {
            /**
             * If the server has achieved time synchronization, this shall indicate the current time as a UTC epoch-us
             * (Epoch Time in Microseconds).
             *
             * If the server has not achieved time synchronization, this shall be null. This attribute may be set when
             * a Section 11.16.9.1, “SetUtcTime Command” is received.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.16.8.1
             */
            utcTime: Attribute(0x0, TlvNullable(TlvEpochUs), { omitChanges: true, default: null }),

            /**
             * The granularity of the error that the server is willing to guarantee on the time synchronization. It is
             * of type GranularityEnum.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.16.8.2
             */
            granularity: Attribute(0x1, TlvEnum<Granularity>(), { default: Granularity.NoTimeGranularity }),

            /**
             * The server’s time source. This attribute indicates what method the server is using to sync, whether the
             * source uses NTS or not and whether the source is internal or external to the Fabric. This attribute may
             * be used by a client to determine its level of trust in the UTCTime. It is of type TimeSourceEnum.
             *
             * If a server is unsure if the selected NTP server is within the Fabric, it SHOULD indicate the server is
             * NonFabric.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.16.8.3
             */
            timeSource: OptionalAttribute(0x2, TlvEnum<TimeSource>(), { default: TimeSource.None }),

            /**
             * The Node ID of a trusted Time Cluster. The TrustedTimeNodeId Node is used as a check on external time
             * sync sources and may be used as the primary time source if other time sources are unavailable. See
             * Section 11.16.13, “Time source prioritization”. This attribute is writeable only by an Administrator. It
             * SHOULD be set by the Commissioner during commissioning. If no appropriate TrustedTimeNodeId is
             * available, the commissioner may set this value to null.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.16.8.5
             */
            trustedTimeNodeId: WritableAttribute(
                0x3,
                TlvNullable(TlvNodeId),
                { default: null, writeAcl: AccessLevel.Administer }
            )
        },

        commands: {
            /**
             * This command may be issued by Administrator to set the time. If the Commissioner does not have a valid
             * time source, it may send a Granularity of NoTimeGranularity.
             *
             * Upon receipt of this command, the server may update its UTCTime attribute to match the time specified in
             * the command, if the stated Granularity and TimeSource are acceptable. The server shall update its
             * UTCTime attribute if its current Granularity is NoTimeGranularity.
             *
             * If the time is updated, the server shall also update its Granularity attribute as appropriate
             *
             * server does not plan to maintain time). It shall also update its TimeSource attribute to Admin. It shall
             * also update its last known good UTC time.
             *
             * If the server updates its UTCTime attribute, it shall accept the command with a status code of SUCCESS.
             * If it opts to not update its time, it shall fail the command with a cluster specific Status Code of
             * TimeNotAccepted.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.16.9.1
             */
            setUtcTime: Command(0x0, TlvSetUtcTimeRequest, 0x0, TlvNoResponse, { invokeAcl: AccessLevel.Administer })
        }
    });

    /**
     * A TimeSyncCluster supports these elements if it supports feature NtpClient.
     */
    export const NtpClientComponent = ClusterComponent({
        attributes: {
            /**
             * The default NTP server the server’s Node may use if other time sources are unavailable. This attribute
             * may contain a domain name or a static IPv6 address in text format as specified in RFC 5952
             * [https://tools.ietf.org/html/rfc5952]. See Section 11.16.13, “Time source prioritization”. This
             * attribute is writeable only by an Administrator. It SHOULD be set by the Commissioner during
             * commissioning. If no default NTP is available, the Commissioner may set this value to null.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.16.8.4
             */
            defaultNtp: WritableAttribute(
                0x4,
                TlvNullable(TlvString.bound({ maxLength: 128 })),
                { default: null, writeAcl: AccessLevel.Administer }
            )
        }
    });

    /**
     * A TimeSyncCluster supports these elements if it supports feature TimeZone.
     */
    export const TimeZoneComponent = ClusterComponent({
        attributes: {
            /**
             * A list of time zone offsets from UTC and when they shall take effect. This attribute uses a list of time
             * offset configurations to allow Nodes to handle scheduled regulatory time zone changes. This attribute
             * shall NOT be used to indicate daylight savings time changes (see Section 11.16.8.7, “DSTOffset
             * Attribute” for daylight savings time).
             *
             * The first entry shall have a ValidAt entry of 0. If there is a second entry, it shall have a non-zero
             * ValidAt time.
             *
             * If a server supports a TimeZoneDatabase, the server may update its own DSTOffset list (Section
             * 11.16.8.7, “DSTOffset Attribute”) to add new DST change times as required, based on the Name fields of
             * the TimeZoneStruct. Administrators may add additional entries to the DSTOffset of other Nodes with the
             * same time zone, if required.
             *
             * If a server does not support a TimeZoneDatabase, the Name field of the TimeZoneStruct is only applicable
             * for client-side localization. In particular:
             *
             *   • If the server does not support a TimeZoneDatabase, the Name field shall NOT be used to calculate the
             *     local time.
             *
             *   • If the server does not support a TimeZoneDatabase, the Name field shall NOT be used to calculate DST
             *     start or end dates.
             *
             * Upon writing this attribute, the server shall recompute its LocalTime, taking into account the Offset of
             * the currently used TimeZoneStruct.
             *
             * When time passes, the server SHOULD remove any entries which are no longer active and change the ValidAt
             * time for the currently used TimeZoneStruct list item to zero.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.16.8.6
             */
            timeZone: WritableAttribute(
                0x5,
                TlvArray(TlvTimeZoneStruct, { minLength: 1, maxLength: 2 }),
                { writeAcl: AccessLevel.Manage }
            ),

            /**
             * A list of offsets to apply for daylight savings time, and their validity period. List entries shall be
             * sorted by ValidStarting time.
             *
             * A list entry shall NOT have a ValidStarting time that is smaller than the ValidUntil time of the
             * previous entry.
             *
             * Upon writing this attribute, the server shall recompute its LocalTime.
             *
             * This list may hold up to 20 entries. If a server does not have sufficient storage for 20 entries, it may
             * truncate the list by removing entries with the largest ValidStarting times. The server shall reserve
             * sufficient storage for at least one entry.
             *
             * Over time, the server SHOULD remove any entries which are no longer active from the list.
             *
             * Over time, if the server supports a TimeZoneDatabase, it may update its own list to add additional
             * entries.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.16.8.7
             */
            dstOffset: WritableAttribute(
                0x6,
                TlvArray(TlvDSTOffsetStruct, { maxLength: 20 }),
                { default: [], writeAcl: AccessLevel.Manage }
            ),

            /**
             * The computed current local time of the server as a epoch-us (Epoch Time in Microseconds). The local time
             * offset of the value is the sum of the currently used TimeZoneEntry’s offset and the currently used DST
             * offset, if any.
             *
             * If the server has not achieved time synchronization, this shall be null.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.16.8.8
             */
            localTime: Attribute(0x7, TlvNullable(TlvEpochUs), { omitChanges: true, default: 0 }),

            /**
             * Indicates whether the server has access to a time zone database. Nodes with a time zone database may
             * update their own DSTOffset attribute to add new entries and may push DSTOffset updates to other Nodes in
             * the same time zone as required.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.16.8.9
             */
            timeZoneDatabase: FixedAttribute(0x8, TlvBoolean, { default: true })
        },

        events: {
            /**
             * This event shall be generated when the server stops applying the current DSTOffset and there are no
             * entries in the list with a larger ValidStarting time, indicating the need to possibly get new DST data.
             *
             * There is no data for this event.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.16.10.1
             */
            dstTableEmpty: Event(0x0, EventPriority.Info, TlvNoArguments),

            /**
             * This event shall be generated when the server starts or stops applying a DST offset.
             *
             * This event contains a boolean predicate that indicates whether the server is applying the DST offset.
             * When the value is "true", the current DST offset is being applied (i.e, daylight savings time is
             * applied, as opposed to standard time).
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.16.10.2
             */
            dstStatus: Event(0x1, EventPriority.Info, TlvNoArguments),

            /**
             * This event shall be generated when the server changes its time zone offset or name. It shall NOT be sent
             * for DST changes that are not accompanied by a time zone change.
             *
             * This event returns a structure as follows:
             *
             * Current time zone offset from UTC in seconds.
             *
             * Current time zone name. This name SHOULD use the country/city format specified by the IANA time zone
             * database [https://www.iana.org/time-zones].
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.16.10.3
             */
            timeZoneStatus: Event(0x2, EventPriority.Info, TlvTimeZoneStatusEvent)
        }
    });

    /**
     * A TimeSyncCluster supports these elements if it supports feature NtpServer.
     */
    export const NtpServerComponent = ClusterComponent({
        attributes: {
            /**
             * If the server is running an NTP server, this value shall be the port number for the service. If the
             * server is not currently running an NTP server, this value shall be null.
             *
             * This attribute shall be present if this server is capable of providing an NTP server instance. See
             * Section 11.16.15, “Acting as an NTP Server” for more information.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.16.8.10
             */
            ntpServerPort: Attribute(0x9, TlvNullable(TlvUInt16), { default: null })
        }
    });

    /**
     * Time Synchronization
     *
     * Accurate time is required for a number of reasons, including scheduling, display and validating security
     * materials.
     *
     * This section describes a mechanism for Nodes to achieve and maintain time synchronization. The Time Cluster
     * provides attributes for reading a Node’s current time. It also allows Administrators to
     *
     * set current time, time zone and daylight savings time (DST) settings.
     *
     * NOTE Support for Time Synchronization is provisional.
     *
     * TimeSyncCluster supports optional features that you can enable with the TimeSyncCluster.with() factory method.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.16
     */
    export const Cluster = ExtensibleCluster({
        ...Base,

        /**
         * Use this factory method to create a TimeSync cluster with support for optional features. Include each
         * {@link Feature} you wish to support.
         *
         * @param features the optional features to support
         * @returns a TimeSync cluster with specified features enabled
         * @throws {IllegalClusterError} if the feature combination is disallowed by the Matter specification
         */
        factory: <T extends `${Feature}`[]>(...features: [...T]) => {
            validateFeatureSelection(features, Feature);
            const cluster = CreateCluster({ ...Base, supportedFeatures: BitFlags(Base.features, ...features) });
            extendCluster(cluster, NtpClientComponent, { ntpClient: true });
            extendCluster(cluster, TimeZoneComponent, { timeZone: true });
            extendCluster(cluster, NtpServerComponent, { ntpServer: true });
            return cluster as unknown as Extension<BitFlags<typeof Base.features, T>>;
        }
    });

    export type Extension<SF extends TypeFromPartialBitSchema<typeof Base.features>> =
        ClusterForBaseCluster<typeof Base, SF>
        & { supportedFeatures: SF }
        & (SF extends { ntpClient: true } ? typeof NtpClientComponent : {})
        & (SF extends { timeZone: true } ? typeof TimeZoneComponent : {})
        & (SF extends { ntpServer: true } ? typeof NtpServerComponent : {});

    const NTPC = { ntpClient: true };
    const TZ = { timeZone: true };
    const NTPS = { ntpServer: true };

    /**
     * This cluster supports all TimeSync features. It may support illegal feature combinations.
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
            defaultNtp: AsConditional(NtpClientComponent.attributes.defaultNtp, { mandatoryIf: [NTPC] }),
            timeZone: AsConditional(TimeZoneComponent.attributes.timeZone, { mandatoryIf: [TZ] }),
            dstOffset: AsConditional(TimeZoneComponent.attributes.dstOffset, { mandatoryIf: [TZ] }),
            localTime: AsConditional(TimeZoneComponent.attributes.localTime, { mandatoryIf: [TZ] }),
            timeZoneDatabase: AsConditional(TimeZoneComponent.attributes.timeZoneDatabase, { mandatoryIf: [TZ] }),
            ntpServerPort: AsConditional(NtpServerComponent.attributes.ntpServerPort, { mandatoryIf: [NTPS] })
        },

        commands: Cluster.commands,
        events: {
            dstTableEmpty: AsConditional(TimeZoneComponent.events.dstTableEmpty, { mandatoryIf: [TZ] }),
            dstStatus: AsConditional(TimeZoneComponent.events.dstStatus, { mandatoryIf: [TZ] }),
            timeZoneStatus: AsConditional(TimeZoneComponent.events.timeZoneStatus, { mandatoryIf: [TZ] })
        }
    });
}

export type TimeSyncCluster = typeof TimeSync.Cluster;
export const TimeSyncCluster = TimeSync.Cluster;
