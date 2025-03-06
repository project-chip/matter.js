/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DatatypeElement as Datatype } from "../../elements/index.js";

export const bool = Datatype({
    name: "bool", description: "Boolean", isSeed: true, metatype: "boolean",
    details: "The Boolean type represents a logical value, either FALSE or TRUE." +
        "\n" +
        "  • FALSE shall be equivalent to the value 0 (zero)." +
        "\n" +
        "  • TRUE shall be equivalent to the value 1 (one).",
    xref: { document: "core", section: "7.19.1.1" }
});

MatterDefinition.children.push(bool);
