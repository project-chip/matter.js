/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ClusterModel } from "#matter.js/model/index.js";
import { clean } from "#util/file.js";
import { Block, TsFile } from "#util/TsFile.js";

export class ClusterFile extends TsFile {
    clusterName: string;
    typesName: string;
    types: Block;
    ns: Block;

    constructor(public cluster: ClusterModel) {
        const name = `${cluster.name}Cluster`;
        super(ClusterFile.createFilename(name));
        this.clusterName = name;
        this.typesName = cluster.name;
        this.ns = this.statements(`export namespace ${this.typesName} {`, "}");
        this.types = this.ns.section();
    }

    static clean() {
        clean("#clusters");
    }

    static createFilename(name: string) {
        return `#clusters/${name}`;
    }

    override addImport(filename: string, symbol: string) {
        return super.addImport(`../../${filename}`, symbol);
    }
}
