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

export const ElectricalPowerMeasurement = Cluster(
    {
        name: "ElectricalPowerMeasurement", id: 0x90, asOf: "1.3", classification: "application",
        pics: "EPM",
        details: "This cluster provides a mechanism for querying data about electrical power as measured by the " +
            "server.",
        xref: { document: "cluster", section: "2.13" }
    },

    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

    Attribute(
        { name: "FeatureMap", id: 0xfffc, type: "FeatureMap", xref: { document: "cluster", section: "2.13.4" } },
        Field({
            name: "DIRC", conformance: "O.a+", constraint: "0", description: "DirectCurrent",
            details: "This feature indicates the cluster can measure a direct current.",
            xref: { document: "cluster", section: "2.13.4.1" }
        }),
        Field({
            name: "ALTC", conformance: "O.a+", constraint: "1", description: "AlternatingCurrent",
            details: "This feature indicates the cluster can measure an alternating current.",
            xref: { document: "cluster", section: "2.13.4.2" }
        }),

        Field({
            name: "POLY", conformance: "[ALTC]", constraint: "2", description: "PolyphasePower",
            details: "This feature indicates the cluster represents the collective measurements for a Polyphase power " +
                "supply.",
            xref: { document: "cluster", section: "2.13.4.3" }
        }),

        Field({
            name: "HARM", conformance: "[ALTC]", constraint: "3", description: "Harmonics",
            details: "This feature indicates the cluster can measure the harmonics of an alternating current.",
            xref: { document: "cluster", section: "2.13.4.4" }
        }),
        Field({
            name: "PWRQ", conformance: "[ALTC]", constraint: "4", description: "PowerQuality",
            details: "This feature indicates the cluster can measure the harmonic phases of an alternating current.",
            xref: { document: "cluster", section: "2.13.4.5" }
        })
    ),

    Attribute({
        name: "PowerMode", id: 0x0, type: "PowerModeEnum", access: "R V", conformance: "M",
        details: "This shall indicate the current mode of the server. For some servers, such as an EV, this may change " +
            "depending on the mode of charging or discharging.",
        xref: { document: "cluster", section: "2.13.6.1" }
    }),

    Attribute({
        name: "NumberOfMeasurementTypes", id: 0x1, type: "uint8", access: "R V", conformance: "M",
        constraint: "min 1", quality: "F",
        details: "This shall indicate the maximum number of measurement types the server is capable of reporting.",
        xref: { document: "cluster", section: "2.13.6.2" }
    }),

    Attribute(
        {
            name: "Accuracy", id: 0x2, type: "list", access: "R V", conformance: "M",
            constraint: "1 to numberOfMeasurementTypes", quality: "F",
            details: "This shall indicate a list of accuracy specifications for the measurement types supported by the " +
                "server. There shall be an entry for ActivePower, as well as any other measurement types implemented " +
                "by this server.",
            xref: { document: "cluster", section: "2.13.6.3" }
        },

        Field({ name: "entry", type: "MeasurementAccuracyStruct" })
    ),

    Attribute(
        {
            name: "Ranges", id: 0x3, type: "list", access: "R V", conformance: "O",
            constraint: "0 to numberOfMeasurementTypes", default: [], quality: "Q",

            details: "This shall indicate a list of measured ranges for different measurement types. Each measurement type " +
                "shall have at most one entry in this list, representing the range of measurements in the most recent " +
                "measurement period." +
                "\n" +
                "The reporting interval of this attribute shall be manufacturer dependent. The server may choose to " +
                "omit publication of deltas considered not meaningful." +
                "\n" +
                "The server shall NOT mark this attribute ready for report if the last time this was done was more " +
                "recently than 1 second ago." +
                "\n" +
                "The server may delay marking this attribute ready for report for longer periods if needed, however " +
                "the server shall NOT delay marking this attribute as ready for report for longer than 60 seconds.",

            xref: { document: "cluster", section: "2.13.6.4" }
        },

        Field({ name: "entry", type: "MeasurementRangeStruct" })
    ),

    Attribute({
        name: "Voltage", id: 0x4, type: "voltage-mV", access: "R V", conformance: "O", default: null,
        quality: "X Q",

        details: "This shall indicate the most recent Voltage reading in millivolts (mV)." +
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
            "If the voltage cannot be measured, a value of null shall be returned.",

        xref: { document: "cluster", section: "2.13.6.5" }
    }),

    Attribute({
        name: "ActiveCurrent", id: 0x5, type: "amperage-mA", access: "R V", conformance: "O", default: null,
        quality: "X Q",

        details: "This shall indicate the most recent ActiveCurrent reading in milliamps (mA)." +
            "\n" +
            "A positive value represents current flowing into the server, while a negative value represents " +
            "current flowing out of the server." +
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
            "If the current cannot be measured, a value of null shall be returned.",

        xref: { document: "cluster", section: "2.13.6.6" }
    }),

    Attribute({
        name: "ReactiveCurrent", id: 0x6, type: "amperage-mA", access: "R V", conformance: "[ALTC]",
        default: null, quality: "X Q",

        details: "This shall indicate the most recent ReactiveCurrent reading in milliamps (mA)." +
            "\n" +
            "A positive value represents current flowing into the server, while a negative value represents " +
            "current flowing out of the server." +
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
            "If the current cannot be measured, a value of null shall be returned.",

        xref: { document: "cluster", section: "2.13.6.7" }
    }),

    Attribute({
        name: "ApparentCurrent", id: 0x7, type: "amperage-mA", access: "R V", conformance: "[ALTC]",
        constraint: "min 0", default: null, quality: "X Q",

        details: "This shall indicate the most recent ApparentCurrent (square root sum of the squares of active and " +
            "reactive currents) reading in milliamps (mA)." +
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
            "If the active or reactive currents cannot be measured, a value of null shall be returned.",

        xref: { document: "cluster", section: "2.13.6.8" }
    }),

    Attribute({
        name: "ActivePower", id: 0x8, type: "power-mW", access: "R V", conformance: "M", default: null,
        quality: "X Q",

        details: "This shall indicate the most recent ActivePower reading in milliwatts (mW). If the power cannot be " +
            "measured, a value of null shall be returned." +
            "\n" +
            "A positive value represents power imported, while a negative value represents power exported." +
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
            "If the Polyphase Power feature is set, this value represents the combined active power imported or " +
            "exported.",

        xref: { document: "cluster", section: "2.13.6.9" }
    }),

    Attribute({
        name: "ReactivePower", id: 0x9, type: "power-mW", access: "R V", conformance: "[ALTC]",
        default: null, quality: "X Q",

        details: "This shall indicate the most recent ReactivePower reading in millivolt-amps reactive (mVAR). A " +
            "positive value represents power imported, while a negative value represents power exported." +
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
            "If the reactive power cannot be measured, a value of null shall be returned." +
            "\n" +
            "If the Polyphase Power feature is supported, this value represents the combined reactive power " +
            "imported or exported.",

        xref: { document: "cluster", section: "2.13.6.10" }
    }),

    Attribute({
        name: "ApparentPower", id: 0xa, type: "power-mW", access: "R V", conformance: "[ALTC]",
        default: null, quality: "X Q",

        details: "This shall indicate the most recent ApparentPower reading in millivolt-amps (mVA)." +
            "\n" +
            "A positive value represents power imported, while a negative value represents power exported." +
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
            "If the apparent power cannot be measured, a value of null shall be returned.",

        xref: { document: "cluster", section: "2.13.6.11" }
    }),

    Attribute({
        name: "RmsVoltage", id: 0xb, type: "voltage-mV", access: "R V", conformance: "[ALTC]",
        default: null, quality: "X Q",

        details: "This shall indicate the most recent RMSVoltage reading in millivolts (mV)." +
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
            "If the RMS voltage cannot be measured, a value of null shall be returned.",

        xref: { document: "cluster", section: "2.13.6.12" }
    }),

    Attribute({
        name: "RmsCurrent", id: 0xc, type: "amperage-mA", access: "R V", conformance: "[ALTC]",
        default: null, quality: "X Q",

        details: "This shall indicate the most recent RMSCurrent reading in milliamps (mA)." +
            "\n" +
            "A positive value represents current flowing into the server, while a negative value represents " +
            "current flowing out of the server." +
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
            "If the RMS current cannot be measured, a value of null shall be returned.",

        xref: { document: "cluster", section: "2.13.6.13" }
    }),

    Attribute({
        name: "RmsPower", id: 0xd, type: "power-mW", access: "R V", conformance: "[ALTC]", default: null,
        quality: "X Q",

        details: "This shall indicate the most recent RMSPower reading in milliwatts (mW)." +
            "\n" +
            "A positive value represents power imported, while a negative value represents power exported." +
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
            "If the RMS power cannot be measured, a value of null shall be returned.",

        xref: { document: "cluster", section: "2.13.6.14" }
    }),

    Attribute({
        name: "Frequency", id: 0xe, type: "int64", access: "R V", conformance: "[ALTC]",
        constraint: "0 to 1000000", default: null, quality: "X Q",

        details: "This shall indicate the most recent Frequency reading in millihertz (mHz)." +
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
            "If the frequency cannot be measured, a value of null shall be returned.",

        xref: { document: "cluster", section: "2.13.6.15" }
    }),

    Attribute(
        {
            name: "HarmonicCurrents", id: 0xf, type: "list", access: "R V", conformance: "HARM",
            constraint: "desc", default: null, quality: "X Q",

            details: "This shall indicate a list of HarmonicMeasurementStruct values, with each HarmonicMeasurementStruct " +
                "representing the harmonic current reading for the harmonic order specified by Order." +
                "\n" +
                "The reporting interval of this attribute shall be manufacturer dependent. The server may choose to " +
                "omit publication of deltas considered not meaningful." +
                "\n" +
                "The server shall NOT mark this attribute ready for report if the last time this was done was more " +
                "recently than 1 second ago." +
                "\n" +
                "The server may delay marking this attribute ready for report for longer periods if needed, however " +
                "the server shall NOT delay marking this attribute as ready for report for longer than 60 seconds.",

            xref: { document: "cluster", section: "2.13.6.16" }
        },

        Field({ name: "entry", type: "HarmonicMeasurementStruct" })
    ),

    Attribute(
        {
            name: "HarmonicPhases", id: 0x10, type: "list", access: "R V", conformance: "PWRQ",
            constraint: "desc", default: null, quality: "X Q",

            details: "This shall indicate a list of HarmonicMeasurementStruct values, with each HarmonicMeasurementStruct " +
                "representing the most recent phase of the harmonic current reading for the harmonic" +
                "\n" +
                "order specified by Order." +
                "\n" +
                "The reporting interval of this attribute shall be manufacturer dependent. The server may choose to " +
                "omit publication of deltas considered not meaningful." +
                "\n" +
                "The server shall NOT mark this attribute ready for report if the last time this was done was more " +
                "recently than 1 second ago." +
                "\n" +
                "The server may delay marking this attribute ready for report for longer periods if needed, however " +
                "the server shall NOT delay marking this attribute as ready for report for longer than 60 seconds.",

            xref: { document: "cluster", section: "2.13.6.17" }
        },

        Field({ name: "entry", type: "HarmonicMeasurementStruct" })
    ),

    Attribute({
        name: "PowerFactor", id: 0x11, type: "int64", access: "R V", conformance: "[ALTC]",
        constraint: "-10000 to 10000", default: null, quality: "X Q",

        details: "This shall indicate the Power Factor ratio in +/- 1/100ths of a percent." +
            "\n" +
            "The reporting interval of this attribute shall be manufacturer dependent. The server may choose to " +
            "omit publication of deltas considered not meaningful." +
            "\n" +
            "The server shall NOT mark this attribute ready for report if the last time this was done was more " +
            "recently than 1 second ago." +
            "\n" +
            "The server may delay marking this attribute ready for report for longer periods if needed, however " +
            "the server shall NOT delay marking this attribute as ready for report for longer than 60 seconds.",

        xref: { document: "cluster", section: "2.13.6.18" }
    }),

    Attribute({
        name: "NeutralCurrent", id: 0x12, type: "amperage-mA", access: "R V", conformance: "[POLY]",
        default: null, quality: "X Q",

        details: "This shall indicate the most recent NeutralCurrent reading in milliamps (mA). Typically this is a " +
            "derived value, taking the magnitude of the vector sum of phase currents." +
            "\n" +
            "If the neutral current cannot be measured or derived, a value of null shall be returned." +
            "\n" +
            "A positive value represents an imbalance between the phase currents when power is imported. A " +
            "negative value represents an imbalance between the phase currents when power is exported." +
            "\n" +
            "The reporting interval of this attribute shall be manufacturer dependent. The server may choose to " +
            "omit publication of deltas considered not meaningful." +
            "\n" +
            "The server shall NOT mark this attribute ready for report if the last time this was done was more " +
            "recently than 1 second ago." +
            "\n" +
            "The server may delay marking this attribute ready for report for longer periods if needed, however " +
            "the server shall NOT delay marking this attribute as ready for report for longer than 60 seconds.",

        xref: { document: "cluster", section: "2.13.6.19" }
    }),

    Event(
        {
            name: "MeasurementPeriodRanges", id: 0x0, access: "V", conformance: "Ranges", priority: "info",
            details: "If supported, this event shall be generated at the end of a measurement period. The start and end " +
                "times for measurement periods shall be determined by the server, and may represent overlapping " +
                "periods.",
            xref: { document: "cluster", section: "2.13.7.1" }
        },

        Field(
            {
                name: "Ranges", id: 0x0, type: "list", access: "R V", conformance: "M", default: [],
                details: "This shall indicate the value of the Ranges attribute at the time of event generation.",
                xref: { document: "cluster", section: "2.13.7.1.1" }
            },
            Field({ name: "entry", type: "MeasurementRangeStruct" })
        )
    ),

    Datatype(
        { name: "PowerModeEnum", type: "enum8", xref: { document: "cluster", section: "2.13.5.1" } },
        Field({ name: "Unknown", id: 0x0, conformance: "M" }),
        Field({ name: "Dc", id: 0x1, conformance: "M", description: "Direct current" }),
        Field({ name: "Ac", id: 0x2, conformance: "M", description: "Alternating current, either single-phase or polyphase" })
    ),

    Datatype(
        {
            name: "MeasurementRangeStruct", type: "struct",

            details: "This struct shall indicate the maximum and minimum values of a given measurement type during a " +
                "measurement period, along with the observation times of these values." +
                "\n" +
                "A server which does not have the ability to determine the time in UTC, or has not yet done so, shall " +
                "use the system time fields to specify the measurement period and observation times." +
                "\n" +
                "A server which has determined the time in UTC shall use the timestamp fields to specify the " +
                "measurement period and observation times. Such a server may also include the systime fields to " +
                "indicate how many seconds had passed since boot for a given timestamp; this allows for client-side " +
                "resolution of UTC time for previous reports that only included systime.",

            xref: { document: "cluster", section: "2.13.5.2" }
        },

        Field({
            name: "MeasurementType", id: 0x0, type: "MeasurementTypeEnum", conformance: "M",
            details: "This field shall be the type of measurement for the range provided.",
            xref: { document: "cluster", section: "2.13.5.2.1" }
        }),

        Field({
            name: "Min", id: 0x1, type: "int64", conformance: "M",
            details: "This field shall be the smallest measured value for the associated measurement over either the " +
                "period between StartTimestamp and EndTimestamp, or the period between StartSystime and EndSystime, " +
                "or both.",
            xref: { document: "cluster", section: "2.13.5.2.2" }
        }),

        Field({
            name: "Max", id: 0x2, type: "int64", conformance: "M",
            details: "This field shall be the largest measured value for the associated measurement over the period " +
                "between either StartTimestamp and EndTimestamp or the period between StartSystime and EndSystime, or " +
                "both.",
            xref: { document: "cluster", section: "2.13.5.2.3" }
        }),

        Field({
            name: "StartTimestamp", id: 0x3, type: "epoch-s", conformance: "EndTimestamp",
            details: "This field shall be the timestamp in UTC of the beginning of the measurement period." +
                "\n" +
                "If the server had not yet determined the time in UTC at or before the beginning of the measurement " +
                "period, or does not have the capability of determining the time in UTC, this field shall be omitted.",
            xref: { document: "cluster", section: "2.13.5.2.4" }
        }),

        Field({
            name: "EndTimestamp", id: 0x4, type: "epoch-s", conformance: "desc",
            constraint: "min startTimestamp + 1",
            details: "This field shall be the timestamp in UTC of the end of the measurement period." +
                "\n" +
                "If the server had not yet determined the time in UTC at or before the beginning of the measurement " +
                "period, or does not have the capability of determining the time in UTC, this field shall be omitted.",
            xref: { document: "cluster", section: "2.13.5.2.5" }
        }),

        Field({
            name: "MinTimestamp", id: 0x5, type: "epoch-s", conformance: "EndTimestamp",
            details: "This field shall be the most recent timestamp in UTC that the value in the Min field was measured." +
                "\n" +
                "This field shall be greater than or equal to the value of the StartTimestamp field. This field shall " +
                "be less than or equal to the value of the EndTimestamp field.",
            xref: { document: "cluster", section: "2.13.5.2.6" }
        }),

        Field({
            name: "MaxTimestamp", id: 0x6, type: "epoch-s", conformance: "EndTimestamp",
            constraint: "min minTimestamp + 1",
            details: "This field shall be the most recent timestamp in UTC of the value in the Max field. This field shall " +
                "be greater than or equal to the value of the StartTimestamp field. This field shall be less than or " +
                "equal to the value of the EndTimestamp field.",
            xref: { document: "cluster", section: "2.13.5.2.7" }
        }),

        Field({
            name: "StartSystime", id: 0x7, type: "systime-ms", conformance: "EndSystime",
            details: "This field shall be the time since boot of the beginning of the measurement period." +
                "\n" +
                "If the server had determined the time in UTC at or before the start of the measurement period, this " +
                "field may be omitted along with the EndSystime, MinSystime, and MaxSystime fields.",
            xref: { document: "cluster", section: "2.13.5.2.8" }
        }),

        Field({
            name: "EndSystime", id: 0x8, type: "systime-ms", conformance: "desc",
            constraint: "min startSystime + 1",
            details: "This field shall be the time since boot of the end of the measurement period." +
                "\n" +
                "If the server had determined the time in UTC at the end of the measurement period, this field may be " +
                "omitted along with the StartSystime field, MinSystime, and MaxSystime fields.",
            xref: { document: "cluster", section: "2.13.5.2.9" }
        }),

        Field({
            name: "MinSystime", id: 0x9, type: "systime-ms", conformance: "EndSystime",
            details: "This field shall be the measurement time since boot of the value in the Min field was measured. This " +
                "field shall be greater than or equal to the value of the StartSystime field." +
                "\n" +
                "This field shall be less than or equal to the value of the EndSystime field.",
            xref: { document: "cluster", section: "2.13.5.2.10" }
        }),

        Field({
            name: "MaxSystime", id: 0xa, type: "systime-ms", conformance: "EndSystime",
            constraint: "min minSystime + 1",
            details: "This field shall be the measurement time since boot of the value in the Max field. This field shall " +
                "be greater than or equal to the value of the StartSystime field." +
                "\n" +
                "This field shall be less than or equal to the value of the EndSystime field.",
            xref: { document: "cluster", section: "2.13.5.2.11" }
        })
    ),

    Datatype(
        { name: "HarmonicMeasurementStruct", type: "struct", xref: { document: "cluster", section: "2.13.5.3" } },

        Field({
            name: "Order", id: 0x0, type: "uint8", conformance: "M", constraint: "min 1", default: 1,
            details: "This field shall be the order of the harmonic being measured. Typically this is an odd number, but " +
                "servers may choose to report even harmonics.",
            xref: { document: "cluster", section: "2.13.5.3.1" }
        }),

        Field({
            name: "Measurement", id: 0x1, type: "int64", conformance: "M", default: null, quality: "X",

            details: "This field shall be the measured value for the given harmonic order." +
                "\n" +
                "For the Harmonic Currents attribute, this value is the most recently measured harmonic current " +
                "reading in milliamps (mA). A positive value indicates that the measured harmonic current is " +
                "positive, and a negative value indicates that the measured harmonic current is negative." +
                "\n" +
                "For the Harmonic Phases attribute, this value is the most recent phase of the given harmonic order" +
                "\n" +
                "in millidegrees (mDeg). A positive value indicates that the measured phase is leading, and a " +
                "negative value indicates that the measured phase is lagging." +
                "\n" +
                "If this measurement is not currently available, a value of null shall be returned.",

            xref: { document: "cluster", section: "2.13.5.3.2" }
        })
    )
);

MatterDefinition.children.push(ElectricalPowerMeasurement);
