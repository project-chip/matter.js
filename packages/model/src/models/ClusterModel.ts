/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { camelize, describeList } from "@matter/general";
import { Access } from "../aspects/Access.js";
import { Quality } from "../aspects/Quality.js";
import { SchemaImplementationError } from "../common/errors.js";
import { ElementTag, FeatureSet, Metatype } from "../common/index.js";
import { Mei } from "../common/Mei.js";
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
import { ScopeModel } from "./ScopeModel.js";

const QUALITY = Symbol("quality");

export class ClusterModel extends ScopeModel<ClusterElement> implements ClusterElement {
    override tag: ClusterElement.Tag = ClusterElement.Tag;
    declare id: Mei;
    declare classification?: ClusterElement.Classification;
    declare pics?: string;

    override get children(): Children<ClusterModel.Child> {
        return super.children as Children<ClusterModel.Child>;
    }

    override set children(children: Children.InputIterable<ClusterModel.Child>) {
        super.children = children;
    }

    get diagnostics() {
        return this.effectiveQuality.diagnostics;
    }

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
        return this.scope.membersOf(this, { tags: [ElementTag.Attribute] }) as AttributeModel[];
    }

    get commands() {
        return this.scope.membersOf(this, { tags: [ElementTag.Command] }) as CommandModel[];
    }

    get events() {
        return this.scope.membersOf(this, { tags: [ElementTag.Event] }) as EventModel[];
    }

    get datatypes() {
        return this.scope.membersOf(this, { tags: [ElementTag.Datatype] }) as DatatypeModel[];
    }

    /**
     * Get attributes, commands and events whether inherited or defined directly in this model.
     */
    get allAces() {
        return this.scope.membersOf(this, { tags: [ElementTag.Attribute, ElementTag.Command, ElementTag.Event] }) as (
            | AttributeModel
            | CommandModel
            | EventModel
        )[];
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
        return (this.member(FeatureMap.id, [ElementTag.Attribute]) as AttributeModel) ?? new AttributeModel(FeatureMap);
    }

    get featureNames(): FeatureSet {
        return new FeatureSet(this.features.map(feature => feature.name));
    }

    get supportedFeatures(): FeatureSet {
        const supported = {} as { [name: string]: boolean | undefined };
        for (const feature of this.features) {
            if (feature.default) {
                supported[feature.name] = true;
            }
        }
        return new FeatureSet(supported);
    }

    set supportedFeatures(features: FeatureSet.Definition | undefined) {
        const featureSet = new FeatureSet(features);

        let featureMap = this.featureMap;

        if (featureMap.parent !== this) {
            featureMap = featureMap.clone();
            this.children.push(featureMap);
        }

        for (const feature of featureMap.children) {
            const desc = feature.description && camelize(feature.description);
            if (desc !== undefined && featureSet.has(desc)) {
                feature.default = true;
                featureSet.delete(desc);
                continue;
            }

            if (featureSet.has(feature.name)) {
                featureSet.delete(feature.name);
                feature.default = true;
                continue;
            }

            feature.default = undefined;
        }

        if (featureSet.size) {
            throw new SchemaImplementationError(
                this,
                `Cannot set unknown feature${featureSet.size > 1 ? "s" : ""} ${describeList("and", ...featureSet)}`,
            );
        }
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

    constructor(definition: ClusterModel.Definition, ...children: Model.Definition<ClusterModel.Child>[]) {
        super(definition, ...children);

        if (definition instanceof Model) {
            Aspects.cloneAspects(definition, this, QUALITY);
        }
    }

    static Tag = ClusterElement.Tag;
}

ClusterModel.register();

export namespace ClusterModel {
    export type Definition = ClusterElement.Properties & { supportedFeatures?: FeatureSet.Definition };

    export type Child =
        | DatatypeModel
        | AttributeModel
        | CommandModel
        | EventModel

        // Fields are not cluster children in canonical schema but we allow them as private values in operational schema
        | FieldModel;
}
