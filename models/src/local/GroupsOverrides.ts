/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Globals } from "@project-chip/matter.js/model";
import { LocalMatter } from "../local.js";

LocalMatter.children.push({
    tag: "cluster",
    name: "Groups",

    children: [
        // Enable group names by default.  Not mandated by the specification but a reasonable default
        {
            tag: "attribute",
            id: Globals.FeatureMap.id,
            name: Globals.FeatureMap.name,
            children: [{ tag: "field", name: "GN", default: true }],
        },

        // Set NameSupport default to match feature default per the specification
        {
            tag: "attribute",
            id: 0,
            name: "NameSupport",
            children: [{ tag: "field", name: "NameSupport", default: true, constraint: "7" }],
        },
    ],
});
