/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Logger } from "@project-chip/matter.js/log";
import { MatterModel } from "@project-chip/matter.js/model";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { ClusterFile } from "./clusters/ClusterFile.js";
import { generateCluster } from "./clusters/generate-cluster.js";
import { TsFile } from "./util/TsFile.js";
import "./util/setup.js";

const logger = Logger.get("generate-clusters");

const args = await yargs(hideBin(process.argv))
    .usage("Generates the matter.js file from intermediate files")
    .option("save", { type: "boolean", default: true, describe: "writes the generated model to disk" })
    .strict().argv;

const index = new TsFile(ClusterFile.createFilename("index"));

const files = [index];

let fail = false;

for (const cluster of MatterModel.standard.clusters) {
    try {
        const file = new ClusterFile(cluster);
        generateCluster(file);
        files.push(file);

        if (cluster.id !== undefined) {
            const exports = index.expressions(`export {`, `} from "./${file.clusterName}.js"`);
            exports.atom(file.clusterName);
            exports.atom(file.typesName);
        }
    } catch (e) {
        logger.error(e);
        fail = true;
    }
}

if (fail) {
    logger.error("Not modifying codebase due to errors");
} else if (args.save) {
    ClusterFile.clean();
    for (const file of files) {
        file.save();
    }
} else {
    logger.warn("Not modifying codebase because this is a dry run");
}
