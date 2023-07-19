/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", name: "LeafWetnessMeasurement", id: 0x407, classification: "application",
    details: "This is a base cluster. The server cluster provides an interface to water content measurement " +
        "functionality. The measurement is reportable and may be configured for reporting. Water content " +
        "measurements include, but are not limited to, leaf wetness, relative humidity, and soil moisture.",
    xref: { document: "cluster", section: "2.6" },

    children: [
        { tag: "attribute", name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 3 },

        {
            tag: "attribute", name: "MeasuredValue", id: 0x0, type: "uint16", access: "R V", conformance: "M",
            constraint: "MinMeasuredValue to MaxMeasuredValue", quality: "X P",

            details: "MeasuredValue represents the water content in % as follows:" +
                "\n" +
                "MeasuredValue = 100 x water content" +
                "\n" +
                "Where 0% < = water content < = 100%, corresponding to a MeasuredValue in the range 0 to 10000. The " +
                "maximum resolution this format allows is 0.01%." +
                "\n" +
                "MinMeasuredValue and MaxMeasuredValue define the range of the sensor." +
                "\n" +
                "The null value indicates that the measurement is unknown, otherwise the range shall be as described " +
                "in Measured Value." +
                "\n" +
                "MeasuredValue is updated continuously as new measurements are made.",

            xref: { document: "cluster", section: "2.6.4.1" }
        },

        {
            tag: "attribute", name: "MinMeasuredValue", id: 0x1, type: "uint16", access: "R V",
            conformance: "M", constraint: "0 to MaxMeasuredValue1", quality: "X",
            details: "The MinMeasuredValue attribute indicates the minimum value of MeasuredValue that can be measured. " +
                "The null value means this attribute is not defined. See Measured Value for more details.",
            xref: { document: "cluster", section: "2.6.4.2" }
        },

        {
            tag: "attribute", name: "MaxMeasuredValue", id: 0x2, type: "uint16", access: "R V",
            conformance: "M", constraint: "MinMeasuredValue1 to 10000", quality: "X",
            details: "The MaxMeasuredValue attribute indicates the maximum value of MeasuredValue that can be measured. " +
                "The null value means this attribute is not defined. See Measured Value for more details.",
            xref: { document: "cluster", section: "2.6.4.3" }
        },

        {
            tag: "attribute", name: "Tolerance", id: 0x3, type: "uint16", access: "R V", conformance: "O",
            constraint: "0 to 2048",
            details: "See Measured Value.",
            xref: { document: "cluster", section: "2.6.4.4" }
        }
    ]
});
