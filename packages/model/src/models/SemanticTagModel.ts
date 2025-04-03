/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { SemanticTagElement } from "../elements/index.js";
import { Children } from "./Children.js";
import { Model } from "./Model.js";

export class SemanticTagModel extends Model<SemanticTagElement> implements SemanticTagElement {
    override tag: SemanticTagElement.Tag = SemanticTagElement.Tag;
    declare id: number;

    override get children(): Children<never> {
        return super.children as Children<never>;
    }

    override set children(children: Children.InputIterable<never>) {
        super.children = children;
    }

    static Tag = SemanticTagElement.Tag;
}

SemanticTagModel.register();
