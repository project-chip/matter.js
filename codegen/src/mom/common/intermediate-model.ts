/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

export const INTERMEDIATE_PATH = "models";

import { Logger } from "@project-chip/matter.js/log";
import { MatterElement, MatterModel } from "@project-chip/matter.js/model";
import { TsFile } from "../../util/TsFile.js";
import { finalizeModel } from "../../util/finalize-model.js";
import { camelize } from "../../util/string.js";
import { generateElement } from "./generate-element.js";

const logger = Logger.get("intermediate-model");

/**
 * Builder for an "intermediate" representation of the Matter model ingested from a canonical source.
 */
export class IntermediateModel {
    #source: string;
    #version: string;
    #elements = Array<MatterElement.Child>();

    constructor(source: string, version: string) {
        this.#source = source;
        this.#version = version;
    }

    add(...elements: MatterElement.Child[]) {
        this.#elements.push(...elements);
    }

    /**
     * Create a model file containing an imported models.  These are "intermediate" in the sense that they're input to
     * the merge process that generates the final model.
     */
    save() {
        logger.info(`validate ${this.#source}`);
        const matter = new MatterModel({
            name: `${camelize(this.#source, true)}Matter`,
            children: this.#elements,
        });

        const validationResult = finalizeModel(matter);

        const file = new TsFile(`#intermediate/v${this.#version}/${this.#source}`);
        generateElement(
            file,
            "@project-chip/matter.js/model",
            matter,
            `export const ${camelize(this.#source, true)}Matter = `,
        );
        file.save();

        validationResult.report();
    }
}
