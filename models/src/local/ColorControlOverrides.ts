/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
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

        // Spec defines conformance on these as "CT | ColorTemperatureMireds" which doesn't
        // make sense because conformance on ColorTemperatureMireds is "CT"
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
    ],
});
