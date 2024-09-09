/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DatatypeElement as Datatype } from "../../elements/index.js";

export const ipadr = Datatype({
    name: "ipadr", type: "octstr", description: "IP Address", isSeed: true,
    details: "Either an IPv4 or an IPv6 address as defined below.",
    xref: { document: "core", section: "7.18.2.37" }
});
MatterDefinition.children.push(ipadr);
