/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DatatypeElement as Datatype, FieldElement as Field } from "../../elements/index.js";

export const date = Datatype(
    {
        name: "date", type: "struct", description: "Date", isSeed: true, metatype: "date",
        details: "This data type shall be a struct as defined below.",
        xref: { document: "core", section: "7.19.2.4" }
    },
    Field({
        name: "Year", id: 0x0, type: "uint8", conformance: "M", default: null, quality: "X",
        details: "The year subfield represents years from 1900 (0) to 2155 (255).",
        xref: { document: "core", section: "7.19.2.4.1" }
    }),

    Field({
        name: "Month", id: 0x1, type: "uint8", conformance: "M", constraint: "1 to 12", default: null,
        quality: "X",
        details: "This field represents months January (1) to December (12).",
        xref: { document: "core", section: "7.19.2.4.2" }
    }),

    Field({
        name: "Day", id: 0x2, type: "uint8", conformance: "M", constraint: "1 to 31", default: null,
        quality: "X",
        details: "This field represents the day of the month. Note that values in the range 29 to 31 may be invalid, " +
            "depending on the month and year.",
        xref: { document: "core", section: "7.19.2.4.3" }
    }),

    Field({
        name: "DayOfWeek", id: 0x3, type: "uint8", conformance: "M", constraint: "1 to 7", default: null,
        quality: "X",
        details: "This represents the day of the week from Monday (1) to Sunday (7).",
        xref: { document: "core", section: "7.19.2.4.4" }
    })
);

MatterDefinition.children.push(date);
