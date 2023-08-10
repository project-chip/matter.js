/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { InternalError } from "../../common/MatterError.js";
import { DefinitionError, ElementTag, Specification } from "../definitions/index.js";
import { AnyElement, BaseElement } from "../elements/index.js";
import { ModelTraversal } from "../logic/ModelTraversal.js";

const CHILDREN = Symbol("children");
const PARENT = Symbol("parent");

/**
 * A "model" is a class that implements runtime functionality associated with
 * the corresponding element type.
 */
export abstract class Model {
    // These fields are defined in BaseElement.  This base class does not
    // implement an element but subclasses do
    abstract readonly tag: ElementTag;
    id?: number;
    name!: string;
    type?: string;
    description?: string;
    details?: string;
    xref?: Model.CrossReference;
    errors?: DefinitionError[];

    /**
     * Flag set on elements loaded from Globals.
     */
    global?: boolean;

    /**
     * Indicates that an element may have type definitions as children.
     */
    isTypeScope?: boolean;

    /**
     * Indicates that an element defines a datatype.
     */
    isType?: boolean;

    private [CHILDREN]!: Array<any>;
    private [PARENT]?: Model;

    /**
     * Did validation find errors?
     */
    get valid() {
        return !this.errors;
    }

    /**
     * The full path ("." delimited) in the Matter tree.
     */
    get path(): string {
        if (this.parent && this.parent.tag !== ElementTag.Matter) {
            return `${this.parent.path}.${this.name}`;
        } else {
            return this.name;
        }
    }

    /**
     * The structural parent.  This is the model for the element that contains
     * this element's definition.
     */
    get parent(): Model | undefined {
        return this[PARENT];
    }

    set parent(parent: Model | undefined) {
        if (this.parent === parent) {
            return;
        }

        if (this.parent) {
            const index = this.parent.children.indexOf(this);
            if (index !== -1) {
                this.parent.children.splice(index, 1);
            }
        }

        if (!parent) {
            delete this[PARENT];
        } else {
            this[PARENT] = parent;
        }

        if (parent) {
            parent.children.push(this);
        }
    }

    /**
     * Element view of children.  For TypeScript this allows children to be
     * added as elements.  For JavaScript this is identical to children().
     */
    get elements(): AnyElement[] {
        if (!this[CHILDREN]) {
            this.children = [];
        }
        return this[CHILDREN];
    }

    /**
     * Allows subclasses to pull a working ID from an alternate source.
     */
    get effectiveId() {
        return this.id;
    }

    /**
     * Get a string that uniquely identifies this model.  This is normally
     * the effective ID but some models require a generated identifier.
     */
    get key() {
        return this.effectiveId?.toString();
    }

    /**
     * Children of models are always models.
     */
    get children(): Model[] {
        if (!this[CHILDREN]) {
            this.children = [];
        }
        return this[CHILDREN];
    }

    /**
     * Children can be added as models or elements.
     */
    set children(children: (Model | AnyElement)[]) {
        this[CHILDREN] = new Proxy(Array<Model>(), {
            get: (target, p, receiver) => {
                let result = Reflect.get(target, p, receiver);
                if (!(result instanceof Model) && typeof p === "string" && p.match(/^[0-9]+$/)) {
                    result = Model.create(result);
                    result[PARENT] = this;
                    Reflect.set(target, p, result, receiver);
                }
                return result;
            },

            set: (target, p, newValue, receiver) => {
                if (typeof p === "string" && p.match(/^[0-9]+$/)) {
                    if (typeof newValue !== "object" || newValue === null || !newValue.tag) {
                        throw new InternalError("Child must be Model or AnyElement");
                    }
                }
                const result = Reflect.set(target, p, newValue, receiver);
                if (newValue instanceof Model) {
                    if (newValue[PARENT] !== this) {
                        if (newValue[PARENT]) {
                            newValue.parent = undefined;
                        }
                        newValue[PARENT] = this;
                    }
                }
                return result;
            },

            deleteProperty: (target, p) => {
                let child;
                if (typeof p === "string" && p.match(/^[0-9]+$/)) {
                    child = target[Number.parseInt(p)];
                }
                if (Reflect.deleteProperty(target, p) && child) {
                    if (child[PARENT] === this && this.children.indexOf(child) === -1) {
                        child[PARENT] = undefined;
                    }
                    return true;
                }
                return false;
            },
        });

        // Clone child array because if it references a former parent they'll
        // disappear as we add
        children = [...children];

        this[CHILDREN].push(...children);
    }

    /**
     * Factory support.  Populated by derivatives upon definition.
     */
    static constructors = {} as { [type: string]: new (definition: any) => Model };

    /**
     * In some circumstances the base type can be inferred.  This inference
     * happens here.
     *
     * Does not recurse so only returns the direct base type.
     */
    get effectiveType() {
        return this.type;
    }

    /**
     * Get a Model for my base type, if any.
     */
    get base() {
        return new ModelTraversal().findBase(this);
    }

    /**
     * Get shadow model, if any.  A "shadow" is an element in my parent's
     * inheritance hierarchy that I override.
     */
    get shadow() {
        return new ModelTraversal().findShadow(this);
    }

    /**
     * Get the first global base type.  This may have semantic meaning more
     * specific than the base primitive type.
     */
    get globalBase() {
        return new ModelTraversal().findGlobalBase(this);
    }

    /**
     * A local or parent xref.
     */
    get effectiveXref() {
        return new ModelTraversal().findXref(this);
    }

    /**
     * The set of tags from which this model may derive.
     */
    get allowedBaseTags() {
        return [this.tag];
    }

    /**
     * Add a child.  children.push works too but only accepts models.
     */
    add(...children: (Model | AnyElement)[]) {
        this.children.push(...(children as any[]));
    }

    /**
     * Create a model for an element.
     */
    static create(definition: AnyElement) {
        if (typeof definition !== "object") {
            throw new InternalError(`Model definition must be object, not ${typeof definition}`);
        }
        const t = definition["tag"];
        const constructor = Model.constructors[t];
        if (!constructor) {
            throw new InternalError(`Unknown element tag "${t}"`);
        }
        return new constructor(definition);
    }

    /**
     * Retrieve all models of a specific element type from local scope.
     *
     * @param constructor model class or a predicate object
     */
    all<T extends Model>(constructor: Model.Constructor<T>) {
        return this.children.filter(c => c instanceof constructor) as T[];
    }

    /**
     * Retrieve a specific model by ID or name.
     */
    get<T extends Model>(constructor: Model.Constructor<T>, key: number | string) {
        return this.children.find(c =>
            c instanceof constructor && typeof key === "number" ? c.effectiveId === key : c.name === key,
        ) as T;
    }

    /**
     * Retrieve a model of a specific type from the ownership hierarchy.
     */
    owner<T extends Model>(constructor: Model.Constructor<T>) {
        return new ModelTraversal().findOwner(constructor, this.parent);
    }

    /**
     * Check identity of element by name or ID.
     */
    is(key: ModelTraversal.ElementSelector | undefined) {
        if (typeof key === "number") {
            return this.id === key;
        } else if (typeof key === "function") {
            return key(this);
        }
        return this.name === key;
    }

    /**
     * Record a validation error for this model.
     */
    error(code: string, message: string) {
        if (!this.errors) {
            this.errors = [];
        }

        this.errors.push({
            code,
            source: this.path,
            message,
            xref: this.effectiveXref?.toString(),
        });
    }

    /**
     * Convert model to JSON.
     */
    toJSON() {
        return this.valueOf();
    }

    /**
     * Convert to non-class structure.
     */
    valueOf(): AnyElement {
        const result = {} as { [name: string]: any };

        // Return all iterable properties minus metadata
        for (const key in this) {
            switch (key) {
                case "parent":
                case "errors":
                case "isTypeScope":
                case "isType":
                    continue;

                default:
                    result[key] = this[key];
            }
        }

        return result as AnyElement;
    }

    /**
     * Apply a function to all tree elements.
     */
    visit(visitor: (model: Model) => boolean | void) {
        return new ModelTraversal().visit(this, visitor);
    }

    /**
     * Find all children that reference a specific type.
     */
    references(type: Model) {
        return new ModelTraversal().findReferences(this, type);
    }

    /**
     * Search the inheritance chain for a child property.
     */
    member(
        key: ModelTraversal.ElementSelector,
        allowedTags = [ElementTag.Datatype, ElementTag.Attribute],
    ): Model | undefined {
        return new ModelTraversal().findMember(this, key, allowedTags);
    }

    /**
     * Does this model derive from another?
     */
    instanceOf(other: Model | AnyElement) {
        return new ModelTraversal().instanceOf(this, other);
    }

    constructor(definition: BaseElement) {
        // Copy all definition properties.  Types will be wrong for some of
        // them but constructors correct this.  Properties for which type is
        // correct are suffixed with "!" to indicate no further initialization
        // is necessary
        for (const [k, v] of Object.entries(definition)) {
            if (v !== undefined) {
                (this as any)[k] = v;
            }
        }
        if (this.xref) {
            this.xref = Model.CrossReference.get(this.xref);
        }
    }
}

export namespace Model {
    export type Constructor<T extends Model> = abstract new (...args: any) => T;

    export type LookupPredicate<T extends Model> =
        | Constructor<T>
        | { type: Constructor<T>; test: (model: Model) => boolean };

    export type PropertyValidation = {
        name: string;
        type: string | (new (...args: any[]) => any) | { [key: string | number]: any } | undefined;
        required?: boolean;
        nullable?: boolean;
        values?: { [name: string]: any };
    };

    export class CrossReference implements Specification.CrossReference {
        document: Specification;
        section: string;
        private static instances = {} as { [key: string]: CrossReference };

        private constructor({ document, section }: Specification.CrossReference) {
            this.document = document as Specification;
            this.section = section;
        }

        toString() {
            return `${this.document}§${this.section}`;
        }

        static get(xref: Specification.CrossReference) {
            const key = `${xref.document}:${xref.section}`;
            const canonical = this.instances[key];
            if (canonical) {
                return canonical;
            }
            return (this.instances[key] = new CrossReference(xref));
        }
    }
}
