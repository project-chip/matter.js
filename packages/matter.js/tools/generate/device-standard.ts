/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DeviceTypes } from "../../src/device/DeviceTypes.js";
import { camelize, clean, writeTS, clusters } from "./util.js";

clean("device/standard", "Device");

const moduleExports = new Array<string>();

Object.entries(DeviceTypes).forEach(([name, definition]) => {
    const className = `${camelize(name)}Device`;

    const importedImpls = Array<string>();

    let base = "Device";
    for (const id of definition.requiredServerClusters) {
        const cluster = clusters.forID(id);
        if (cluster) {
            importedImpls.push(cluster.server);
            base = `${cluster.server}(${base})`;
        } else {
            console.warn(`Warning: No cluster 0x${id.toString(16).padStart(2, "0")}`);
        }
    }

    const implImport = importedImpls.length ? `import { ${importedImpls.join(', ')} } from "../../cluster/interface/index.js";\n` : "";

    // Grr, tsfmt
    if (base == "Device") {
        base = ` ${base} `;
    } else {
        base = `\n    ${base}\n`
    }

    writeTS(`device/standard/${className}`,
        `import { Device } from "../Device.js";
import { DeviceTypes } from "../DeviceTypes.js";
${implImport}
export class ${className} extends${base}{
    constructor(endpointId?: number) {
        super(DeviceTypes.${name}, [], endpointId);
    }
}
`);
    moduleExports.push(`export * from "./${className}.js";`)
});

writeTS("device/standard/index", moduleExports.join("\n"));
