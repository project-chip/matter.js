/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", name: "PressureMeasurement", id: 0x403, classification: "application",
    description: "Pressure Measurement",
    details: "This cluster provides an interface to pressure measurement functionality, including configuration " +
        "and provision of notifications of pressure measurements.",
    xref: { document: "cluster", section: "2.4" },

    children: [
        { tag: "attribute", name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 3 },

        {
            tag: "attribute", name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
            xref: { document: "cluster", section: "2.4.4" },
            children: [{
                tag: "datatype", name: "EXT", conformance: "O", constraint: "0", description: "Extended",
                details: "The cluster is capable of extended range and resolution"
            }]
        },

        {
            tag: "attribute", name: "MeasuredValue", id: 0x0, type: "int16", access: "R V", conformance: "M",
            constraint: "MinMeasuredValue to MaxMeasuredValue", quality: "X P",
            details: "This attribute represents the pressure in kPa as follows:" +
                "\n" +
                "MeasuredValue = 10 x Pressure [kPa]" +
                "\n" +
                "The null value indicates that the value is not available.",
            xref: { document: "cluster", section: "2.4.5.1" }
        },

        {
            tag: "attribute", name: "MinMeasuredValue", id: 0x1, type: "int16", access: "R V", conformance: "M",
            constraint: "-32767 to MaxMeasuredValue1", quality: "X",
            details: "This attribute indicates the minimum value of MeasuredValue that can be measured. See Measured " +
                "Value for more details." +
                "\n" +
                "The null value indicates that the value is not available.",
            xref: { document: "cluster", section: "2.4.5.2" }
        },

        {
            tag: "attribute", name: "MaxMeasuredValue", id: 0x2, type: "int16", access: "R V", conformance: "M",
            constraint: "MinMeasuredValue1 to 32767", quality: "X",
            details: "This attribute indicates the maximum value of MeasuredValue that can be measured. See Measured " +
                "Value for more details." +
                "\n" +
                "The null value indicates that the value is not available.",
            xref: { document: "cluster", section: "2.4.5.3" }
        },

        {
            tag: "attribute", name: "Tolerance", id: 0x3, type: "uint16", access: "R V", conformance: "O",
            constraint: "0 to 2048", default: 0,
            details: "This attribute indicates the magnitude of the possible error that is associated with ScaledValue." +
                "\n" +
                "See Measured Value.",
            xref: { document: "cluster", section: "2.4.5.4" }
        },

        {
            tag: "attribute", name: "ScaledValue", id: 0x10, type: "int16", access: "R V", conformance: "EXT",
            constraint: "MinScaledValue to MaxScaledValue", default: 0, quality: "X",
            details: "ScaledValue represents the pressure in Pascals as follows:" +
                "\n" +
                "ScaledValue = 10Scale x Pressure [Pa]" +
                "\n" +
                "The null value indicates that the value is not available.",
            xref: { document: "cluster", section: "2.4.5.5" }
        },

        {
            tag: "attribute", name: "MinScaledValue", id: 0x11, type: "int16", access: "R V",
            conformance: "EXT", constraint: "-32767 to MaxScaledValue1", default: 0, quality: "X",
            details: "The MinScaledValue attribute indicates the minimum value of ScaledValue that can be measured. The " +
                "null value indicates that the value is not available.",
            xref: { document: "cluster", section: "2.4.5.6" }
        },

        {
            tag: "attribute", name: "MaxScaledValue", id: 0x12, type: "int16", access: "R V",
            conformance: "EXT", constraint: "MinScaledValue1 to 32767", default: 0, quality: "X",
            details: "This attribute indicates the maximum value of ScaledValue that can be measured. MaxScaledValue " +
                "shall be greater than MinScaledValue." +
                "\n" +
                "The null value indicates that the value is not available.",
            xref: { document: "cluster", section: "2.4.5.7" }
        },

        {
            tag: "attribute", name: "ScaledTolerance", id: 0x13, type: "uint16", access: "R V",
            conformance: "[EXT]", constraint: "0 to 2048", default: 0, quality: "P",
            details: "This attribute indicates the magnitude of the possible error that is associated with ScaledValue. " +
                "The true value is located in the range" +
                "\n" +
                "(ScaledValue – ScaledTolerance) to (ScaledValue + ScaledTolerance).",
            xref: { document: "cluster", section: "2.4.5.8" }
        },

        {
            tag: "attribute", name: "Scale", id: 0x14, type: "int8", access: "R V", conformance: "EXT",
            constraint: "-127 to 127", default: 0,
            details: "This attribute indicates the base 10 exponent used to obtain ScaledValue (see ScaledValue " +
                "Attribute).",
            xref: { document: "cluster", section: "2.4.5.9" }
        }
    ]
});
