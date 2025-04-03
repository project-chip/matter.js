/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { ClusterElement as Cluster, AttributeElement as Attribute } from "../../elements/index.js";

export const TemperatureMeasurement = Cluster(
    {
        name: "TemperatureMeasurement", id: 0x402, classification: "application", pics: "TMP",
        details: "This cluster provides an interface to temperature measurement functionality, including configuration " +
            "and provision of notifications of temperature measurements.",
        xref: { document: "cluster", section: "2.3" }
    },

    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 4 }),

    Attribute({
        name: "MeasuredValue", id: 0x0, type: "temperature", access: "R V", conformance: "M",
        constraint: "minMeasuredValue to maxMeasuredValue", quality: "X P",
        details: "Indicates the measured temperature. The null value indicates that the temperature is unknown.",
        xref: { document: "cluster", section: "2.3.4.1" }
    }),

    Attribute({
        name: "MinMeasuredValue", id: 0x1, type: "temperature", access: "R V", conformance: "M",
        constraint: "-27315 to maxMeasuredValue - 1", default: -27315, quality: "X",
        details: "Indicates the minimum value of MeasuredValue that is capable of being measured. See Measured Value " +
            "for more details." +
            "\n" +
            "The null value indicates that the value is not available.",
        xref: { document: "cluster", section: "2.3.4.2" }
    }),

    Attribute({
        name: "MaxMeasuredValue", id: 0x2, type: "temperature", access: "R V", conformance: "M",
        constraint: "minMeasuredValue + 1 to 32767", default: 32767, quality: "X",
        details: "This attribute indicates the maximum value of MeasuredValue that is capable of being measured. See " +
            "Measured Value for more details." +
            "\n" +
            "The null value indicates that the value is not available.",
        xref: { document: "cluster", section: "2.3.4.3" }
    }),

    Attribute({
        name: "Tolerance", id: 0x3, type: "uint16", access: "R V", conformance: "O", constraint: "max 2048",
        default: 0,
        details: "See Measured Value.",
        xref: { document: "cluster", section: "2.3.4.4" }
    })
);

MatterDefinition.children.push(TemperatureMeasurement);
