/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DatatypeElement as Datatype, FieldElement as Field } from "../../elements/index.js";

export const tod = Datatype(
    { name: "tod", type: "struct", isSeed: true },
    Field({ name: "hours", type: "uint8", constraint: "0 to 23" }),
    Field({ name: "minutes", type: "uint8", constraint: "0 to 59" }),
    Field({ name: "seconds", type: "uint8", constraint: "0 to 59" }),
    Field({ name: "hundredths", type: "uint8", constraint: "0 to 99" })
);

MatterDefinition.children.push(tod);
