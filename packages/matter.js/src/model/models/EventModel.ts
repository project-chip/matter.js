/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { Mei } from "../../datatype/ManufacturerExtensibleIdentifier.js";
import { EventElement } from "../elements/index.js";
import { Model } from "./Model.js";
import { ValueModel } from "./ValueModel.js";

export class EventModel extends ValueModel implements EventElement {
    override tag: EventElement.Tag = EventElement.Tag;
    declare id: Mei;
    declare priority?: EventElement.Priority;

    constructor(definition: EventElement.Properties) {
        super(definition);
    }

    get fabricSensitive(): boolean {
        return this.effectiveAccess.fabricSensitive;
    }

    static {
        Model.types[EventElement.Tag] = this;
    }

    static Tag = EventElement.Tag;
}
