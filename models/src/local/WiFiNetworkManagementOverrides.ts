/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { LocalMatter } from "../local.js";

LocalMatter.children.push({
    tag: "cluster",
    name: "WiFiNetworkManagement",

    children: [
        {
            tag: "command",
            id: 0x1,
            name: "NetworkPassphraseResponse",
            children: [
                { tag: "field", id: 0x0, name: "Passphrase", type: "octstr", constraint: "max 64", conformance: "M" },
            ],
        },
    ],
});
