/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", name: "FlowMeasurement", id: 0x404, classification: "application",
    description: "Flow Measurement",
    details: "This cluster provides an interface to flow measurement functionality, including configuration and " +
        "provision of notifications of flow measurements.",
    xref: { document: "cluster", section: "2.5" },

    children: [
        { tag: "attribute", name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 3 },

        {
            tag: "attribute", name: "MeasuredValue", id: 0x0, type: "uint16", access: "R V", conformance: "M",
            constraint: "MinMeasuredValue to MaxMeasuredValue", default: null, quality: "X P",
            details: "MeasuredValue represents the flow in m/h as follows: MeasuredValue = 10 x Flow" +
                "\n" +
                "The null value indicates that the flow measurement is unknown, otherwise the range shall be as " +
                "described in Measured Value.",
            xref: { document: "cluster", section: "2.5.4.1" }
        },

        {
            tag: "attribute", name: "MinMeasuredValue", id: 0x1, type: "uint16", access: "R V",
            conformance: "M", constraint: "0 to MaxMeasuredValue1", quality: "X",
            details: "The MinMeasuredValue attribute indicates the minimum value of MeasuredValue that can be measured. " +
                "See Measured Value for more details." +
                "\n" +
                "The null value indicates that the value is not available.",
            xref: { document: "cluster", section: "2.5.4.2" }
        },

        {
            tag: "attribute", name: "MaxMeasuredValue", id: 0x2, type: "uint16", access: "R V",
            conformance: "M", constraint: "MinMeasuredValue1 to 65534", quality: "X",
            details: "The MaxMeasuredValue attribute indicates the maximum value of MeasuredValue that can be measured. " +
                "See Measured Value for more details." +
                "\n" +
                "The null value indicates that the value is not available.",
            xref: { document: "cluster", section: "2.5.4.3" }
        },

        {
            tag: "attribute", name: "Tolerance", id: 0x3, type: "uint16", access: "R V", conformance: "O",
            constraint: "0 to 2048", default: 0,
            details: "See Measured Value.",
            xref: { document: "cluster", section: "2.5.4.4" }
        }
    ]
});
