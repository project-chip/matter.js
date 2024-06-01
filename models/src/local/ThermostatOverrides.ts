/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

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
        },
    ],
});
