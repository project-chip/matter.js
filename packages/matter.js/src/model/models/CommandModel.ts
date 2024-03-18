/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Mei } from "../definitions/index.js";
import { CommandElement } from "../elements/index.js";
import { ModelTraversal } from "../logic/ModelTraversal.js";
import { Model } from "./Model.js";
import { ValueModel } from "./ValueModel.js";

export class CommandModel extends ValueModel implements CommandElement {
    override tag: CommandElement.Tag = CommandElement.Tag;
    override id!: Mei;
    direction?: CommandElement.Direction;
    response?: string;

    get isRequest() {
        return this.direction === CommandElement.Direction.Request;
    }

    get isResponse() {
        return this.direction === CommandElement.Direction.Response;
    }

    get responseModel() {
        return new ModelTraversal().findResponse(this) as ValueModel;
    }

    /**
     * Commands may re-use the ID for request and response so identification requires the ID in conjunction with the
     * direction.
     */
    override get discriminator() {
        // If direction is not present, rely on naming convention for discrimination.  This allows overrides to omit
        // the direction without voiding matching
        if (this.direction === undefined) {
            if (this.name.endsWith("Response")) {
                return CommandElement.Direction.Response;
            }
            return CommandElement.Direction.Request;
        }

        return this.direction;
    }

    constructor(definition: CommandElement.Properties) {
        super(definition);
    }

    static {
        Model.types[CommandElement.Tag] = this;
    }

    static Tag = CommandElement.Tag;
}
