/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DatatypeElement as Datatype, FieldElement as Field } from "../../elements/index.js";

export const AtomicAttributeStatusStruct = Datatype(
    {
        name: "AtomicAttributeStatusStruct", type: "struct",
        details: "This struct indicates the status of an attribute during an atomic write.",
        xref: { document: "core", section: "7.15.5" }
    },
    Field({
        name: "AttributeId", id: 0x0, type: "attrib-id", conformance: "M",
        details: "This field shall indicate the ID of the attribute with the associated StatusCode.",
        xref: { document: "core", section: "7.15.5.1" }
    }),
    Field({
        name: "StatusCode", id: 0x1, type: "status", conformance: "M",
        details: "This field shall indicate the atomic status of an attribute.",
        xref: { document: "core", section: "7.15.5.2" }
    })
);

MatterDefinition.children.push(AtomicAttributeStatusStruct);
