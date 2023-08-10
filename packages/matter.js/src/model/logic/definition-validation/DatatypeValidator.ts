/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DatatypeElement } from "../../elements/index.js";
import { DatatypeModel } from "../../models/index.js";
import { ModelValidator } from "./ModelValidator.js";
import { ValueValidator } from "./ValueValidator.js";

ModelValidator.validators[DatatypeElement.Tag] = class AttributeValidator extends ValueValidator<DatatypeModel> {
    override validate() {
        this.validateStructure(false, DatatypeModel);
        super.validate();
    }
};
