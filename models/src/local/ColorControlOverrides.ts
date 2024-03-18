/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { LocalMatter } from "../local.js";

LocalMatter.children.push({
    tag: "cluster",
    name: "ColorControl",

    children: [
        // Override primary conformance using our ">" extension to conformance syntax
        { tag: "attribute", id: 0x11, name: "Primary1X", conformance: "NumberOfPrimaries > 0" },
        { tag: "attribute", id: 0x12, name: "Primary1Y", conformance: "NumberOfPrimaries > 0" },
        { tag: "attribute", id: 0x13, name: "Primary1Intensity", conformance: "NumberOfPrimaries > 0" },
        { tag: "attribute", id: 0x15, name: "Primary2X", conformance: "NumberOfPrimaries > 1" },
        { tag: "attribute", id: 0x16, name: "Primary2Y", conformance: "NumberOfPrimaries > 1" },
        { tag: "attribute", id: 0x17, name: "Primary2Intensity", conformance: "NumberOfPrimaries > 1" },
        { tag: "attribute", id: 0x19, name: "Primary3X", conformance: "NumberOfPrimaries > 2" },
        { tag: "attribute", id: 0x1a, name: "Primary3Y", conformance: "NumberOfPrimaries > 2" },
        { tag: "attribute", id: 0x1b, name: "Primary3Intensity", conformance: "NumberOfPrimaries > 2" },
        { tag: "attribute", id: 0x20, name: "Primary4X", conformance: "NumberOfPrimaries > 3" },
        { tag: "attribute", id: 0x21, name: "Primary4Y", conformance: "NumberOfPrimaries > 3" },
        { tag: "attribute", id: 0x22, name: "Primary4Intensity", conformance: "NumberOfPrimaries > 3" },
        { tag: "attribute", id: 0x24, name: "Primary5X", conformance: "NumberOfPrimaries > 4" },
        { tag: "attribute", id: 0x25, name: "Primary5Y", conformance: "NumberOfPrimaries > 4" },
        { tag: "attribute", id: 0x26, name: "Primary5Intensity", conformance: "NumberOfPrimaries > 4" },
        { tag: "attribute", id: 0x28, name: "Primary6X", conformance: "NumberOfPrimaries > 5" },
        { tag: "attribute", id: 0x29, name: "Primary6Y", conformance: "NumberOfPrimaries > 5" },
        { tag: "attribute", id: 0x2a, name: "Primary6Intensity", conformance: "NumberOfPrimaries > 5" },

        // Spec defines conformance on these as "CT | ColorTemperatureMireds" which doesn't make sense because
        // conformance on ColorTemperatureMireds is "CT"
        {
            tag: "attribute",
            id: 0x400d,
            name: "CoupleColorTempToLevelMinMireds",
            conformance: "CT & ColorTemperatureMireds",
        },
        {
            tag: "attribute",
            id: 0x4010,
            name: "StartUpColorTemperatureMireds",
            conformance: "CT & ColorTemperatureMireds",
        },

        // Spec states the values of this bitmap are the same as the feature map
        { tag: "attribute", id: 0x400a, name: "ColorCapabilities", type: "FeatureMap" },

        // The spec defines "direction"
    ],
});
