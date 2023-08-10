/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Globals, MatterElement } from "../elements/index.js";
import { Matter } from "../standard/index.js";
import { AttributeModel } from "./AttributeModel.js";
import { ClusterModel } from "./ClusterModel.js";
import { DatatypeModel } from "./DatatypeModel.js";
import { DeviceTypeModel } from "./DeviceTypeModel.js";
import { FabricModel } from "./FabricModel.js";
import { Model } from "./Model.js";

/**
 * The root of a Matter model.
 */
export class MatterModel extends Model implements MatterElement {
    override tag: MatterElement.Tag = MatterElement.Tag;
    override isTypeScope = true;
    version?: string;

    /**
     * Clusters.
     */
    get clusters() {
        return this.all(ClusterModel);
    }

    /**
     * Device types.
     */
    get deviceTypes() {
        return this.all(DeviceTypeModel);
    }

    /**
     * Global datatypes.
     */
    get datatypes() {
        return this.all(DatatypeModel);
    }

    /**
     * Global attributes.
     */
    get attributes() {
        return this.all(AttributeModel);
    }

    /**
     * Fabrics.
     */
    get fabrics() {
        return this.all(FabricModel);
    }

    override get children(): MatterModel.Child[] {
        return super.children as any;
    }

    override set children(children: (MatterModel.Child | MatterElement.Child)[]) {
        super.children = children;
    }

    constructor(definition: MatterElement.Properties = Matter, globals = Object.values(Globals)) {
        const children = [...globals, ...(definition.children || [])];
        super({ ...definition, children: children });
    }

    static {
        Model.constructors[MatterElement.Tag] = this;
    }
}

export namespace MatterModel {
    export type Child = ClusterModel | DeviceTypeModel | DatatypeModel | AttributeModel | FabricModel;
}
