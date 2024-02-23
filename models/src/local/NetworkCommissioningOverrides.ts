/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { LocalMatter } from "../local.js";

LocalMatter.children.push({
    tag: "cluster",
    name: "NetworkCommissioning",

    children: [
        {
            tag: "command",
            name: "ScanNetworks",
            id: 0x0,

            children: [
                {
                    tag: "field",
                    name: "Ssid",
                    id: 0x0,
                    constraint: "0 to 32",
                },
            ],
        },
    ],
});
