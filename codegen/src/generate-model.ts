/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

// Generates the runtime Matter model

import { LocalMatter } from "@project-chip/matter.js-intermediate-models";
import { InternalError } from "@project-chip/matter.js/common";
import { Logger } from "@project-chip/matter.js/log";
import {
    AttributeModel,
    DatatypeModel,
    ElementTag,
    MatterElement,
    MatterModel,
    MergedModel,
    Model,
    Specification,
    TraverseMap,
} from "@project-chip/matter.js/model";
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

function elementIdentifierName(element: Model) {
    if (element.tag === ElementTag.DeviceType) {
        return `${element.name}DT`;
    }
    return element.name;
}

function generateElementFile(element: Model) {
    logger.debug(element.name);

    const name = elementIdentifierName(element);

    const file = new TsFile(`#elements/${name}`);

    file.addImport(`../Matter.js`, `Matter`);

    const exportName = camelize(name, name[0] < "a" || name[0] > "z");

    generateElement(file, "../../elements/index.js", element, `export const ${exportName} = `);

    file.atom(`Matter.children.push(${exportName})`);

    if (args.save) {
        file.save();
    }
}

function generateIndex(elements: Model[]) {
    const file = new TsFile(`#elements/index`);
    for (const element of elements) {
        file.addReexport(`./${elementIdentifierName(element)}`);
    }

    if (args.save) {
        file.save();
    }
}

function generateExport(elements: Model[]) {
    const file = new TsFile(`#elements/export`);
    for (const element of elements) {
        file.addReexport(elementIdentifierName(element));
    }

    if (args.save) {
        file.save();
    }
}

async function importModel(source: string) {
    return (await import(`@project-chip/matter.js-intermediate-models/v${args.revision}/${source}`))[
        `${camelize(source, true)}Matter`
    ] as MatterElement;
}

const inputs = {} as TraverseMap;

inputs.spec = await importModel("spec");

// We merged in CHIP data in our 1.1 implementation but going forward just rely on the spec and our overrides
if (args.revision === "1.1") {
    inputs.chip = await importModel("chip");
}

inputs.local = LocalMatter;

const merged = MergedModel(args.revision as Specification.Revision, inputs);

const matter = new MatterModel(merged as MatterElement);

const validationResult = finalizeModel(matter);

if (
    !matter.get(DatatypeModel, "bool") ||
    !matter.get(DatatypeModel, "date") ||
    !matter.get(AttributeModel, "FeatureMap")
) {
    throw new InternalError("Model is missing key elements that would break codebase, aborting");
}

logger.info("remove matter model elements");
if (args.save) {
    clean("#elements");
}

logger.info("generate matter model");
Logger.nest(() => {
    for (const child of matter.children) {
        Logger.nest(() => generateElementFile(child));
    }

    logger.info("index");
    generateIndex(matter.children as Model[]);
    generateExport(matter.children as Model[]);
});

validationResult.report();
