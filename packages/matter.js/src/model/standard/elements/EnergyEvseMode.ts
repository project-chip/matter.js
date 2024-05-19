/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";
import { ClusterElement as Cluster, AttributeElement as Attribute } from "../../elements/index.js";

export const EnergyEvseMode = Cluster({
    name: "EnergyEvseMode", id: 0x9d, type: "ModeBase", classification: "application", pics: "EEVSEM",
    details: "This cluster is derived from the Mode Base cluster which also defines a namespace for the operation " +
        "of EVSE devices.",
    xref: { document: "cluster", section: "9.4" },
    children: [Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 })]
});

Matter.children.push(EnergyEvseMode);
