/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DatatypeElement as Datatype, FieldElement as Field } from "../../elements/index.js";

export const AtomicRequestTypeEnum = Datatype(
    { name: "AtomicRequestTypeEnum", type: "enum8", xref: { document: "core", section: "7.15.4" } },
    Field({ name: "BeginWrite", id: 0x0, conformance: "M", description: "Begin an atomic write" }),
    Field({ name: "CommitWrite", id: 0x1, conformance: "M", description: "Commit an atomic write" }),
    Field({
        name: "RollbackWrite", id: 0x2, conformance: "M",
        description: "Rollback an atomic write, discarding any pending changes"
    })
);

MatterDefinition.children.push(AtomicRequestTypeEnum);
