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
    FieldElement as Field
} from "../../elements/index.js";

export const PressureMeasurement = Cluster(
    {
        name: "PressureMeasurement", id: 0x403, classification: "application", pics: "PRS",
        details: "This cluster provides an interface to pressure measurement functionality, including configuration " +
            "and provision of notifications of pressure measurements.",
        xref: { document: "cluster", section: "2.4" }
    },

    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 3 }),

    Attribute(
        { name: "FeatureMap", id: 0xfffc, type: "FeatureMap", xref: { document: "cluster", section: "2.4.4" } },
        Field({
            name: "EXT", conformance: "O", constraint: "0", description: "Extended",
            details: "Extended range and resolution"
        })
    ),

    Attribute(
        {
            name: "MeasuredValue", id: 0x0, type: "int16", access: "R V", conformance: "M",
            constraint: "minMeasuredValue to maxMeasuredValue", quality: "X P",
            details: "Indicates the pressure in kPa as follows:" +
                "\n" +
                "MeasuredValue = 10 x Pressure [kPa]" +
                "\n" +
                "The null value indicates that the value is not available.",
            xref: { document: "cluster", section: "2.4.5.1" }
        }
    ),

    Attribute({
        name: "MinMeasuredValue", id: 0x1, type: "int16", access: "R V", conformance: "M",
        constraint: "max 32766", quality: "X",
        details: "Indicates the minimum value of MeasuredValue that can be measured. See Measured Value for more " +
            "details." +
            "\n" +
            "The null value indicates that the value is not available.",
        xref: { document: "cluster", section: "2.4.5.2" }
    }),

    Attribute({
        name: "MaxMeasuredValue", id: 0x2, type: "int16", access: "R V", conformance: "M",
        constraint: "minMeasuredValue + 1 to 32767", quality: "X",
        details: "Indicates the maximum value of MeasuredValue that can be measured. See Measured Value for more " +
            "details." +
            "\n" +
            "The null value indicates that the value is not available.",
        xref: { document: "cluster", section: "2.4.5.3" }
    }),

    Attribute({
        name: "Tolerance", id: 0x3, type: "uint16", access: "R V", conformance: "O", constraint: "max 2048",
        default: 0,
        details: "See Measured Value.",
        xref: { document: "cluster", section: "2.4.5.4" }
    }),

    Attribute(
        {
            name: "ScaledValue", id: 0x10, type: "int16", access: "R V", conformance: "EXT",
            constraint: "minScaledValue to maxScaledValue", default: 0, quality: "X",
            details: "Indicates the pressure in Pascals as follows:" +
                "\n" +
                "ScaledValue = 10Scale x Pressure [Pa]" +
                "\n" +
                "The null value indicates that the value is not available.",
            xref: { document: "cluster", section: "2.4.5.5" }
        }
    ),

    Attribute({
        name: "MinScaledValue", id: 0x11, type: "int16", access: "R V", conformance: "EXT",
        constraint: "max 32766", default: 0, quality: "X",
        details: "Indicates the minimum value of ScaledValue that can be measured. The null value indicates that the " +
            "value is not available.",
        xref: { document: "cluster", section: "2.4.5.6" }
    }),

    Attribute({
        name: "MaxScaledValue", id: 0x12, type: "int16", access: "R V", conformance: "EXT",
        constraint: "minScaledValue + 1 to 32767", default: 0, quality: "X",
        details: "Indicates the maximum value of ScaledValue that can be measured. The null value indicates that the " +
            "value is not available.",
        xref: { document: "cluster", section: "2.4.5.7" }
    }),

    Attribute({
        name: "ScaledTolerance", id: 0x13, type: "uint16", access: "R V", conformance: "[EXT]",
        constraint: "max 2048", default: 0,
        details: "Indicates the magnitude of the possible error that is associated with Scaled" +
            "\n" +
            "Value. The true value is located in the range" +
            "\n" +
            "(ScaledValue – ScaledTolerance) to (ScaledValue + ScaledTolerance).",
        xref: { document: "cluster", section: "2.4.5.8" }
    }),

    Attribute({
        name: "Scale", id: 0x14, type: "int8", access: "R V", conformance: "EXT", constraint: "min -127",
        default: 0,
        details: "Indicates the base 10 exponent used to obtain ScaledValue (see ScaledValue).",
        xref: { document: "cluster", section: "2.4.5.9" }
    })
);

MatterDefinition.children.push(PressureMeasurement);
