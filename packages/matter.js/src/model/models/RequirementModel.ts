/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Access, Conformance, Constraint, Quality } from "../aspects/index.js";
import { DatatypeElement, RequirementElement } from "../elements/index.js";
import { Aspects } from "./Aspects.js";
import { DatatypeModel } from "./DatatypeModel.js";
import { Model } from "./Model.js";

const CONSTRAINT: unique symbol = Symbol("constraint");
const CONFORMANCE: unique symbol = Symbol("conformance");
const ACCESS: unique symbol = Symbol("access");
const QUALITY: unique symbol = Symbol("quality");

export class RequirementModel extends Model implements RequirementElement {
    override tag: RequirementElement.Tag = RequirementElement.Tag;
    element!: RequirementElement.ElementType;

    override get key() {
        return `${this.id ?? this.name}:${this.element}`;
    }

    override get children(): (RequirementModel | DatatypeModel)[] {
        return super.children as any;
    }

    override set children(children: (RequirementModel | DatatypeModel | RequirementElement | DatatypeElement)[]) {
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
        Model.constructors[RequirementElement.Tag] = this;
    }
}
