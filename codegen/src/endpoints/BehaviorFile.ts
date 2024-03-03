/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Logger } from "@project-chip/matter.js/log";
import { ClusterModel, ClusterVariance, CommandModel } from "@project-chip/matter.js/model";
import { TsFile } from "../util/TsFile.js";

const logger = Logger.get("BehaviorFile");

export class BehaviorFile extends TsFile {
    static readonly baseName = "Behavior";
    readonly definitionName: string;

    constructor(
        name: string,
        public cluster: ClusterModel,
        private variance: ClusterVariance,
    ) {
        super(name);
        this.definitionName = `${cluster.name}Behavior`;
        this.cluster = cluster;

        this.generate();
    }

    private generate() {
        logger.info(`${this.cluster.name} → ${this.name}.ts`);

        this.addImport(`../../../cluster/definitions/${this.cluster.name}Cluster.js`, this.cluster.name);
        this.addImport("../../cluster/ClusterBehavior.js", "ClusterBehavior");

        const builder = this.builder(`export const ${this.cluster.name}Behavior = ClusterBehavior`);

        if (this.cluster.all(CommandModel).length) {
            this.addImport(`./${this.cluster.name}Interface.js`, `${this.cluster.name}Interface`);
            builder.atom(`withInterface<${this.cluster.name}Interface>()`);
        }

        let extraDocs;
        if (this.variance.requiresFeatures) {
            this.addImport(`../../../cluster/ClusterType.js`, "ClusterType");
            builder.atom(`for(ClusterType(${this.cluster.name}.Base))`);
            extraDocs =
                `${this.cluster.name}.Cluster requires you to enable one or more optional features.  ` +
                `You can do so using {@link ${this.cluster.name}Behavior.with}.`;
        } else {
            builder.atom(`for(${this.cluster.name}.Cluster)`);
            if (Object.keys(this.variance.components).length) {
                extraDocs =
                    `This class does not have optional features of ${this.cluster.name}.Cluster enabled.  ` +
                    `You can enable additional features using ${this.cluster.name}Behavior.with.`;
            }
        }

        builder.document(
            `${this.cluster.name}Behavior is the base class for objects that support interaction with {@link ${this.cluster.name}.Cluster}.`,
            extraDocs,
        );

        // Behavior is a generated class so we need to define a matching
        // interface for it to act like a real class in TypeScript
        this.atom(`type ${this.cluster.name}BehaviorType = InstanceType<typeof ${this.cluster.name}Behavior>`);
        this.undefine(`${this.cluster.name}Behavior`);
        this.atom(`export interface ${this.cluster.name}Behavior extends ${this.cluster.name}BehaviorType {}`);

        // We also need to generate an interface for State
        this.atom(`type StateType = InstanceType<typeof ${this.cluster.name}Behavior.State>`);
        const ns = this.expressions(`export namespace ${this.cluster.name}Behavior {`, "}");
        ns.atom("export interface State extends StateType {}");
    }
}
