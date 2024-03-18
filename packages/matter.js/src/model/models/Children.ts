/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ImplementationError } from "../../common/MatterError.js";
import { AnyElement, ElementTag } from "../index.js";
import { Model } from "./Model.js";

/**
 * Children of a model.  This is a {@link Model} array with some specialization for model-specific operations.
 *
 * @template M Model types accepted as children
 * @template E Element types accepted as children
 */
export interface Children<M extends Model = Model, E extends AnyElement = AnyElement> extends Array<M> {
    /**
     * Add a child.
     *
     * Operates like a standard array push but we adjust the type to allow insertion of elements as well as models.
     */
    push(...children: (M | E)[]): number;

    /**
     * Array splice.
     *
     * Allows splicing in elements or models.
     */
    splice(index: number, deleteCount?: number, ...toAdd: (M | E)[]): M[];

    /**
     * Access a model of specific type by ID or name.  This is an optimized operation that uses internal index lookup.
     */
    get<T extends Model>(type: Model.Type<T>, idOrName: number | string): T | undefined;

    /**
     * Access a model using a {@link Children.Selector}.  This is an optimized primitive used by various tree traversal
     * algorithms.
     */
    select(selector: Children.Selector, allowedTags: ElementTag[], except?: Set<Model>): Model | undefined;

    /**
     * Models invoke this when their ID changes so we can update internal bookkeeping.
     */
    updateId(child: Model, oldId: number | undefined): void;

    /**
     * Models invoke this when their name changes so we can update internal bookkeeping.
     */
    updateName(child: Model, oldName: string): void;
}

type IndexEntry = Model | Model[];

/**
 * Invoked by {@link Model} to instantiate a new child array.
 */
export function Children<M extends Model = Model, E extends AnyElement = AnyElement>(
    initial: Iterable<M | AnyElement>,
    adopt: (child: Model) => void,
    disown: (child: Model) => boolean,
) {
    // The actual list of children.  We maintain children as elements until they're accessed.  This allows us to build
    // the full model without instantiating thousands of Models we may never use
    const children = Array<Model | AnyElement>();

    // Set to true when we are using the list of children operationally.  After reification the "children" array
    // contains only models
    let reified = false;

    // Index data.  This is a map of constructor -> (ID index, name index)
    //
    // There is an index for any constructor for which lookup has been performed.  Note that models may appear in more
    // than one constructor slot because we support lookup by any class in the inheritance hierarchy.  E.g.
    // AttributeModel could appear in an index for both AttributeModel and ValueModel.
    //
    // ID indices are sparse arrays.  Name indices are objects.
    //
    // We allow for an array in the index slot because we allow duplicate IDs or names.  This may be illegal but we
    // catch this in validation.  We only return the first entry on index lookup but this way the index remains correct
    // if e.g. a duplicate entry is inserted temporarily then deleted.
    //
    // We also allow for a single Model in the index slot because name/ID duplicates are very uncommon so we can avoid
    // the array > 99% of the time.
    let indices:
        | undefined
        | Map<
              abstract new (...args: any[]) => Model,
              {
                  byId: IndexEntry[];
                  byName: Record<string, IndexEntry>;
              }
          >;

    /**
     * Enter "reified" mode (see comment above).
     */
    function reify() {
        if (reified) {
            return;
        }
        for (let i = 0; i < children.length; i++) {
            let child = children[i];
            if (child instanceof Model) {
                continue;
            }
            child = Model.create(child);
            adopt(child);
            children[i] = child;
        }
        reified = true;
    }

    /**
     * Add a model to a name or ID index.
     */
    function indexInsert<K extends number | string>(index: Record<K, IndexEntry>, key: K, model: Model) {
        const existing = index[key];
        if (existing) {
            if (Array.isArray(existing)) {
                existing.push(model);
            } else {
                index[key] = [existing, model];
            }
        } else {
            index[key] = model;
        }
    }

    /**
     * Remove a model from a name or ID index.
     */
    function indexDelete<K extends number | string>(index: Record<K, IndexEntry>, key: K, model: Model) {
        const existing = index[key];
        if (existing === model) {
            delete index[key];
        }
        if (Array.isArray(existing)) {
            const pos = existing.indexOf(model);
            if (pos === -1) {
                return;
            }
            existing.splice(pos, 1);
            if (existing.length === 1) {
                index[key] = existing[0];
            }
            return;
        }
    }

    /**
     * Populate id and name indices for a specific child type.
     */
    function buildIndex(type: Model.Type) {
        reify();

        const byId = Array<Model>();
        const byName = {} as Record<string, Model>;

        for (const child of children) {
            if (child instanceof type) {
                // By caching effectiveId we're assuming that models without an ID do not shift position within their
                // parent.  As this is effectively static data it should be OK
                const id = child.effectiveId;
                if (id !== undefined) {
                    indexInsert(byId, id, child);
                }
                indexInsert(byName, child.name, child);
            }
        }

        const slot = { byId, byName };

        if (!indices) {
            indices = new Map();
        }
        indices.set(type, slot);

        return slot;
    }

    /**
     * Remove a child of the model.  Clears model from indices and clears "parent" field.
     */
    function deleteChild(child: Model) {
        if (indices) {
            for (const [type, slot] of indices.entries()) {
                if (child instanceof type) {
                    if (child.id) {
                        indexDelete(slot.byId, child.id, child);
                    }
                    indexDelete(slot.byName, child.name, child);
                }
            }
        }

        disown(child);
    }

    function get(type: typeof Model, idOrName: number | string) {
        const slot = indices?.get(type) ?? buildIndex(type);
        if (typeof idOrName === "number") {
            return slot.byId[idOrName];
        }
        return slot.byName[idOrName];
    }

    function indexLookup(
        selector: number | string,
        indexName: "byId" | "byName",
        allowedTags: ElementTag[],
        except?: Set<Model>,
    ) {
        for (const tag of allowedTags) {
            const type = Model.types[tag];
            if (type === undefined) {
                throw new ImplementationError(`Unknown element tag "${tag}"`);
            }

            let slot = indices?.get(type);
            if (slot === undefined) {
                slot = buildIndex(type);
            }

            const index = slot[indexName] as Record<number | string, Model>;
            const entry = index[selector];

            if (Array.isArray(entry)) {
                for (const subentry of entry) {
                    if (except?.has(subentry)) {
                        continue;
                    }
                    return subentry;
                }
                continue;
            }

            if (entry) {
                if (except?.has(entry)) {
                    continue;
                }
                return entry;
            }
        }
    }

    function indexApply(selector: (child: Model) => boolean, allowedTags: ElementTag[], except?: Set<Model>) {
        for (const tag of allowedTags) {
            const type = Model.types[tag];
            if (type === undefined) {
                throw new ImplementationError(`Unknown element tag "${tag}"`);
            }

            let index = indices?.get(type)?.byName;
            if (!index) {
                index = buildIndex(type).byName;
            }

            for (const key in index) {
                const entry = index[key];
                if (Array.isArray(entry)) {
                    for (const subentry of entry) {
                        if (except?.has(subentry)) {
                            continue;
                        }
                        if (selector(subentry)) {
                            return subentry;
                        }
                    }
                    continue;
                }

                if (except?.has(entry)) {
                    continue;
                }

                if (selector(entry)) {
                    return entry;
                }
            }
        }
    }

    function select(selector: Children.Selector, allowedTags: ElementTag[], except?: Set<Model>) {
        reify();

        if (typeof selector === "string") {
            return indexLookup(selector, "byName", allowedTags, except);
        }

        if (typeof selector === "number") {
            return indexLookup(selector, "byId", allowedTags, except);
        }

        return indexApply(selector, allowedTags, except);
    }

    function updateId(child: Model, oldId: number | undefined) {
        if (!indices) {
            return;
        }
        for (const [type, slot] of indices.entries()) {
            if (child instanceof type) {
                if (oldId !== undefined) {
                    indexDelete(slot.byId, oldId, child);
                }
                if (child.id !== undefined) {
                    indexInsert(slot.byId, child.id, child);
                }
            }
        }
    }

    function updateName(child: Model, oldName: string) {
        if (!indices) {
            return;
        }
        for (const [type, slot] of indices.entries()) {
            if (child instanceof type) {
                if (oldName !== undefined) {
                    indexDelete(slot.byName, oldName, child);
                }
            }
        }
    }

    // We implement "splice" for efficiency...  The default implementation moves elements one at a time, forcing us to search
    // the array to see if it's already present each time
    function splice(index: number, deleteCount?: number, ...toAdd: (AnyElement | Model)[]) {
        // Upgrade elements to models if reified and adopt any new models
        toAdd = toAdd.map(child => {
            if (!(child instanceof Model)) {
                if (reified) {
                    child = Model.create(child);
                } else {
                    return child;
                }
            }
            adopt(child);
            return child;
        });

        // Perform the actual splice
        const result = children.splice(index, deleteCount ?? 0, ...toAdd);

        // Convert elements to models and disown elements that are already models
        return result.map(child => {
            if (child instanceof Model) {
                disown(child);
            } else {
                child = Model.create(child);
            }
            return child;
        });
    }

    const result = new Proxy(children, {
        get: (_target, p, receiver) => {
            if (typeof p === "string" && p.match(/^[0-9]+$/)) {
                let child = children[p as unknown as number];
                if (child && !(child instanceof Model)) {
                    child = Model.create(child);
                    adopt(child);
                    children[p as unknown as number] = child;
                }

                return child;
            }

            switch (p) {
                case "get":
                    return get;

                case "select":
                    return select;

                case "updateId":
                    return updateId;

                case "updateName":
                    return updateName;

                case "splice":
                    return splice;

                case "toString":
                    return () => `[Children: ${children.length}]`;
            }

            return Reflect.get(children, p, receiver);
        },

        set: (_target, p, newValue, receiver) => {
            if (typeof p !== "string" || !p.match(/^[0-9]+$/)) {
                return Reflect.set(children, p, newValue, receiver);
            }

            if (typeof newValue !== "object" || newValue === null || !newValue.tag) {
                throw new ImplementationError("Child must be Model or AnyElement");
            }

            const existing = children[p as unknown as number];
            if (existing !== undefined) {
                if (existing === newValue) {
                    return true;
                }
                if (existing instanceof Model) {
                    deleteChild(existing);
                }
            }

            if (newValue.parent?.children === children) {
                const currentIndex = children.indexOf(newValue);
                if (currentIndex !== -1) {
                    children.splice(currentIndex, 1);
                }
                return true;
            }

            if (reified && !(newValue instanceof Model)) {
                newValue = Model.create(newValue);
            }

            children[p as unknown as number] = newValue;
            if (newValue instanceof Model) {
                adopt(newValue);
            }

            return true;
        },

        deleteProperty: (_target, p) => {
            let child;

            if (typeof p === "string" && p.match(/^[0-9]+$/)) {
                child = children[p as unknown as number];
            }

            delete children[p as unknown as number];

            // Child may have been added elsewhere in the index so only delete if not still present
            if (child instanceof Model && children.indexOf(child) === -1) {
                deleteChild(child);
            }

            return true;
        },
    });

    // Clone child array because if it references a former parent they'll disappear as we add
    initial = [...initial];

    result.push(...initial);

    return result as Children<M>;
}

export namespace Children {
    export type Selector = string | number | ((child: Model) => boolean);
}
