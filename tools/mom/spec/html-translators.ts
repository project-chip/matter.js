/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { camelize } from "#util/string.js";
import { Words } from "#util/words.js";

/** String, trimmed with whitespace collapsed */
export const Str = (el: HTMLElement) => {
    // Remove footnote references
    for (const child of el.querySelectorAll("span")) {
        if (child.textContent?.match(/^[*0-9]$/)) {
            child.remove();
        }
    }

    const text = el.textContent;
    if (!text) {
        return "";
    }

    return (
        text
            // Remove leading and trailing whitespace
            .trim()

            // Remove soft hyphen and any surrounding whitespace
            .replace(/\s*\u00ad\s*/g, "")

            // Collapse whitespace
            .replace(/\s+/g, " ")
    );
};

/** String with no space at all */
export const NoSpace = (el: HTMLElement) => Str(el).replace(/\s/g, "");

/** Number parsed as integer */
export const Integer = (el: HTMLElement) => {
    const text = Str(el);

    // Ignore range descriptions
    if (text.match(/ (?:-|to) /)) {
        return NaN;
    }

    return Number.parseInt(NoSpace(el));
};

/** Number encoded as BIT(n) */
export const Bit = (el: HTMLElement) => {
    const text = Str(el).replace(/bit\((\d+)\)/i, "$1");
    return Number.parseInt(text);
};

/**
 * DSL or identifier.  Note we replace "Fo o" with "Foo" because space errors
 * are very common in the PDFs, especially in narrow columns and we don't want
 * to end up with FoO
 */
export const Code = (el: HTMLElement) => {
    let str = Str(el);

    // Use the english dictionary to heuristically repair whitespace errors
    const parts = str.split(/\s+/);
    for (let i = 0; i < parts.length - 1; i++) {
        // If the current word is all uppercase, assume it's a standalone
        // identifier
        if (parts[i].match(/^[A-Z_]+$/)) {
            continue;
        }

        // If a word starts with lowercase, see if it's a word when
        // concatenated with the previous word
        if (parts[i + 1].match(/^[a-z]/)) {
            // Get beginning of word from current part
            const beginning = parts[i].replace(/^.*([A-Z])/, "$1");

            // Get ending of word from next part
            const ending = parts[i + 1].replace(/^([a-z]+).*/, "$1");

            // If the concatenation is a word, assume it should be joined
            if (Words.has(`${beginning}${ending}`.toLowerCase())) {
                parts[i] = `${parts[i]}${parts[i + 1]}`;
                parts.splice(i + 1, 1);

                // Redo check from current point
                i--;
            }
        }
    }
    str = parts.join(" ");

    return str;
};

/** Camelized identifier */
export const Identifier = (el: HTMLElement) => {
    let str = Code(el);

    // Strip everything following a subset of characters known to be inside
    // what is properly a "key"
    str = str.replace(/^([a-z0-9 _:,/\-$]+).*/i, "$1");

    return camelize(str, true);
};

/** Identifier, all lowercase.  Used for matching so "_" removed */
export const LowerIdentifier = (el: HTMLElement) => Identifier(el).toLowerCase();

/** Identifier, all uppercase.  Used for naming so "_" left in */
export const UpperIdentifier = (el: HTMLElement) => Code(el).toUpperCase();

/** Bits of the form "1", "1 - 2" or "1..2" into constraint definition */
export const Bits = (el: HTMLElement) => {
    const bits = Str(el)
        .split(/\s*(?:\.\.|-|–)\s*/)
        .map(b => Number.parseInt(b));
    if (bits.findIndex(Number.isNaN) !== -1) {
        return;
    }
    if (bits.length == 1) {
        return bits[0];
    }
    if (bits.length == 2) {
        return { min: bits[0], max: bits[1] + 1 };
    }
};
