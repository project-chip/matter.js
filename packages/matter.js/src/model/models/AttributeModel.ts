/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Mei } from "../definitions/index.js";
import { AttributeElement } from "../elements/index.js";
import { Model } from "./Model.js";
import { ValueModel } from "./ValueModel.js";

export class AttributeModel extends ValueModel implements AttributeElement {
    override tag: AttributeElement.Tag = AttributeElement.Tag;
    override id!: Mei;

    get writable() {
        return this.effectiveAccess.writable;
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
        Model.constructors[AttributeElement.Tag] = this;
    }

    static Tag = AttributeElement.Tag;
}
