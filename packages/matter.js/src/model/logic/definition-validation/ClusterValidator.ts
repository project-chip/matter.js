/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ClusterElement } from "../../elements/index.js";
import { AttributeModel, ClusterModel, CommandModel, DatatypeModel, EventModel } from "../../models/index.js";
import { ModelValidator } from "./ModelValidator.js";

ModelValidator.validators[ClusterElement.Tag] = class DeviceTypeValidator extends ModelValidator<ClusterModel> {
    override validate() {
        this.validateStructure(false, DatatypeModel, AttributeModel, CommandModel, EventModel);

        this.validateProperty({ name: "singleton", type: "boolean" });
        this.validateProperty({ name: "classification", type: ClusterElement.Classification });

        if (!this.model.children.length) {
            this.error("EMPTY_CLUSTER", "Cluster has no elements");
        }

        super.validate();
    }
};
