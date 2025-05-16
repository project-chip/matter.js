/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DatatypeElement as Datatype, FieldElement as Field } from "../../elements/index.js";

export const date = Datatype(
    { name: "date", type: "struct", isSeed: true, metatype: "date" },
    Field({ name: "Year", id: 0x0, type: "uint8", conformance: "M", default: null, quality: "X" }),
    Field({ name: "Month", id: 0x1, type: "uint8", conformance: "M", constraint: "1 to 12", default: null, quality: "X" }),
    Field({ name: "Day", id: 0x2, type: "uint8", conformance: "M", constraint: "1 to 31", default: null, quality: "X" }),
    Field({ name: "DayOfWeek", id: 0x3, type: "uint8", conformance: "M", constraint: "1 to 7", default: null, quality: "X" })
);

MatterDefinition.children.push(date);
