/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";
import {
    ClusterElement as Cluster,
    AttributeElement as Attribute,
    FieldElement as Field,
    CommandElement as Command
} from "../../elements/index.js";

export const Scenes = Cluster({
    name: "Scenes",

    children: [
        Attribute({ name: "FeatureMap", id: 0xfffc, children: [Field({ name: "SN", default: true })] }),
        Attribute({
            name: "NameSupport", id: 0x4,
            children: [Field({ name: "NameSupport", constraint: "7", default: true })]
        }),
        Command({ name: "EnhancedAddScene", id: 0x40, type: "AddScene", direction: "request" }),
        Command({ name: "EnhancedAddSceneResponse", id: 0x40, type: "AddSceneResponse", direction: "response" }),
        Command({ name: "EnhancedViewScene", id: 0x41, type: "ViewScene", direction: "request" }),
        Command({ name: "EnhancedViewSceneResponse", id: 0x41, type: "ViewSceneResponse", direction: "response" })
    ]
});

Matter.children.push(Scenes);
