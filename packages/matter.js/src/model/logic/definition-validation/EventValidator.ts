/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { EventElement } from "../../elements/index.js";
import { DatatypeModel, EventModel } from "../../models/index.js";
import { ModelValidator } from "./ModelValidator.js";
import { ValueValidator } from "./ValueValidator.js";

ModelValidator.validators[EventElement.Tag] = class EventValidator extends ValueValidator<EventModel> {
    override validate() {
        this.validateStructure(true, DatatypeModel);
        this.validateProperty({ name: "priority", type: EventElement.Priority, required: true });
        super.validate();
    }
};
