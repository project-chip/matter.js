/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

// Generates the runtime Matter model

import { InternalError, Logger } from "#general";
import { LocalMatter } from "#intermediate-models";
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
} from "#model";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { generateElement } from "./mom/common/generate-element.js";
import { DEFAULT_MATTER_VERSION } from "./mom/spec/doc-utils.js";
import { TsFile } from "./util/TsFile.js";
import { clean } from "./util/file.js";
import { finalizeModel } from "./util/finalize-model.js";
import "./util/setup.js";
import { camelize } from "./util/string.js";
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

let revisionComponents = args.revision.split(".");
if (revisionComponents.length > 2) {
    revisionComponents = revisionComponents.slice(0, 2);
    args.revision = revisionComponents.join(".");
}

function elementDiscriminatedName(element: Model) {
    const { name } = element;
    if (element.tag === ElementTag.DeviceType) {
        return `${name}DT`;
    }
    if (element.tag === ElementTag.SemanticNamespace) {
        return `${name}NS`;
    }
    return name;
}

function elementIdentifierName(element: Model) {
    const name = elementDiscriminatedName(element);
    return camelize(name, name[0] < "a" || name[0] > "z");
}

function generateElementFile(element: Model) {
    logger.debug(element.name);

    const file = new TsFile(`!elements/${elementDiscriminatedName(element)}`);

    file.addImport(`../MatterDefinition.js`, `MatterDefinition`);
    const exportName = elementIdentifierName(element);
    generateElement(file, "!model/elements/index.js", element, `export const ${exportName} = `);
    file.atom(`MatterDefinition.children.push(${exportName})`);

    if (args.save) {
        file.save();
    }
}

function generateDefinitions(elements: Model[]) {
    const file = new TsFile(`!elements/definitions`);
    for (const element of elements) {
        file.addReexport(`./${elementDiscriminatedName(element)}.js`);
    }

    if (args.save) {
        file.save();
    }
}

function generateModels(elements: Model[]) {
    const file = new TsFile(`!elements/models`);
    file.addImport("./definitions.js", "* as definitions");
    for (const element of elements) {
        const type = `${camelize(element.tag, true)}Model`;
        file.addImport(`../../models/${type}.js`, type);
        const exportName = elementIdentifierName(element);
        file.atom(`export const ${exportName} = new ${type}(definitions.${exportName})`);
    }

    if (args.save) {
        file.save();
    }
}

async function importModel(source: string) {
    return (await import(`@matter/intermediate-models/v${args.revision}/${source}`))[
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
    clean("!elements");
}

logger.info("generate matter model");
Logger.nest(() => {
    for (const child of matter.children) {
        Logger.nest(() => generateElementFile(child));
    }

    logger.info("index");
    generateDefinitions(matter.children as Model[]);
    generateModels(matter.children as Model[]);
});

validationResult.report();
