/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ElementTag } from "../definitions/index.js";
import { BaseElement } from "./BaseElement.js";
import { EndpointElement } from "./EndpointElement.js";

/**
 * Runtime representation of a node.
 */
export type NodeElement = BaseElement & {
    id: number;
    tag: `${NodeElement.Tag}`;
    children?: EndpointElement[];
};

export function NodeElement(definition: NodeElement.Properties) {
    return BaseElement(NodeElement.Tag, definition) as NodeElement;
}

export namespace NodeElement {
    export type Tag = ElementTag.Node;
    export const Tag = ElementTag.Node;
    export type Properties = BaseElement.Properties<NodeElement>;
}
