/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Mei } from "../definitions/index.js";
import { DatatypeElement, DeviceTypeElement, RequirementElement } from "../elements/index.js";
import { DatatypeModel } from "./DatatypeModel.js";
import { Model } from "./Model.js";
import { RequirementModel } from "./RequirementModel.js";

export class DeviceTypeModel extends Model implements DeviceTypeElement {
    override tag: DeviceTypeElement.Tag = DeviceTypeElement.Tag;
    override id!: Mei;
    classification!: DeviceTypeElement.Classification;
    revision!: number;

    get requirements() {
        return this.all(RequirementModel);
    }

    override get children(): (RequirementModel | DatatypeModel)[] {
        return super.children as any;
    }

    override set children(children: (RequirementModel | DatatypeModel | RequirementElement | DatatypeElement)[]) {
        super.children = children;
    }

    constructor(definition: DeviceTypeElement.Properties) {
        super(definition);
    }

    static {
        Model.constructors[DeviceTypeElement.Tag] = this;
    }
}
