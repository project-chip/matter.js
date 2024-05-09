/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Logger } from "@project-chip/matter.js/log";
import { lstatSync, readdirSync } from "fs";
import { homedir } from "os";
import { resolve } from "path";
import { IntermediateModel } from "../common/intermediate-model.js";
import { DEFAULT_MATTER_VERSION, IndexDetail, identifyDocument } from "./doc-utils.js";
import { loadClusters } from "./load-clusters.js";
import { loadDevices } from "./load-devices.js";
import { translateCluster } from "./translate-cluster.js";
import { translateDevice } from "./translate-device.js";

const logger = Logger.get("intermediate-model");

export interface LoadOptions {
    version?: string;
    path?: string;
}

export class SpecFile {
    #index: IndexDetail;

    constructor(path: string) {
        this.#index = identifyDocument(path);
    }

    get path() {
        return this.#index.ref.path;
    }

    get version() {
        return this.#index.version;
    }

    ingestClusters(target: IntermediateModel) {
        if (!this.#index.hasClusters) {
            return;
        }

        for (const clusterRef of loadClusters(this.#index.ref)) {
            logger.info(`translate ${clusterRef.name} (${clusterRef.xref.document} § ${clusterRef.xref.section})`);
            Logger.nest(() => target.add(...translateCluster(clusterRef)));
        }
    }

    ingestDevices(target: IntermediateModel) {
        if (!this.#index.hasDevices) {
            return;
        }

        for (const deviceRef of loadDevices(this.#index.ref)) {
            logger.info(`translate ${deviceRef.name} (${deviceRef.xref.document} § ${deviceRef.xref.section})`);
            Logger.nest(() => target.add(...translateDevice(deviceRef)));
        }
    }

    static *load(options: LoadOptions) {
        const path =
            options.path ??
            process.env.MATTER_SPECIFICATION_PATH ??
            resolve(homedir(), "Dropbox", "matter", options.version ?? DEFAULT_MATTER_VERSION);

        let indices: string[];

        if (lstatSync(path).isFile()) {
            indices = [path];
        } else {
            try {
                indices = readdirSync(path).filter(filename => filename.endsWith(".html"));
            } catch (e) {
                if ((e as { code?: string }).code === "ENOENT") {
                    throw new Error(`Path ${path} does not exist, do you need to set MATTER_SPECIFICATION_PATH?`);
                } else {
                    throw e;
                }
            }
        }

        if (!indices.length) {
            throw new Error(`No HTML files in ${path}`);
        }

        for (const index of indices) {
            yield new SpecFile(resolve(path, index));
        }
    }
}
