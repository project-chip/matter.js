/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { LocalMatter } from "../local.js";

LocalMatter.children.push({
    tag: "cluster",
    name: "ElectricalPowerMeasurement",
    asOf: "1.3",

    children: [
        {
            tag: "event",
            id: 0,
            name: "MeasurementPeriodRanges",
            children: [
                {
                    tag: "field",
                    name: "Ranges",

                    // 1.3 spec mislabels the "access" column as "default"
                    default: [],
                    access: "R V",
                },
            ],
        },
    ],
});
