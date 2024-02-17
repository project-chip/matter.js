/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Logger } from "@project-chip/matter.js/log";
import { ClusterModel, ClusterVariance, FieldModel } from "@project-chip/matter.js/model";
import { TsFile } from "../util/TsFile.js";

const logger = Logger.get("BehaviorServerFile");

export class BehaviorServerFile extends TsFile {
    static readonly baseName = "Server";
    readonly definitionName: string;

    constructor(
        name: string,
        public cluster: ClusterModel,
        private variance: ClusterVariance,
    ) {
        super(name, true);
        this.definitionName = `${cluster.name}Server`;
        this.cluster = cluster;

        this.generate();
    }

    private generate() {
        logger.info(`${this.cluster.name} → ${this.name}.ts`);

        this.addImport(`./${this.cluster.name}Behavior.js`, `${this.cluster.name}Behavior`);

        let base;
        let extraDoc;

        // We want to support as many features as possible in the default server but not illegal combinations.  For this
        // we collect all features then omit ones that are mutually exclusive.  For those we should probably create
        // different subclasses manually, although at least in some cases it doesn't matter because there are no
        // elements associated with the features (e.g. Network Commissioning Cluster)
        const features = new Set(this.cluster.features.map(f => f.name));
        for (const combo of this.variance.illegal) {
            if (Object.values(combo).every(v => v)) {
                for (const key in combo) {
                    features.delete(key);
                }
            }
        }

        if (features.size) {
            const featureMap = this.cluster.featureMap;
            const extension = this.expressions(`const Base = ${this.cluster.name}Behavior.with(`, ")");
            for (const feature of features) {
                extension.value(featureMap.get(FieldModel, feature)?.description);
            }

            base = "Base";
            extraDoc =
                `This implementation includes all features of ${this.cluster.name}.Cluster.  ` +
                `You should use ${this.cluster.name}Server.with to specialize the class for the features your ` +
                `implementation supports.`;
        } else {
            base = `${this.cluster.name}Behavior`;
        }

        this.statements(`export class ${this.cluster.name}Server extends ${base} {`, `}`).document(
            `This is the default server implementation of ${this.cluster.name}Behavior.`,
            extraDoc,
        );
    }
}
