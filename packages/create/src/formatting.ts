/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { stdout } from "process";

function formatter(on: number, off: number): (text: string) => string {
    if (!stdout.isTTY) {
        return text => text;
    }
    return text => `\u001b[${on}m${text}\u001b[${off}m`;
}

export const bold = formatter(1, 22);
export const dim = formatter(2, 22);
export const red = formatter(31, 39);
export const green = formatter(32, 39);
export const blue = formatter(34, 39);
export const grey = formatter;

export function visibleWidthOf(str: string) {
    let i = 0,
        length = 0;

    while (i < str.length) {
        if (str[i] === "\u001b") {
            i++;
            while (i < str.length && str[i] !== "m") {
                i++;
            }
            if (i === str.length) {
                break;
            }
        }

        if (isHighSurrogate(str, i)) {
            i++;
        }

        length++;
        i++;
    }

    return length;
}

export function fittedTextOf(text: string, width: number) {
    if (width <= 20) {
        return text;
    }

    const words = text.trim().split(/\s+/);
    let lineWidth = 0;
    let line = "";
    const lines = Array<string>();
    for (const word of words) {
        const wordWidth = visibleWidthOf(word);
        if (lineWidth && lineWidth + 1 + wordWidth >= width) {
            lines.push(line);
            line = word;
            lineWidth = wordWidth;
            continue;
        }

        if (lineWidth) {
            line += " ";
            lineWidth++;
        }

        line += word;
        lineWidth += wordWidth;
    }

    if (line !== "") {
        lines.push(line);
    }

    return lines.join("\n");
}

function isHighSurrogate(str: string, position: number) {
    const cp = str.charCodeAt(position);
    return cp >= 0xd800 && cp <= 0xdbff;
}
