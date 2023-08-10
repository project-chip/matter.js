/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ElementTag, Mei } from "../definitions/index.js";
import { AttributeElement } from "./AttributeElement.js";
import { BaseElement } from "./BaseElement.js";
import { CommandElement } from "./CommandElement.js";
import { DatatypeElement } from "./DatatypeElement.js";
import { EventElement } from "./EventElement.js";

/**
 * A cluster describes a set of related functionality.
 */
export type ClusterElement = BaseElement & {
    id?: Mei;

    tag: `${ClusterElement.Tag}`;

    /**
     * Marks a cluster as a singleton per the Matter specification.
     */
    singleton?: boolean;

    /**
     * Encodes both classification and scope from the Matter specification.
     */
    classification?: `${ClusterElement.Classification}`;

    children?: ClusterElement.Child[];
};

export function ClusterElement(definition: ClusterElement.Properties) {
    return BaseElement(ClusterElement.Tag, definition) as ClusterElement;
}

export namespace ClusterElement {
    export type Tag = ElementTag.Cluster;
    export const Tag = ElementTag.Cluster;
    export type Properties = BaseElement.Properties<ClusterElement>;
    export type Child = DatatypeElement | AttributeElement | CommandElement | EventElement;

    export enum Classification {
        EndpointUtility = "endpoint",
        NodeUtility = "node",
        Application = "application",
    }
}
