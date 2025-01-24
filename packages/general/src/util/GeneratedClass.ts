/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { InternalError } from "../MatterError.js";

/**
 * Helper function for class generation.
 *
 * This factory does not offer TypeScript types for the resulting class.  You must cast separately.
 */
export function GeneratedClass(options: GeneratedClass.Options) {
    const { base, name, args, mixins } = options;

    // Options + any additional mixins defines complete functionality
    const allMixins = mixins ? [...mixins, options] : [options];

    // Create the constructor function
    const type = createConstructor({
        name: name ?? (base ? `${base.name}$` : "GeneratedClass"),
        base,
        args,
        mixins: allMixins,
    });

    // Install properties
    for (const mixin of allMixins) {
        applyMixin(type, mixin);
    }

    return type;
}

function applyMixin(
    constructor: new (...args: any) => any,
    { staticProperties, staticDescriptors, instanceDescriptors }: GeneratedClass.Mixin,
) {
    if (staticProperties) {
        Object.assign(constructor, staticProperties);
    }
    if (staticDescriptors) {
        Object.defineProperties(constructor, staticDescriptors);
    }
    if (instanceDescriptors) {
        Object.defineProperties(constructor.prototype, instanceDescriptors);
    }
}

export namespace GeneratedClass {
    /**
     * These fields control class behavior.
     */
    export interface Mixin {
        /**
         * A function that performs initialization after instantiation.  "this" will be the object and arguments are the
         * arguments to the constructor.
         */
        initialize?: (...args: any[]) => void;

        /**
         * Instance properties.
         */
        instanceProperties?: object;

        /**
         * Instance properties defined using descriptors.
         */
        instanceDescriptors?: PropertyDescriptorMap;

        /**
         * Static properties.
         */
        staticProperties?: object;

        /**
         * Static properties defined using descriptors.
         */
        staticDescriptors?: PropertyDescriptorMap;
    }

    /**
     * Input to {@link GeneratedClass}.
     */
    export interface Options extends Mixin {
        /**
         * The name of the class.
         */
        name?: string;

        /**
         * The base class, if any.
         */
        base?: new (...args: any) => any;

        /**
         * A preprocessor for arguments.  Derivatives may use this to transform arguments prior to call to super() and
         * initialize().
         */
        args?: (...args: any[]) => any[];

        /**
         * Options is a default mixin but you can provide others here.
         */
        mixins?: Mixin[];
    }
}

interface ConstructorOptions {
    name: string;
    mixins: GeneratedClass.Mixin[];
    base?: new (...args: any[]) => any;
    args?: (...args: any[]) => any[];
}

function createConstructor({ name, base, args, mixins }: ConstructorOptions) {
    // CJS Transpilation renames this symbol so bring it local to access
    // @ts-expect-error this is used by generated code that TS knows nothing of
    const _InternalError = InternalError;

    // Have to use eval if we don't want every class to be called "GeneratedClass" in the debugger but we can ensure
    // this won't be abused.
    //
    // "name" is the only input to this function that appears textually in the eval.  We limit it to letters, numbers,
    // "$" and "_".
    if (!name.match(/^[\p{L}0-9$_]+$/u)) {
        throw new InternalError("Refusing to generate class with untrustworthy name");
    }

    let ext;
    if (base) {
        ext = `extends base `;
    } else {
        ext = "";
    }

    const code = [`class ${name} ${ext}{`];

    // Consolidate mixins to a single initialize and instanceProperties
    let initialize: undefined | GeneratedClass.Options["initialize"];
    let instanceProperties: undefined | GeneratedClass.Options["instanceProperties"];

    for (const mixin of mixins) {
        const mixinInitialize = mixin.initialize;

        // Add initializer
        if (mixinInitialize) {
            if (initialize) {
                const baseInitialize = initialize;
                initialize = function (this: any, ...args) {
                    baseInitialize.call(this, ...args);
                    mixinInitialize.call(this, ...args);
                };
            } else {
                initialize = mixinInitialize;
            }
        }

        // Add instance properties
        if (mixin.instanceProperties) {
            if (instanceProperties) {
                instanceProperties = {
                    ...instanceProperties,
                    ...mixin.instanceProperties,
                };
            } else {
                instanceProperties = mixin.instanceProperties;
            }
        }
    }

    // If we need a constructor, add it
    if (args || initialize || instanceProperties) {
        code.push("constructor() {");

        let argsName;
        if (args) {
            argsName = "a";
            code.push(`const a = args(...arguments)`);
        } else {
            argsName = "arguments";
        }

        if (base) {
            code.push(`super(...${argsName})`);
        }

        if (instanceProperties) {
            // Do not use Object.assign because we want to support accessors
            code.push(`for (const k in instanceProperties) this[k] = instanceProperties[k]`);
        }

        if (initialize) {
            code.push(`initialize.apply(this, ${argsName})`);
        }

        code.push("}");
    }

    code.push("}", name);

    return eval(code.join("\n")) as new (...args: any) => any;
}
