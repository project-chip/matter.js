/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import {
    SemanticNamespaceElement as SemanticNamespace,
    SemanticTagElement as SemanticTag
} from "../../elements/index.js";

export const AreaNamespaceNs = SemanticNamespace(
    {
        name: "AreaNamespace", id: 0x10,
        details: "The tags contained in this namespace may be used in any domain or context, to indicate an " +
            "association with an indoor or outdoor area of a home.",
        xref: { document: "namespace", section: "13" }
    },

    SemanticTag({ name: "Aisle", id: 0x0 }),
    SemanticTag({ name: "Attic", id: 0x1 }),
    SemanticTag({ name: "Back Door", id: 0x2 }),
    SemanticTag({ name: "Back Yard", id: 0x3 }),
    SemanticTag({ name: "Balcony", id: 0x4 }),
    SemanticTag({ name: "Ballroom", id: 0x5 }),
    SemanticTag({ name: "Bathroom", id: 0x6, description: "Also known as Restroom" }),
    SemanticTag({ name: "Bedroom", id: 0x7 }),
    SemanticTag({ name: "Border", id: 0x8 }),
    SemanticTag({ name: "Boxroom", id: 0x9, description: "A small room typically used for storage" }),
    SemanticTag({ name: "Breakfast Room", id: 0xa }),
    SemanticTag({ name: "Carport", id: 0xb }),
    SemanticTag({ name: "Cellar", id: 0xc }),
    SemanticTag({ name: "Cloakroom", id: 0xd }),
    SemanticTag({ name: "Closet", id: 0xe }),
    SemanticTag({ name: "Conservatory", id: 0xf }),
    SemanticTag({ name: "Corridor", id: 0x10 }),
    SemanticTag({ name: "Craft Room", id: 0x11 }),
    SemanticTag({ name: "Cupboard", id: 0x12 }),
    SemanticTag({ name: "Deck", id: 0x13 }),
    SemanticTag({
        name: "Den", id: 0x14,
        description: "A small, comfortable room for individual activities such as work or hobbies"
    }),
    SemanticTag({ name: "Dining", id: 0x15 }),
    SemanticTag({ name: "Drawing Room", id: 0x16 }),
    SemanticTag({ name: "Dressing Room", id: 0x17 }),
    SemanticTag({ name: "Driveway", id: 0x18 }),
    SemanticTag({ name: "Elevator", id: 0x19 }),
    SemanticTag({ name: "Ensuite", id: 0x1a, description: "A bathroom directly accessible from a bedroom" }),
    SemanticTag({ name: "Entrance", id: 0x1b }),
    SemanticTag({ name: "Entryway", id: 0x1c }),
    SemanticTag({ name: "Family Room", id: 0x1d }),
    SemanticTag({ name: "Foyer", id: 0x1e }),
    SemanticTag({ name: "Front Door", id: 0x1f }),
    SemanticTag({ name: "Front Yard", id: 0x20 }),
    SemanticTag({ name: "Game Room", id: 0x21 }),
    SemanticTag({ name: "Garage", id: 0x22 }),
    SemanticTag({ name: "Garage Door", id: 0x23 }),
    SemanticTag({ name: "Garden", id: 0x24 }),
    SemanticTag({ name: "Garden Door", id: 0x25 }),
    SemanticTag({ name: "Guest Bathroom", id: 0x26, description: "Also known as Guest Restroom" }),
    SemanticTag({ name: "Guest Bedroom", id: 0x27 }),
    SemanticTag({ name: "Guest Room", id: 0x28 }),
    SemanticTag({ name: "Gym", id: 0x29 }),
    SemanticTag({ name: "Hallway", id: 0x2a }),
    SemanticTag(
        { name: "Hearth Room", id: 0x2b, description: "A cozy room containing a fireplace or other point heat source" }
    ),
    SemanticTag({ name: "Kids Room", id: 0x2c }),
    SemanticTag({ name: "Kids Bedroom", id: 0x2d }),
    SemanticTag({ name: "Kitchen", id: 0x2e }),
    SemanticTag({ name: "Laundry Room", id: 0x2f }),
    SemanticTag({ name: "Lawn", id: 0x30 }),
    SemanticTag({ name: "Library", id: 0x31 }),
    SemanticTag({ name: "Living Room", id: 0x32 }),
    SemanticTag({ name: "Lounge", id: 0x33 }),
    SemanticTag({ name: "Media/TV Room", id: 0x34 }),
    SemanticTag({
        name: "Mud Room", id: 0x35,
        description: "A space used to remove soiled garments prior to entering the domicile proper"
    }),
    SemanticTag({ name: "Music Room", id: 0x36 }),
    SemanticTag({ name: "Nursery", id: 0x37 }),
    SemanticTag({ name: "Office", id: 0x38 }),
    SemanticTag({ name: "Outdoor Kitchen", id: 0x39 }),
    SemanticTag({ name: "Outside", id: 0x3a }),
    SemanticTag({ name: "Pantry", id: 0x3b, description: "AKA a larder, a place where food is stored" }),
    SemanticTag({ name: "Parking Lot", id: 0x3c }),
    SemanticTag({ name: "Parlor", id: 0x3d }),
    SemanticTag({ name: "Patio", id: 0x3e }),
    SemanticTag({ name: "Play Room", id: 0x3f }),
    SemanticTag({ name: "Pool Room", id: 0x40 }),
    SemanticTag({ name: "Porch", id: 0x41 }),
    SemanticTag({ name: "Primary Bathroom", id: 0x42 }),
    SemanticTag({ name: "Primary Bedroom", id: 0x43 }),
    SemanticTag({ name: "Ramp", id: 0x44 }),
    SemanticTag({ name: "Reception Room", id: 0x45 }),
    SemanticTag({ name: "Recreation Room", id: 0x46 }),
    SemanticTag({ name: "Roof", id: 0x47 }),
    SemanticTag({ name: "Sauna", id: 0x48 }),
    SemanticTag({ name: "Scullery", id: 0x49, description: "A utility space for cleaning dishes and laundry" }),
    SemanticTag({ name: "Sewing Room", id: 0x4a }),
    SemanticTag({ name: "Shed", id: 0x4b }),
    SemanticTag({ name: "Side Door", id: 0x4c }),
    SemanticTag({ name: "Side Yard", id: 0x4d }),
    SemanticTag({ name: "Sitting Room", id: 0x4e }),
    SemanticTag({
        name: "Snug", id: 0x4f,
        description: "An informal space meant to be 'cozy', 'snug', relaxed, meant to share with family or friends"
    }),
    SemanticTag({ name: "Spa", id: 0x50 }),
    SemanticTag({ name: "Staircase", id: 0x51 }),
    SemanticTag({ name: "Steam Room", id: 0x52 }),
    SemanticTag({ name: "Storage Room", id: 0x53 }),
    SemanticTag({ name: "Studio", id: 0x54 }),
    SemanticTag({ name: "Study", id: 0x55 }),
    SemanticTag({ name: "Sun Room", id: 0x56 }),
    SemanticTag({ name: "Swimming Pool", id: 0x57 }),
    SemanticTag({ name: "Terrace", id: 0x58 }),
    SemanticTag({ name: "Toilet", id: 0x59, description: "A room dedicated to a toilet; a water closet / WC" }),
    SemanticTag({ name: "Utility Room", id: 0x5a }),
    SemanticTag({ name: "Ward", id: 0x5b }),
    SemanticTag({ name: "Workshop", id: 0x5c })
);

MatterDefinition.children.push(AreaNamespaceNs);
