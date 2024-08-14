/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { SemanticNamespace } from "../../type/SemanticNamespace.js";

/**
 * The tags contained in this namespace may be used in any domain or context, to indicate an association with a
 * movement into a certain compass direction. Note the difference with Chapter 4, Common Compass Location Semantic Tag
 * Namespace.
 *
 * @see {@link MatterSpecification.v13.Namespace} § 3
 */
export const CompassDirectionTag = SemanticNamespace({
    id: 0x2,

    tags: {
        Northward: { id: 0x0, name: "Northward" },
        NorthEastward: { id: 0x1, name: "North-Eastward" },
        Eastward: { id: 0x2, name: "Eastward" },
        SouthEastward: { id: 0x3, name: "South-Eastward" },
        Southward: { id: 0x4, name: "Southward" },
        SouthWestward: { id: 0x5, name: "South-Westward" },
        Westward: { id: 0x6, name: "Westward" },
        NorthWestward: { id: 0x7, name: "North-Westward" }
    }
});
