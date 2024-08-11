/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { LocalMatter } from "../local.js";

LocalMatter.children.push({
    tag: "cluster",
    name: "BasicInformation",

    // We override default in Model to 0 in order to use our default settings.
    // Both API versions use defaults when 0 would exist.
    children: [
        {
            tag: "attribute",
            name: "MaxPathsPerInvoke",
            id: 0x16,
            constraint: "min 0",
            default: 0,
        },
    ],
});
