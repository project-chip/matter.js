/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { EndpointElement, NodeElement } from "../elements/index.js";
import { EndpointModel } from "./EndpointModel.js";
import { Model } from "./Model.js";

export class NodeModel extends Model implements NodeElement {
    override tag: NodeElement.Tag = NodeElement.Tag;
    override id!: number;

    get endpoints() {
        return this.children;
    }

    override get children(): EndpointModel[] {
        return super.children as any;
    }

    override set children(children: (EndpointModel | EndpointElement)[]) {
        super.children = children;
    }

    constructor(definition: NodeElement.Properties) {
        super(definition);
    }

    static {
        Model.constructors[NodeElement.Tag] = this;
    }
}
