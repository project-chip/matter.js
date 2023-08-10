/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ElementTag } from "../definitions/index.js";
import { BaseElement } from "./BaseElement.js";
import { NodeElement } from "./NodeElement.js";

/**
 * Runtime representation of a fabric.
 */
export type FabricElement = BaseElement & {
    id: number;
    tag: `${FabricElement.Tag}`;
    children: NodeElement[];
};

export function FabricElement(definition: FabricElement.Properties) {
    return BaseElement(FabricElement.Tag, definition);
}

export namespace FabricElement {
    export type Tag = ElementTag.Fabric;
    export const Tag = ElementTag.Fabric;
    export type Properties = BaseElement.Properties<FabricElement>;
}
