/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { SemanticNamespace } from "../endpoint/type/SemanticNamespace.js";

/**
 * The tags contained in this namespace may be used in any domain or context, to indicate an association with a certain
 * numeric feature of a device (e.g. a numeric input button).
 *
 * @see {@link MatterSpecification.v14.Namespace} § 8
 */
export const NumberTag = SemanticNamespace({
    id: 0x7,

    tags: {
        Zero: { id: 0x0, label: "Zero" },
        One: { id: 0x1, label: "One" },
        Two: { id: 0x2, label: "Two" },
        Three: { id: 0x3, label: "Three" },
        Four: { id: 0x4, label: "Four" },
        Five: { id: 0x5, label: "Five" },
        Six: { id: 0x6, label: "Six" },
        Seven: { id: 0x7, label: "Seven" },
        Eight: { id: 0x8, label: "Eight" },
        Nine: { id: 0x9, label: "Nine" },
        Ten: { id: 0xa, label: "Ten" }
    }
});
