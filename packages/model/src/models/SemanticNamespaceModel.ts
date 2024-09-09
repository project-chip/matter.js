/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { SemanticNamespaceElement } from "../elements/index.js";
import { SemanticTagModel } from "../index.js";
import { Children } from "./Children.js";
import { Model } from "./Model.js";

export class SemanticNamespaceModel extends Model<SemanticNamespaceElement> implements SemanticNamespaceElement {
    override tag: SemanticNamespaceElement.Tag = SemanticNamespaceElement.Tag;
    declare id: number;
    mfgCode?: number;

    override get children(): Children<SemanticTagModel> {
        return super.children as Children<SemanticTagModel>;
    }

    override set children(children: Children.InputIterable<SemanticTagModel>) {
        super.children = children;
    }

    get endpoints() {
        return this.children;
    }

    static {
        Model.types[SemanticNamespaceElement.Tag] = this;
    }
}
