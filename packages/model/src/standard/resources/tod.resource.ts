/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    tag: "datatype", name: "tod", description: "Time of day", xref: "core§7.19.2",
    details: "Represents time without a date component.",

    children: [
        { tag: "field", name: "hours", description: "Hour of the current day." },
        { tag: "field", name: "minutes", description: "Minute of the current hour." },
        { tag: "field", name: "seconds", description: "Second of the current minute." },
        { tag: "field", name: "hundredths", description: "Hundredth of the current second." }
    ]
});
