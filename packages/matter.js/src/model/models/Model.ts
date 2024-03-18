/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { InternalError } from "../../common/MatterError.js";
import { camelize } from "../../util/String.js";
import { DefinitionError, ElementTag, Specification } from "../definitions/index.js";
import { AnyElement, BaseElement } from "../elements/index.js";
import { ModelTraversal } from "../logic/ModelTraversal.js";
import { Children } from "./Children.js";

/**
 * A "model" is a class that implements runtime functionality associated with the corresponding element type.
 */
export abstract class Model {
    abstract readonly tag: ElementTag;
    type?: string;
    description?: string;
    details?: string;
    xref?: Model.CrossReference;
    errors?: DefinitionError[];
    declare id?: number;
    declare name: string;

    #id?: number = undefined;
    #name: string;

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

    #children?: Children;
    #parent?: Model;

    /**
     * Did validation find errors?
     */
    get valid() {
        return !this.errors;
    }

    /**
     * The path ("." delimited) in the Matter tree.
     *
     * This is informational and generally tries to adhere to JS API conventions.
     */
    get path(): string {
        if (this.parent && this.parent.tag !== ElementTag.Matter) {
            if (this.parent.tag === ElementTag.Field) {
                return `${this.parent.path}.${camelize(this.name)}`;
            }

            if (this.parent.tag === ElementTag.Cluster) {
                switch (this.tag) {
                    case ElementTag.Attribute:
                        return `${this.parent.path}.state.${camelize(this.name)}`;

                    case ElementTag.Command:
                        return `${this.parent.path}.${camelize(this.name)}`;

                    case ElementTag.Event:
                        return `${this.parent.path}.events.${camelize(this.name)}`;
                }
            }

            return `${this.parent.path}.${this.name}`;
        } else {
            return this.name;
        }
    }

    /**
     * The structural parent.  This is the model for the element that contains this element's definition.
     */
    get parent(): Model | undefined {
        return this.#parent;
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

        if (parent) {
            parent.children.push(this);
        }

        // Note that parent updates this.#parent so don't touch that
    }

    /**
     * Element view of children.  For TypeScript this allows children to be added as elements.  For JavaScript this is
     * identical to children().
     */
    get elements(): AnyElement[] {
        if (!this.#children) {
            this.children = [];
        }
        return this.#children as AnyElement[];
    }

    /**
     * Allows subclasses to pull a working ID from an alternate source.
     */
    get effectiveId() {
        return this.id;
    }

    /**
     * Get a string that uniquely identifies this model.  This is normally the effective ID but some models require a
     * generated identifier.
     */
    get key() {
        const key = this.effectiveId?.toString();
        if (key === undefined) {
            return key;
        }
        const discriminator = this.discriminator;
        if (discriminator === undefined) {
            return key;
        }
        return `${key}␜${discriminator}`;
    }

    /**
     * Obtain a discriminator that differentiates different models with the same name
     */
    get discriminator(): string | undefined {
        return;
    }

    /**
     * Children of models are always models.
     */
    get children(): Children {
        if (!this.#children) {
            // Construct new Children instance via setter
            this.children = [];
        }
        return this.#children as Children;
    }

    /**
     * Children can be added as models or elements.
     */
    set children(children: (Model | AnyElement)[]) {
        this.#children = Children(
            children,

            (child: Model) => {
                if (child.#parent === this) {
                    return;
                }

                if (child.#parent) {
                    const position = child.#parent.children.indexOf(child);
                    if (position !== -1) {
                        child.#parent.children.splice(position, 1);
                    }
                    child.#parent = undefined;
                }

                child.#parent = this;
            },

            (child: Model) => {
                if (child.#parent === this) {
                    child.#parent = undefined;
                    return true;
                }
                return false;
            },
        );
    }

    /**
     * Factory support.  Populated by derivatives upon definition.
     */
    static types = {} as { [type: string]: new (definition: any) => Model };

    /**
     * In some circumstances the base type can be inferred.  This inference happens here.
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
     * Get shadow model, if any.  A "shadow" is an element in my parent's inheritance hierarchy that I override.
     */
    get shadow() {
        return new ModelTraversal().findShadow(this);
    }

    /**
     * Get the first global base type.  This may have semantic meaning more specific than the base primitive type.
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
        const constructor = Model.types[t];
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
    all<T extends Model>(constructor: Model.Type<T>) {
        return this.children.filter(c => c instanceof constructor) as unknown[] as T[];
    }

    /**
     * Retrieve a specific model by ID or name.
     */
    get<T extends Model>(type: Model.Type<T>, key: number | string): T | undefined {
        return this.children.get(type, key);
        // return this.children.find(c =>
        //     c instanceof type && typeof key === "number" ? c.effectiveId === key : c.name === key,
        // ) as T | undefined;
    }

    /**
     * Retrieve a model of a specific type from the ownership hierarchy.
     */
    owner<T extends Model>(constructor: Model.Type<T>) {
        return new ModelTraversal().findOwner(constructor, this);
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
    member(key: Children.Selector, allowedTags = [ElementTag.Field, ElementTag.Attribute]): Model | undefined {
        return new ModelTraversal().findMember(this, key, allowedTags);
    }

    /**
     * Does this model derive from another?
     */
    instanceOf(other: Model | AnyElement) {
        return new ModelTraversal().instanceOf(this, other);
    }

    /**
     * Clone the model.  This deep copies all descendant child models but not other properties.
     */
    clone<This extends Model>(this: This): This {
        const Type = this.constructor as new (model: Model) => This;
        return new Type(this);
    }

    constructor(definition: BaseElement) {
        const isClone = definition instanceof Model;

        this.#id = definition.id;

        this.#name = definition.name;

        // Copy all definition properties.  Types will be wrong for some of them but constructors correct this.
        // Properties for which type is correct are suffixed with "!" to indicate no further initialization is necessary
        for (const [k, v] of Object.entries(definition)) {
            if (k === "id" || k === "name" || k === "parent") {
                continue;
            }

            if (isClone && k === "children") {
                continue;
            }

            if (v !== undefined) {
                (this as any)[k] = v;
            }
        }

        if (this.xref) {
            this.xref = Model.CrossReference.get(this.xref);
        }

        if (isClone) {
            for (const child of definition.children as Children) {
                this.children.push(child.clone());
            }
        }
    }

    static {
        // Obnoxious TS constraints prevent us from defining fields with accessors then overriding the type with simple
        // types.  So we just declare id and name then install accessors onto the prototype manually.  Should be
        // functionally identical (at JS level) to defining directly in the class.
        //
        // We do this in a static block so we have access to the corresponding private fields.
        //
        // We can't do the same with children because the setter and getter types are different.
        Object.defineProperties(Model.prototype, {
            id: {
                get(this: Model): number | undefined {
                    return this.#id;
                },

                set(this: Model, value: number | undefined) {
                    const oldId = this.effectiveId;
                    this.#id = value;
                    this.children.updateId(this, oldId);
                },

                enumerable: true,
            },

            name: {
                get(this: Model): string {
                    return this.#name;
                },

                set(this: Model, value: string) {
                    const oldName = this.#name;
                    this.#name = value;
                    this.children.updateName(this, oldName);
                },

                enumerable: true,
            },
        });
    }
}

export namespace Model {
    export type Type<T extends Model = Model> = abstract new (...args: any) => T;

    export type LookupPredicate<T extends Model> = Type<T> | { type: Type<T>; test: (model: Model) => boolean };

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
