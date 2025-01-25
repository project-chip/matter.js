/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { AttributeElement as Attribute, FieldElement as Field } from "../../elements/index.js";

export const AttributeList = Attribute(
    {
        name: "AttributeList", id: 0xfffb, type: "list", access: "R V", conformance: "M", isSeed: true,
        quality: "F",
        details: "Each instance of a cluster shall support this attribute. This attribute shall be a list of the " +
            "attribute IDs of the attributes supported by the cluster instance.",
        xref: { document: "core", section: "7.13.3" }
    },

    Field({ name: "entry", type: "attrib-id" })
);

MatterDefinition.children.push(AttributeList);
