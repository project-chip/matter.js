/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { decamelize } from "@project-chip/matter.js-general";
import { ClusterModel, ClusterVariance, CommandModel, MatterModel } from "@project-chip/matter.js-model";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { BehaviorFile } from "./endpoints/BehaviorFile.js";
import { EndpointFile } from "./endpoints/EndpointFile.js";
import { InterfaceFile } from "./endpoints/InterfaceFile.js";
import { SemanticNamespaceFile } from "./endpoints/SemanticNamespaceFile.js";
import { ServerFile } from "./endpoints/ServerFile.js";
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
    args.interfaces = args.behaviors = args.servers = args.endpoints = true;
}

for (const cluster of MatterModel.standard.clusters) {
    const base = cluster.base;

    const isAlias = base && !cluster.children.length;
    const isAbstract = cluster.id === undefined;

    const variance = ClusterVariance(isAlias ? (base as ClusterModel) : cluster);
    const dir = `#behaviors/${decamelize(cluster.name)}`;

    const exports = new TsFile(`${dir}/export`);
    if (!isAlias && cluster.all(CommandModel).length) {
        generateClusterFile(dir, InterfaceFile, cluster, exports, variance);
    }

    if (!isAbstract) {
        generateClusterFile(dir, BehaviorFile, cluster, exports, variance);
        generateClusterFile(dir, ServerFile, cluster, exports, variance);
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

        endpointExports.addReexport(`${file.name}.js`);
    }
    for (const ns of MatterModel.standard.semanticNamespaces) {
        const file = new SemanticNamespaceFile(ns);
        if (args.save) {
            file.save();
        }
        endpointExports.addReexport(`${file.name}.js`);
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
    const filename = `${dir}/${cluster.name}${type.baseName}`;
    if (args[`${type.baseName.toLowerCase()}s`]) {
        const file = new type(filename, cluster, variance);
        if (args.save) {
            file.save();
        }
    }
    exports.addReexport(`${filename}.js`);
}
