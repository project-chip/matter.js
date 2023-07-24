/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { FabricElement, NodeElement } from "../elements/index.js";
import { Model } from "./Model.js";
import { NodeModel } from "./NodeModel.js";

export class FabricModel extends Model implements FabricElement {
    override tag: FabricElement.Tag = FabricElement.Tag;
    override id!: number;

    get nodes() {
        return this.children;
    }

    override get children(): NodeModel[] {
        return super.children as any;
    }

    override set children(children: (NodeModel | NodeElement)[]) {
        super.children = children;
    }

    constructor(definition: FabricElement.Properties) {
        super(definition);
    }

    static {
        Model.constructors[FabricElement.Tag] = this;
    }
}
