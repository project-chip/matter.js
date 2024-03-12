/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Mei, Metatype } from "../definitions/index.js";
import { FieldElement } from "../elements/index.js";
import { Model } from "./Model.js";
import { PropertyModel } from "./PropertyModel.js";
import { ValueModel } from "./ValueModel.js";

export class FieldModel extends PropertyModel implements FieldElement {
    override tag: FieldElement.Tag = FieldElement.Tag;
    override id?: Mei;
    override isGlobalAttribute?: boolean;

    constructor(definition: FieldElement.Properties) {
        super(definition);
    }

    /**
     * Fields may omit their ID.  In this case we use their index within the parent as the ID.
     */
    override get effectiveId() {
        if (this.id !== undefined) {
            return this.id;
        }
        if (this.parent instanceof ValueModel) {
            const index = this.parent.children.indexOf(this);
            if (index !== -1) {
                return index;
            }
        }
    }

    /**
     * The key for bitmap fields is actually the constraint which defines the bit range.  All other datatypes use the
     * default key.
     */
    override get key() {
        if (this.parent instanceof ValueModel && this.parent.effectiveMetatype === Metatype.bitmap) {
            return this.constraint.toString();
        }
        return super.key;
    }

    static {
        Model.types[FieldElement.Tag] = this;
    }
}
