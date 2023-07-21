/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

// Generates the runtime Matter model

import "./util/setup.js";
import { Logger } from "#matter.js/log/Logger.js";
import { AnyElement, MatterElement, MatterModel } from "#matter.js/model/index.js";
import { MergeModels } from "#matter.js/model/logic/index.js";
import { TsFile } from "./util/TsFile.js";
import { clean } from "./util/file.js";
import { generateElement } from "./mom/common/generate-element.js";
import { SpecMatter, ChipMatter, LocalMatter } from "#models/index.js";
import { finalizeModel } from "./util/finalize-model.js";
export const CLUSTER_SUFFIX = "Element";

const logger = Logger.get("generate-model");

function generateElementFile(element: AnyElement) {
    logger.debug(element.name);

    const file = new TsFile(`#elements/${element.name}`);

    file.addImport(`../Matter`, `Matter`);

    generateElement(
        file,
        element,
        `Matter.children.push(`,
        ")"
    )

    file.save();
}

function generateIndex(elements: AnyElement[]) {
    const file = new TsFile(`#elements/index`);
    elements.forEach(element => {
        if (!element.global) {
            file.addImport(`./${element.name}`);
        }
    });

    file.save();
}

const matter = new MatterModel(MergeModels({ spec: SpecMatter, chip: ChipMatter, local: LocalMatter }) as MatterElement);

const validationResult = finalizeModel(matter);

logger.info("remove matter model elements")
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
