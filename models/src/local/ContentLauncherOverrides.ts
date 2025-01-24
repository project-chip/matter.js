/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { LocalMatter } from "../local.js";

LocalMatter.children.push({
    tag: "cluster",
    name: "ContentLauncher",
    asOf: "1.3",

    children: [
        // Alias for missing datatype (see similar alias in ChannelOverrides.ts)
        {
            tag: "datatype",
            name: "CharacteristicEnum",
            type: "MediaPlayback.CharacteristicEnum",
        },
    ],
});
