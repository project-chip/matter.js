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
    DatatypeElement as Datatype
} from "../../elements/index.js";

export const ConcentrationMeasurement = Cluster(
    {
        name: "ConcentrationMeasurement", classification: "application", pics: "CONC",
        details: "The server cluster provides an interface to concentration measurement functionality. This cluster " +
            "shall to be used via an alias to a specific substance (see Cluster IDs).",
        xref: { document: "cluster", section: "2.10" }
    },

    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 3 }),

    Attribute(
        { name: "FeatureMap", id: 0xfffc, type: "FeatureMap", xref: { document: "cluster", section: "2.10.4" } },
        Field({
            name: "MEA", conformance: "O.a+", constraint: "0", description: "NumericMeasurement",
            details: "Cluster supports numeric measurement of substance"
        }),
        Field({
            name: "LEV", conformance: "O.a+", constraint: "1", description: "LevelIndication",
            details: "Cluster supports basic level indication for substance using the ConcentrationLevel enum"
        }),
        Field({
            name: "MED", conformance: "[LEV]", constraint: "2", description: "MediumLevel",
            details: "Cluster supports the Medium Concentration Level"
        }),
        Field({
            name: "CRI", conformance: "[LEV]", constraint: "3", description: "CriticalLevel",
            details: "Cluster supports the Critical Concentration Level"
        }),
        Field({
            name: "PEA", conformance: "[MEA]", constraint: "4", description: "PeakMeasurement",
            details: "Cluster supports peak numeric measurement of substance"
        }),
        Field({
            name: "AVG", conformance: "[MEA]", constraint: "5", description: "AverageMeasurement",
            details: "Cluster supports average numeric measurement of substance"
        })
    ),

    Attribute({
        name: "MeasuredValue", id: 0x0, type: "single", access: "R V", conformance: "MEA",
        constraint: "minMeasuredValue to maxMeasuredValue", default: null, quality: "X P",
        details: "Indicates the most recent measurement as a single-precision floating-point number. MeasuredValue’s " +
            "unit is represented by MeasurementUnit." +
            "\n" +
            "A value of null indicates that the measurement is unknown or outside the valid range. " +
            "MinMeasuredValue and MaxMeasuredValue define the valid range for MeasuredValue.",
        xref: { document: "cluster", section: "2.10.6.1" }
    }),

    Attribute({
        name: "MinMeasuredValue", id: 0x1, type: "single", access: "R V", conformance: "MEA", default: null,
        quality: "X",
        details: "Indicates the minimum value of MeasuredValue that is capable of being measured. A MinMeasuredValue " +
            "of null indicates that the MinMeasuredValue is not defined.",
        xref: { document: "cluster", section: "2.10.6.2" }
    }),

    Attribute({
        name: "MaxMeasuredValue", id: 0x2, type: "single", access: "R V", conformance: "MEA",
        constraint: "min minMeasuredValue", default: null, quality: "X",
        details: "Indicates the maximum value of MeasuredValue that is capable of being measured. A MaxMeasuredValue " +
            "of null indicates that the MaxMeasuredValue is not defined.",
        xref: { document: "cluster", section: "2.10.6.3" }
    }),

    Attribute({
        name: "PeakMeasuredValue", id: 0x3, type: "single", access: "R V", conformance: "PEA",
        constraint: "minMeasuredValue to maxMeasuredValue", default: null, quality: "X P",
        details: "Indicates the maximum value of MeasuredValue that has been measured during the " +
            "PeakMeasuredValueWindow. If this attribute is provided, the PeakMeasuredValueWindow attribute shall " +
            "also be provided.",
        xref: { document: "cluster", section: "2.10.6.4" }
    }),

    Attribute({
        name: "PeakMeasuredValueWindow", id: 0x4, type: "elapsed-s", access: "R V", conformance: "PEA",
        constraint: "max 604800", default: 1, quality: "P",
        details: "Indicates the window of time used for determining the PeakMeasuredValue. The value is in seconds.",
        xref: { document: "cluster", section: "2.10.6.5" }
    }),

    Attribute({
        name: "AverageMeasuredValue", id: 0x5, type: "single", access: "R V", conformance: "AVG",
        constraint: "minMeasuredValue to maxMeasuredValue", default: null, quality: "X P",
        details: "Indicates the average value of MeasuredValue that has been measured during the " +
            "AverageMeasuredValueWindow. If this attribute is provided, the AverageMeasuredValueWindow attribute " +
            "shall also be provided.",
        xref: { document: "cluster", section: "2.10.6.6" }
    }),

    Attribute({
        name: "AverageMeasuredValueWindow", id: 0x6, type: "elapsed-s", access: "R V", conformance: "AVG",
        constraint: "max 604800", default: 1, quality: "P",
        details: "Indicates the window of time used for determining the AverageMeasuredValue. The value is in seconds.",
        xref: { document: "cluster", section: "2.10.6.7" }
    }),

    Attribute({
        name: "Uncertainty", id: 0x7, type: "single", access: "R V", conformance: "[MEA]", constraint: "ms",
        details: "Indicates the range of error or deviation that can be found in MeasuredValue and PeakMeasuredValue. " +
            "This is considered a +/- value and should be considered to be in MeasurementUnit.",
        xref: { document: "cluster", section: "2.10.6.8" }
    }),

    Attribute({
        name: "MeasurementUnit", id: 0x8, type: "MeasurementUnitEnum", access: "R V", conformance: "MEA",
        quality: "F",
        details: "Indicates the unit of MeasuredValue. See MeasurementUnitEnum.",
        xref: { document: "cluster", section: "2.10.6.9" }
    }),

    Attribute({
        name: "MeasurementMedium", id: 0x9, type: "MeasurementMediumEnum", access: "R V", conformance: "M",
        quality: "F",
        details: "Indicates the medium in which MeasuredValue is being measured. See MeasurementMediumEnum.",
        xref: { document: "cluster", section: "2.10.6.10" }
    }),

    Attribute({
        name: "LevelValue", id: 0xa, type: "LevelValueEnum", access: "R V", conformance: "LEV", default: 0,
        details: "Indicates the level of the substance detected. See LevelValueEnum.",
        xref: { document: "cluster", section: "2.10.6.11" }
    }),

    Datatype(
        {
            name: "MeasurementUnitEnum", type: "enum8",
            details: "Where mentioned, Billion refers to 10, Trillion refers to 1012 (short scale).",
            xref: { document: "cluster", section: "2.10.5.1" }
        },
        Field({ name: "Ppm", id: 0x0, conformance: "MEA", description: "Parts per Million (10)" }),
        Field({ name: "Ppb", id: 0x1, conformance: "MEA", description: "Parts per Billion (10)" }),
        Field({ name: "Ppt", id: 0x2, conformance: "MEA", description: "Parts per Trillion (1012)" }),
        Field({ name: "Mgm3", id: 0x3, conformance: "MEA", description: "Milligram per m" }),
        Field({ name: "Ugm3", id: 0x4, conformance: "MEA", description: "Microgram per m" }),
        Field({ name: "Ngm3", id: 0x5, conformance: "MEA", description: "Nanogram per m" }),
        Field({ name: "Pm3", id: 0x6, conformance: "MEA", description: "Particles per m" }),
        Field({ name: "Bqm3", id: 0x7, conformance: "MEA", description: "Becquerel per m" })
    ),

    Datatype(
        { name: "MeasurementMediumEnum", type: "enum8", xref: { document: "cluster", section: "2.10.5.2" } },
        Field({ name: "Air", id: 0x0, conformance: "M", description: "The measurement is being made in Air" }),
        Field({ name: "Water", id: 0x1, conformance: "M", description: "The measurement is being made in Water" }),
        Field({ name: "Soil", id: 0x2, conformance: "M", description: "The measurement is being made in Soil" })
    ),

    Datatype(
        { name: "LevelValueEnum", type: "enum8", xref: { document: "cluster", section: "2.10.5.3" } },
        Field({ name: "Unknown", id: 0x0, conformance: "M", description: "The level is Unknown" }),
        Field({ name: "Low", id: 0x1, conformance: "M", description: "The level is considered Low" }),
        Field({ name: "Medium", id: 0x2, conformance: "MED", description: "The level is considered Medium" }),
        Field({ name: "High", id: 0x3, conformance: "M", description: "The level is considered High" }),
        Field({ name: "Critical", id: 0x4, conformance: "CRI", description: "The level is considered Critical" })
    )
);

MatterDefinition.children.push(ConcentrationMeasurement);
