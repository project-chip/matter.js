/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

// Generates standard device implementations into src/device/standard

import { camelize, clean, writeTS, devices, ClusterDetail } from "./util.js";

clean("device/standard", "Device");

const moduleExports = new Array<string>();

const clusterNames = (clusters: ClusterDetail[]) => clusters.map((cluster) => cluster.name);

devices.forEach((device) => {
    const className = `${camelize(device.name)}Device`;

    // Configure required interfaces
    const interfaces = Array<string>();
    const requiredInterfaces = clusterNames(device.requiredServerClusters);
    interfaces.push(...requiredInterfaces);

    let baseClass;
    if (requiredInterfaces.length) {
        baseClass = `
    ServesClusters(Device,
        ${requiredInterfaces.join(",\n        ")})
`;
    } else {
        baseClass = " Device ";
    }

    // Configure optional interfaces
    const optionalInterfaces = clusterNames(device.optionalServerClusters);
    let options: string;
    if (optionalInterfaces.length) {
        interfaces.push(...optionalInterfaces);
        options = `

    static readonly options = [
        ${optionalInterfaces.join(",\n        ")}
    ];

    with(...clusters: typeof ${className}.options[number][]) {
        return ServesClusters(${className}, ...clusters);
    }`;
    } else {
        options = "";
    }

    // Configure imports
    const imports = [
        'import { Device } from "../Device.js"',
        'import { DeviceTypes } from "../DeviceTypes.js"',
    ];
    if (interfaces.length) {
        imports.push(`import { ${interfaces.join(', ')} } from "../../cluster/interface/index.js"`);
        imports.push('import { ServesClusters } from "../ServesClusters.js"');
    }

    // Generate the file
    writeTS(`device/standard/${className}`,
        `${imports.join(";\n")}

export class ${className} extends${baseClass}{
    constructor(endpointId?: number) {
        super(DeviceTypes.${device.name}, [], endpointId);
    }${options}
}
`);
    moduleExports.push(`export * from "./${className}.js";`)
});

writeTS("device/standard/index", moduleExports.join("\n"));
