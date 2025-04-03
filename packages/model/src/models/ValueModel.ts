/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Access, Aspect, Conformance, Constraint, Quality } from "../aspects/index.js";
import { ElementTag, FieldValue, Metatype } from "../common/index.js";
import { BaseElement, ValueElement } from "../elements/index.js";
import { ModelTraversal } from "../logic/ModelTraversal.js";
import { Aspects } from "./Aspects.js";
import { Model } from "./Model.js";
import type { PropertyModel } from "./PropertyModel.js";

// These are circular dependencies so just to be safe we only import the types.  We also need the class, though, at
// runtime.  So we use the references in the Model.constructors factory pool.
import { Scope } from "#logic/Scope.js";
import { Children } from "./Children.js";
import { type FieldModel } from "./FieldModel.js";

const CONSTRAINT: unique symbol = Symbol("constraint");
const CONFORMANCE: unique symbol = Symbol("conformance");
const ACCESS: unique symbol = Symbol("access");
const QUALITY: unique symbol = Symbol("quality");

/**
 * Each {@link ValueElement} type has a corresponding implementation that derives from this class.
 */
export abstract class ValueModel<T extends ValueElement = ValueElement> extends Model<T> implements ValueElement {
    declare byteSize?: ValueElement.ByteSize;
    declare default?: FieldValue;
    declare metatype?: Metatype;
    override isType? = true;

    override get children(): Children<FieldModel> {
        return super.children as Children<FieldModel>;
    }

    override set children(children: Children.InputIterable<FieldModel>) {
        super.children = children;
    }

    get constraint(): Constraint {
        return Aspects.getAspect(this, CONSTRAINT, Constraint);
    }
    set constraint(definition: Constraint | Constraint.Definition) {
        Aspects.setAspect(this, CONSTRAINT, Constraint, definition);
    }
    get effectiveConstraint(): Constraint {
        return new ModelTraversal().findConstraint(this, CONSTRAINT) || this.constraint;
    }

    get conformance(): Conformance {
        return Aspects.getAspect(this, CONFORMANCE, Conformance);
    }
    set conformance(definition: Conformance | Conformance.Definition) {
        Aspects.setAspect(this, CONFORMANCE, Conformance, definition);
    }
    get effectiveConformance(): Conformance {
        return Aspects.getEffectiveAspect(this, CONFORMANCE, Conformance);
    }

    get access(): Access {
        return Aspects.getAspect(this, ACCESS, Access);
    }
    set access(definition: Access | Access.Definition) {
        Aspects.setAspect(this, ACCESS, Access, definition);
    }
    get effectiveAccess(): Access {
        return new ModelTraversal().findAccess(this, ACCESS, ValueModel);
    }

    get quality(): Quality {
        return Aspects.getAspect(this, QUALITY, Quality);
    }
    set quality(definition: Quality | Quality.Definition) {
        Aspects.setAspect(this, QUALITY, Quality, definition);
    }
    get effectiveQuality(): Quality {
        return Aspects.getEffectiveAspect(this, QUALITY, Quality);
    }

    /**
     * Metatype is only present on global types with specific semantic meaning. This model is significant because it
     * gives us information about how to manipulate the data.  This accessor retrieves this model.
     */
    get metabase(): ValueModel | undefined {
        return new ModelTraversal().findMetabase(this) as ValueModel | undefined;
    }

    /**
     * Get the primitive type for this value model.  This is an integer type for enums and bitmaps.  Otherwise it's the
     * metabase.
     */
    get primitiveBase(): ValueModel | undefined {
        const metabase = this.metabase;
        if (!metabase) {
            return;
        }

        // Enum is a derived type so we can just return its base
        if (metabase.metatype === Metatype.enum) {
            return metabase.base;
        }

        // Bitmaps are not derived types so we have to map manually
        if (metabase.metatype === Metatype.bitmap) {
            const primitiveName = metabase.name.replace("map", "uint");
            return metabase.parent?.children.find(c => c.name === primitiveName) as ValueModel | undefined;
        }

        return metabase;
    }

    /**
     * The "effective type" may be inferred from context.
     */
    override get effectiveType(): string | undefined {
        const type = super.effectiveType;
        if (type) {
            return type;
        }
        return new ModelTraversal().getTypeName(this);
    }

    /**
     * The working metatype for this object.
     */
    get effectiveMetatype() {
        const metaBase = this.metabase;
        if (metaBase) {
            return metaBase.metatype;
        }
    }

    /**
     * Get the first derived ancestor with children, if any.
     */
    get definingModel() {
        return new ModelTraversal().findDefiningModel(this);
    }

    /**
     * Get the entry type for lists, if any.
     */
    get listEntry() {
        return this.member("entry", [ElementTag.Field]) as FieldModel | undefined;
    }

    /**
     * ValueModels may only derive from ValueModels.
     */
    override get base() {
        return super.base as ValueModel | undefined;
    }

    /**
     * ValueModels may derive from models of the same type or from generic Datatype models.
     */
    override get allowedBaseTags() {
        if (this.tag === ElementTag.Field) {
            // Allow fields to derive from attributes.  We use this for referencing options in masks and bitmaps
            return [ElementTag.Field, ElementTag.Datatype, ElementTag.Attribute];
        }
        return [this.tag, ElementTag.Datatype];
    }

    /**
     * All {@link FieldModel} children in the context of the model's containing scope.
     */
    get members(): PropertyModel[] {
        return Scope(this).membersOf(this) as PropertyModel[];
    }

    /**
     * Collect constraints and conformance for this type and all base types.
     */
    get validationAspects() {
        const aspects = Array<Aspect<any>>();

        new ModelTraversal().visitInheritance(this, model => {
            if (model instanceof ValueModel) {
                if (!model.conformance.empty && model.conformance.type !== Conformance.Special.Desc) {
                    aspects.push(model.conformance);
                }
                if (!model.constraint.empty && !model.constraint.desc) {
                    aspects.push(model.constraint);
                }
                if (model.quality.nullable === false) {
                    aspects.push(model.quality);
                }
            }
        });

        return aspects;
    }

    /**
     * Is this model deprecated?
     */
    get isDeprecated() {
        return this.effectiveConformance.type === Conformance.Flag.Deprecated;
    }

    /**
     * Is this model disallowed?
     */
    get isDisallowed() {
        return this.effectiveConformance.type === Conformance.Flag.Disallowed;
    }

    /**
     * Can this model be omitted?
     */
    get nullable() {
        return !!this.effectiveQuality.nullable;
    }

    /**
     * Is the model mandatory?
     */
    get mandatory() {
        return this.effectiveConformance.isMandatory;
    }

    /**
     * Determine whether this element overrides key properties of its shadow.
     */
    get overridesShadow() {
        const shadow = this.shadow;
        if (!shadow || !(shadow instanceof ValueModel)) {
            return;
        }

        if (this.type && this.type !== shadow.type) {
            return true;
        }
        if (!this.conformance.empty && !this.conformance.equals(shadow.conformance)) {
            return true;
        }
        if (!this.quality.empty && !this.quality.equals(shadow.quality)) {
            return true;
        }
        if (!this.constraint.empty && !this.constraint.equals(shadow.constraint)) {
            return true;
        }
        if (!this.access.empty && !this.access.equals(shadow.access)) {
            return true;
        }
    }

    /**
     * Search the inheritance chain for a bitmap field defining a specific bit.
     */
    bitDefinition(bit: number) {
        return new ModelTraversal().findBitDefinition(this, bit);
    }

    /**
     * Clone the model with minimum metadata required to ensure model is valid.
     */
    cloneAsReference<This extends ValueModel>(this: This): This {
        const Type = this.constructor as new (definition: T) => This;
        return new Type(this.requiredFields as T);
    }

    get requiredFields() {
        return { name: this.name } as T;
    }

    override valueOf() {
        const result = super.valueOf() as any;
        for (const k of ["conformance", "access", "quality", "constraint"]) {
            const v = (this as any)[k] as Aspect<any>;
            if (v && !v.empty) {
                result[k] = v.valueOf();
            }
        }
        if (result.default === undefined) {
            delete result.default;
        }
        return result as T;
    }

    constructor(definition: BaseElement.Properties<T>, ...children: Model.Definition<FieldModel>[]) {
        super(definition, ...children);

        const match = this.type?.match(/^list\[(.*)\]$/);
        if (match) {
            this.type = "list";
            this.children.push(new Model.types.field({ name: "entry", type: match[1] }) as FieldModel);
        }

        if (definition instanceof Model) {
            Aspects.cloneAspects(definition, this, CONSTRAINT, CONFORMANCE, ACCESS, QUALITY);
        }
    }
}
