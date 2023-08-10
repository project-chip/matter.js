/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { AnyElement } from "#matter.js/model/index.js";
import { serialize, wordWrap } from "#util/string.js";
import { Block } from "#util/TsFile.js";

export function generateElement(target: Block, element: AnyElement, prefix = "", suffix = "") {
    const block = target.expressions(`${prefix}{`, `}${suffix}`);

    const fields = element.valueOf() as { [name: string]: any };

    delete fields.tag;
    delete fields.xref;
    delete fields.children;
    delete fields.details;

    // First, tag/ID/name/type
    const properties = Array<string>(`tag: ${serialize(element.tag)}`, `name: ${serialize(element.name)}`);
    if (element.id !== undefined) {
        const idStr = element.id < 0 ? `${element.id}` : `0x${element.id.toString(16)}`;
        properties.push(`id: ${idStr}`);
    }
    delete fields.id;
    delete fields.name;
    if (fields.type) {
        properties.push(`type: ${serialize((element as any).type)}`);
        delete fields.type;
    }

    // Next: Other fields
    properties.push(
        ...Object.entries(fields)
            .sort((a, b) => a[0].toLowerCase().localeCompare(b[0].toLowerCase()))
            .map(([k, v]) => `${k}: ${serialize(v)}`),
    );

    // Segment properties into rows
    let row = Array<string>();
    let length = 0;
    for (const property of properties) {
        length += property.length + (length ? 2 : 0);
        if (row.length && length >= 100) {
            block.atom(row.join(", "));
            row = [property];
            length = property.length;
        } else {
            row.push(property);
        }
    }
    if (row.length) {
        block.atom(row.join(", "));
    }

    // Next row: Details
    if (element.details) {
        const lines = wordWrap(element.details, 100);
        for (let i = 0; i < lines.length; i++) {
            const prefix = i ? "    " : "details: ";
            const suffix = i < lines.length - 1 ? " +" : "";
            lines[i] = `${prefix}${serialize(lines[i] === "" ? "\n" : lines[i])}${suffix}`;
        }
        const text = lines.join("\n");
        if (text) {
            block.atom(text);
        }
    }

    // Next row: Cross reference
    if (element.xref) {
        block.atom("xref", serialize(element.xref));
    }

    // Children
    const children = element.children?.filter(c => !c.global);
    if (children?.length) {
        const childBlock = block.expressions(`children: [`, "]");
        for (const child of children) {
            generateElement(childBlock, child);
        }
    }
}
