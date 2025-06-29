/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { decamelize, Logger } from "#general";
import { ClusterModel, ClusterVariance } from "#model";
import { TsFile } from "../util/TsFile.js";

const logger = Logger.get("BehaviorServerFile");

export class ClientFile extends TsFile {
    static readonly baseName = "Client";
    readonly definitionName: string;
    #variance: ClusterVariance;

    constructor(
        name: string,
        public cluster: ClusterModel,
        variance: ClusterVariance,
    ) {
        super(name);
        this.definitionName = `${cluster.name}Client`;
        this.cluster = cluster;
        this.#variance = variance;

        this.generate();
    }

    private generate() {
        logger.info(`${this.cluster.name} → ${this.name}.ts`);

        const constructorName = `${this.definitionName}Constructor`;

        if (this.#variance.components.length) {
            // Cluster with features - generate behavior based on "complete" cluster
            this.addImport(`#clusters/${decamelize(this.cluster.name)}`, this.cluster.name);
            this.addImport("!node/behavior/cluster/ClusterBehavior.js", "ClusterBehavior");
            const builder = this.builder(`export const ${constructorName} = ClusterBehavior`);
            builder.atom(`for(${this.cluster.name}.Complete)`);
            this.atom(`export interface ${this.definitionName} extends InstanceType<typeof ${constructorName}> {}`);
        } else {
            // No features - just export an alias for the base behavior implementation
            this.addImport(`./${this.cluster.name}Behavior.js`, `${this.cluster.name}Behavior`);
            this.atom(`export const ${constructorName} = ${this.cluster.name}Behavior`);
            this.atom(`export interface ${this.definitionName} extends ${this.cluster.name}Behavior {}`);
        }

        this.addImport("#general", "Identity");
        this.undefine(constructorName);
        this.atom(`export interface ${constructorName} extends Identity<typeof ${constructorName}> {}`);

        this.undefine(this.definitionName);
        this.atom(`export const ${this.definitionName}: ${constructorName} = ${constructorName}`);
    }
}
