/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DeviceTypeElement } from "../../elements/index.js";
import { DatatypeModel, DeviceTypeModel, RequirementModel } from "../../models/index.js";
import { ModelValidator } from "./ModelValidator.js";

ModelValidator.validators[DeviceTypeElement.Tag] = class DeviceTypeValidator extends ModelValidator<DeviceTypeModel> {
    override validate() {
        this.validateStructure(false, DeviceTypeModel, RequirementModel, DatatypeModel);
        this.validateProperty({
            name: "classification",
            type: DeviceTypeElement.Classification,
        });

        super.validate();
    }
};
