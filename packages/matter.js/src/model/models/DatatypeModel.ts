/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DatatypeElement } from "../elements/DatatypeElement.js";
import { Model } from "./Model.js";
import { ValueModel } from "./ValueModel.js";

export class DatatypeModel extends ValueModel implements DatatypeElement {
    override tag: DatatypeElement.Tag = DatatypeElement.Tag;
    override id?: undefined;

    override get members() {
        return this.children;
    }

    static {
        Model.types[DatatypeElement.Tag] = this;
    }
}
