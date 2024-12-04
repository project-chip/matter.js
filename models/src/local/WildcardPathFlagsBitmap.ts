/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { LocalMatter } from "../local.js";

LocalMatter.children.push({
    tag: "datatype",
    name: "WildcardPathFlagsBitmap",

    children: [
        {
            tag: "field",
            name: "Reserved",
            constraint: "3",
            description: "Reserved",
        },
    ],
});
