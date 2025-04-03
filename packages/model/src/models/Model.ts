/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { camelize, decamelize, ImplementationError } from "#general";
import { DefinitionError, ElementTag, Metatype, Specification } from "../common/index.js";
import { AnyElement, BaseElement } from "../elements/index.js";
import { ModelTraversal } from "../logic/ModelTraversal.js";
import { Children } from "./Children.js";

const inspect = Symbol.for("nodejs.util.inspect.custom");

/**
 * Thrown when model API is used incorrectly.
 */
export class StructuralModelError extends ImplementationError {}

/**
 * A "model" is a class that implements runtime functionality associated with the corresponding element type.
 *
 * @template T the element type this model implements
 */
export abstract class Model<T extends BaseElement = BaseElement> {
    abstract readonly tag: ElementTag;
    type?: string;
    isSeed?: boolean;
    description?: string;
    details?: string;
    xref?: Model.CrossReference;
    errors?: DefinitionError[];
    asOf?: Specification.Revision;
    until?: Specification.Revision;
    matchTo?: {
        id?: string | number;
        name?: string;
    };
    declare id?: number;
    declare name: string;

    #id?: number = undefined;
    #name: string;
    #frozen?: boolean;

    /**
     * Indicates that an element defines a datatype.
     */
    isType?: boolean;

    /**
     * Normally {@link base} performs lookup based on {@link type}.  Setting this field short circuits this resolution.
     *
     * The operational base also enables resolution from the operational base's tree.  This enables resolution on
     * operational models that are not installed in a parent hierarchy.
     *
     * We set the operational base when freezing the model.
     */
    operationalBase?: Model | null;

    /**
     * This is like {@link operationalBase} except for the element's shadow.
     */
    operationalShadow?: Model | null;

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
                        return `${this.parent.path}.state.${camelize(this.name, false)}`;

                    case ElementTag.Command:
                        return `${this.parent.path}.${camelize(this.name, false)}`;

                    case ElementTag.Event:
                        return `${this.parent.path}.events.${camelize(this.name, false)}`;
                }
            }

            const parent = this.parent;
            if (parent.tag !== ElementTag.Cluster) {
                const parentMetatype = (parent as { effectiveMetatype?: Metatype })?.effectiveMetatype;
                if (parentMetatype === Metatype.object || parentMetatype === Metatype.array) {
                    return `${parent.path}.${camelize(this.name, false)}`;
                }
            }

            return `${parent.path}.${this.name}`;
        } else {
            return this.name;
        }
    }

    /**
     * Determine if this model resides in the global namespace.
     */
    get isGlobal() {
        return this.tag === "matter" || this.parent?.tag === "matter";
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
     * Set the children of the model.
     */
    set children(children: Children.InputIterable<Model<AnyElement>>) {
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
     * Factory support.
     */
    static types = {} as { [type: string]: Model.ConcreteType };

    /**
     * Add a new model implementation.
     */
    static register(this: Model.ConcreteType) {
        Model.types[this.Tag] = this;
    }

    /**
     * All possible tags for registered models of this type.
     */
    static get tags() {
        return Object.values(Model.types)
            .filter(type => type instanceof this)
            .map(type => type.Tag);
    }

    /**
     * In some circumstances the base type can be inferred.  This inference happens here.
     *
     * Does not recurse so only returns the direct base type.
     */
    get effectiveType() {
        return this.type;
    }

    /**
     * Get a model for my base type as defined by {@link type}, if any.
     */
    get base(): Model | undefined {
        if (this.operationalBase !== undefined) {
            return this.operationalBase ?? undefined;
        }
        return new ModelTraversal().findBase(this);
    }

    /**
     * Get shadow model, if any.  A "shadow" is an element in my parent's inheritance hierarchy that I override.
     */
    get shadow(): Model | undefined {
        if (this.operationalShadow !== undefined) {
            return this.operationalShadow ?? undefined;
        }
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
     * Update a subset of fields.
     */
    patch(values: Partial<T>) {
        for (const [k, v] of Object.entries(values.valueOf())) {
            this[k as keyof this] = v;
        }
    }

    /**
     * Determine whether this element applies to a specific revision.
     */
    appliesTo(revision: Specification.Revision) {
        // Stick to simple string comparison for now as it is efficient; update if versioning ever gets more complex
        // (or Matter reaches version 10)
        return (
            (this.asOf === undefined || revision >= this.asOf) && (this.until === undefined || revision < this.until)
        );
    }

    /**
     * Create a model for an element.
     */
    static create(definition: AnyElement) {
        if (typeof definition !== "object") {
            throw new StructuralModelError(`Model definition must be object, not ${typeof definition}`);
        }
        const t = definition["tag"];
        const constructor = Model.types[t];
        if (!constructor) {
            throw new StructuralModelError(`Unknown element tag "${t}"`);
        }
        return new constructor(definition);
    }

    /**
     * Retrieve all models of a specific element type from local scope.
     *
     * @param type model class or a predicate object
     * @param key filters to models matching a specific type
     */
    all<T extends Model>(type: Model.Type<T>, key?: number | string): T[] {
        return this.children.all(type, key);
    }

    /**
     * Retrieve a specific child by ID or name.
     */
    get<T extends Model>(type: Model.Type<T>, key: number | string): T | undefined {
        return this.children.get(type, key);
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
        const fields = this.valueOf();
        if (this.children.length) {
            fields.children = this.children.map(child => child.toJSON());
        }
        return fields;
    }

    /**
     * Convert to non-class structure.
     */
    valueOf() {
        const result = {} as { [name: string]: any };

        // Return all iterable properties minus metadata
        for (const key in this) {
            switch (key) {
                case "parent":
                case "errors":
                case "scope":
                case "isType":
                case "operationalBase":
                case "isScope":
                    continue;

                default:
                    if (this[key] !== undefined && (this[key] !== null || key === "default")) {
                        result[key] = this[key];
                    }
            }
        }

        return result as T;
    }

    /**
     * Apply a function to all tree elements.
     */
    visit(visitor: (model: Model) => boolean | void) {
        return new ModelTraversal().visit(this, visitor);
    }

    /**
     * Visit this model and each of its ancestors.
     */
    forEachAncestor(fn: (model: Model) => boolean | void) {
        new ModelTraversal().visitInheritance(this, fn);
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
     * Access a member that must exist.
     */
    require<T extends Model>(type: Model.ConcreteType<T>, key: Children.Selector): T {
        let member = this.member(key, [type.Tag]);
        if (member === undefined && typeof key === "string") {
            member = this.member(camelize(key, true));
        }
        if (member !== undefined) {
            return member as T;
        }

        let what;
        switch (typeof key) {
            case "string":
                what = `"${key}"`;
                break;

            case "number":
                what = `#${key}"`;
                break;

            default:
                what = `selected`;
        }

        throw new StructuralModelError(`No ${type.Tag} ${what} for ${this.tag} ${this.name}`);
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

    /**
     * Create an operational extension of the model.  This creates a new model that inherits from this model for
     * operational purposes.
     */
    extend<This extends Model>(
        this: This,
        properties?: Partial<BaseElement.Properties<T>>,
        ...children: Model.Definition<Model>[]
    ): This {
        const constructor = this.constructor as new (properties: unknown) => This;

        const definition = {
            id: this.id,
            name: this.name,

            ...properties,

            tag: this.tag,
            operationalBase: this,
        };

        if (children.length) {
            if (definition.children) {
                definition.children = [...definition.children, ...children];
            } else {
                definition.children = children;
            }
        }

        const extension = new constructor(definition);

        return extension;
    }

    constructor(definition: Model<T> | BaseElement.Properties<T>, ...children: Model.Definition<Model>[]) {
        if (typeof definition !== "object") {
            throw new StructuralModelError(`Model definition must be an object, not ${typeof definition}`);
        }

        const isClone = definition instanceof Model;

        this.#id = definition.id;

        this.#name = definition.name;

        // Copy all definition properties.  Types will be wrong for some of them but constructors correct this.
        // Properties for which type is correct are suffixed with "!" to indicate no further initialization is necessary
        for (const [k, v] of Object.entries(definition)) {
            if (k === "id" || k === "name" || k === "parent" || k === "isGlobal") {
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
            for (const child of definition.children) {
                this.children.push(child.clone() as Model.ChildOf<typeof this>);
            }
        }

        if (children.length) {
            this.children.push(...children);
        }
    }

    /**
     * Freeze the model hierarchy rooted at this model.
     *
     * When using a model as operational schema we implement various optimizations that assume the schema is immutable.
     * This function enforces that assumption and caches a few values that only make sense with frozen schema.
     *
     * To make changes to a frozen model use {@link clone}.
     */
    freeze() {
        if (this.#frozen) {
            return;
        }

        const base = this.operationalBase ?? (this.operationalBase = this.base ?? null);
        const shadow = this.operationalShadow ?? (this.operationalShadow = this.shadow ?? null);
        this.#frozen = true;
        Object.freeze(this);
        this.children.freeze();
        base?.freeze();
        shadow?.freeze();
    }

    toString() {
        return `${this.tag}${this.type ? `<${this.type}>` : ""}#${this.path}`;
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
                    this.#parent?.children.updateId(this, oldId);
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
                    this.#parent?.children.updateName(this, oldName);
                },

                enumerable: true,
            },
        });
    }

    [inspect](_depth: any, options: any, inspect: any) {
        const json = this.valueOf() as Record<string, unknown>;
        const props = {
            name: json.name,
        } as Record<string, unknown>;
        if (json.id !== undefined) {
            props.id = json.id;
        }
        for (const key in json) {
            if (key === "id" || key === "name" || key === "tag") {
                continue;
            }
            props[key] = json[key];
        }
        if (this.#children !== undefined && this.#children.length) {
            props.children = this.#children.length;
        }
        if (!inspect) {
            inspect = (value: unknown) => `${value}`;
        }
        return `${inspect(props, options)}`.replace(/^\{/, `${decamelize(this.tag)} {`);
    }
}

export namespace Model {
    /**
     * Obtain the element type of a model type.
     */
    export type ElementOf<T> = T extends Model<infer E extends AnyElement> ? E : AnyElement;

    /**
     * Obtain the child type of a model type.
     */
    export type ChildOf<T> = T extends { children: Children<infer C> } ? C : never;

    /**
     * Input model.  In most places elements and models are interchangeable on input.
     */
    export type Definition<T extends Model> = ElementOf<T> | T;

    /**
     * A model constructor.
     */
    export type Type<T extends Model = Model> = abstract new (...args: any) => T;

    /**
     * A model constructor for a specific element type.
     */
    export type ConcreteType<T extends Model = Model> = (new (definition: any) => T) & { Tag: ElementTag };

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

        [inspect](_depth: any, options: any, inspect: any) {
            return inspect(this.toString(), options);
        }
    }
}
