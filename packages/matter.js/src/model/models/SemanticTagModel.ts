/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { SemanticTagElement } from "../elements/index.js";
import { Children } from "./Children.js";
import { Model } from "./Model.js";

export class SemanticTagModel extends Model implements SemanticTagElement {
    override tag: SemanticTagElement.Tag = SemanticTagElement.Tag;
    declare id: number;

    override get children(): Children<never, never> {
        return super.children as Children<never, never>;
    }

    override set children(children: never[]) {
        super.children = children;
    }

    constructor(definition: SemanticTagElement.Properties) {
        super(definition);
    }

    static {
        Model.types[SemanticTagElement.Tag] = this;
    }
}
