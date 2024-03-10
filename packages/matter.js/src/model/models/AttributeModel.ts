/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ElementTag, Mei } from "../definitions/index.js";
import { AttributeElement, Globals } from "../elements/index.js";
import { Model } from "./Model.js";
import { PropertyModel } from "./PropertyModel.js";

const globalIds = new Set<number>();
for (const element of Object.values(Globals)) {
    if (element.tag === ElementTag.Attribute) {
        globalIds.add(element.id);
    }
}

export class AttributeModel extends PropertyModel implements AttributeElement {
    override tag: AttributeElement.Tag = AttributeElement.Tag;
    override id!: Mei;

    static isGlobal(id: number) {
        return globalIds.has(id);
    }

    override get isGlobalAttribute() {
        if (AttributeModel.isGlobal(this.id)) {
            return true;
        }
    }

    get writable() {
        return !this.fixed && this.effectiveAccess.writable;
    }

    get fabricScoped() {
        return !!this.effectiveAccess.fabric;
    }

    get fixed() {
        return !!this.effectiveQuality.fixed;
    }

    constructor(definition: AttributeElement.Properties) {
        super(definition);
    }

    static {
        Model.types[AttributeElement.Tag] = this;
    }

    static Tag = AttributeElement.Tag;
}
