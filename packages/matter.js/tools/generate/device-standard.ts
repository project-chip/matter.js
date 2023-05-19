/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

// Generates standard device implementations into src/device/standard

import { clean, CodeModel, TsFile } from "./util.js";

clean("device/standard", "Device");

const index = new TsFile("device/standard/index");

CodeModel.devices.forEach((device) => {
    const clusterNames = (clusters: any[]) =>
        <{ [name: string]: string }>Object.fromEntries(clusters.map((cluster) => [
            cluster.name == device.name
                ? `${cluster.name}Cluster`
                : cluster.name,
            cluster.name
        ]));

    const file = new TsFile(`device/standard/${device.name}Device`);
    file.addImport("../DeviceTypes", "DeviceTypes");

    // Configure required interfaces
    const requiredInterfaces = clusterNames(device.requiredServerClusters);
    const interfaces = {} as typeof requiredInterfaces;
    Object.assign(interfaces, requiredInterfaces);

    // Configure optional interfaces
    const optionalInterfaces = clusterNames(device.optionalServerClusters);
    const hasOptions = Object.keys(optionalInterfaces).length;
    if (hasOptions) {
        const optionalInterfaces = clusterNames(device.optionalServerClusters);
        Object.assign(interfaces, optionalInterfaces);
        file.block(`const ${device.name}Options =`)
            .add(Object.keys(optionalInterfaces).join(",\n"))
            .parent
            .add(`type ${device.name}Option = typeof ${device.name}Options[keyof typeof ${device.name}Options]`)
            .blank();
    }

    // Add imports
    file.addImport("../AutoDevice", "AutoDevice");
    Object.entries(interfaces).forEach(([k, v]) =>
        file.addImport("../../cluster/interface/index", k == v ? k : `${v} as ${k}`));

    // Add the class
    const withArgs = [`DeviceTypes.${device.key}`, ...Object.keys(requiredInterfaces)];
    const klass = file.block(`export class ${device.name} extends AutoDevice.implement(${withArgs.join(", ")})`)
        .add(`readonly options = ${device.name}Options;`)
        .blank();
    if (hasOptions) {
        klass.block(`static with<Options extends ${device.name}Option[]>(...options: Options)`)
            .add("return AutoDevice.extend(this, ...options);");
    }

    file.save();

    index.push(`export * from "./${device.name}Device.js";`)
});

index.save();
