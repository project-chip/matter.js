#!/usr/bin/env node
/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Converts the storage of a legacy window-shade bridge (matter.js ≤ 0.12 `CommissioningServer`) into the storage of a
 * `ServerNode`. See README.md.
 *
 * Usage:
 *   node ConvertLegacyStorage.js --legacy-path=<dir> --storage-path=<dir> --node-id=<id>
 *       [--legacy-node-key=0] [--aggregator-id=hd-aggregator]
 */

import { Environment, Logger } from "@matter/main";
import { convertLegacyDeviceStorage } from "./convertLegacyDeviceStorage.js";
import { shadeBridgeEndpointId } from "./ShadeBridgeEndpointIds.js";

const logger = Logger.get("ConvertLegacyStorage");

const { vars } = Environment.default;
const legacyPath = vars.string("legacy.path");
const storagePath = vars.string("storage.path");
const nodeId = vars.string("node.id");
const aggregatorId = vars.string("aggregator.id") ?? "hd-aggregator";

if (legacyPath === undefined || storagePath === undefined || nodeId === undefined) {
    console.error(
        "Usage: ConvertLegacyStorage --legacy-path=<dir> --storage-path=<dir> --node-id=<id> [--legacy-node-key=0] [--aggregator-id=hd-aggregator]",
    );
    process.exit(1);
}

try {
    const { endpoints } = await convertLegacyDeviceStorage({
        legacyPath,
        storagePath,
        nodeId,
        legacyNodeKey: vars.string("legacy.node.key"),
        endpointIdFor: endpoint => shadeBridgeEndpointId(endpoint, aggregatorId),
    });

    for (const [key, { number, path }] of [...endpoints].sort(([, a], [, b]) => a.number - b.number)) {
        console.log(`#${number}\t${path?.join("/") ?? "(not converted)"}\t${key}`);
    }
    console.log(`Converted storage written to ${storagePath}/${nodeId}`);
} catch (error) {
    logger.error("Conversion failed:", error);
    process.exit(1);
}
