/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Access, Aspect, Conformance, Constraint, Quality } from "../aspects/index.js";
import { FieldElement, RequirementElement } from "../elements/index.js";
import { Aspects } from "./Aspects.js";
import { Children } from "./Children.js";
import { FieldModel } from "./FieldModel.js";
import { Model } from "./Model.js";

const CONSTRAINT: unique symbol = Symbol("constraint");
const CONFORMANCE: unique symbol = Symbol("conformance");
const ACCESS: unique symbol = Symbol("access");
const QUALITY: unique symbol = Symbol("quality");

export class RequirementModel extends Model implements RequirementElement {
    override tag: RequirementElement.Tag = RequirementElement.Tag;
    element!: RequirementElement.ElementType;
    default?: any;

    override get discriminator() {
        return this.element;
    }

    override get children(): Children<RequirementModel | FieldModel, RequirementElement | FieldElement> {
        return super.children as any;
    }

    override set children(children: (RequirementModel | FieldModel | RequirementElement | FieldElement)[]) {
        super.children = children;
    }

    get access(): Access {
        return Aspects.getAspect(this, ACCESS, Access);
    }
    set access(definition: Access | Access.Definition) {
        Aspects.setAspect(this, ACCESS, Access, definition);
    }

    get constraint(): Constraint {
        return Aspects.getAspect(this, CONSTRAINT, Constraint);
    }
    set constraint(definition: Constraint | Constraint.Definition) {
        Aspects.setAspect(this, CONSTRAINT, Constraint, definition);
    }

    get conformance(): Conformance {
        return Aspects.getAspect(this, CONFORMANCE, Conformance);
    }
    set conformance(definition: Conformance | Conformance.Definition) {
        Aspects.setAspect(this, CONFORMANCE, Conformance, definition);
    }

    get quality(): Quality {
        return Aspects.getAspect(this, QUALITY, Quality);
    }
    set quality(definition: Quality | Quality.Definition) {
        Aspects.setAspect(this, QUALITY, Quality, definition);
    }

    static {
        Model.types[RequirementElement.Tag] = this;
    }

    get requirements() {
        return this.all(RequirementModel);
    }

    override valueOf() {
        const result = super.valueOf() as any;
        for (const k of ["conformance", "access", "quality", "constraint"]) {
            const v = (this as any)[k] as Aspect<any>;
            if (v && !v.empty) {
                result[k] = v.valueOf();
            }
        }
        return result;
    }

    /**
     * Is the element mandatory?
     */
    get mandatory() {
        return this.conformance.mandatory;
    }
}
