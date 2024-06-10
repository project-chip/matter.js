/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";
import { DatatypeElement as Datatype } from "../../elements/index.js";

export const transId = Datatype({
    name: "trans-id", type: "uint32", description: "Transaction ID", isSeed: true,
    details: "An identifier for a transaction as defined in the Interaction Model specification, see Transaction " +
        "ID.",
    xref: { document: "core", section: "7.18.2.32" }
});

Matter.children.push(transId);
