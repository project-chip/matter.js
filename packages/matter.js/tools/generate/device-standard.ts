/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

// Generates standard device implementations into src/device/standard

import { clean, writeTS, CodeModel } from "./util.js";

clean("device/standard", "Device");

const moduleExports = new Array<string>();

CodeModel.devices.forEach((device) => {
    const clusterNames = (clusters: any[]) =>
        <{ [name: string]: string }>Object.fromEntries(clusters.map((cluster) => [
            cluster.name == device.name
                ? `${cluster.name}Cluster`
                : cluster.name,
            cluster.name
        ]));

    // Configure required interfaces
    const requiredInterfaces = clusterNames(device.requiredServerClusters);
    const interfaces = {} as typeof requiredInterfaces;
    Object.assign(interfaces, requiredInterfaces);

    let baseClass;
    if (Object.keys(requiredInterfaces).length) {
        baseClass = `
    AutoDevice.with(${Object.keys(requiredInterfaces).join(", ")})
`;
    } else {
        baseClass = " AutoDevice ";
    }

    // Configure optional interfaces
    const optionalInterfaces = clusterNames(device.optionalServerClusters);
    let options: string;
    if (Object.keys(optionalInterfaces).length) {
        Object.assign(interfaces, optionalInterfaces);
        options = `

    static readonly options = {
        ${Object.keys(optionalInterfaces).join(",\n        ")}
    };

    static with(...clusters: ClusterInterface<any>[]) {
        return AutoDevice.extendDevice(this, ...clusters);
    }`;
    } else {
        options = "";
    }

    // Configure imports
    const imports = [
        'import { DeviceTypes } from "../DeviceTypes.js"',
        'import { ClusterInterface } from "../../cluster/Cluster.js"'
    ];
    if (Object.keys(interfaces).length) {
        const importNames = Object.entries(interfaces).map(([k, v]) =>
            k == v ? k : `${v} as ${k}`);
        imports.push(`import { ${importNames.join(', ')} } from "../../cluster/interface/index.js"`);
        imports.push('import { AutoDevice } from "../AutoDevice.js"');
    }

    // Generate the file
    writeTS(`device/standard/${device.name}Device`,
        `${imports.join(";\n")}

export class ${device.name} extends${baseClass}{
    constructor(endpointId?: number) {
        super(DeviceTypes.${device.key}, [], endpointId);
    }${options}
}
`);
    moduleExports.push(`export * from "./${device.name}Device.js";`)
});

writeTS("device/standard/index", moduleExports.join("\n"));
