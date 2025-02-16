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

export const SwitchesNs = SemanticNamespace(
    {
        name: "Switches", id: 0x43,

        details: "The tags contained in this namespace are restricted for use in the switches domain and shall NOT be " +
            "used in any other domain or context. They are intended to indicate the function of a button on a " +
            "switch device to allow a client to make an optimized user interface which matches the actual device " +
            "without requiring a-priori knowledge of the layout of each specific switch device." +
            "\n" +
            "Please see the rules for applying these and other tags for switch devices, e.g. from the Common " +
            "Position Namespace and the Common Number Namespace in the Generic Switch device type section in the " +
            "Device Library.",

        xref: { document: "namespace", section: "18" }
    },

    SemanticTag({ name: "On", id: 0x0 }),
    SemanticTag({ name: "Off", id: 0x1 }),
    SemanticTag({ name: "Toggle", id: 0x2 }),
    SemanticTag({ name: "Up", id: 0x3, description: "e.g. dim up (light)" }),
    SemanticTag({ name: "Down", id: 0x4, description: "e.g. dim down (light)" }),
    SemanticTag({ name: "Next", id: 0x5, description: "e.g. select next scene" }),
    SemanticTag({ name: "Previous", id: 0x6, description: "e.g. select previous scene" }),
    SemanticTag({ name: "Enter/OK/Select", id: 0x7 }),

    SemanticTag({
        name: "Custom", id: 0x8, description: "Textual description provided in Label field",
        details: "When this value is used, the Label field in the same Semantic Tag structure shall be filled with a " +
            "textual description of the function indicated on the button, such as a label or icon printed on the " +
            "button, e.g. \"dining\".",
        xref: { document: "namespace", section: "18.1" }
    })
);

MatterDefinition.children.push(SwitchesNs);
