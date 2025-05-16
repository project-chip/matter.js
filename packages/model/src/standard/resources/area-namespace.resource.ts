/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    tag: "semanticNamespace", name: "AreaNamespace", xref: "namespace§13",
    details: "The tags contained in this namespace may be used in any domain or context, to indicate an " +
        "association with an indoor or outdoor area of a home.",

    children: [
        { tag: "semanticTag", name: "Bathroom", description: "Also known as Restroom" },
        { tag: "semanticTag", name: "Boxroom", description: "A small room typically used for storage" },
        {
            tag: "semanticTag", name: "Den",
            description: "A small, comfortable room for individual activities such as work or hobbies"
        },
        { tag: "semanticTag", name: "Ensuite", description: "A bathroom directly accessible from a bedroom" },
        { tag: "semanticTag", name: "Guest Bathroom", description: "Also known as Guest Restroom" },
        {
            tag: "semanticTag", name: "Hearth Room",
            description: "A cozy room containing a fireplace or other point heat source"
        },
        {
            tag: "semanticTag", name: "Mud Room",
            description: "A space used to remove soiled garments prior to entering the domicile proper"
        },
        { tag: "semanticTag", name: "Pantry", description: "AKA a larder, a place where food is stored" },
        { tag: "semanticTag", name: "Scullery", description: "A utility space for cleaning dishes and laundry" },
        {
            tag: "semanticTag", name: "Snug",
            description: "An informal space meant to be 'cozy', 'snug', relaxed, meant to share with family or friends"
        },
        { tag: "semanticTag", name: "Toilet", description: "A room dedicated to a toilet; a water closet / WC" }
    ]
});
