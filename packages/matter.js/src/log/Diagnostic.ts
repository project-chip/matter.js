/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Logged values may implement this interface to customize presentation.
 * 
 * You can use the utility functions such as {@link Diagnostic.dict} to create
 * Diagnostics from common value types.
 */
export interface Diagnostic {
    readonly [Diagnostic.presentation]?: Diagnostic.Presentation,
    readonly [Diagnostic.value]?: unknown;
}

/**
 * Create a diagnostic giving a value a specific presentation.
 */
export function Diagnostic(presentation: Diagnostic.Presentation, value: unknown): Diagnostic {
    return {
        [Diagnostic.presentation]: presentation,
        [Diagnostic.value]: value,
    }
}

export namespace Diagnostic {
    export enum Presentation {
        /**
         * A sequence of diagnostics rendered sequentially.
         */
        List = "list",

        /**
         * An emphasized diagnostic.  Rendered to draw attention.
         */
        Emphasized = "emphasized",

        /**
         * A key/value diagnostic.  Rendered as a group of key/value pairs.
         */
        Dictionary = "dictionary",
    }

    export const presentation = Symbol("presentation");
    export const value = Symbol("value");

    /**
     * Create a value that is emphasized in output.
     */
    export function em(value: unknown) {
        return Diagnostic(
            Diagnostic.Presentation.Emphasized,
            value,
        )
    }

    /**
     * Create a value presenting as a list of separate lines.
     */
    export function list(value: Iterable<unknown>) {
        return Diagnostic(
            Diagnostic.Presentation.List,
            value,
        )
    }

    /**
     * Create a K/V map that presents with formatted keys.
     */
    export function dict(entries: object): Record<string, unknown> & Diagnostic {
        return {
            ...entries,
            [presentation]: Diagnostic.Presentation.Dictionary,
        };
    }

    /**
     * Create a Diagnostic for an error.
     */
    export function error(error: any) {
        let message;
        let stack;
        if (error !== undefined && error !== null) {
            if (error instanceof Error) {
                message = error.message;
                stack = error.stack;
            } else {
                message = error.toString();
            }
        }
        if (message === undefined || message === null || message === "") {
            if (error instanceof Error) {
                message = error.constructor.name;
                if (message === "Error") {
                    message = "(unknown error)";
                }
            } else {
                message = "(unknown error)";
            }
        }
        if (!stack) {
            return message;
        }

        stack = error.stack;

        // Strip extra node garbage off stack from node asserts
        stack = stack.replace(/^.*?\n\nError: /gs, "Error: ");

        // Strip off redundant error tag from v8
        if (stack.startsWith("Error: ")) {
            stack = stack.slice(7);
        }

        // Strip off redundant message from v8
        if (stack.startsWith(message)) {
            stack = stack.slice(message.length);
        }

        stack = stack.trim().split("\n").map((frame: string) => frame.trim());

        // Node helpfully gives us this if there's no message
        if (stack[0] === "Error") {
            stack.shift();
        }

        return Diagnostic(
            Presentation.List,
            [
                message,
                ...stack,
            ]
        )
    }

    export interface Elapsed {
        readonly startedAt: number,
        readonly time: number;
        toString(): string;
    }

    /**
     * Convert an interval to text.
     */
    export function interval(ms: number) {
        if (ms < 0) {
            return `${(ms * 1000).toPrecision(3)}μs`;
        } else if (ms < 1000) {
            return `${ms.toPrecision(3)}ms`;
        } else if (ms < 60000) {
            return `${(ms / 1000).toPrecision(3)}s`;
        }

        let days;
        if (ms > 86_400_000) {
            days = `${Math.floor(ms / 86_400_000)}d `;
            ms %= 86_400_000;
        } else {
            days = "";
        }
        const hours = Math.floor(ms / 3_600_000).toString().padStart(2, "0");
        ms %= 3_600_000;
        const minutes = Math.floor(ms / 60_000).toString().padStart(2, "0");
        ms %= 60_000;
        const seconds = Math.floor(ms).toString().padStart(2, "0");

        return `${days}${hours}:${minutes}:${seconds}`;
}

    /**
     * Create a diagnostic that renders as elapsed time since creation.
     */
    export function elapsed(): Elapsed {
        return {
            startedAt: performance.now(),

            get time() {
                return performance.now() - this.startedAt;
            },

            toString() {
                return interval(this.time);
            }
        }
    }
}
