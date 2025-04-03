/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { ClusterElement as Cluster, AttributeElement as Attribute } from "../../elements/index.js";

export const FlowMeasurement = Cluster(
    {
        name: "FlowMeasurement", id: 0x404, classification: "application", pics: "FLW",
        details: "This cluster provides an interface to flow measurement functionality, including configuration and " +
            "provision of notifications of flow measurements.",
        xref: { document: "cluster", section: "2.5" }
    },

    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 3 }),

    Attribute(
        {
            name: "MeasuredValue", id: 0x0, type: "uint16", access: "R V", conformance: "M",
            constraint: "minMeasuredValue to maxMeasuredValue", default: null, quality: "X P",

            details: "Indicates the flow in m/h as follows:" +
                "\n" +
                "MeasuredValue = 10 x Flow" +
                "\n" +
                "The null value indicates that the flow measurement is unknown, otherwise the range shall be as " +
                "described in Measured Value.",

            xref: { document: "cluster", section: "2.5.4.1" }
        }
    ),

    Attribute({
        name: "MinMeasuredValue", id: 0x1, type: "uint16", access: "R V", conformance: "M",
        constraint: "max 65533", quality: "X",
        details: "Indicates the minimum value of MeasuredValue that can be measured. See Measured Value for more " +
            "details." +
            "\n" +
            "The null value indicates that the value is not available.",
        xref: { document: "cluster", section: "2.5.4.2" }
    }),

    Attribute({
        name: "MaxMeasuredValue", id: 0x2, type: "uint16", access: "R V", conformance: "M",
        constraint: "min minMeasuredValue + 1", quality: "X",
        details: "Indicates the maximum value of MeasuredValue that can be measured. See" +
            "\n" +
            "Measured Value for more details." +
            "\n" +
            "The null value indicates that the value is not available.",
        xref: { document: "cluster", section: "2.5.4.3" }
    }),

    Attribute({
        name: "Tolerance", id: 0x3, type: "uint16", access: "R V", conformance: "O", constraint: "max 2048",
        default: 0,
        details: "See Measured Value.",
        xref: { document: "cluster", section: "2.5.4.4" }
    })
);

MatterDefinition.children.push(FlowMeasurement);
