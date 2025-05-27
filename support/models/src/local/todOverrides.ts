/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { FieldElement } from "@matter/model";
import { LocalMatter } from "../local.js";

// Spec lists "Time of Day" fields in prose so we must define manually
LocalMatter.children.push({
    tag: "datatype",
    name: "tod",

    details: "Represents time without a date component.",

    children: [
        FieldElement({ type: "uint8", name: "hours", constraint: "0 to 23", description: "Hour of the current day." }),
        FieldElement({
            type: "uint8",
            name: "minutes",
            constraint: "0 to 59",
            description: "Minute of the current hour.",
        }),
        FieldElement({
            type: "uint8",
            name: "seconds",
            constraint: "0 to 59",
            description: "Second of the current minute.",
        }),
        FieldElement({
            type: "uint8",
            name: "hundredths",
            constraint: "0 to 99",
            description: "Hundredth of the current second.",
        }),
    ],
});
