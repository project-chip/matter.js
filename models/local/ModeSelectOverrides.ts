/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { LocalMatter } from "../local.js";

LocalMatter.children.push({
    tag: "cluster",
    name: "ModeSelect",

    children: [
        // Change type from enum16 to uint16.  The only reason for this is to
        // get rid of the the CHILDLESS_ENUM validation error.  It's absolutely
        // unclear where these enum values come from or if there even is a
        // standard definition for them.  This doesn't affect the generated
        // output so this should be safe.
        { tag: "attribute", id: 0x1, name: "StandardNamespace", type: "uint16" },
    ],
});
