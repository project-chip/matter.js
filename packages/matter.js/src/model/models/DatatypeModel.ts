/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Mei, Metatype } from "../definitions/index.js";
import { DatatypeElement } from "../elements/index.js";
import { Model } from "./Model.js";
import { ValueModel } from "./ValueModel.js";

export class DatatypeModel extends ValueModel implements DatatypeElement {
    override tag: DatatypeElement.Tag = DatatypeElement.Tag;
    override id?: Mei;

    constructor(definition: DatatypeElement.Properties) {
        super(definition);
    }

    /**
     * Datatypes parented by other datatypes can omit their ID.  In this case
     * we use their index within the parent as the ID.
     *
     * Note that this is only true for fields.  For named datatypes that appear
     * directly under the cluster the name is the canonical key.
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
     * The key for bitmap fields is actually the constraint which defines the
     * bit range.  All other datatypes use the default key.
     */
    override get key() {
        if (this.parent instanceof ValueModel && this.parent.effectiveMetatype === Metatype.bitmap) {
            return this.constraint.toString();
        }
        return super.key;
    }

    static {
        Model.constructors[DatatypeElement.Tag] = this;
    }
}
