/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ElementTag, FeatureSet, Mei } from "../definitions/index.js";
import { AttributeElement } from "./AttributeElement.js";
import { BaseElement } from "./BaseElement.js";
import { CommandElement } from "./CommandElement.js";
import { DatatypeElement } from "./DatatypeElement.js";
import { EventElement } from "./EventElement.js";
import { FieldElement } from "./FieldElement.js";

/**
 * A cluster describes a set of related functionality.
 */
export interface ClusterElement extends BaseElement {
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

    /**
     * Optional supported features.  This is for clusters used operationally
     * and is not present in the static data model.
     */
    supportedFeatures?: FeatureSet;

    children?: ClusterElement.Child[];
}

export function ClusterElement(definition: ClusterElement.Properties) {
    return BaseElement(ClusterElement.Tag, definition) as ClusterElement;
}

export namespace ClusterElement {
    export type Tag = ElementTag.Cluster;
    export const Tag = ElementTag.Cluster;
    export type Properties = BaseElement.Properties<ClusterElement>;
    export type Child = DatatypeElement | AttributeElement | CommandElement | EventElement | FieldElement;

    export enum Classification {
        EndpointUtility = "endpoint",
        NodeUtility = "node",
        Application = "application",
    }
}
