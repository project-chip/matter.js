/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

// This utility dumps names from the model to make it easier to look for
// inconsistencies

import { Matter, MatterModel } from "@project-chip/matter.js/model";

export async function main() {
    const names = {} as { [name: string]: number };

    new MatterModel(Matter).visit(model => {
        if (names[model.name]) {
            names[model.name]++;
        } else {
            names[model.name] = 1;
        }
    });

    Object.entries(names)
        .sort((a, b) => a[0].toLocaleLowerCase().localeCompare(b[0].toLocaleLowerCase()))
        .forEach(([name, count]) => console.log(name, count));
}
