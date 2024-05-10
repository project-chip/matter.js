/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { LocalMatter } from "../local.js";

LocalMatter.children.push({
    tag: "cluster",
    name: "ContentLauncher",

    children: [
        // Alias for missing datatype (see similar alias in ChannelOverrides.ts)
        {
            tag: "datatype",
            name: "CharacteristicEnum",
            type: "MediaPlayback.AdditionalInfoStruct",
        },
    ],
});
