/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ClusterModel, ClusterVariance, CommandModel, MatterModel } from "@project-chip/matter.js/model";
import { decamelize } from "@project-chip/matter.js/util";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { BehaviorFile } from "./endpoints/BehaviorFile.js";
import { BehaviorServerFile } from "./endpoints/BehaviorServerFile.js";
import { EndpointFile } from "./endpoints/EndpointFile.js";
import { InterfaceFile } from "./endpoints/InterfaceFile.js";
import { TsFile } from "./util/TsFile.js";
import "./util/setup.js";

const args = await yargs(hideBin(process.argv))
    .usage("Generates behaviors, behavior servers, endpoint definitions and interfaces")
    .option("interfaces", { type: "boolean", describe: "generate interface files" })
    .option("behaviors", { type: "boolean", describe: "generate behavior files" })
    .option("servers", { type: "boolean", describe: "generate server files" })
    .option("endpoints", { type: "boolean", describe: "generate endpoint type files" })
    .option("save", { type: "boolean", default: true, describe: "writes the generated model to disk" })
    .strict().argv;

if (!args.interfaces && !args.behaviors && !args.server && !args.endpoints) {
    args.interfaces = args.behaviors = args.server = args.endpoints = true;
}

const clusters = MatterModel.standard.clusters.filter(cluster => cluster.id !== undefined);

for (const cluster of clusters) {
    const variance = ClusterVariance(cluster);
    const dir = `#behaviors/${decamelize(cluster.name)}`;

    const exports = new TsFile(`${dir}/export`);

    if (args.interfaces && cluster.all(CommandModel).length) {
        generateClusterFile(dir, InterfaceFile, cluster, exports, variance);
    }

    if (args.behaviors) {
        generateClusterFile(dir, BehaviorFile, cluster, exports, variance);
    }

    if (args.servers) {
        generateClusterFile(dir, BehaviorServerFile, cluster, exports, variance);
    }

    if (args.save) {
        exports.save();
    }
}

if (args.save) {
    EndpointFile.clean();
}

if (args.endpoints) {
    const endpointExports = new TsFile("#endpoints/export");
    for (const device of MatterModel.standard.deviceTypes) {
        const file = new EndpointFile(device);
        if (args.save) {
            file.save();
        }

        endpointExports.addReexport(file.definitionPath);
    }
    if (args.save) {
        endpointExports.save();
    }
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
    if (args.save) {
        file.save();
    }
    exports.addReexport(name);
}
