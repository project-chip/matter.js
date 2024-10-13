/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { BadCommandError, IncompleteError, NotACommandError, NotADirectoryError, NotFoundError } from "#errors.js";
import { InternalError, MaybePromise } from "#general";
import { bin, globals as defaultGlobals } from "#globals.js";
import { Location } from "#location.js";
import { parseInput } from "#parser.js";
import { Directory } from "#stat.js";
import { createContext, runInContext, RunningCodeOptions } from "vm";

export interface Domain {
    location: Location;
    execute(input: string): Promise<unknown>;
}

/**
 * Maintains state and executes commands.
 */
export function Domain(): Domain {
    const hiddenGlobals = Object.keys(globalThis);

    const globals: Record<string, unknown> = Object.defineProperties(
        {},
        {
            ...Object.getOwnPropertyDescriptors(globalThis),
            ...Object.getOwnPropertyDescriptors(defaultGlobals),
            bin: { value: { ...bin }, enumerable: true, writable: false, configurable: false },
        },
    );

    globals.global = globals.globalThis = globals;

    const domain: Domain = {
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
                    return globals[path];
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

            let scope = location.parent?.definition ?? globals;
            if (scope === globals.bin) {
                scope = this;
            }

            return fn.apply(scope, argvals);
        },
    };

    const context = createContext(
        new Proxy(
            {},
            {
                get(_target, key, _receiver) {
                    if (!(typeof key === "string")) {
                        return;
                    }
                    const value = domain.location.maybeAt(key);

                    if (MaybePromise.is(value)) {
                        return value.then(value => {
                            if (value === undefined) {
                                return globals[key];
                            }
                            return value.definition;
                        });
                    }

                    if (value === undefined) {
                        return globals[key];
                    }

                    return value.definition;
                },

                set(target, key, newValue, _receiver) {
                    const { definition } = domain.location;
                    if (definition === undefined || definition === null) {
                        // Shouldn't happen
                        return false;
                    }
                    target = definition;
                    (target as any)[key] = newValue;
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
                    return [
                        ...new Set([...Reflect.ownKeys(globals), ...Reflect.ownKeys(domain.location.definition as {})]),
                    ];
                },

                getOwnPropertyDescriptor(_target, p) {
                    const descriptor = Reflect.getOwnPropertyDescriptor(domain.location.definition as {}, p);
                    if (descriptor) {
                        return descriptor;
                    }
                    return Reflect.getOwnPropertyDescriptor(globals, p);
                },
            },
        ),
    );

    return domain;

    function evaluate(js: string, options: RunningCodeOptions = {}) {
        return runInContext(js, context, {
            breakOnSigint: true,
            filename: "matter-cli-eval",
            displayErrors: false,
            ...options,
        });
    }
}
