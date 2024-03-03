/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ClusterModel, ClusterVariance, CommandModel, MatterModel } from "@project-chip/matter.js/model";
import { decamelize } from "@project-chip/matter.js/util";
import { BehaviorFile } from "./endpoints/BehaviorFile.js";
import { BehaviorServerFile } from "./endpoints/BehaviorServerFile.js";
import { EndpointFile } from "./endpoints/EndpointFile.js";
import { InterfaceFile } from "./endpoints/InterfaceFile.js";
import { TsFile } from "./util/TsFile.js";
import "./util/setup.js";

export async function main() {
    const mom = new MatterModel();

    const clusters = mom.clusters.filter(cluster => cluster.id !== undefined);

    for (const cluster of clusters) {
        const variance = ClusterVariance(cluster);
        const dir = `#behaviors/${decamelize(cluster.name)}`;

        const exports = new TsFile(`${dir}/export`);

        if (cluster.all(CommandModel).length) {
            generateClusterFile(dir, InterfaceFile, cluster, exports, variance);
        }
        generateClusterFile(dir, BehaviorFile, cluster, exports, variance);
        generateClusterFile(dir, BehaviorServerFile, cluster, exports, variance);

        exports.save();
    }

    EndpointFile.clean();
    const endpointExports = new TsFile("#endpoints/export");
    for (const device of mom.deviceTypes) {
        const file = new EndpointFile(device);
        file.save();

        endpointExports.atom(`export * from "./${file.definitionPath}.js"`);
    }
    endpointExports.save();
}

function generateClusterFile(
    dir: string,
    type: {
        new (name: string, cluster: ClusterModel, variance: ClusterVariance): TsFile;
        baseName: string;
    },
    cluster: ClusterModel,
    exports: TsFile,
    variance: ClusterVariance,
) {
    const name = `${cluster.name}${type.baseName}`;
    const file = new type(`${dir}/${name}`, cluster, variance);
    file.save();
    exports.atom(`export * from "./${name}.js"`);
}
