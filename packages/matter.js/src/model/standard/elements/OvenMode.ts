/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";
import { ClusterElement as Cluster, AttributeElement as Attribute } from "../../elements/index.js";

export const OvenMode = Cluster({
    name: "OvenMode", id: 0x49, type: "ModeBase", classification: "application",
    details: "This cluster is derived from the Mode Base cluster, defining additional mode tags and namespaced " +
        "enumerated values for oven devices.",
    xref: { document: "cluster", section: "8.11" },
    children: [Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 })]
});

Matter.children.push(OvenMode);
