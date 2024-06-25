/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Lifecycle } from "../common/Lifecycle.js";
import { isObject } from "../util/Type.js";

/**
 * Logged values may implement this interface to customize presentation.
 *
 * You can use the utility functions such as {@link Diagnostic.dict} to create
 * Diagnostics from common value types.
 */
export interface Diagnostic {
    readonly [Diagnostic.presentation]?: Diagnostic.Presentation | Lifecycle.Status;
    readonly [Diagnostic.value]?: unknown;
}

/**
 * Create a diagnostic giving a value a specific presentation.
 */
export function Diagnostic(presentation: Diagnostic.Presentation | Lifecycle.Status, value: unknown): Diagnostic {
    return {
        [Diagnostic.presentation]: presentation,
        [Diagnostic.value]: value,
    };
}

export namespace Diagnostic {
    export enum Presentation {
        /**
         * By default iterables render as a single line with spaces separating.  The "list" presentation treats elements
         * instead as separate entities which typically means presentation on different lines.
         *
         * Within an iterable, a list also serves to present contained items as subordinate to the previous item.
         */
        List = "list",

        /**
         * Render iterables without intervening spaces.
         */
        Squash = "squash",

        /**
         * An emphasized diagnostic.  Rendered to draw attention.
         */
        Strong = "strong",

        /**
         * A deemphasized diagnostic.  Rendered to draw less attention than default rendering.
         */
        Weak = "weak",

        /**
         * An error message diagnostic.
         */
        Error = "error",

        /**
         * A key/value diagnostic.  Rendered as a group of key/value pairs.
         */
        Dictionary = "dictionary",

        /**
         * Path, resource or session identifier.
         */
        Via = "via",
    }

    export const presentation = Symbol("presentation");
    export const value = Symbol("value");

    /**
     * Create a value presented emphatically.
     */
    export function strong(value: unknown) {
        return Diagnostic(Diagnostic.Presentation.Strong, value);
    }

    /**
     * Create a value presented less emphatically than the default.
     */
    export function weak(value: unknown) {
        return Diagnostic(Diagnostic.Presentation.Weak, value);
    }

    /**
     * Create a value identifying the source of a diagnostic event.
     */
    export function via(value: string) {
        if ((value as Diagnostic)[presentation]) {
            return value;
        }
        const via = new String(value);
        Object.defineProperty(via, presentation, { value: Presentation.Via });
        return via as string;
    }

    /**
     * A node in a diagnostic tree.  Top-level diagnostic sources registered with DiagnosticSource should present as
     * nodes.
     */
    export function node(icon: string, label: unknown, detail: { self?: unknown; children?: unknown[] }) {
        const result = [icon, Diagnostic.strong(label)] as unknown[];
        if (detail?.self !== undefined) {
            result.push(detail.self);
        }
        if (detail?.children !== undefined) {
            result.push(Diagnostic.list(detail.children));
        }
        return result;
    }

    /**
     * Create a value presenting as a list of separate lines.
     */
    export function list(value: Iterable<unknown>) {
        return Diagnostic(Diagnostic.Presentation.List, value);
    }

    /**
     * Create a value presenting as segments of the same string without intervening spaces.
     */
    export function squash(...values: unknown[]) {
        return Diagnostic(Diagnostic.Presentation.Squash, values);
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
        const { message, stack } = messageAndStackFor(error);

        let cause, errors;
        if (isObject(error)) {
            ({ cause, errors } = error);
        }

        if (stack === undefined && cause === undefined && errors === undefined) {
            return message;
        }

        const list: Array<string | Diagnostic> = [message];
        if (stack !== undefined) {
            list.push(Diagnostic(Presentation.List, stack));
        }

        // We render chained causes at the same level as the parent.  They are displayed atomically and there can be
        // only one so this is not ambiguous.  If we did not do this we would end up with a lot of indent levels
        for (; isObject(cause); cause = cause.cause) {
            const { message, stack } = messageAndStackFor(cause);
            list.push(message);
            if (stack !== undefined) {
                list.push(stack as Diagnostic);
            }
        }

        // AggregateError support.  We render sub-errors as subordinate to the parent.  Otherwise the parent error would
        // be ambiguous.  This means they get an extra indent level but since they do not tend to be nested as deeply as
        // causes this is a good tradeoff
        if (Array.isArray(errors)) {
            list.push(
                errors.map(e => {
                    let diagnostic = Diagnostic.error(e);
                    if (Array.isArray(diagnostic)) {
                        diagnostic[0] = Diagnostic(Presentation.Error, ["Sub-error:", diagnostic[0]]);
                    } else if (Array.isArray(diagnostic)) {
                        diagnostic = Diagnostic(Presentation.Error, ["Sub-error:", diagnostic]);
                    }
                    return diagnostic;
                }) as Diagnostic,
            );
        }

        return Diagnostic(Presentation.List, list);
    }

    /**
     * Create a diagnostic with a specific {@link Lifecycle}.
     */
    export function lifecycle(status: Lifecycle.Status, value: unknown) {
        return Diagnostic(status, value);
    }

    /**
     * Create a diagnostic for a {@link Lifecycle.Map}.
     */
    export function lifecycleList(map: Lifecycle.Map<any>) {
        return Object.entries(map).map(([label, status]) => Diagnostic(status, label));
    }

    export interface Elapsed {
        readonly startedAt: number;
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
        const hours = Math.floor(ms / 3_600_000)
            .toString()
            .padStart(2, "0");
        ms %= 3_600_000;
        const minutes = Math.floor(ms / 60_000)
            .toString()
            .padStart(2, "0");
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
            },
        };
    }

    /**
     * Upgrade a value to support specialized diagnostic rendering.
     */
    export function upgrade<T>(value: boolean | number | string | object, diagnostic: unknown): T {
        switch (typeof value) {
            case "boolean":
                value = new Boolean(value);
                break;

            case "number":
                value = new Number(value);
                break;

            case "string":
                value = new String(value);
                break;
        }

        if (typeof diagnostic === "function") {
            Object.defineProperty(value, Diagnostic.value, { get: diagnostic as () => unknown });
        } else {
            Object.defineProperty(value, Diagnostic.value, { value: diagnostic });
        }

        return value as T;
    }

    /**
     * Convert a number or bigint to a hex string which is prefixed by "0x" for logging purposes
     */
    export function hex(value: number | bigint) {
        return `0x${value.toString(16)}`;
    }
}

function messageAndStackFor(error: any) {
    let message: string | undefined;
    let rawStack: string | undefined;
    if (error !== undefined && error !== null) {
        if (error instanceof Error) {
            message = error.message;
            rawStack = error.stack;
        } else if (error.message) {
            message = typeof error.message === "string" ? message : error.toString();
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
    if (!rawStack) {
        return { message };
    }

    rawStack = rawStack.toString();

    // Strip extra node garbage off stack from node asserts
    rawStack = rawStack.replace(/^.*?\n\nError: /gs, "Error: ");

    // Strip off redundant error tag from v8
    if (rawStack.startsWith("Error: ")) {
        rawStack = rawStack.slice(7);
    }

    // Strip off redundant message from v8
    const pos = rawStack.indexOf(message);
    if (pos !== -1) {
        rawStack = rawStack.slice(pos + message.length).trim();
    }

    // Spiff up stack lines a bit
    const stack = Array<unknown>();
    for (let line of rawStack.split("\n")) {
        line = line.trim();
        if (line === "") {
            continue;
        }

        const match1 = line.match(/^at\s+(?:(.+)\s+\(([^)]+)\)|(<anonymous>))$/);
        if (match1) {
            const value = [Diagnostic.weak("at "), match1[1] ?? match1[3]];
            if (match1[2] !== undefined) {
                value.push(Diagnostic.weak(" ("), Diagnostic.weak(match1[2]), Diagnostic.weak(")"));
            }
            stack.push(Diagnostic.squash(...value));
            continue;
        }

        const match2 = line.match(/^at\s+(.+)(:\d+:\d+)$/);
        if (match2) {
            stack.push(Diagnostic.squash(Diagnostic.weak("at "), match2[1], Diagnostic.weak(match2[2])));
            continue;
        }

        stack.push(line);
    }

    // Node helpfully gives us this if there's no message.  It's not even the name of the error class, just "Error"
    if (stack[0] === "Error") {
        stack.shift();
    }

    return { message, stack };
}
