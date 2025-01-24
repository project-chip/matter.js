/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Mei } from "../common/Mei.js";
import { EventElement } from "../elements/index.js";
import { ValueModel } from "./ValueModel.js";

export class EventModel extends ValueModel<EventElement> implements EventElement {
    override tag: EventElement.Tag = EventElement.Tag;
    declare id: Mei;
    declare priority?: EventElement.Priority;

    constructor(definition: EventElement.Properties) {
        super(definition);
    }

    get fabricSensitive(): boolean {
        return this.effectiveAccess.fabricSensitive;
    }

    override get requiredFields() {
        return { ...super.requiredFields, id: this.id };
    }

    static Tag = EventElement.Tag;
}

EventModel.register();
