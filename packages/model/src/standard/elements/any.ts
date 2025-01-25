/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DatatypeElement as Datatype } from "../../elements/index.js";

export const any = Datatype({
    name: "any", description: "A datatype that may represent any value.", metatype: "any",
    details: "We use this type in places where the Matter specification allows for values of any type."
});
MatterDefinition.children.push(any);
