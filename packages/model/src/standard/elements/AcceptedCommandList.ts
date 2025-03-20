/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { AttributeElement as Attribute, FieldElement as Field } from "../../elements/index.js";

export const AcceptedCommandList = Attribute(
    {
        name: "AcceptedCommandList", id: 0xfff9, type: "list", access: "R V", conformance: "M",
        isSeed: true, quality: "F",

        details: "This attribute is a list of client generated commands which are supported by this cluster server " +
            "instance." +
            "\n" +
            "Each instance of a cluster shall support this attribute." +
            "\n" +
            "This attribute shall be a list of the command IDs for client generated commands that are supported " +
            "and processed by the server." +
            "\n" +
            "For each client request command in this list that mandates a response from the server, the" +
            "\n" +
            "response command shall be indicated in the GeneratedCommandList attribute." +
            "\n" +
            "If any attribute on a server supports atomic writes, this attribute shall contain the command ID for " +
            "AtomicRequest.",

        xref: { document: "core", section: "7.13.4" }
    },

    Field({ name: "entry", type: "command-id" })
);

MatterDefinition.children.push(AcceptedCommandList);
