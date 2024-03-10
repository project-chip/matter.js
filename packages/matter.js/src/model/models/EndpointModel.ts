/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DeviceTypeElement, EndpointElement } from "../elements/index.js";
import { Children } from "./Children.js";
import { DeviceTypeModel } from "./DeviceTypeModel.js";
import { Model } from "./Model.js";

export class EndpointModel extends Model implements EndpointElement {
    override tag: EndpointElement.Tag = EndpointElement.Tag;
    override id!: number;

    get deviceTypes() {
        return this.children;
    }

    override get children(): Children<DeviceTypeModel, DeviceTypeElement> {
        return super.children as any;
    }

    override set children(children: (DeviceTypeModel | DeviceTypeElement)[]) {
        super.children = children;
    }

    constructor(definition: EndpointElement.Properties) {
        super(definition);
    }

    static {
        Model.types[EndpointElement.Tag] = this;
    }
}
