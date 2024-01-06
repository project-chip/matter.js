/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Logger } from "@project-chip/matter.js/log";
import { ClusterModel, ClusterVariance } from "@project-chip/matter.js/model";
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
        if (this.variance.components.length) {
            this.addImport(`../../../cluster/definitions/${this.cluster.name}Cluster.js`, this.cluster.name);
            this.atom(`const Base = ${this.cluster.name}Behavior.for(${this.cluster.name}.Complete)`);
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
