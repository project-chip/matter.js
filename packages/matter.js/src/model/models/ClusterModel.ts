/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Mei } from "../../datatype/ManufacturerExtensibleIdentifier.js";
import { Access } from "../aspects/Access.js";
import { Quality } from "../aspects/Quality.js";
import { FeatureSet, Metatype } from "../definitions/index.js";
import { ClusterElement } from "../elements/index.js";
import { ClusterRevision } from "../standard/elements/ClusterRevision.js";
import { FeatureMap } from "../standard/elements/FeatureMap.js";
import { Aspects } from "./Aspects.js";
import { AttributeModel } from "./AttributeModel.js";
import { Children } from "./Children.js";
import { CommandModel } from "./CommandModel.js";
import { DatatypeModel } from "./DatatypeModel.js";
import { EventModel } from "./EventModel.js";
import type { FieldModel } from "./FieldModel.js";
import { Model } from "./Model.js";
import { PropertyModel } from "./PropertyModel.js";

const QUALITY = Symbol("quality");

export class ClusterModel extends Model implements ClusterElement {
    override tag: ClusterElement.Tag = ClusterElement.Tag;
    override id?: Mei;
    classification?: ClusterElement.Classification;
    pics?: string;
    override isTypeScope = true;
    supportedFeatures?: FeatureSet;

    get quality(): Quality {
        return Aspects.getAspect(this, QUALITY, Quality);
    }
    set quality(definition: Quality | Quality.Definition) {
        Aspects.setAspect(this, QUALITY, Quality, definition);
    }
    get effectiveQuality(): Quality {
        return Aspects.getEffectiveAspect(this, QUALITY, Quality);
    }

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

    get members() {
        return this.all(PropertyModel);
    }

    get revision() {
        let revision = 1;
        const revisionAttr = this.get(AttributeModel, ClusterRevision.id);
        if (typeof revisionAttr?.default === "number") {
            revision = revisionAttr.default;
        }
        return revision;
    }

    get features() {
        return this.featureMap.children ?? [];
    }

    get featureMap() {
        return this.get(AttributeModel, FeatureMap.id) ?? new AttributeModel(FeatureMap);
    }

    override get children(): Children<ClusterModel.Child, ClusterElement.Child> {
        return super.children as any;
    }

    override set children(children: (ClusterModel.Child | ClusterElement.Child)[]) {
        super.children = children;
    }

    get effectiveMetatype() {
        return Metatype.object;
    }

    get effectiveAccess() {
        return Access.Default;
    }

    override valueOf() {
        const result = super.valueOf() as any;
        if (this.quality && !this.quality.empty) {
            result.quality = this.quality.valueOf();
        }
        return result as ClusterElement;
    }

    constructor(definition: ClusterElement.Properties) {
        super(definition);

        if (definition instanceof Model) {
            Aspects.cloneAspects(definition, this, QUALITY);
        }
    }

    static Tag = ClusterElement.Tag;

    static {
        Model.types[this.Tag] = this;
    }
}

export namespace ClusterModel {
    export type Child =
        | DatatypeModel
        | AttributeModel
        | CommandModel
        | EventModel

        // Fields are not cluster children in canonical schema but we allow
        // them as private values in operational schema
        | FieldModel;
}
