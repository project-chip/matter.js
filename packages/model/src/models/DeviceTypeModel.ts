/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Mei } from "../common/Mei.js";
import { DeviceTypeElement } from "../elements/index.js";
import { Children } from "./Children.js";
import { FieldModel } from "./FieldModel.js";
import { Model } from "./Model.js";
import { RequirementModel } from "./RequirementModel.js";

export class DeviceTypeModel extends Model<DeviceTypeElement> implements DeviceTypeElement {
    override tag: DeviceTypeElement.Tag = DeviceTypeElement.Tag;
    declare id: Mei;
    declare classification: DeviceTypeElement.Classification;

    override get children(): Children<DeviceTypeModel.Child> {
        return super.children as Children<DeviceTypeModel.Child>;
    }

    override set children(children: Children.InputIterable<DeviceTypeModel.Child>) {
        super.children = children;
    }

    get requirements() {
        return this.all(RequirementModel);
    }

    get revision() {
        return (
            this?.get(RequirementModel, "Descriptor")?.get(RequirementModel, "DeviceTypeList")?.default[0].revision ?? 1
        );
    }

    static {
        Model.types[DeviceTypeElement.Tag] = this;
    }
}

export namespace DeviceTypeModel {
    export type Child = RequirementModel | FieldModel;
}