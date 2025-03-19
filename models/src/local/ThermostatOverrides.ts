/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { FieldValue } from "@matter/model";
import { LocalMatter } from "../local.js";

LocalMatter.children.push({
    tag: "cluster",
    name: "Thermostat",
    asOf: "1.3",

    children: [
        // See comments in ChannelClusterOverrides.ts...  Another example of clusters illegally referencing structures
        // in other clusters
        {
            tag: "datatype",
            name: "OccupancyBitmap",
            type: "OccupancySensing.OccupancyBitmap",
            until: "1.3",
        },
        {
            tag: "attribute",
            id: 0x1b,
            name: "ControlSequenceOfOperation",
            default: FieldValue.None,
        },
    ],
});
