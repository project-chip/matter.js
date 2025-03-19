/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DatatypeElement as Datatype, FieldElement as Field } from "../../elements/index.js";

export const WildcardPathFlagsBitmap = Datatype(
    {
        name: "WildcardPathFlagsBitmap", type: "map16",
        details: "The WildcardPathFlagsBitmap indicates flags that apply to the path, affecting wildcard expansion. " +
            "The following flags are defined:",
        xref: { document: "core", section: "8.9.2.3" }
    },

    Field({
        name: "WildcardSkipRootNode", constraint: "0",
        description: "Skip the Root Node endpoint (endpoint 0) during wildcard expansion."
    }),
    Field({
        name: "WildcardSkipGlobalAttributes", constraint: "1",
        description: "Skip several large global attributes during wildcard expansion."
    }),
    Field({
        name: "WildcardSkipAttributeList", constraint: "2",
        description: "Skip the AttributeList global attribute during wildcard expansion."
    }),
    Field({ name: "Reserved", constraint: "3" }),
    Field({
        name: "WildcardSkipCommandLists", constraint: "4",
        description: "Skip the AcceptedCommandList and GeneratedCommandList global attributes during wildcard expansion."
    }),
    Field({
        name: "WildcardSkipCustomElements", constraint: "5",
        description: "Skip any manufacturer-specific clusters or attributes during wildcard expansion."
    }),
    Field({
        name: "WildcardSkipFixedAttributes", constraint: "6",
        description: "Skip any Fixed (F) quality attributes during wildcard expansion."
    }),
    Field({
        name: "WildcardSkipChangesOmittedAttributes", constraint: "7",
        description: "Skip any Changes Omitted (C) quality attributes during wildcard expansion."
    }),
    Field({
        name: "WildcardSkipDiagnosticsClusters", constraint: "8",
        description: "Skip all clusters with the Diagnostics (K) quality during wildcard expansion."
    })
);

MatterDefinition.children.push(WildcardPathFlagsBitmap);
