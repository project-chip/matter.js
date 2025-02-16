/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DatatypeElement as Datatype } from "../../elements/index.js";

export const octstr = Datatype({
    name: "octstr", description: "Octet string", isSeed: true, metatype: "bytes",
    details: "The octet string data type defines a sequence of octets with a finite octet count from 0 to 65534. " +
        "It is recommended to define a constraint on the maximum possible count.",
    xref: { document: "core", section: "7.19.1.7" }
});

MatterDefinition.children.push(octstr);
