/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

// Generates the runtime Matter model

import { LocalMatter } from "@project-chip/matter.js-intermediate-models";
import { Logger } from "@project-chip/matter.js/log";
import { AnyElement, ElementTag, MatterElement, MatterModel, MergedModel } from "@project-chip/matter.js/model";
import { camelize } from "@project-chip/matter.js/util";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { generateElement } from "./mom/common/generate-element.js";
import { DEFAULT_MATTER_VERSION } from "./mom/spec/doc-utils.js";
import { TsFile } from "./util/TsFile.js";
import { clean } from "./util/file.js";
import { finalizeModel } from "./util/finalize-model.js";
import "./util/setup.js";
export const CLUSTER_SUFFIX = "Element";

const logger = Logger.get("generate-model");

const args = await yargs(hideBin(process.argv))
    .usage("Generates the matter.js file from intermediate files")
    .option("save", { type: "boolean", default: true, describe: "writes the generated model to disk" })
    .option("revision", {
        type: "string",
        default: DEFAULT_MATTER_VERSION,
        describe: "the Matter version of the input intermediate model",
    })
    .strict().argv;

function elementFilename(element: AnyElement) {
    if (element.tag === ElementTag.DeviceType) {
        return `${element.name}DT`;
    }
    return element.name;
}

function generateElementFile(element: AnyElement) {
    logger.debug(element.name);

    const file = new TsFile(`#elements/${elementFilename(element)}`);

    file.addImport(`../Matter.js`, `Matter`);

    generateElement(file, "../../elements/index.js", element, `Matter.children.push(`, ")");

    if (args.save) {
        file.save();
    }
}

function generateIndex(elements: AnyElement[]) {
    const file = new TsFile(`#elements/index`);
    elements.forEach(element => {
        if (!element.global) {
            file.addImport(`./${elementFilename(element)}.js`);
        }
    });

    if (args.save) {
        file.save();
    }
}

async function importModel(source: string) {
    return (await import(`@project-chip/matter.js-intermediate-models/v${args.revision}/${source}`))[
        `${camelize(source, true)}Matter`
    ] as MatterElement;
}

const spec = await importModel("spec");
const chip = await importModel("chip");

const merged = MergedModel({ spec, chip, local: LocalMatter });

const matter = new MatterModel(merged as MatterElement);

const validationResult = finalizeModel(matter);

logger.info("remove matter model elements");
clean("#elements");

logger.info("generate matter model");
Logger.nest(() => {
    for (const child of matter.children) {
        if (child.global) {
            continue;
        }
        Logger.nest(() => generateElementFile(child as AnyElement));
    }

    logger.info("index");
    generateIndex(matter.children);
});

validationResult.report();
