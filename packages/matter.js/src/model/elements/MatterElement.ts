/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ElementTag } from "../definitions/index.js";
import { AttributeElement } from "./AttributeElement.js";
import { BaseElement } from "./BaseElement.js";
import { ClusterElement } from "./ClusterElement.js";
import { DatatypeElement } from "./DatatypeElement.js";
import { DeviceTypeElement } from "./DeviceTypeElement.js";
import { FabricElement } from "./FabricElement.js";
import { FieldElement } from "./FieldElement.js";
import { NodeElement } from "./NodeElement.js";

/**
 * The root model element.
 */
export type MatterElement = BaseElement & {
    tag: `${ElementTag.Matter}`;
    version?: string;
    children: MatterElement.Child[];
};

export function MatterElement(definition: MatterElement.Properties) {
    return BaseElement(MatterElement.Tag, definition) as MatterElement;
}

export namespace MatterElement {
    export type Tag = ElementTag.Matter;
    export const Tag = ElementTag.Matter;
    export type Properties = BaseElement.Properties<MatterElement>;
    export type Child =
        | ClusterElement
        | DeviceTypeElement
        | FabricElement
        | NodeElement
        | DatatypeElement
        | FieldElement
        | AttributeElement;
}
