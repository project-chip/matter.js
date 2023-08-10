/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { CommandElement } from "../../elements/index.js";
import { CommandModel, DatatypeModel } from "../../models/index.js";
import { ModelValidator } from "./ModelValidator.js";

ModelValidator.validators[CommandElement.Tag] = class CommandValidator extends ModelValidator<CommandModel> {
    override validate() {
        this.validateStructure(true, DatatypeModel);
        this.validateProperty({
            name: "direction",
            type: CommandElement.Direction,
            required: true,
        });
        this.validateProperty({
            name: "response",
            type: "string",
        });

        const response = this.model.response;
        if (response && response !== "status" && !this.model.responseModel) {
            this.error("RESPONSE_NOT_FOUND", `response type ${response} not found`);
        }

        super.validate();
    }
};
