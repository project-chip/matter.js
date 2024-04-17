/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterModel } from "@project-chip/matter.js/model";
import { ClusterFile } from "./clusters/ClusterFile.js";
import { generateCluster } from "./clusters/generate-cluster.js";
import { TsFile } from "./util/TsFile.js";
import "./util/setup.js";

const mom = new MatterModel();

ClusterFile.clean();
const index = new TsFile(ClusterFile.createFilename("index"));

for (const cluster of mom.clusters) {
    const file = new ClusterFile(cluster);
    generateCluster(file);
    file.save();

    if (cluster.id !== undefined) {
        const exports = index.expressions(`export {`, `} from "./${file.clusterName}.js"`);
        exports.atom(file.clusterName);
        exports.atom(file.typesName);
    }
}

index.save();
