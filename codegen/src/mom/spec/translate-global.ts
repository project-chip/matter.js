/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { InternalError } from "@project-chip/matter.js/common";
import { AttributeElement, FieldElement } from "@project-chip/matter.js/model";
import { GlobalReference } from "./spec-types.js";
import { FieldRecord, translateDatatype, translateFields } from "./translate-datatype.js";

/**
 * Converts global elements appearing in cluster specifications but not associated with a specific cluster.
 *
 * Most of these live in independent sections describing a single datatype except for the "global elements" list in the
 * core specification.
 */
export function* translateGlobal(ref: GlobalReference) {
    // Global attributes and fields are defined in a specialized table
    if (ref.xref.document === "core" && ref.name === "Global Elements") {
        yield* translateGlobalElements(ref);
        return;
    }

    // Most global datatypes are just in a section of their own
    const datatype = translateDatatype(ref);
    if (datatype?.type !== undefined) {
        yield datatype;
    }
}

function* translateGlobalElements(ref: GlobalReference) {
    // This is a standin for the actual element factory method that delegates to the appropriate element factory
    // based on the "element" field
    function globalTranslator(record: FieldRecord) {
        const { element } = record;
        delete record.element;

        if (element === "attribute") {
            return AttributeElement(record);
        } else if (element?.endsWith("field")) {
            return FieldElement(record);
        } else {
            throw new InternalError(`Global element type "${element}" requires additional mapping`);
        }
    }
    globalTranslator.Tag = "global";

    // This is a bit contorted in that we aren't actually translating fields but a list of field types...  But it
    // looks just like a list of fields with the exception of the additional "element" column that we processed
    // above.  So we can handle as we would fields of an actual struct-like element
    const elements = translateFields(globalTranslator, ref);

    for (const record of elements) {
        yield record;
    }
}
