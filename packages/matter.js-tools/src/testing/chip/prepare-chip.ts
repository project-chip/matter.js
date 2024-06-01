/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { InternalBuildError } from "../../building/error.js";
import { Package } from "../../util/package.js";
import { PicsFile } from "./pics-file.js";

export interface ChipPreparationOptions {
    inputPicsPaths?: string[];
    outputPicsPath?: string;
}

/**
 * Configures environment for running CHIP tests against Matter.js.
 *
 * This needs to be run with both connectedhomeip and matter.js repositories available.  The default paths are
 * appropriate for executing in our CHIP docker container.
 */
export function prepareChip(options?: ChipPreparationOptions) {
    generatePics(options ?? {});
}

function generatePics(options: ChipPreparationOptions) {
    let { inputPicsPaths, outputPicsPath } = options;

    if (inputPicsPaths === undefined || !inputPicsPaths.length) {
        inputPicsPaths = [
            "/connectedhomeip/src/app/tests/suites/certification/ci-pics-values",
            Package.tools.resolve("src/testing/chip/pics.properties"),
        ];
    }

    if (outputPicsPath === undefined) {
        outputPicsPath = "/pics.properties";
    }

    let pics: PicsFile | undefined;
    for (const path of inputPicsPaths) {
        const src = new PicsFile(path);
        if (pics === undefined) {
            pics = src;
        } else {
            pics.patch(src);
        }
    }

    if (pics === undefined) {
        throw new InternalBuildError("No input PICS specified");
    }

    pics.save(outputPicsPath);
}
