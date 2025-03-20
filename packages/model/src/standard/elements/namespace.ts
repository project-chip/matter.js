/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DatatypeElement as Datatype } from "../../elements/index.js";

export const namespace = Datatype({
    name: "namespace", type: "uint8", description: "Namespace", isSeed: true,
    details: "The Namespace type identifies the namespace used for a semantic tag.",
    xref: { document: "core", section: "7.19.2.43" }
});
MatterDefinition.children.push(namespace);
