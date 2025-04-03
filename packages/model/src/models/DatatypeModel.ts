/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Metatype } from "../common/index.js";
import { DatatypeElement } from "../elements/DatatypeElement.js";
import { ValueModel } from "./ValueModel.js";

export class DatatypeModel extends ValueModel<DatatypeElement> implements DatatypeElement {
    override tag: DatatypeElement.Tag = DatatypeElement.Tag;
    declare id: undefined;

    get definesFields() {
        switch (this.effectiveMetatype) {
            case Metatype.object:
            case Metatype.enum:
            case Metatype.bitmap:
                return !!this.definingModel?.children.length;
        }
        return false;
    }

    static Tag = DatatypeElement.Tag;
}

DatatypeModel.register();
