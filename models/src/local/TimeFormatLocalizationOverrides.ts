/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { LocalMatter } from "../local.js";

LocalMatter.children.push({
    tag: "cluster",
    name: "TimeFormatLocalization",

    children: [
        {
            tag: "attribute",
            name: "ActiveCalendarType",
            id: 1,
            constraint: "in SupportedCalendarTypes",
        },
    ],
});
