/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Access, Aspect, Conformance, Constraint, Quality } from "../aspects/index.js";
import { RequirementElement } from "../elements/index.js";
import { Aspects } from "./Aspects.js";
import { Children } from "./Children.js";
import { FieldModel } from "./FieldModel.js";
import { Model } from "./Model.js";

const CONSTRAINT: unique symbol = Symbol("constraint");
const CONFORMANCE: unique symbol = Symbol("conformance");
const ACCESS: unique symbol = Symbol("access");
const QUALITY: unique symbol = Symbol("quality");

export class RequirementModel extends Model<RequirementElement> implements RequirementElement {
    override tag: RequirementElement.Tag = RequirementElement.Tag;
    declare element: RequirementElement.ElementType;
    declare default?: any;

    override get children(): Children<RequirementModel.Child> {
        return super.children as Children<RequirementModel.Child>;
    }

    override set children(children: Children.InputIterable<RequirementModel.Child>) {
        super.children = children;
    }

    override get discriminator() {
        return this.element;
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
    get isMandatory() {
        return this.conformance.isMandatory;
    }

    static Tag = RequirementElement.Tag;
}

RequirementModel.register();

export namespace RequirementModel {
    export type Child = RequirementModel | FieldModel;
}
