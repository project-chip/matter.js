/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ImplementationError } from "../common/MatterError.js";
import { Diagnostic } from "../log/Diagnostic.js";
import type { Environment } from "./Environment.js";
import { Environmental } from "./Environmental.js";

/**
 * Read access to environmental configuration values.
 */
export class VariableService {
    #vars = {} as VariableService.Map;

    constructor(environment: Environment) {
        environment.set(VariableService, this);
    }

    static [Environmental.create](environment: Environment) {
        return new this(environment);
    }

    get [Diagnostic.value]() {
        return "Configuration";
    }

    get vars() {
        return this.#vars;
    }

    get<T extends VariableService.Primitive>(name: string, fallback?: T): T;

    get<T>(name: string, fallback?: VariableService.Value): VariableService.Value | undefined;

    get(name: string, fallback?: VariableService.Value) {
        switch (typeof fallback) {
            case "string":
                return this.string(name, fallback);

            case "number":
                return this.number(name, fallback);

            case "boolean":
                return this.boolean(name, fallback);
        }

        let value: VariableService.Value = this.#vars;
        for (const segment of this.#parseName(name)) {
            if (value === null || typeof value !== "object" || Array.isArray(value)) {
                return fallback;
            }
            value = value[segment];
        }
        return value ?? fallback;
    }

    has(name: string) {
        return this.get(name) !== undefined;
    }

    set(name: string, value: VariableService.Value) {
        const segments = name.toLowerCase().split(".");
        const key = segments.pop() as string;
        let parent: VariableService.Map = this.#vars;
        for (const segment of segments) {
            let nextParent = parent[segment];
            if (nextParent === undefined || nextParent === null) {
                nextParent = parent[segment] = {};
            } else if (typeof nextParent !== "object" || Array.isArray(nextParent)) {
                throw new ImplementationError(`Can't set ${name} because segment ${segment} is not a map`);
            }
            parent = nextParent;
        }
        parent[key] = value;
    }

    string(name: string): string | undefined;

    string(name: string, fallback: string): string;

    string(name: string, fallback?: string) {
        const value = this.get(name);
        if (value === undefined) {
            return fallback;
        }
        if (typeof value === "string") {
            return value;
        }
        if (value === null) {
            return "null";
        }
        return value.toString();
    }

    boolean(name: string): boolean | undefined;

    boolean(name: string, fallback: boolean): boolean;

    boolean(name: string, fallback?: boolean) {
        const value = this.get(name);
        switch (value) {
            case undefined:
                return fallback;

            case null:
            case 0:
            case false:
            case "false":
            case "off":
                return false;

            default:
                return true;
        }
    }

    number(name: string): number | undefined;

    number(name: string, fallback: number): number;

    number(name: string, fallback?: number) {
        let value = this.get(name);
        if (typeof value === "number") {
            return value;
        }
        if (typeof value === "string") {
            value = Number.parseFloat(value);
            if (Number.isNaN(value)) {
                return fallback;
            }
            return value;
        }
        return fallback;
    }

    bigint(name: string): bigint | undefined;

    bigint(name: string, fallback: bigint): bigint;

    bigint(name: string, fallback?: bigint) {
        const value = this.get(name);

        if (typeof value === "bigint") {
            return value;
        }

        if (typeof value === "number" || typeof value === "string") {
            return BigInt(value);
        }

        return fallback;
    }

    integer(name: string): number | undefined;

    integer(name: string, fallback: number): number;

    integer(name: string, fallback?: number) {
        const number = this.number(name) ?? fallback;
        if (typeof number === "number") {
            return Math.floor(number);
        }
    }

    list(name: string): unknown[] | undefined;

    list(name: string, fallback: unknown[]): unknown[];

    list(name: string, fallback?: unknown[]): unknown[] | undefined {
        const value = this.get(name);
        if (value === undefined || value === null) {
            return fallback;
        }

        if (Array.isArray(value)) {
            return value;
        }

        if (typeof value === "object") {
            const keys = Object.keys(value);
            if (!keys.length) {
                return fallback;
            }

            let isArrayLike = true;
            for (const key of keys) {
                if (!key.match(/^[0-9]+$/)) {
                    isArrayLike = false;
                }
            }
            if (isArrayLike) {
                return Object.values(value);
            }
        }

        return [value];
    }

    increment(name: string) {
        const value = this.integer(name) ?? 0;
        this.set(name, value + 1);
        return value;
    }

    addConfigStyle(vars: VariableService.Map) {
        this.#vars = merge(this.#vars, vars);
    }

    addUnixEnvStyle(vars: Record<string, string | undefined>) {
        this.addConfigStyle(parseUnixStyle(vars));
    }

    addArgvStyle(vars: string[]) {
        this.addConfigStyle(parseArgvStyle(vars));
    }

    #parseName(name: string) {
        return name
            .toLowerCase()
            .split(".")
            .map(segment => {
                segment = segment.trim();
                if (segment === "") {
                    throw new ImplementationError(`Variable name ${name} contains empty segments`);
                }
                return segment;
            });
    }
}

export namespace VariableService {
    export interface Options {
        unixEnvStyle?: Record<string, string>;
        argvStyle?: string[];
        configStyle?: Map;
    }

    export interface Map extends Record<string, Value> {}
    export type List = Value[];
    export type Primitive = number | string | boolean;
    export type Value = Primitive | Map | List;
}

function addVariable(into: Record<string, any>, path: string[], value: any) {
    if (!path.length) {
        return;
    }

    let current = into[path[0]];
    if (path.length === 1) {
        if (current === undefined) {
            into[path[0]] = value;
        }
        return;
    }

    if (typeof current !== "object") {
        current = into[path[0]] = {};
    }
    addVariable(current, path.slice(1), value);
}

function parseUnixStyle(values: Record<string, string | undefined>) {
    const variables = {} as VariableService.Map;

    for (const key in values) {
        if (key.startsWith("MATTER_")) {
            if (process.env[key] === undefined || process.env[key] === "") {
                continue;
            }
            addVariable(variables, key.slice(7).toLowerCase().split("_"), process.env[key]);
        }
    }

    return variables;
}

function parseArgvStyle(values: string[]) {
    const variables = {} as VariableService.Map;

    for (let arg of values) {
        if (!arg.startsWith("--")) {
            continue;
        }
        arg = arg.slice(2);

        const separatorPos = arg.indexOf("=");
        let key, value;

        if (separatorPos === -1) {
            key = arg;
            value = true;
        } else {
            key = arg.slice(0, separatorPos);
            value = arg.slice(separatorPos + 1);
            if ((value.startsWith("'") && value.endsWith("'")) || (value.startsWith('"') && value.endsWith('"'))) {
                value = value.slice(1, -1).replaceAll("\\'", "'").replaceAll('\\"', '"');
            }
        }

        addVariable(variables, key.toLowerCase().split("-"), value);
    }

    return variables;
}

export function merge(a: Record<string, any>, b: Record<string, any>) {
    const merged = { ...a };
    for (const key in b) {
        const aval = a[key];
        const bval = b[key];
        if (typeof bval === "object") {
            if (typeof aval === "object") {
                merged[key] = merge(aval, bval);
            } else {
                merged[key] = bval;
            }
        } else if (typeof aval !== "object") {
            merged[key] = bval;
        }
    }
    return merged;
}
