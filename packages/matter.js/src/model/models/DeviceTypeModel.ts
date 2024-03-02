/**
 * @license
 * Copyright 2022-2024 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Mei } from "../definitions/index.js";
import { DeviceTypeElement, FieldElement, RequirementElement } from "../elements/index.js";
import { FieldModel } from "./FieldModel.js";
import { Model } from "./Model.js";
import { RequirementModel } from "./RequirementModel.js";

export class DeviceTypeModel extends Model implements DeviceTypeElement {
    override tag: DeviceTypeElement.Tag = DeviceTypeElement.Tag;
    override id!: Mei;
    classification!: DeviceTypeElement.Classification;

    get requirements() {
        return this.all(RequirementModel);
    }

    get revision() {
        return (
            this?.get(RequirementModel, "Descriptor")?.get(RequirementModel, "DeviceTypeList")?.default[0].revision ?? 1
        );
    }

    override get children(): (RequirementModel | FieldModel)[] {
        return super.children as any;
    }

    override set children(children: (RequirementModel | FieldModel | RequirementElement | FieldElement)[]) {
        super.children = children;
    }

    constructor(definition: DeviceTypeElement.Properties) {
        super(definition);
    }

    static {
        Model.constructors[DeviceTypeElement.Tag] = this;
    }
}
