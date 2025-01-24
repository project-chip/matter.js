/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DatatypeElement as Datatype, FieldElement as Field } from "../../elements/index.js";

export const tod = Datatype(
    {
        name: "tod", type: "struct", description: "Time of day", isSeed: true,
        details: "Represents time without a date component.",
        xref: { document: "core", section: "7.19.2.3" }
    },
    Field({ name: "hours", type: "uint8", constraint: "0 to 23", description: "Hour of the current day." }),
    Field({ name: "minutes", type: "uint8", constraint: "0 to 59", description: "Minute of the current hour." }),
    Field({ name: "seconds", type: "uint8", constraint: "0 to 59", description: "Second of the current minute." }),
    Field({ name: "hundredths", type: "uint8", constraint: "0 to 99", description: "Hundredth of the current second." })
);

MatterDefinition.children.push(tod);
