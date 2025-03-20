/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import {
    ClusterElement as Cluster,
    AttributeElement as Attribute,
    FieldElement as Field,
    EventElement as Event,
    DatatypeElement as Datatype
} from "../../elements/index.js";

export const ElectricalEnergyMeasurement = Cluster(
    {
        name: "ElectricalEnergyMeasurement", id: 0x91, classification: "application", pics: "EEM",
        details: "This cluster provides a mechanism for querying data about the electrical energy imported or provided " +
            "by the server.",
        xref: { document: "cluster", section: "2.12" }
    },

    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

    Attribute(
        { name: "FeatureMap", id: 0xfffc, type: "FeatureMap", xref: { document: "cluster", section: "2.12.4" } },
        Field({
            name: "IMPE", conformance: "O.a+", constraint: "0", description: "ImportedEnergy",
            details: "The feature indicates the server is capable of measuring how much energy is imported by the server.",
            xref: { document: "cluster", section: "2.12.4.1" }
        }),
        Field({
            name: "EXPE", conformance: "O.a+", constraint: "1", description: "ExportedEnergy",
            details: "The feature indicates the server is capable of measuring how much energy is exported by the server.",
            xref: { document: "cluster", section: "2.12.4.2" }
        }),

        Field({
            name: "CUME", conformance: "O.b+", constraint: "2", description: "CumulativeEnergy",
            details: "The feature indicates the server is capable of measuring how much energy has been imported or " +
                "exported by the server over the device’s lifetime. This measurement may start from when a device’s " +
                "firmware is updated to include this feature, when a device’s firmware is updated to correct " +
                "measurement errors, or when a device is factory reset.",
            xref: { document: "cluster", section: "2.12.4.3" }
        }),

        Field({
            name: "PERE", conformance: "O.b+", constraint: "3", description: "PeriodicEnergy",
            details: "The feature indicates the server is capable of measuring how much energy has been imported or " +
                "exported by the server during a certain period of time. The start and end times for measurement " +
                "periods shall be determined by the server, and may represent overlapping periods.",
            xref: { document: "cluster", section: "2.12.4.4" }
        })
    ),

    Attribute({
        name: "Accuracy", id: 0x0, type: "MeasurementAccuracyStruct", access: "R V", conformance: "M",
        quality: "F",
        details: "Indicates the accuracy of energy measurement by this server. The value of the MeasurementType field " +
            "on this MeasurementAccuracyStruct shall be ElectricalEnergy.",
        xref: { document: "cluster", section: "2.12.6.1" }
    }),

    Attribute({
        name: "CumulativeEnergyImported", id: 0x1, type: "EnergyMeasurementStruct", access: "R V",
        conformance: "IMPE & CUME", default: null, quality: "X Q",

        details: "Indicates the most recent measurement of cumulative energy imported by the server over the lifetime " +
            "of the device, and the timestamp of when the measurement was recorded." +
            "\n" +
            "The reporting interval of this attribute shall be manufacturer dependent. The server may choose to " +
            "omit publication of deltas considered not meaningful." +
            "\n" +
            "The server shall NOT mark this attribute ready for report if the last time this was done was more " +
            "recently than 1 second ago." +
            "\n" +
            "The server may delay marking this attribute ready for report for longer periods if needed, however " +
            "the server shall NOT delay marking this attribute as ready for report for longer than 60 seconds." +
            "\n" +
            "If the cumulative energy imported cannot currently be determined, a value of null shall be returned.",

        xref: { document: "cluster", section: "2.12.6.2" }
    }),

    Attribute({
        name: "CumulativeEnergyExported", id: 0x2, type: "EnergyMeasurementStruct", access: "R V",
        conformance: "EXPE & CUME", default: null, quality: "X Q",

        details: "Indicates the most recent measurement of cumulative energy exported by the server over the lifetime " +
            "of the device, and the timestamp of when the measurement was recorded." +
            "\n" +
            "The reporting interval of this attribute shall be manufacturer dependent. The server may choose to " +
            "omit publication of deltas considered not meaningful." +
            "\n" +
            "The server shall NOT mark this attribute ready for report if the last time this was done was more " +
            "recently than 1 second ago." +
            "\n" +
            "The server may delay marking this attribute ready for report for longer periods if needed, however " +
            "the server shall NOT delay marking this attribute as ready for report for longer than 60 seconds." +
            "\n" +
            "If the cumulative energy exported cannot currently be determined, a value of null shall be returned.",

        xref: { document: "cluster", section: "2.12.6.3" }
    }),

    Attribute({
        name: "PeriodicEnergyImported", id: 0x3, type: "EnergyMeasurementStruct", access: "R V",
        conformance: "IMPE & PERE", default: null, quality: "X Q",

        details: "Indicates the most recent measurement of energy imported by the server and the period during which " +
            "it was measured." +
            "\n" +
            "The reporting interval of this attribute shall be manufacturer dependent. The server may choose to " +
            "omit publication of deltas considered not meaningful." +
            "\n" +
            "The server shall NOT mark this attribute ready for report if the last time this was done was more " +
            "recently than 1 second ago." +
            "\n" +
            "The server may delay marking this attribute ready for report for longer periods if needed, however " +
            "the server shall NOT delay marking this attribute as ready for report for longer than 60 seconds." +
            "\n" +
            "If the periodic energy imported cannot currently be determined, a value of null shall be returned.",

        xref: { document: "cluster", section: "2.12.6.4" }
    }),

    Attribute({
        name: "PeriodicEnergyExported", id: 0x4, type: "EnergyMeasurementStruct", access: "R V",
        conformance: "EXPE & PERE", default: null, quality: "X Q",

        details: "Indicates the most recent measurement of energy exported by the server and the period during which " +
            "it was measured." +
            "\n" +
            "The reporting interval of this attribute shall be manufacturer dependent. The server may choose to " +
            "omit publication of deltas considered not meaningful." +
            "\n" +
            "The server shall NOT mark this attribute ready for report if the last time this was done was more " +
            "recently than 1 second ago." +
            "\n" +
            "The server may delay marking this attribute ready for report for longer periods if needed, however " +
            "the server shall NOT delay marking this attribute as ready for report for longer than 60 seconds." +
            "\n" +
            "If the periodic energy exported cannot currently be determined, a value of null shall be returned.",

        xref: { document: "cluster", section: "2.12.6.5" }
    }),

    Attribute({
        name: "CumulativeEnergyReset", id: 0x5, type: "CumulativeEnergyResetStruct", access: "R V",
        conformance: "[CUME]", default: null, quality: "X",
        details: "Indicates when cumulative measurements were most recently zero.",
        xref: { document: "cluster", section: "2.12.6.6" }
    }),

    Event(
        {
            name: "CumulativeEnergyMeasured", id: 0x0, access: "V", conformance: "CUME", priority: "info",
            details: "This event shall be generated when the server takes a snapshot of the cumulative energy imported by " +
                "the server, exported from the server, or both, but not more frequently than the rate mentioned in " +
                "the description above of the related attribute.",
            xref: { document: "cluster", section: "2.12.7.1" }
        },

        Field({
            name: "EnergyImported", id: 0x0, type: "EnergyMeasurementStruct", conformance: "CUME & IMPE",
            details: "This field shall be the value of CumulativeEnergyImported attribute at the timestamp indicated in " +
                "its EndTimestamp field, EndSystime field, or both.",
            xref: { document: "cluster", section: "2.12.7.1.1" }
        }),

        Field({
            name: "EnergyExported", id: 0x1, type: "EnergyMeasurementStruct", conformance: "CUME & EXPE",
            details: "This field shall be the value of CumulativeEnergyExported attribute at the timestamp indicated in " +
                "its EndTimestamp field, EndSystime field, or both.",
            xref: { document: "cluster", section: "2.12.7.1.2" }
        })
    ),

    Event(
        {
            name: "PeriodicEnergyMeasured", id: 0x1, access: "V", conformance: "PERE", priority: "info",
            details: "This event shall be generated when the server reaches the end of a reporting period for imported " +
                "energy, exported energy, or both.",
            xref: { document: "cluster", section: "2.12.7.2" }
        },

        Field({
            name: "EnergyImported", id: 0x0, type: "EnergyMeasurementStruct", conformance: "PERE & IMPE",
            details: "This field shall be the value of PeriodicEnergyImported attribute at the timestamp indicated in its " +
                "EndTimestamp field, EndSystime field, or both.",
            xref: { document: "cluster", section: "2.12.7.2.1" }
        }),

        Field({
            name: "EnergyExported", id: 0x1, type: "EnergyMeasurementStruct", conformance: "PERE & EXPE",
            details: "This field shall be the value of PeriodicEnergyExported attribute at the timestamp indicated in its " +
                "EndTimestamp field, EndSystime field, or both.",
            xref: { document: "cluster", section: "2.12.7.2.2" }
        })
    ),

    Datatype(
        {
            name: "EnergyMeasurementStruct", type: "struct",

            details: "This struct shall indicate the amount of energy measured during a given measurement period." +
                "\n" +
                "A server which does not have the ability to determine the time in UTC, or has not yet done so, shall " +
                "use the system time fields to specify the measurement period and observation times." +
                "\n" +
                "A server which has determined the time in UTC shall use the timestamp fields to specify the " +
                "measurement period. Such a server may also include the systime fields to indicate how many seconds " +
                "had passed since boot for a given timestamp; this allows for client-side resolution of UTC time for " +
                "previous reports that only included systime.",

            xref: { document: "cluster", section: "2.12.5.1" }
        },

        Field({
            name: "Energy", id: 0x0, type: "energy-mWh", conformance: "M", constraint: "min 0",

            details: "This field shall be the reported energy." +
                "\n" +
                "If the EnergyMeasurementStruct represents cumulative energy, then this shall represent the " +
                "cumulative energy recorded at either the value of the EndTimestamp field or the value of the " +
                "EndSystime field, or both." +
                "\n" +
                "If the EnergyMeasurementStruct represents periodic energy, then this shall represent the energy " +
                "recorded during the period specified by either the StartTimestamp and EndTimestamp fields, the " +
                "period specified by the StartSystime and EndSystime fields, or both.",

            xref: { document: "cluster", section: "2.12.5.1.1" }
        }),

        Field({
            name: "StartTimestamp", id: 0x1, type: "epoch-s", conformance: "desc",

            details: "This field shall indicate the timestamp in UTC of the beginning of the period during which the value " +
                "of the Energy field was measured." +
                "\n" +
                "If this EnergyMeasurementStruct represents cumulative energy, this field shall be omitted." +
                "\n" +
                "Otherwise, if the server had determined the time in UTC at or before the beginning of the " +
                "measurement period, this field shall be indicated." +
                "\n" +
                "Otherwise, if the server had not yet determined the time in UTC at or before the beginning of the " +
                "measurement period, or does not have the capability of determining the time in UTC, this field shall " +
                "be omitted.",

            xref: { document: "cluster", section: "2.12.5.1.2" }
        }),

        Field({
            name: "EndTimestamp", id: 0x2, type: "epoch-s", conformance: "desc",
            constraint: "min startTimestamp + 1",

            details: "This field shall indicate the timestamp in UTC of the end of the period during which the value of " +
                "the Energy field was measured." +
                "\n" +
                "If the server had determined the time in UTC by the end of the measurement period, this field shall " +
                "be indicated." +
                "\n" +
                "Otherwise, if the server had not yet determined the time in UTC by the end of the measurement " +
                "period, or does not have the capability of determining the time in UTC, this field shall be omitted.",

            xref: { document: "cluster", section: "2.12.5.1.3" }
        }),

        Field({
            name: "StartSystime", id: 0x3, type: "systime-ms", conformance: "desc",

            details: "This field shall indicate the time elapsed since boot at the beginning of the period during which " +
                "the value of the Energy field was measured." +
                "\n" +
                "If this EnergyMeasurementStruct represents cumulative energy, this field shall be omitted. " +
                "Otherwise, if the server had not yet determined the time in UTC at the start of the measurement" +
                "\n" +
                "period, or does not have the capability of determining the time in UTC, this field shall be " +
                "indicated." +
                "\n" +
                "Otherwise, if the server had determined the time in UTC at or before the beginning of the " +
                "measurement period, this field may be omitted; if it is indicated, its value shall be the time " +
                "elapsed since boot at the UTC time indicated in StartTimestamp.",

            xref: { document: "cluster", section: "2.12.5.1.4" }
        }),

        Field({
            name: "EndSystime", id: 0x4, type: "systime-ms", conformance: "desc",
            constraint: "min startSystime + 1",

            details: "This field shall indicate the time elapsed since boot at the end of the period during which the " +
                "value of the Energy field was measured." +
                "\n" +
                "If the server had not yet determined the time in UTC by the end of the measurement period, or does " +
                "not have the capability of determining the time in UTC, this field shall be indicated." +
                "\n" +
                "Otherwise, if the server had determined the time in UTC by the end of the measurement period, this " +
                "field may be omitted; if it is indicated, its value shall be the time elapsed since boot at the UTC " +
                "time indicated in EndTimestamp.",

            xref: { document: "cluster", section: "2.12.5.1.5" }
        })
    ),

    Datatype(
        {
            name: "CumulativeEnergyResetStruct", type: "struct",
            details: "This struct shall represent the times at which cumulative measurements were last zero, either due to " +
                "initialization of the device, or an internal reset of the cumulative value.",
            xref: { document: "cluster", section: "2.12.5.2" }
        },

        Field({
            name: "ImportedResetTimestamp", id: 0x0, type: "epoch-s", conformance: "[IMPE]", default: null,
            quality: "X",

            details: "This field shall indicate the timestamp in UTC when the value of the Energy field on the " +
                "CumulativeEnergyImported attribute was most recently zero." +
                "\n" +
                "If the server had determined the time in UTC when the value of the Energy field on the " +
                "CumulativeEnergyImported attribute was most recently zero, this field shall be indicated." +
                "\n" +
                "Otherwise, if the server had not yet determined the time in UTC when the value of the Energy field " +
                "on the CumulativeEnergyImported attribute was most recently zero, or does not have the capability of " +
                "determining the time in UTC, this field shall be omitted." +
                "\n" +
                "If the timestamp in UTC when the value of the Energy field on the CumulativeEnergyImported attribute " +
                "was most recently zero cannot currently be determined, a value of null shall be returned.",

            xref: { document: "cluster", section: "2.12.5.2.1" }
        }),

        Field({
            name: "ExportedResetTimestamp", id: 0x1, type: "epoch-s", conformance: "[EXPE]", default: null,
            quality: "X",

            details: "This field shall indicate the timestamp in UTC when the value of the Energy field on the " +
                "CumulativeEnergyExported attribute was most recently zero." +
                "\n" +
                "If the server had determined the time in UTC when the value of the Energy field on the " +
                "CumulativeEnergyExported attribute was most recently zero, this field shall be indicated." +
                "\n" +
                "Otherwise, if the server had not yet determined the time in UTC when the value of the Energy field " +
                "on the CumulativeEnergyExported attribute was most recently zero, or does not have the capability of " +
                "determining the time in UTC, this field shall be omitted." +
                "\n" +
                "If the timestamp in UTC when the value of the Energy field on the CumulativeEnergyExported attribute " +
                "was most recently zero cannot currently be determined, a value of null shall be returned.",

            xref: { document: "cluster", section: "2.12.5.2.2" }
        }),

        Field({
            name: "ImportedResetSystime", id: 0x2, type: "systime-ms", conformance: "[IMPE]", default: null,
            quality: "X",

            details: "This field shall indicate the time elapsed since boot when the value of the Energy field on the " +
                "CumulativeEnergyImported attribute was most recently zero." +
                "\n" +
                "If the server had not yet determined the time in UTC when the value of the Energy field on the " +
                "CumulativeEnergyImported attribute was most recently zero, or does not have the capability of " +
                "determining the time in UTC, this field shall be indicated." +
                "\n" +
                "Otherwise, if the server had determined the time in UTC when the value of the Energy field on the " +
                "CumulativeEnergyImported attribute was most recently zero, this field may be omitted; if it is " +
                "indicated, its value shall be the time elapsed since boot at the UTC time indicated in " +
                "ImportedResetTimestamp.",

            xref: { document: "cluster", section: "2.12.5.2.3" }
        }),

        Field({
            name: "ExportedResetSystime", id: 0x3, type: "systime-ms", conformance: "[EXPE]", default: null,
            quality: "X",

            details: "This field shall indicate the time elapsed since boot when the value of the Energy field on the " +
                "CumulativeEnergyExported attribute was most recently zero." +
                "\n" +
                "If the server had not yet determined the time in UTC when the value of the Energy field on the " +
                "CumulativeEnergyExported attribute was most recently zero, or does not have the capability of " +
                "determining the time in UTC, this field shall be indicated." +
                "\n" +
                "Otherwise, if the server had determined the time in UTC when the value of the Energy field on the " +
                "CumulativeEnergyExported attribute was most recently zero, this field may be omitted; if it is " +
                "indicated, its value shall be the time elapsed since boot at the UTC time indicated in " +
                "ImportedResetTimestamp.",

            xref: { document: "cluster", section: "2.12.5.2.4" }
        })
    )
);

MatterDefinition.children.push(ElectricalEnergyMeasurement);
