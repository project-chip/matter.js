/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

const LIST_INDENT = 2;

export { camelize, describeList, serialize } from "./String.js";

/**
 * Performs word wrap.  Input is assumed to be a series of paragraphs separated by a newline.  Output is an array of
 * formatted lines.
 *
 * Contains specialized support for lists, ESDoc directives ans ANSI escape codes.
 */
export function FormattedText(text: string, width = 120) {
    const structure = detectStructure(text);
    return formatStructure(structure, width);
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

    if (detectEnumeration(/^\d+\./, ListType.Number, "1")) return;
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
    const match = text.match(/^(\S+)\s+($|\S.*$)/);
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

            // If we've moved to a deeper list, process the new level before continuing
            if (listState.length > level) {
                structure.entries.push(processLevel());
                if (listState.length < level || index >= paragraphs.length) {
                    break;
                }
            }

            // This paragraph is in this level
            structure.entries.push(paragraphs[index]);

            // In lists, update the prefix width so we know how far out to pad when formatting
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
    const segments = input.split(/\s+/);
    if (!segments) {
        return;
    }

    // Reassemble text surrounded by "{@" and "}" as this is likely an ESDoc directive and ESDoc doesn't like directives
    // wrapped
    for (let i = 0; i < segments?.length; i++) {
        if (!segments[i].includes("{@")) {
            continue;
        }
        for (let j = i; j < segments.length; j++) {
            if (segments[j].includes("}")) {
                segments.splice(i, j - i + 1, segments.slice(i, j + 1).join(" "));
                break;
            }
        }
    }

    // Configure for list prefix formatting
    let wrapPrefix: string;
    if (prefixWidth) {
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
        const segmentLength = visibleLengthOf(s);

        // If we'll extend too far, start on a new line
        if (length && length + segmentLength > wrapWidth) {
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
        line.push(" ");
        length += segmentLength + 1;
    }

    // If there is a remaining line, add it
    line.length = line.length - 1; // Remove ending space
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

function visibleLengthOf(text: string) {
    let length = 0;
    for (let i = 0; i < text.length; ) {
        switch (text[i]) {
            case `\u001b`:
                // Escape
                i++;
                const code = text[i];

                if ((code >= "@" && code <= "Z") || code === "-" || code === "_") {
                    // Fe except CSI (control sequence introducer)
                    i++;
                    break;
                }

                if (code === "[") {
                    // CSI
                    i++;
                    while (text[i] >= "0" && text[i] <= "?") {
                        // Parameter
                        i++;
                    }
                    while (text[i] >= " " && text[i] <= "/") {
                        // Intermediate
                        i++;
                    }
                    if (text[i] >= "@" && text[i] <= "~") {
                        // Final
                        i++;
                        break;
                    }
                }

                break;

            case `\u200b`:
                // Zero-width space
                i++;
                break;

            default:
                i++;
                length++;
                break;
        }
    }
    return length;
}
