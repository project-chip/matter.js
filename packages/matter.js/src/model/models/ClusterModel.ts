/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Mei } from "../definitions/index.js";
import { ClusterElement, Globals } from "../elements/index.js";
import { AttributeModel } from "./AttributeModel.js";
import { CommandModel } from "./CommandModel.js";
import { DatatypeModel } from "./DatatypeModel.js";
import { EventModel } from "./EventModel.js";
import { Model } from "./Model.js";

export class ClusterModel extends Model {
    override tag: ClusterElement.Tag = ClusterElement.Tag;
    override id?: Mei;
    classification?: ClusterElement.Classification;
    override isTypeScope = true;
    singleton?: boolean;

    get attributes() {
        return this.all(AttributeModel);
    }

    get commands() {
        return this.all(CommandModel);
    }

    get events() {
        return this.all(EventModel);
    }

    get datatypes() {
        return this.all(DatatypeModel);
    }

    get revision() {
        let revision = 1;
        const revisionAttr = this.get(AttributeModel, Globals.ClusterRevision.id);
        if (typeof revisionAttr?.default === "number") {
            revision = revisionAttr.default;
        }
        return revision;
    }

    get features() {
        return this.featureMap?.children ?? [];
    }

    get featureMap() {
        return this.get(AttributeModel, Globals.FeatureMap.id);
    }

    override get children(): ClusterModel.Child[] {
        return super.children as any;
    }

    override set children(children: (ClusterModel.Child | ClusterElement.Child)[]) {
        super.children = children;
    }

    constructor(definition: ClusterElement.Properties) {
        super(definition);
    }

    static {
        Model.constructors[ClusterElement.Tag] = this;
    }
}

export namespace ClusterModel {
    export type Child = DatatypeModel | AttributeModel | CommandModel | EventModel;
}
