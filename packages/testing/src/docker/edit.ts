/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Container } from "./container.js";

/**
 * A collection of "editors" that mutate files within a container.
 */
export namespace edit {
    export interface Editor {
        (container: Container, files: string[]): Promise<void>;
    }

    export interface LineEditor {
        from?: LineDetector;
        to?: LineDetector;
        after?: LineDetector;
        before?: LineDetector;
        replacement?: LineReplacement;
    }

    export type LineDetector = string | RegExp | ((line: string) => boolean);
    export type LineReplacement = string | string[] | ((lines: string[]) => string[]);

    /**
     * Modify a file using sed -iz.
     */
    export function sed(...scripts: string[]): Editor {
        const script = scripts.join(";").replaceAll("\n", "\\n");
        return (container, paths) => container.exec(["sed", "-iz", script, ...paths]);
    }

    /**
     * Replace regions of a file demarcated by key lines.
     */
    export function lines(...edits: LineEditor[]): Editor {
        return async (container, paths) => {
            for (const path of paths) {
                await editLinesOf(container, path, edits);
            }
        };
    }
}

interface CompiledLineEditor {
    detect(line: string, output: string[]): boolean;
    collect(line: string, output: string[]): boolean;
    finish(output: string[]): void;
}

async function editLinesOf(container: Container, path: string, edits: edit.LineEditor[]) {
    const editors = editorsOf(edits);
    let editor: CompiledLineEditor | undefined;
    const input = (await container.read(path)).split("\n");
    const output = Array<string>();

    for (const line of input) {
        if (editor) {
            if (editor.collect(line, output)) {
                continue;
            }
            editor = undefined;
        }

        for (const editorCandidate of editors) {
            if (editorCandidate.detect(line, output)) {
                editor = editorCandidate;
            }
        }

        if (!editor) {
            output.push(line);
        }
    }

    editor?.finish(output);

    await container.write(path, output.join("\n"));
}

function editorsOf(edits: edit.LineEditor[]): CompiledLineEditor[] {
    return edits.map(({ from, to, after, before, replacement }) => {
        // Start out in collecting state iff we have no detector that would start collection
        let collecting = from === undefined && after === undefined;

        from = detectorOf(from);
        to = detectorOf(to);
        after = detectorOf(after);
        before = detectorOf(before);
        replacement = replacementOf(replacement);

        const collected = Array<string>();
        return {
            detect(line: string, output: string[]) {
                if (from?.(line)) {
                    collecting = true;
                    return true;
                }

                if (after?.(line)) {
                    collecting = true;
                    output.push(line);
                    return true;
                }

                return false;
            },

            collect(line: string, output: string[]) {
                if (collecting) {
                    if (to?.(line)) {
                        output.push(...replacement(collected));
                        collected.length = 0;
                        collecting = false;
                        return true;
                    }
                    if (before?.(line)) {
                        output.push(...replacement(collected));
                        collected.length = 0;
                        collecting = false;
                        return false;
                    }
                    return true;
                }
                return false;
            },

            finish(output: string[]) {
                if (collecting && to === undefined && before === undefined) {
                    output.push(...replacement(collected));
                }
            },
        };
    });
}

function detectorOf(detector?: edit.LineDetector) {
    if (detector === undefined) {
        return () => false;
    }

    if (typeof detector === "string") {
        return (line: string) => line === detector;
    }

    if (detector instanceof RegExp) {
        return (line: string) => !!line.match(detector);
    }

    return detector;
}

function replacementOf(replacement?: edit.LineReplacement): (lines: string[]) => string[] {
    if (replacement === undefined) {
        return () => [];
    }

    if (typeof replacement === "string") {
        if (replacement[0] === "\n") {
            // Allow ` on separate line in multiline strings
            replacement = replacement.slice(1);
        }
        return () => [replacement as string];
    }

    if (Array.isArray(replacement)) {
        return () => replacement;
    }

    return replacement;
}
