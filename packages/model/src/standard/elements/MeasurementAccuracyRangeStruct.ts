/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DatatypeElement as Datatype, FieldElement as Field } from "../../elements/index.js";

export const MeasurementAccuracyRangeStruct = Datatype(
    {
        name: "MeasurementAccuracyRangeStruct", type: "struct",

        details: "This struct represents the accuracy of a measurement for a range of measurement values. Accuracy " +
            "shall be expressed as a maximum +/- percentage of the true value, a maximum +/- fixed value of the " +
            "true value, or both." +
            "\n" +
            "  • If both PercentMax and FixedMax are indicated, then for a given true value in the range between " +
            "    RangeMin and RangeMax," +
            "\n" +
            "    ◦ the reported value shall be less than or equal to the sum of the true value, FixedMax and " +
            "      PercentMax percent of the true value." +
            "\n" +
            "    ◦ the reported value shall be greater than or equal to the true value minus the sum of FixedMax " +
            "      and PercentMax percent of the true value." +
            "\n" +
            "  • If only PercentMax is indicated, then for a given true value in the range between RangeMin and " +
            "    RangeMax," +
            "\n" +
            "    ◦ the reported value shall be less than or equal to the sum of the true value and PercentMax " +
            "      percent of the true value." +
            "\n" +
            "    ◦ the reported value shall be greater than or equal to the true value minus PercentMax per" +
            "\n" +
            "cent of the true value." +
            "\n" +
            "  • If only FixedMax is indicated, then for a given true value in the range between RangeMin and " +
            "    RangeMax," +
            "\n" +
            "    ◦ the reported value shall be less than or equal to the sum of the true value and FixedMax." +
            "\n" +
            "    ◦ the reported value shall be greater than or equal to the true value minus FixedMax.",

        xref: { document: "cluster", section: "2.1.4.3" }
    },

    Field({
        name: "RangeMin", id: 0x0, type: "int64", conformance: "M", quality: "F",

        details: "This field shall indicate the minimum measurement value for the specified level of accuracy." +
            "\n" +
            "The value of this field shall be greater than or equal to the value of the MinMeasuredValue field on " +
            "the encompassing MeasurementAccuracyStruct." +
            "\n" +
            "The value of this field shall be less than or equal to the value of the MaxMeasuredValue field on " +
            "the encompassing MeasurementAccuracyStruct.",

        xref: { document: "cluster", section: "2.1.4.3.1" }
    }),

    Field({
        name: "RangeMax", id: 0x1, type: "int64", conformance: "M", quality: "F",

        details: "This field shall indicate the maximum measurement value for the specified level of accuracy. The " +
            "value of this field shall be greater than the value of the RangeMin field." +
            "\n" +
            "The value of this field shall be greater than or equal to the value of the MinMeasuredValue field on " +
            "the encompassing MeasurementAccuracyStruct." +
            "\n" +
            "The value of this field shall be less than or equal to the value of the MaxMeasuredValue field on " +
            "the encompassing MeasurementAccuracyStruct.",

        xref: { document: "cluster", section: "2.1.4.3.2" }
    }),

    Field({
        name: "PercentMax", id: 0x2, type: "percent100ths", conformance: "O.a+", quality: "F",
        details: "This field shall indicate the maximum +/- percentage accuracy for the associated measurement.",
        xref: { document: "cluster", section: "2.1.4.3.3" }
    }),

    Field({
        name: "PercentMin", id: 0x3, type: "percent100ths", conformance: "[PercentMax]",
        constraint: "max percentTypical", quality: "F",
        details: "This field shall indicate the minimum +/- percentage accuracy for the associated measurement.",
        xref: { document: "cluster", section: "2.1.4.3.4" }
    }),

    Field({
        name: "PercentTypical", id: 0x4, type: "percent100ths", conformance: "[PercentMin]",
        constraint: "percentMin to percentMax", quality: "F",
        details: "This field shall indicate the typical +/- percentage accuracy for the associated measurement.",
        xref: { document: "cluster", section: "2.1.4.3.5" }
    }),

    Field({
        name: "FixedMax", id: 0x5, type: "uint64", conformance: "O.a+", quality: "F",
        details: "This field shall indicate the maximum +/- fixed accuracy for the associated measurement, in the unit " +
            "indicated by MeasurementType.",
        xref: { document: "cluster", section: "2.1.4.3.6" }
    }),

    Field({
        name: "FixedMin", id: 0x6, type: "uint64", conformance: "[FixedMax]", constraint: "max fixedMax",
        quality: "F",
        details: "This field shall indicate the minimum +/- fixed accuracy for the associated measurement, in the unit " +
            "indicated by MeasurementType.",
        xref: { document: "cluster", section: "2.1.4.3.7" }
    }),

    Field({
        name: "FixedTypical", id: 0x7, type: "uint64", conformance: "[FixedMin]",
        constraint: "fixedMin to fixedMax", quality: "F",
        details: "This field shall indicate the typical +/- fixed accuracy for the associated measurement, in the unit " +
            "indicated by MeasurementType.",
        xref: { document: "cluster", section: "2.1.4.3.8" }
    })
);

MatterDefinition.children.push(MeasurementAccuracyRangeStruct);
