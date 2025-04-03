/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { NodeElement } from "../elements/index.js";
import { Children } from "./Children.js";
import { EndpointModel } from "./EndpointModel.js";
import { Model } from "./Model.js";

export class NodeModel extends Model<NodeElement> implements NodeElement {
    override tag: NodeElement.Tag = NodeElement.Tag;
    declare id: number;

    override get children(): Children<EndpointModel> {
        return super.children as Children<EndpointModel>;
    }

    override set children(children: Children.InputIterable<EndpointModel>) {
        super.children = children;
    }

    get endpoints() {
        return this.children;
    }

    static Tag = NodeElement.Tag;
}

NodeModel.register();
