/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { BadCommandError, IncompleteError, NotACommandError, NotADirectoryError, NotFoundError } from "#errors.js";
import { Environment, InternalError, MaybePromise } from "#general";
import { bin, globals as defaultGlobals } from "#globals.js";
import { Location, undefinedValue } from "#location.js";
import { parseInput } from "#parser.js";
import { Directory } from "#stat.js";
import colors from "ansi-colors";
import { inspect } from "util";
import { createContext, runInContext, RunningCodeOptions } from "vm";

export interface TextWriter {
    (...text: string[]): void;
}

/**
 * Interfaces {@link Domain} with other components.
 *
 * Note that this is not destructured internally so fields may be dynamic.
 */
export interface DomainContext {
    description: string;
    env: Environment;
    out: TextWriter;
    err: TextWriter;
    terminalWidth: number;
    colorize: boolean;
}

export interface Domain extends DomainContext {
    isDomain: true;
    location: Location;
    exitHandler?: () => MaybePromise;
    execute(input: string): Promise<unknown>;
    searchPathFor(name: string): Promise<Location>;
    inspect(what: unknown): string;
}

/**
 * Maintains state and executes commands.
 */
export function Domain(context: DomainContext): Domain {
    const hiddenGlobals = Object.keys(globalThis);

    const globals: Record<string, unknown> = Object.defineProperties(
        {},
        {
            ...Object.getOwnPropertyDescriptors(globalThis),
            ...Object.getOwnPropertyDescriptors(defaultGlobals),
            bin: {
                value: { ...bin },
                enumerable: true,
                writable: false,
                configurable: false,
            },
        },
    );

    Object.defineProperty(globals.bin, "domain", {
        get() {
            return domain;
        },

        enumerable: false,
    });

    globals.global = globals.globalThis = globals;

    const domain: Domain = {
        isDomain: true,

        location: Location(
            "",
            globals,
            Directory({
                paths() {
                    const result = new Set(Object.keys(globals));
                    for (const name of hiddenGlobals) {
                        result.delete(name);
                    }
                    return [...result];
                },

                definitionAt(path: string) {
                    // Crypto has specialized constraints on its "this"
                    if (path === "crypto") {
                        return globalThis.crypto;
                    }
                    if (Object.hasOwn(globals, path)) {
                        const result = globals[path];
                        if (result === undefined) {
                            return undefinedValue;
                        }
                        return result;
                    }
                },
            }),
            undefined,
        ),

        async execute(inputStr: string) {
            const input = parseInput(inputStr);

            switch (input.kind) {
                case "empty":
                    return;

                case "incomplete":
                    throw new IncompleteError(input.error);

                case "command":
                    break;

                case "statement":
                    return await evaluate(input.js);

                default:
                    throw new InternalError(`Unknown internal command type ${(input as any).kind}`);
            }

            const { name, args } = input;

            const location = await this.searchPathFor(name);

            const fn = location?.definition;

            if (location === undefined || fn === undefined) {
                throw new NotACommandError(name);
            }

            if (typeof fn !== "function") {
                if (args.length) {
                    // If there are arguments it must be a call; otherwise it's just inspection
                    throw new BadCommandError(name);
                }
                return fn;
            }

            const argvals = args.map(arg => {
                return evaluate(arg.js, {
                    lineOffset: arg.line - 1,
                    columnOffset: arg.column,
                });
            });

            const scope = location.parent?.definition ?? globals;

            return fn.apply(scope, argvals);
        },

        async searchPathFor(name: string) {
            let location;
            try {
                location = await this.location.at(name);
            } catch (e) {
                if ((e instanceof NotFoundError || e instanceof NotADirectoryError) && name.indexOf("/") === -1) {
                    // "path" search
                    try {
                        location = await this.location.at(Location.join("/bin", name));
                    } catch (e2) {
                        if (e instanceof NotFoundError || e instanceof NotADirectoryError) {
                            // Throw original error
                            throw e;
                        }
                        throw e2;
                    }
                } else {
                    throw e;
                }
            }
            return location;
        },

        inspect(value: unknown) {
            if (value === undefinedValue) {
                return colors.dim("(undefined)");
            }
            return inspect(value, false, 1, this.colorize);
        },

        get description() {
            return context.description;
        },

        get out() {
            return context.out;
        },

        get err() {
            return context.err;
        },

        get terminalWidth() {
            return context.terminalWidth;
        },

        get colorize() {
            return context.colorize;
        },

        get env() {
            return context.env;
        },
    };

    const vmContext = createContext(
        new Proxy(
            {},
            {
                get(_target, key, _receiver) {
                    if (key in (domain.location.definition as {})) {
                        return (domain.location.definition as any)[key];
                    }

                    return globals[key as any];
                },

                set(_target, key, newValue, _receiver) {
                    const { definition } = domain.location;
                    if (definition === undefined || definition === null) {
                        // Shouldn't happen
                        return false;
                    }
                    (definition as any)[key] = newValue;
                    return true;
                },

                has(_target, key) {
                    const { definition } = domain.location;
                    if (definition === undefined || definition === null || typeof definition !== "object") {
                        // Shouldn't happen
                        return false;
                    }
                    return key in definition;
                },

                defineProperty(_target, property, attributes) {
                    Object.defineProperty(domain.location.definition, property, attributes);
                    return true;
                },

                deleteProperty(_target, property) {
                    const { definition } = domain.location;
                    if (definition === undefined || definition === null) {
                        // Shouldn't happen
                        return false;
                    }
                    Reflect.deleteProperty(definition, property);
                    return true;
                },

                ownKeys(_target) {
                    return Reflect.ownKeys(domain.location.definition as {});
                },

                getOwnPropertyDescriptor(target, p) {
                    const result = Reflect.getOwnPropertyDescriptor(domain.location.definition as {}, p);
                    if (result === undefined) {
                        Reflect.deleteProperty(target, p);
                    } else {
                        // We can never report a property as configurable because it must match the result on the target
                        // and we need to be able to configure target to align with other invariants
                        result.configurable = true;
                        Object.defineProperty(target, p, result);
                        return result;
                    }
                },
            },
        ),
    );

    return domain;

    function evaluate(js: string, options: RunningCodeOptions = {}) {
        return runInContext(js, vmContext, {
            breakOnSigint: true,
            filename: "matter-cli-eval",
            displayErrors: false,
            ...options,
        });
    }
}
