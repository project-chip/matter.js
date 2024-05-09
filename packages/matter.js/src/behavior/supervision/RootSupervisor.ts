/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { InternalError } from "../../common/MatterError.js";
import { AttributeModel, ClusterModel, FeatureSet, Globals, ValueModel } from "../../model/index.js";
import { camelize } from "../../util/String.js";
import { AccessControl } from "../AccessControl.js";
import { Val } from "../state/Val.js";
import { ValueManager } from "../state/managed/values/ValueManager.js";
import { ValuePatcher } from "../state/managed/values/ValuePatcher.js";
import { ValueValidator } from "../state/validation/ValueValidator.js";
import { Schema } from "./Schema.js";
import { ValueSupervisor } from "./ValueSupervisor.js";

/**
 * A RootSupervisor is a {@link ValueSupervisor} that supervises a specific root {@link Schema}.  It acts as a factory
 * for {@link ValueSupervisor}s for sub-schemas of the root schema.
 *
 * You can produce n ValueSupervisor for any schema using this factory. However, there are specific customizations
 * controlled by the root schema:
 *
 * - Change eventing occur for root schema members.  In the case of a cluster this means you can monitor for changes on
 *   a per-attribute basis.
 *
 * - If the root schema defines a cluster, the cluster's featureMap and supportedFeatures affect conformance-based
 *   validation.
 */
export class RootSupervisor implements ValueSupervisor {
    #generating = new Set<Schema>();
    #cache = new WeakMap<Schema, ValueSupervisor>();
    #featureMap: ValueModel;
    #supportedFeatures: FeatureSet;
    #members: Set<ValueModel>;
    #root: ValueSupervisor;
    #memberNames?: Set<string>;
    #persistentNames?: Set<string>;

    /**
     * Create a new supervisor.
     *
     * @param schema the {@link Schema} for the supervised data
     */
    constructor(schema: Schema) {
        if (schema instanceof ClusterModel) {
            this.#featureMap = schema.featureMap;
            this.#supportedFeatures = schema.supportedFeatures ?? new FeatureSet();
        } else {
            this.#featureMap = new AttributeModel(Globals.FeatureMap);
            this.#supportedFeatures = new FeatureSet();
        }
        this.#members = new Set(schema.members);

        this.#root = this.#createValueSupervisor(schema);
    }

    get owner() {
        return this.#root.owner;
    }

    get schema() {
        return this.#root.schema;
    }

    get access() {
        return this.#root.access;
    }

    get validate() {
        return this.#root.validate;
    }

    get manage() {
        return this.#root.manage;
    }

    get patch() {
        return this.#root.patch;
    }

    /**
     * Retrieve root schema elements that contribute fields to the data model.
     */
    get members() {
        return this.#members;
    }

    /**
     * The names of all members.
     */
    get memberNames() {
        let names = this.#memberNames;
        if (!names) {
            names = new Set();
            for (const member of this.#members) {
                names.add(camelize(member.name));
            }
            this.#memberNames = names;
        }
        return names;
    }

    /**
     * Names of fields configured as non-volatile.
     */
    get persistentNames() {
        let persistent = this.#persistentNames;
        if (!persistent) {
            persistent = new Set();
            for (const member of this.#members) {
                if (member.effectiveQuality.nonvolatile) {
                    persistent.add(camelize(member.name));
                }
            }
            this.#persistentNames = persistent;
        }
        return persistent;
    }

    /**
     * All available features defined in the schema.
     */
    get featureMap() {
        return this.#featureMap;
    }

    /**
     * Features supported by this implementation.
     */
    get supportedFeatures() {
        return this.#supportedFeatures;
    }

    /**
     * Obtain {@link ValueSupervisor} implementation for a specific schema.
     *
     * @param schema the model describing the record type
     * @returns the I/O implementation
     */
    get(schema: Schema): ValueSupervisor {
        // #root isn't set whilc we generate root schema so guard against this.#root === undefined
        if (schema === this.#root?.schema) {
            return this;
        }

        let supervisor = this.#cache.get(schema);
        if (supervisor === undefined) {
            supervisor = this.#createValueSupervisor(schema);
            this.#cache.set(schema, supervisor);
        }

        return supervisor;
    }

    #createValueSupervisor(schema: Schema) {
        // Implements deferred generation (see comments below).  Proxies to the real generator, installs the generated
        // function, then invokes. Since I/O functions are properties and not methods, we then continue to proxy to the
        // generated function for places where the function is held directly.
        const deferGeneration = (
            name: string,
            generator: (schema: Schema, factory: RootSupervisor, base?: new () => Val) => any,
        ) => {
            let generated = false;

            return ((...args: any[]): any => {
                if (!generated) {
                    if (manager === undefined) {
                        throw new InternalError("Deferred I/O generation invoked impossibly early");
                    }

                    (manager as any)[name] = generator(schema, this);

                    generated = true;
                }

                return (manager as any)[name](...args);
            }) as any;
        };

        let manager: ValueSupervisor;
        if (this.#isGenerating(schema)) {
            manager = {
                owner: this,
                schema,
                access: AccessControl(schema),
                validate: deferGeneration("validate", ValueValidator),
                manage: deferGeneration("manage", ValueManager),
                patch: deferGeneration("patch", ValuePatcher),
            };
        } else {
            try {
                this.#generating.add(schema);
                manager = {
                    owner: this,
                    schema,
                    access: AccessControl(schema),
                    validate: ValueValidator(schema, this),
                    manage: ValueManager(schema, this),
                    patch: ValuePatcher(schema, this),
                };
            } finally {
                this.#generating.delete(schema);
            }
        }

        this.#cache.set(schema, manager);

        return manager;
    }

    /**
     * If a schema has circular references, code generation may need to defer generation of child functions to avoid
     * infinite loops.
     *
     * In order to keep generation code simpler we use this method to detect when lazy generation is necessary and
     * install stubs that bootstrap each method.
     */
    #isGenerating(schema: Schema) {
        return this.#generating.has(schema);
    }
}
