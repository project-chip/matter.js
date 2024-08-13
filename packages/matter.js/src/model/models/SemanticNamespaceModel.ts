/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { SemanticNamespaceElement, SemanticTagElement } from "../elements/index.js";
import { Children } from "./Children.js";
import { Model } from "./Model.js";
import { SemanticTagModel } from "./SemanticTagModel.js";

export class SemanticNamespaceModel extends Model implements SemanticNamespaceElement {
    override tag: SemanticNamespaceElement.Tag = SemanticNamespaceElement.Tag;
    declare id: number;
    mfgCode?: number;

    get endpoints() {
        return this.children;
    }

    override get children(): Children<SemanticTagModel, SemanticTagElement> {
        return super.children as any;
    }

    override set children(children: (SemanticTagModel | SemanticTagElement)[]) {
        super.children = children;
    }

    constructor(definition: SemanticNamespaceElement.Properties) {
        super(definition);
    }

    static {
        Model.types[SemanticNamespaceElement.Tag] = this;
    }
}
