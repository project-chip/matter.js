/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { InvalidArgumentError } from "#errors.js";
import { bin } from "#globals.js";
import { Location } from "#location.js";

bin.rm = async function (...paths: unknown[]) {
    const toDelete = Array<Location>();

    for (const path of paths) {
        const location = await this.location.at(`${path}`);
        if (!location.parent) {
            throw new InvalidArgumentError(`Invalid argument: Can't delete ${location.path}`);
        }
        toDelete.push(location);
    }

    for (const location of toDelete) {
        delete (location.parent!.definition as Record<string, unknown>)[location.basename];
    }
};
