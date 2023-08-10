/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ElementTag } from "../definitions/index.js";
import { Access, Conformance, Constraint, DatatypeElement, Quality } from "../index.js";
import { BaseElement } from "./BaseElement.js";

/**
 * Describes a cluster or cluster element requirement for a device.
 */
export type RequirementElement = BaseElement & {
    tag: `${RequirementElement.Tag}`;

    /**
     * Requirement element type.
     */
    element: `${RequirementElement.ElementType}`;

    constraint?: Constraint.Definition;
    access?: Access.Definition;
    quality?: Quality.Definition;
    conformance?: Conformance.Definition;

    children?: (RequirementElement | DatatypeElement)[];
};

export function RequirementElement(definition: RequirementElement.Properties) {
    return {
        ...BaseElement(RequirementElement.Tag, definition),
        tag: RequirementElement.Tag,
    } as RequirementElement;
}

export namespace RequirementElement {
    export type Tag = ElementTag.Requirement;
    export const Tag = ElementTag.Requirement;
    export type Properties = BaseElement.Properties<RequirementElement>;

    export enum ElementType {
        ClientCluster = "clientCluster",
        ServerCluster = "serverCluster",
        Feature = "feature",
        Attribute = "attribute",
        Command = "command",
        Event = "event",
        CommandField = "commandField",
    }
}
