/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { LocalMatter } from "../local.js";

LocalMatter.children.push({
    tag: "cluster",
    name: "Channel",

    children: [
        // In the Channel cluster definition, the spec references AdditionalInfoStruct from in the ContentLauncher
        // cluster without defining it.  Probably because this is the way CHIP works.  This creates a local alias so
        // the type resolves
        {
            tag: "datatype",
            name: "AdditionalInfoStruct",
            type: "ContentLauncher.AdditionalInfoStruct",
        },
    ],
});
