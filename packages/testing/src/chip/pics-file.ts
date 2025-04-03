/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { readFileSync, writeFileSync } from "node:fs";

/**
 * Manages Matter PICS files.
 *
 * Supports extended syntax for defining ranges of values of the form "NAMExx..yy=*" where xx and yy are hexadecimal
 * numbers specifying the start and end of a range (inclusive).  These are expanded in {@link patch} which modifies the
 * values in the target PICS file with values from another PICS file.
 *
 * Note that we sometimes use ".properties" extension for PICS files so we get syntax highlighting, but PICS only
 * supports a subset of the actual Java properties file format.
 */
export class PicsFile {
    #lines: string[];
    #values?: Record<string, string>;

    constructor(pathOrBody: string, inline = false) {
        if (inline === false) {
            pathOrBody = readFileSync(pathOrBody, "utf-8");
        }
        this.#lines = pathOrBody.split("\n").map(l => l.trim());
    }

    get lines() {
        return this.#lines;
    }

    get values() {
        if (!this.#values) {
            const values = {} as Record<string, string>;
            for (const line of this.lines) {
                parseLine(line, values);
            }
            this.#values = values;
        }
        return this.#values;
    }

    toString() {
        return this.#lines.join("\n") + "\n";
    }

    patch(other: PicsFile) {
        const newValues = { ...other.values };

        const newLines = new Array<string>();
        for (const line of this.lines) {
            const lineValues = {} as Record<string, string>;
            if (!parseLine(line, lineValues)) {
                newLines.push(line);
                continue;
            }

            for (const key in lineValues) {
                const newValue = newValues[key];
                if (newValue !== undefined) {
                    newLines.push(`${key}=${newValue}`);
                    delete newValues[key];
                } else {
                    newLines.push(`${key}=${lineValues[key]}`);
                }
            }
        }

        for (const key in newValues) {
            newLines.push(`${key}=${newValues[key]}`);
        }

        this.#values = undefined;
        this.#lines = newLines;
    }

    save(path: string) {
        writeFileSync(path, this.toString());
    }
}

function parseLine(line: string, values: Record<string, string>): boolean {
    line = line.trim();
    if (line.startsWith("#")) {
        return false;
    }

    const valueMatch = line.match(/^([^=\s]+)=(.*)$/);
    if (!valueMatch) {
        return false;
    }

    const [, key, value] = valueMatch;
    const rangeMatch = key.match(/^(\S+)\.\.([\da-f]+)$/i);
    if (!rangeMatch) {
        values[key] = value;
        return true;
    }

    const [, base, rangeTo] = rangeMatch;
    const rangePrefix = base.slice(0, base.length - rangeTo.length);
    const rangeFrom = base.slice(rangePrefix.length);

    const rangeFromNum = Number.parseInt(rangeFrom, 16);
    if (Number.isNaN(rangeFromNum)) {
        throw new Error(`Invalid PICS: Range start in ${key} is invalid`);
    }

    const rangeToNum = Number.parseInt(rangeTo, 16);
    if (Number.isNaN(rangeToNum)) {
        throw new Error(`Invalid PICS: Range end in ${key} is invalid`);
    }

    if (rangeToNum < rangeFromNum) {
        throw new Error(`Invalid PICS: Range end ${rangeToNum} is greater than range start ${rangeFromNum}`);
    }

    for (let i = rangeFromNum; i <= rangeToNum; i++) {
        values[rangePrefix + i.toString().padStart(rangeTo.length, "0")] = value;
    }

    return true;
}
