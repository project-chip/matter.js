/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ElementTag, Mei } from "../definitions/index.js";
import { BaseElement } from "./BaseElement.js";
import { ValueElement } from "./ValueElement.js";

/**
 * A field element defines a field in a list, struct, enum or bitmap.
 */
export interface FieldElement extends ValueElement {
    tag: `${FieldElement.Tag}`;

    /**
     * Fields must have IDs but they may be implied by the field's position
     * in its parent.
     */
    id?: Mei;

    children?: FieldElement[];
}

export function FieldElement(definition: FieldElement.Properties) {
    return ValueElement(FieldElement.Tag, definition) as FieldElement;
}

export namespace FieldElement {
    export type Tag = ElementTag.Field;
    export const Tag = ElementTag.Field;
    export type Properties = BaseElement.Properties<FieldElement>;
}
