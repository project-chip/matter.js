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
    FieldElement as Field,
    DatatypeElement as Datatype
} from "../../elements/index.js";

export const AirQuality = Cluster(
    {
        name: "AirQuality", id: 0x5b, classification: "application", pics: "AIRQUAL",
        details: "This cluster provides an interface to air quality classification using distinct levels with " +
            "human-readable labels.",
        xref: { document: "cluster", section: "2.9" }
    },

    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

    Attribute(
        { name: "FeatureMap", id: 0xfffc, type: "FeatureMap", xref: { document: "cluster", section: "2.9.4" } },
        Field({
            name: "FAIR", conformance: "O", constraint: "0", description: "Fair",
            details: "Cluster supports the Fair air quality level"
        }),
        Field({
            name: "MOD", conformance: "O", constraint: "1", description: "Moderate",
            details: "Cluster supports the Moderate air quality level"
        }),
        Field({
            name: "VPOOR", conformance: "O", constraint: "2", description: "VeryPoor",
            details: "Cluster supports the Very poor air quality level"
        }),
        Field({
            name: "XPOOR", conformance: "O", constraint: "3", description: "ExtremelyPoor",
            details: "Cluster supports the Extremely poor air quality level"
        })
    ),

    Attribute({
        name: "AirQuality", id: 0x0, type: "AirQualityEnum", access: "R V", conformance: "M",
        constraint: "desc", default: 0,
        details: "Indicates a value from AirQualityEnum that is indicative of the currently measured air quality.",
        xref: { document: "cluster", section: "2.9.6.1" }
    }),

    Datatype(
        {
            name: "AirQualityEnum", type: "enum8",
            details: "The AirQualityEnum provides a representation of the quality of the analyzed air. It is up to the " +
                "device manufacturer to determine the mapping between the measured values and their corresponding " +
                "enumeration values.",
            xref: { document: "cluster", section: "2.9.5.1" }
        },

        Field({ name: "Unknown", id: 0x0, conformance: "M", description: "The air quality is unknown." }),
        Field({ name: "Good", id: 0x1, conformance: "M", description: "The air quality is good." }),
        Field({ name: "Fair", id: 0x2, conformance: "FAIR", description: "The air quality is fair." }),
        Field({ name: "Moderate", id: 0x3, conformance: "MOD", description: "The air quality is moderate." }),
        Field({ name: "Poor", id: 0x4, conformance: "M", description: "The air quality is poor." }),
        Field({ name: "VeryPoor", id: 0x5, conformance: "VPOOR", description: "The air quality is very poor." }),
        Field({ name: "ExtremelyPoor", id: 0x6, conformance: "XPOOR", description: "The air quality is extremely poor." })
    )
);

MatterDefinition.children.push(AirQuality);
