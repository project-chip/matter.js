/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DatatypeElement as Datatype, FieldElement as Field } from "../../elements/index.js";

export const MeasurementAccuracyStruct = Datatype(
    {
        name: "MeasurementAccuracyStruct", type: "struct",
        details: "This struct represents the set of accuracy ranges for a given measurement, the maximum and minimum " +
            "values for the measurement, and whether the measurement is directly measured or just estimated from " +
            "other information.",
        xref: { document: "cluster", section: "2.1.4.4" }
    },

    Field({
        name: "MeasurementType", id: 0x0, type: "MeasurementTypeEnum", conformance: "M", quality: "F",
        details: "This field shall indicate the type of measurement for the accuracy provided.",
        xref: { document: "cluster", section: "2.1.4.4.1" }
    }),

    Field({
        name: "Measured", id: 0x1, type: "bool", conformance: "M", default: false, quality: "F",
        details: "This field shall indicate whether the associated measurement was directly measured. If this field is " +
            "not set to true, then the associated measurement was estimated.",
        xref: { document: "cluster", section: "2.1.4.4.2" }
    }),

    Field({ name: "MinMeasuredValue", id: 0x2, type: "int64", conformance: "M", quality: "F" }),
    Field({ name: "MaxMeasuredValue", id: 0x3, type: "int64", conformance: "M", quality: "F" }),

    Field(
        {
            name: "AccuracyRanges", id: 0x4, type: "list", conformance: "M", constraint: "min 1", quality: "F",

            details: "This field shall indicate a list of measurement ranges and their associated accuracies." +
                "\n" +
                "The value of the RangeMin field on the first MeasurementAccuracyRangeStruct in this list shall be " +
                "equal to the value of the MinMeasuredValue field." +
                "\n" +
                "The value of the RangeMax field on the last MeasurementAccuracyRangeStruct in this list shall be " +
                "less than or equal to the value of the MaxMeasuredValue field." +
                "\n" +
                "The value of the RangeMin field on each MeasurementAccuracyRangeStruct in this list other than the " +
                "first shall be one more the value of the RangeMax field on the previous " +
                "MeasurementAccuracyRangeStruct in this list (i.e. there shall be no gaps in the accuracy ranges, and " +
                "the ranges shall be in increasing order).",

            xref: { document: "cluster", section: "2.1.4.4.5" }
        },

        Field({ name: "entry", type: "MeasurementAccuracyRangeStruct" })
    )
);

MatterDefinition.children.push(MeasurementAccuracyStruct);
