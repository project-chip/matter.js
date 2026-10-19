/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { EndpointComposition } from "@matter/model";
import { LocalMatter } from "../local.js";

// The device types the specification names as composing their PartsList of every descendant rather
// than of their own children (Core § 9.2.7.2; Bridged Node § 2.5.6, whose one-endpoint pattern has an
// empty PartsList). It states the pattern in prose in each device type's own section, which the
// scrape does not carry.
for (const name of ["RootNode", "Aggregator", "BridgedNode"]) {
    LocalMatter.children.push({
        tag: "deviceType",
        name,
        composition: EndpointComposition.FullFamily,
    });
}
