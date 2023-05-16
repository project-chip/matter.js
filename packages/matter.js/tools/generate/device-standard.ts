/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

// Generates standard device implementations into src/device/standard

import { DeviceTypes } from "../../src/device/DeviceTypes.js";
import { camelize, clean, writeTS, clusters } from "./util.js";

const INTERNAL_DEVICE_TYPES = [
    DeviceTypes.ROOT
];

clean("device/standard", "Device");

const moduleExports = new Array<string>();

const getClusterNames = (ids: number[]) =>
    <string[]>ids.map((id) => clusters.forID(id)?.name).filter((name) => name);

Object.entries(DeviceTypes).forEach(([name, definition]) => {
    if (INTERNAL_DEVICE_TYPES.indexOf(definition) !== -1) return;

    const className = `${camelize(name)}Device`;

    // Configure required interfaces
    const interfaces = Array<string>();
    const requiredInterfaces = getClusterNames(definition.requiredServerClusters);
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
    const optionalInterfaces = getClusterNames(definition.optionalServerClusters);
    let options;
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
        super(DeviceTypes.${name}, [], endpointId);
    }${options}
}
`);
    moduleExports.push(`export * from "./${className}.js";`)
});

writeTS("device/standard/index", moduleExports.join("\n"));
