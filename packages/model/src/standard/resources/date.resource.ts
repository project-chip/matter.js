/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    tag: "datatype", name: "date", description: "Date", xref: "core§7.19.2.4",
    details: "This data type shall be a struct as defined below.",

    children: [
        {
            tag: "field", name: "Year", xref: "core§7.19.2.4.1",
            details: "The year subfield represents years from 1900 (0) to 2155 (255)."
        },
        {
            tag: "field", name: "Month", xref: "core§7.19.2.4.2",
            details: "This field represents months January (1) to December (12)."
        },
        {
            tag: "field", name: "Day", xref: "core§7.19.2.4.3",
            details: "This field represents the day of the month. Note that values in the range 29 to 31 may be invalid, " +
                "depending on the month and year."
        },
        {
            tag: "field", name: "DayOfWeek", xref: "core§7.19.2.4.4",
            details: "This represents the day of the week from Monday (1) to Sunday (7)."
        }
    ]
});
