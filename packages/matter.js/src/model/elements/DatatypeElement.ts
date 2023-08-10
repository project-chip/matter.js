/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ElementTag, Mei, Metatype } from "../definitions/index.js";
import { BaseElement } from "./BaseElement.js";
import { ValueElement } from "./ValueElement.js";

/**
 * A datatype element defines a standalone datatype.
 */
export type DatatypeElement = ValueElement & {
    tag: `${DatatypeElement.Tag}`;

    /**
     * A datatype defined locally within a cluster is referenced by name and
     * does not have an ID.  So we leave ID is optional for this type.
     */
    id?: Mei;

    /**
     * A "metatype" provides enough semantics for us to translate a value into
     * a native datatype.  Metatype is only required on global datatypes, and
     * only when the datatype should map directly to a specific native (JS)
     * type.
     */
    metatype?: `${Metatype}`;

    children?: DatatypeElement[];
};

export function DatatypeElement(definition: DatatypeElement.Properties) {
    return ValueElement(DatatypeElement.Tag, definition) as DatatypeElement;
}

export namespace DatatypeElement {
    export type Tag = ElementTag.Datatype;
    export const Tag = ElementTag.Datatype;
    export type Properties = BaseElement.Properties<DatatypeElement>;

    /**
     * Convert a TypeScript enum to Matter enum values.
     *
     * Matter enums include conformance and other metadata.  They may also have
     * multiple definitions of the same value selectable by conformance.  So
     * we can't use a TypeScript enum directly.
     */
    export function ListValues(values: ValueMap): ListValues {
        const result = Array<DatatypeElement>();

        for (const [k, v] of Object.entries(values)) {
            if (typeof v === "number") {
                result.push(
                    DatatypeElement({
                        id: v,
                        name: k,
                        type: "uint8",
                        default: v,
                    }),
                );
            }
        }

        return result;
    }

    /**
     * We express enum values as IntElements as this gives us conformance
     * and other metadata.
     */
    export type ListValues = DatatypeElement[];

    /**
     * Per the Matter specification, enums are named integers.  The following
     * allows TypeScript enums to be supplied for translation into Matter
     * enums.  To do so, we must accept both numeric and string values.  For
     * generating the Matter enum we ignore the string keys.
     */
    export type ValueMap = { [name: string]: number | string };
}
