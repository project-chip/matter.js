/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { AttributeElement as Attribute, FieldElement as Field } from "../../elements/index.js";

export const EventList = Attribute(
    {
        name: "EventList", id: 0xfffa, type: "list", access: "R V", conformance: "P, M", isSeed: true,
        quality: "F",
        details: "Each instance of a cluster shall support this attribute. This attribute shall be a list of the " +
            "event IDs of the events supported by the cluster instance.",
        xref: { document: "core", section: "7.13.6" }
    },

    Field({ name: "entry", type: "event-id" })
);

MatterDefinition.children.push(EventList);
