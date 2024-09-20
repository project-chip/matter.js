/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { readFileSync, writeFileSync } from "fs";

function readValue(line: string) {
    const valueMatch = line.match(/^(\S+)=(.*)$/);
    if (valueMatch) {
        return { key: valueMatch[1], value: valueMatch[2] };
    }
    return { key: undefined, value: undefined };
}

/**
 * Manages Matter PICS files.
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
                const { key, value } = readValue(line);
                if (key !== undefined) {
                    values[key] = value;
                }
            }
            this.#values = values;
        }
        return this.#values;
    }

    patch(other: PicsFile) {
        this.#lines = this.lines.map(line => {
            const { key } = readValue(line);
            if (key === undefined) {
                return line;
            }

            const otherValue = other.values[key];
            if (otherValue === undefined) {
                return line;
            }

            return `${key}=${otherValue}`;
        });
    }

    save(path: string) {
        writeFileSync(path, this.lines.join("\n"));
    }
}
