/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Logger } from "@project-chip/matter.js/log";
import { ClusterModel, ClusterVariance } from "@project-chip/matter.js/model";
import { Block, TsFile } from "../util/TsFile.js";
import { InterfaceGenerator } from "./InterfaceGenerator.js";

const logger = Logger.get("InterfaceFile");

export class InterfaceFile extends TsFile {
    static readonly baseName = "Interface";
    readonly definitionName: string;
    readonly cluster: ClusterModel;
    readonly types: Block;
    readonly ns: Block;

    constructor(
        name: string,
        cluster: ClusterModel,
        private variance: ClusterVariance,
    ) {
        super(name);
        this.definitionName = `${cluster.name}Interface`;
        this.cluster = cluster;
        this.types = this.section();
        this.ns = this.statements(`export namespace ${this.definitionName} {`, "}");

        this.generate();
    }

    override addImport(filename: string, symbol: string) {
        if (filename.startsWith("./")) {
            return super.addImport(filename, symbol);
        }
        return super.addImport(`../../../${filename}`, symbol);
    }

    private generate() {
        logger.info(`${this.cluster.name} → ${this.name}.ts`);

        const gen = new InterfaceGenerator(this);

        gen.generateComponent("Base", this.variance.base);
        for (const component of this.variance.components) {
            gen.generateComponent(component.name, component);
        }

        gen.generateInterface();
    }
}
