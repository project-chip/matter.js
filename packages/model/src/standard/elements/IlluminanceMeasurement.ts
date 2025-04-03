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
    DatatypeElement as Datatype,
    FieldElement as Field
} from "../../elements/index.js";

export const IlluminanceMeasurement = Cluster(
    {
        name: "IlluminanceMeasurement", id: 0x400, classification: "application", pics: "ILL",
        details: "The Illuminance Measurement cluster provides an interface to illuminance measurement functionality, " +
            "including configuration and provision of notifications of illuminance measurements.",
        xref: { document: "cluster", section: "2.2" }
    },

    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 3 }),

    Attribute(
        {
            name: "MeasuredValue", id: 0x0, type: "uint16", access: "R V", conformance: "M",
            constraint: "0, minMeasuredValue to maxMeasuredValue", default: 0, quality: "X P",

            details: "Indicates the illuminance in Lux (symbol lx) as follows:" +
                "\n" +
                "  • MeasuredValue = 10,000 x log10(illuminance) + 1," +
                "\n" +
                "where 1 lx <= illuminance <= 3.576 Mlx, corresponding to a MeasuredValue in the range 1 to 0xFFFE. " +
                "The MeasuredValue attribute can take the following values:" +
                "\n" +
                "  • 0 indicates a value of illuminance that is too low to be measured," +
                "\n" +
                "  • MinMeasuredValue <= MeasuredValue <= MaxMeasuredValue under normal circumstances," +
                "\n" +
                "  • null indicates that the illuminance measurement is invalid." +
                "\n" +
                "The MeasuredValue attribute is updated continuously as new measurements are made.",

            xref: { document: "cluster", section: "2.2.5.1" }
        }
    ),

    Attribute({
        name: "MinMeasuredValue", id: 0x1, type: "uint16", access: "R V", conformance: "M",
        constraint: "1 to 65533", quality: "X",
        details: "Indicates the minimum value of MeasuredValue that can be measured. A value of null indicates that " +
            "this attribute is not defined. See Measured Value for more details.",
        xref: { document: "cluster", section: "2.2.5.2" }
    }),

    Attribute({
        name: "MaxMeasuredValue", id: 0x2, type: "uint16", access: "R V", conformance: "M",
        constraint: "min minMeasuredValue + 1", quality: "X",
        details: "Indicates the maximum value of MeasuredValue that can be measured. A value of null indicates that " +
            "this attribute is not defined. See Measured Value for more details.",
        xref: { document: "cluster", section: "2.2.5.3" }
    }),

    Attribute({
        name: "Tolerance", id: 0x3, type: "uint16", access: "R V", conformance: "O", constraint: "max 2048",
        details: "See Measured Value.",
        xref: { document: "cluster", section: "2.2.5.4" }
    }),

    Attribute({
        name: "LightSensorType", id: 0x4, type: "uint8", access: "R V", conformance: "O", default: null,
        quality: "X",
        details: "Indicates the electronic type of the light sensor. This attribute shall be set to one of the " +
            "non-reserved values listed in LightSensorTypeEnum or null in case the sensor type is unknown.",
        xref: { document: "cluster", section: "2.2.5.5" }
    }),

    Datatype(
        { name: "LightSensorTypeEnum", type: "enum8", xref: { document: "cluster", section: "2.2.4.1" } },
        Field({ name: "Photodiode", id: 0x0, conformance: "M", description: "Indicates photodiode sensor type" }),
        Field({ name: "Cmos", id: 0x1, conformance: "M", description: "Indicates CMOS sensor type" })
    )
);

MatterDefinition.children.push(IlluminanceMeasurement);
