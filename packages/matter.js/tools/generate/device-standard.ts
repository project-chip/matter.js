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

    const withArgs = [`DeviceTypes.${device.key}`, ...Object.keys(requiredInterfaces)];
    const def = file.block(`export class ${device.name} extends AutoDevice.with(${withArgs.join(", ")})`);

    // Configure optional interfaces
    const optionalInterfaces = clusterNames(device.optionalServerClusters);
    if (Object.keys(optionalInterfaces).length) {
        Object.assign(interfaces, optionalInterfaces);
        def.block("static readonly options =")
            .add(Object.keys(optionalInterfaces).join(",\n"));
        def.block("static with(...clusters: Array<typeof this.options[keyof typeof this.options]>)")
            .add("return AutoDevice.extendDevice(this, ...clusters);");
    }

    // Configure imports
    file.addImport("../AutoDevice", "AutoDevice");
    Object.entries(interfaces).forEach(([k, v]) =>
        file.addImport("../../cluster/interface/index", k == v ? k : `${v} as ${k}`));

    file.save();

    index.push(`export * from "./${device.name}Device.js";`)
});

index.save();
