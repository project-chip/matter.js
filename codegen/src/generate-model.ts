/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

// Generates the runtime Matter model

import { ChipMatter, LocalMatter, SpecMatter } from "@project-chip/matter.js-intermediate-models";
import { Logger } from "@project-chip/matter.js/log";
import { AnyElement, ElementTag, MatterElement, MatterModel, MergedModel } from "@project-chip/matter.js/model";
import { generateElement } from "./mom/common/generate-element.js";
import { TsFile } from "./util/TsFile.js";
import { clean } from "./util/file.js";
import { finalizeModel } from "./util/finalize-model.js";
import "./util/setup.js";
export const CLUSTER_SUFFIX = "Element";

export async function main() {
    const logger = Logger.get("generate-model");

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

        file.save();
    }

    function generateIndex(elements: AnyElement[]) {
        const file = new TsFile(`#elements/index`);
        elements.forEach(element => {
            if (!element.global) {
                file.addImport(`./${elementFilename(element)}.js`);
            }
        });

        file.save();
    }

    const matter = new MatterModel(
        MergedModel({ spec: SpecMatter, chip: ChipMatter, local: LocalMatter }) as MatterElement,
    );

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
}
