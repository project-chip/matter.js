/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ElementTag, Specification } from "../definitions/index.js";
import type { AnyElement } from "./AnyElement.js";

/**
 * Per the Matter specification, an element is a data construct that supports
 * an instance of data.  So, a class.
 *
 * Elements as defined by this package are a static data structure.  Each
 * element has a corresponding "Model" that is a proper class with runtime
 * functionality related to the element.
 */
export type BaseElement = {
    /**
     * The ID of the element per Matter specification, either global or
     * context-specific.  A "machine appropriate" semantic differentiator.
     */
    id?: number;

    /**
     * The key used for storing this element.  A "human appropriate" semantic
     * differentiator.
     */
    name: string;

    /**
     * If an element derives from another element, the name of the parent
     * element goes here.
     */
    type?: string;

    /**
     * A short summary of the element.
     */
    description?: string;

    /**
     * A paragraph summary of the element.
     */
    details?: string;

    /**
     * Reference to Matter specification document.
     */
    xref?: Specification.CrossReference;

    /**
     * Child elements.
     */
    children?: AnyElement[];

    /**
     * Is this a global element?  Global elements are defined in Globals.ts
     * and are available in-scope for every cluster.
     */
    global?: boolean;
};

export function BaseElement(tag: ElementTag, definition: BaseElement) {
    const result: any = { tag: tag };
    for (const [k, v] of Object.entries(definition)) {
        if (v !== undefined) {
            result[k] = v;
        }
    }
    return result as BaseElement;
}

export namespace BaseElement {
    export type ElementForProperties<P> = P extends Properties<infer T> ? T : never;

    /**
     * Element with optional type; used for factory functions and constructors.
     */
    export type Properties<T extends { tag: `${ElementTag}` }> = Omit<T, "tag"> & Partial<Pick<T, "tag">>;
}
