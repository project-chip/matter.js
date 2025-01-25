/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { LocalMatter } from "../local.js";

LocalMatter.children.push({
    tag: "cluster",
    name: "Channel",
    asOf: "1.3",

    children: [
        // In the Channel cluster definition, the spec references AdditionalInfoStruct from in the ContentLauncher
        // cluster without defining it.  Probably a case of CHIP behavior leaking into the specification even though
        // it's formally invalid.  We create a local alias so the type resolves
        {
            tag: "datatype",
            name: "AdditionalInfoStruct",
            type: "ContentLauncher.AdditionalInfoStruct",
        },
    ],
});
