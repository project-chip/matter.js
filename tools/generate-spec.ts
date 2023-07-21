/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

// This script scrapes specification information from a HTML version of the
// Matter specification.  Override the default location with
// MATTER_SPECIFICATION_PATH environment variable.
//
// I used Adobe Acrobat Pro v23.001.20174.0 to generate the HTML, choosing
// the option to save individual HTML based on headers.  We will probably parse
// output of the current Acrobat version.  Other means of HTML generation will
// likely require this code to be reworked.
//
// Reach out in Matter Integrators Discord server if you would like access to
// a Dropbox folder with the HTML version of the specification.  Specifically
// mention the term "masochist".

import "./util/setup.js";
import { ClusterElement } from "#matter.js/model/index.js"
import { scanIndex } from "./mom/spec/scan-index.js";

import { paths } from "./mom/spec/spec-input.js";
import { ClusterReference, HtmlReference } from "./mom/spec/spec-types.js";
import { loadCluster } from "./mom/spec/load-cluster.js";
import { translateCluster } from "./mom/spec/translate-cluster.js";
import { Logger } from "#matter.js/log/Logger.js";
import { generateIntermediateModel } from "./mom/common/generate-intermediate.js";
import { loadDevices } from "./mom/spec/load-devices.js";
import { translateDevice } from "./mom/spec/translate-device.js";

const clusters = Array<ClusterElement>();
const logger = Logger.get("generate-spec");

function scanCluster(clusterRef: HtmlReference) {
    logger.info(`cluster ${clusterRef.name} (${clusterRef.xref.document} § ${clusterRef.xref.section})`);

    Logger.nest(() => {
        logger.info("ingest");
        let definition: ClusterReference;
        Logger.nest(() => definition = loadCluster(clusterRef));

        logger.info("translate");
        Logger.nest(() => clusters.push(...translateCluster(definition)));
    });
}

function scanDevices(devices: HtmlReference) {
    for (const deviceRef of loadDevices(devices)) {
        logger.info(`device ${deviceRef.name} (${deviceRef.xref.document} § ${deviceRef.xref.section})`);
        Logger.nest(() => translateDevice(deviceRef));
    }
}

paths.forEach(path => {
    logger.info(`load from spec ${path}`);
    Logger.nest(() => {
        const index = scanIndex(path);
        index.clusters.forEach(scanCluster);
        if (index.device) {
            scanDevices(index.device);
        }
    });
});

generateIntermediateModel("spec", clusters);
