/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import yargs from "yargs";
import { hideBin } from "yargs/helpers";

const USAGE = `Generates a Matter object model from specification documents.

This script scrapes specification information from a HTML version of the
Matter specification.  You may override the default location with
MATTER_SPECIFICATION_PATH environment variable.

I used Adobe Acrobat Pro v23.001.20174.0 to generate the HTML, choosing the
option to save individual HTML based on headers.  We will probably parse
output of the current Acrobat version.  Other means of HTML generation will
likely require this code to be reworked.

Reach out in Matter Integrators Discord server if you would like access to a
Dropbox folder with the HTML version of the specification.  Specifically
mention the term "masochist".`;

import "./util/setup.js";

import { IntermediateModel } from "./mom/common/intermediate-model.js";
import { SpecFile } from "./mom/spec/spec-file.js";

const args = await yargs(hideBin(process.argv))
    .usage(USAGE)
    .option("clusters", { type: "boolean", describe: "ingest clusters" })
    .option("devices", { type: "boolean", describe: "ingest devices" })
    .option("save", { type: "boolean", describe: "writes the generated model to disk" })
    .option("path", { type: "string", describe: "path to spec index or directory of indices" })
    .option("revision", { type: "string", describe: "spec version if path is unspecified" })
    .wrap(null) // Grr ESM version word wrap is broken so we just wrap manually to 79 chars
    .strict().argv;

if (!args.clusters && !args.devices) {
    args.clusters = args.devices = true;
    if (args.save === undefined) {
        args.save = true;
    }
}

let version = args.revision;

const files = [...SpecFile.load({ version, path: args.path })];
for (const file of files) {
    if (version === undefined) {
        version = file.version;
    } else if (version !== file.version) {
        throw new Error(`Version mismatch for file ${file.path} (version is ${file.version} but expected ${version})`);
    }
}

if (version === undefined || !files.length) {
    throw new Error("No input found");
}

const intermediate = new IntermediateModel("spec", version);

for (const file of files) {
    if (args.clusters) {
        file.ingestClusters(intermediate);
    }

    if (args.devices) {
        file.ingestDevices(intermediate);
    }
}

if (args.save) {
    intermediate.save();
}
