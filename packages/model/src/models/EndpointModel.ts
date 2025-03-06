/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { EndpointElement } from "../elements/index.js";
import { Children } from "./Children.js";
import { DeviceTypeModel } from "./DeviceTypeModel.js";
import { Model } from "./Model.js";

export class EndpointModel extends Model<EndpointModel> implements EndpointElement {
    override tag: EndpointElement.Tag = EndpointElement.Tag;
    declare id: number;

    override get children(): Children<DeviceTypeModel> {
        return super.children as Children<DeviceTypeModel>;
    }

    override set children(children: Children.InputIterable<DeviceTypeModel>) {
        super.children = children;
    }

    get deviceTypes() {
        return this.children;
    }

    static Tag = EndpointElement.Tag;
}

EndpointModel.register();
