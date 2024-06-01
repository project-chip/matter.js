/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Mei } from "../../datatype/ManufacturerExtensibleIdentifier.js";
import { ElementTag } from "../definitions/index.js";
import { BaseElement } from "./BaseElement.js";
import { ValueElement } from "./ValueElement.js";

/**
 * A cluster property description.
 */
export interface AttributeElement extends ValueElement {
    tag: `${AttributeElement.Tag}`;
    id: Mei;
}

export function AttributeElement(definition: AttributeElement.Properties) {
    return ValueElement(AttributeElement.Tag, definition) as AttributeElement;
}

export namespace AttributeElement {
    export type Tag = ElementTag.Attribute;
    export const Tag = ElementTag.Attribute;
    export type Properties = BaseElement.Properties<AttributeElement>;
}
