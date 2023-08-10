/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

const LIST_INDENT = 2;

export { camelize, describeList, serialize } from "#matter.js/util/String.ts";

/**
 * Performs word wrap.  Input is assumed to be a series of paragraphs separated
 * by a newline.  Output is an array of formatted lines.
 *
 * Contains specialized support for lists and ESDoc directives.
 */
export function wordWrap(text: string, width = 120) {
    const structure = detectStructure(text);
    return formatStructure(structure, width);
}

/**
 * Returns a string formatted to function as an object key.  This means
 * escaping as a string if it can't be a bare identifier.
 */
export function asObjectKey(label: {}) {
    label = label.toString();
    if (!(label as string).match(/^[$_a-z][$_a-z0-9]*$/i)) {
        label = JSON.stringify(label);
    }
    return label;
}

enum ListType {
    Bullet1 = "•",
    Bullet2 = "◦",
    Bullet3 = "▪",
    Bullet4 = "○",
    Bullet5 = "●",
    Bullet6 = "‣",
    Bullet7 = "⁃",
    Bullet8 = "◘",
    Number = "number",
    LowerAlpha = "alpha",
    UpperAlpha = "ALPHA",
    LowerRoman = "roman",
    UpperRoman = "ROMAN",
}

function detectList(text: string, listState: ListType[]) {
    function enterList(listType: ListType) {
        const existing = listState.indexOf(listType);
        if (existing == -1) {
            listState.push(listType);
        } else {
            listState.length = existing + 1;
        }
    }

    for (const value of Object.values(ListType)) {
        if (text[0] === value && text[1] === " ") {
            enterList(text[0] as ListType);
            return;
        }
    }

    function detectEnumeration(test: RegExp, listType: ListType, first: string) {
        if (!text.match(test)) {
            return false;
        }

        if (listState.indexOf(listType) != -1 || text.startsWith(`${first}.`)) {
            enterList(listType);
            return true;
        }

        return false;
    }

    if (detectEnumeration(/^[0-9]+\./, ListType.Number, "1")) return;
    if (detectEnumeration(/^[ivx]+\./, ListType.LowerRoman, "i")) return;
    if (detectEnumeration(/^[IVX]+\./, ListType.UpperRoman, "I")) return;
    if (detectEnumeration(/^[a-z]+\./, ListType.LowerAlpha, "a")) return;
    if (detectEnumeration(/^[A-Z]+\./, ListType.UpperAlpha, "A")) return;

    listState.length = 0;
}

type TextStructure = {
    prefixWidth: number;
    entries: (string | TextStructure)[];
};

function extractPrefix(text: string) {
    const match = text.match(/^(\S+)\s+(.*)$/);
    if (match) {
        return { prefix: match[1], text: match[2] };
    }
    return { prefix: text, text: "" };
}

function detectStructure(text: string): TextStructure {
    if (text == "") {
        return { prefixWidth: 0, entries: [] };
    }
    const paragraphs = text.split(/\n+/).map(paragraph => paragraph.trim().replace(/\s+/g, " "));
    if (!paragraphs.length) {
        return { prefixWidth: 0, entries: [] };
    }

    const listState = Array<ListType>();
    let index = 0;

    function processLevel() {
        const level = listState.length;
        const structure = {
            prefixWidth: 0,
            entries: [],
        } as TextStructure;

        while (index < paragraphs.length) {
            detectList(paragraphs[index], listState);

            // If we've moved to a higher list, we're done with this level
            if (listState.length < level) {
                break;
            }

            // If we've moved to a deeper list, process the new level before
            // continuing
            if (listState.length > level) {
                structure.entries.push(processLevel());
                if (listState.length < level || index >= paragraphs.length) {
                    break;
                }
            }

            // This paragraph is in this level
            structure.entries.push(paragraphs[index]);

            // In lists, update the prefix width so we know how far out to pad
            // when formatting
            if (level) {
                const { prefix } = extractPrefix(paragraphs[index]);
                if (prefix.length > structure.prefixWidth) {
                    structure.prefixWidth = prefix.length;
                }
            }

            // Move to next line
            index++;
        }

        return structure;
    }

    return processLevel();
}

function wrapParagraph(input: string, into: string[], wrapWidth: number, padding: number, prefixWidth: number) {
    // Note - do not wrap text surrounded by "{@" and "}" as this is likely
    // a ESDoc directive and ESDoc doesn't like directives wrapped
    const segments = input.match(/(?:{@[^}]+}|\S+)(?:\s+|$)/g);
    if (!segments?.length) {
        return;
    }

    // Configure for list prefix formatting
    let wrapPrefix: string;
    if (prefixWidth) {
        // Has a prefix.  Extract the prefix from this line and pad out to
        // the detected width
        const extracted = extractPrefix(input);
        input = extracted.prefix.padEnd(prefixWidth + 1, " ");

        // After wrapping this prefix will pad out subsequent entries
        wrapPrefix = "".padStart(prefixWidth + 1, " ");
    } else {
        // No prefix
        wrapPrefix = "";
    }

    // Wrapping setup.  Track the portions of the line and current length
    const line = Array<string>();
    let length = 0;

    // Perform actual wrapping
    let pushedOne = false;
    let needWrapPrefix = false;
    for (const s of segments) {
        // If we'll extend too far, start on a new line
        if (length && length + s.length > wrapWidth) {
            addLine();
            line.length = length = 0;
            needWrapPrefix = true;
        }

        // Add padding if this is a new line
        if (!line.length && padding) {
            line.push("".padStart(padding, " "));
            length += padding;
        }

        // Add wrap prefix if this is a new line in a list
        if (needWrapPrefix) {
            needWrapPrefix = false;
            line.push(wrapPrefix);
            length += wrapPrefix.length;
        }

        // Add to the line
        line.push(s);
        length += s.length;
    }

    // If there is a remaining line, add it
    if (line.length) {
        addLine();
    }

    function addLine() {
        if (!pushedOne) {
            if (into.length) {
                into.push("");
            }
            pushedOne = true;
        }

        into.push(line.join(""));
    }
}

function formatStructure(structure: TextStructure, width: number) {
    const lines = Array<string>();

    function formatLevel(structure: TextStructure, padding: number) {
        for (const entry of structure.entries) {
            if (typeof entry == "string") {
                wrapParagraph(entry, lines, width, padding, structure.prefixWidth);
            } else {
                formatLevel(entry, padding + LIST_INDENT);
            }
        }
    }

    formatLevel(structure, 0);

    return lines;
}
