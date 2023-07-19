/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", name: "IlluminanceMeasurement", id: 0x400, classification: "application",
    description: "Illuminance Measurement",
    details: "Attributes and commands for configuring the measurement of illuminance, and reporting illuminance " +
        "measurements.",
    xref: { document: "cluster", section: "2.2" },

    children: [
        { tag: "attribute", name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 3 },

        {
            tag: "attribute", name: "MeasuredValue", id: 0x0, type: "uint16", access: "R V", conformance: "M",
            constraint: "0, MinMeasuredValue to MaxMeasuredValue", default: 0, quality: "X P",

            details: "The MeasuredValue attribute represents the illuminance in Lux (symbol lx) as follows:" +
                "\n" +
                "  • MeasuredValue = 10,000 x log10(illuminance) + 1," +
                "\n" +
                "where 1 lx ≤ illuminance ≤ 3.576 Mlx, corresponding to a MeasuredValue in the range 1 to 0xfffe. " +
                "The MeasuredValue attribute can take the following values:" +
                "\n" +
                "  • 0 indicates a value of illuminance that is too low to be measured," +
                "\n" +
                "  • MinMeasuredValue ≤ MeasuredValue ≤ MaxMeasuredValue under normal circumstances," +
                "\n" +
                "  • null indicates that the illuminance measurement is invalid." +
                "\n" +
                "The MeasuredValue attribute is updated continuously as new measurements are made.",

            xref: { document: "cluster", section: "2.2.5.1" }
        },

        {
            tag: "attribute", name: "MinMeasuredValue", id: 0x1, type: "uint16", access: "R V",
            conformance: "M", constraint: "1 to MaxMeasuredValue1", quality: "X",
            details: "The MinMeasuredValue attribute indicates the minimum value of MeasuredValue that can be measured. A " +
                "value of null indicates that this attribute is not defined. See Measured Value for more details.",
            xref: { document: "cluster", section: "2.2.5.2" }
        },

        {
            tag: "attribute", name: "MaxMeasuredValue", id: 0x2, type: "uint16", access: "R V",
            conformance: "M", constraint: "MinMeasuredValue1 to 65534", quality: "X",
            details: "The MaxMeasuredValue attribute indicates the maximum value of MeasuredValue that can be measured. A " +
                "value of null indicates that this attribute is not defined. See Measured Value for more details.",
            xref: { document: "cluster", section: "2.2.5.3" }
        },

        {
            tag: "attribute", name: "Tolerance", id: 0x3, type: "uint16", access: "R V", conformance: "O",
            constraint: "0 to 2048",
            details: "See Measured Value.",
            xref: { document: "cluster", section: "2.2.5.4" }
        },

        {
            tag: "attribute", name: "LightSensorType", id: 0x4, type: "uint8", access: "R V", conformance: "O",
            default: null, quality: "X",
            details: "The LightSensorType attribute specifies the electronic type of the light sensor. This attribute " +
                "shall be set to one of the non-reserved values listed in Values of the LightSensorType Attribute.",
            xref: { document: "cluster", section: "2.2.5.5" }
        }
    ]
});
