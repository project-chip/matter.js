/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ElementTag } from "../definitions/index.js";
import { BaseElement } from "./BaseElement.js";
import { SemanticTagElement } from "./SemanticTagElement.js";

/**
 * Details a specific semantic tag.
 */
export type SemanticNamespaceElement = BaseElement & {
    id: number;
    tag: `${SemanticNamespaceElement.Tag}`;
    children?: SemanticTagElement[];
    mfgCode?: number;
};

export function SemanticNamespaceElement(definition: SemanticNamespaceElement.Properties) {
    return BaseElement(SemanticNamespaceElement.Tag, definition) as SemanticNamespaceElement;
}

export namespace SemanticNamespaceElement {
    export type Tag = ElementTag.SemanticNamespace;
    export const Tag = ElementTag.SemanticNamespace;
    export type Properties = BaseElement.Properties<SemanticNamespaceElement>;
}
