/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";
import { ClusterElement as Cluster, AttributeElement as Attribute } from "../../elements/index.js";

Matter.children.push(Cluster({
    name: "TemperatureMeasurement", id: 0x402, classification: "application",
    description: "Temperature Measurement",
    details: "This cluster provides an interface to temperature measurement functionality, including " +
        "configuration and provision of notifications of temperature measurements.",
    xref: { document: "cluster", section: "2.3" },

    children: [
        Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 4 }),

        Attribute({
            name: "MeasuredValue", id: 0x0, type: "int16", access: "R V", conformance: "M",
            constraint: "minMeasuredValue to maxMeasuredValue", quality: "X P",

            details: "Represents the temperature in degrees Celsius as follows:" +
                "\n" +
                "MeasuredValue = 100 x temperature [°C]" +
                "\n" +
                "Where -273.15°C ≤ temperature ≤ 327.67°C, with a resolution of 0.01°C. The null value indicates " +
                "that the temperature is unknown.",

            xref: { document: "cluster", section: "2.3.4.1" }
        }),

        Attribute({
            name: "MinMeasuredValue", id: 0x1, type: "int16", access: "R V", conformance: "M",
            constraint: "-27315 to maxMeasuredValue1", default: -27315, quality: "X",
            details: "The MinMeasuredValue attribute indicates the minimum value of MeasuredValue that is capable of " +
                "being measured. See Measured Value for more details." +
                "\n" +
                "The null value indicates that the value is not available.",
            xref: { document: "cluster", section: "2.3.4.2" }
        }),

        Attribute({
            name: "MaxMeasuredValue", id: 0x2, type: "int16", access: "R V", conformance: "M",
            constraint: "minMeasuredValue1 to 32767", default: 32767, quality: "X",
            details: "The MaxMeasuredValue attribute indicates the maximum value of MeasuredValue that is capable of " +
                "being measured. See Measured Value for more details." +
                "\n" +
                "The null value indicates that the value is not available.",
            xref: { document: "cluster", section: "2.3.4.3" }
        }),

        Attribute({
            name: "Tolerance", id: 0x3, type: "uint16", access: "R V", conformance: "O",
            constraint: "0 to 2048", default: 0,
            details: "See Measured Value.",
            xref: { document: "cluster", section: "2.3.4.4" }
        })
    ]
}));
