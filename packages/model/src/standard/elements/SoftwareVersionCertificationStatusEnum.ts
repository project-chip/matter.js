/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DatatypeElement as Datatype, FieldElement as Field } from "../../elements/index.js";

export const SoftwareVersionCertificationStatusEnum = Datatype(
    {
        name: "SoftwareVersionCertificationStatusEnum", type: "enum8",
        details: "The values 0 through 2 shall correspond to the values 0 through 2 used in certification_type in the " +
            "Certification Declaration.",
        xref: { document: "core", section: "11.23.8.2" }
    },

    Field({
        name: "DevTest", id: 0x0, conformance: "M",
        description: "used for development and test purposes (These will typically not be placed in DCL)"
    }),
    Field({
        name: "Provisional", id: 0x1, conformance: "M",
        description: "used for a SoftwareVersion when going into certification testing (These might or might not be placed in DCL, depending on CSA policy and procedures)"
    }),
    Field({
        name: "Certified", id: 0x2, conformance: "M",
        description: "used for a SoftwareVersion which has been certified"
    }),
    Field({ name: "Revoked", id: 0x3, conformance: "M", description: "used for a SoftwareVersion which has been revoked" })
);

MatterDefinition.children.push(SoftwareVersionCertificationStatusEnum);
